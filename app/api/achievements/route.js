import { hash } from "bcryptjs";

import clientPromise from "@/lib/mongodb";

export async function POST(req) {
  try {
    const { email, data } = await req.json(); // Extract data directly from the request

    const client = await clientPromise;
    const db = client.db("PULZ24");

    // Check if the form name matches the name in the database.
      const { places,eventName,school,date } = data;

      // Check if email and password are provided
      // if (!email || !password) {
      //   return new Response(
      //     JSON.stringify({ message: "Email and password are required." }),
      //     { status: 400 }
      //   );
      // }

      // Check for existing user
      const existingUser = await db
        .collection("codeFlowAndDimensionX")
        .findOne({ email });

      if (!existingUser) {
        return new Response(
          JSON.stringify({ message: "Please register first" }),
          {
            status: 409,
          },
        );
      }

      const today = new Date();

      const year = today.getFullYear();       // e.g., 2025
      const month = today.getMonth() + 1;     // e.g., 5 (May) — add 1 because months are 0-indexed
      const day = today.getDate();     
      const dateString = `${year}-${month}-${day}`;
      // Insert new user into the database
      await db.collection("achievements").insertOne({
        society: existingUser.society,
        places,
        eventName,
        school,
        date
      });
    

    // Return success response
    return new Response(
      JSON.stringify({ message: "Form submitted successfully." }),
      { status: 201 },
    );
  } catch (error) {
    // Handle any unexpected errors
    console.error("Error during registration:", error);

    return new Response(
      JSON.stringify({
        message: "Internal Server Error. Please refresh the page and resubmit.",
      }),
      {
        status: 500,
      },
    );
  }
}
