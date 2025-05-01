import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";

import clientPromise from "@/lib/mongodb";

const INACTIVITY_LIMIT_DAYS = 10;

const handler = NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "your-email@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const client = await clientPromise;
        const db = client.db("PULZ24");

        const user = await db
          .collection("codeFlowAndDimensionX")
          .findOne({ email: credentials.email.trim().toLowerCase() });

        if (!user) {
          throw new Error("User not found");
        }

        const isValid = await bcrypt.compare(
          credentials.password.trim(),
          user.password,
        );

        if (!isValid) {
          throw new Error("Incorrect password");
        }

        // Generate a unique session ID for this device
        const sessionId = uuidv4();
        const currentDate = new Date();

        await db.collection("sessions").insertOne({
          userId: user._id,
          sessionId,
          lastLoggedIn: currentDate,
          lastUpdated: currentDate,
        });

        // Return the user object and attach the sessionId to be used in JWT
        return { id: user._id, name: user.society, email: user.email, sessionId };
      },
    }),
  ],
  session: {
    jwt: true,
    maxAge: 60 * 60 * 24 * 30 * 12,
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  callbacks: {
    // This callback manages the JWT
    async jwt({ token, user }) {
      if (user) {
        token.sessionId = user.sessionId;
      }

      return token;
    },

    // This callback defines what happens when the session object is returned to the client
    async session({ session, token }) {
      const client = await clientPromise;
      const db = client.db("PULZ24");

      // Find the active session by sessionId stored in the JWT token
      const activeSession = await db
        .collection("sessions")
        .findOne({ sessionId: token.sessionId });

      // If no active session is found, throw an error
      if (!activeSession) {
        throw new Error("Session not found");
      }

      // Get the current date and the last updated time for the session
      const currentDate = new Date();
      const lastUpdated = new Date(activeSession.lastUpdated);

      // Calculate how many days have passed since the session was last updated
      const dayDifference = Math.floor(
        (currentDate - lastUpdated) / (1000 * 60 * 60 * 24),
      );

      // If more than 10 days have passed, delete the session and force logout
      if (dayDifference >= INACTIVITY_LIMIT_DAYS) {
        await db
          .collection("sessions")
          .deleteOne({ sessionId: activeSession.sessionId });
        throw new Error(
          "Session expired due to inactivity. Please log in again.",
        );
      }
      // If a day has passed since the last update, update the session
      else if (dayDifference >= 1) {
        await db.collection("sessions").updateOne(
          { sessionId: activeSession.sessionId },
          { $set: { lastUpdated: currentDate } }, // Update lastUpdated to the current date
        );
      }

      // Attach the session ID and user ID to the session object
      session.sessionId = activeSession.sessionId; // This will be accessible on the client
      session.user.id = token.sub; // The user's ID is available on the session object

      return session; // Return the session to be used on the client
    },
  },
  events: {
    async signOut({ token }) {
      const client = await clientPromise;
      const db = client.db("PULZ24");

      // Delete the session from the database using the sessionId stored in the JWT token
      await db.collection("sessions").deleteOne({ sessionId: token.sessionId });
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
