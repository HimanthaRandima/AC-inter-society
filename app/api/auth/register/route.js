import { hash } from "bcryptjs";

import clientPromise from "@/lib/mongodb";

export async function POST(req) {
  try {
    const { formName, data } = await req.json(); // Extract data directly from the request

    const formatDate = (date) => {
      const { year, month, day } = date;
      const formatNumber = (num) => String(num).padStart(2, "0");
      const formattedDate = `${formatNumber(day)}-${formatNumber(month)}-${year}`;

      return formattedDate;
    };

    const client = await clientPromise;
    const db = client.db("PULZ24");

    // Check if the form name matches the name in the database.
    if (formName === "codeFlowAndDimensionX") {
      const { email, password, society, position, telNo } = data;

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

      if (existingUser) {
        return new Response(
          JSON.stringify({ message: "User already exists." }),
          {
            status: 409,
          },
        );
      }

      // Hash the password
      const hashedPassword = await hash(password.trim(), 12);

      // Insert new user into the database
      await db.collection("codeFlowAndDimensionX").insertOne({
        email: email.toLowerCase().trim(),
        password: hashedPassword,
        society: society.trim(),
        position: position.trim(),
        telNo: telNo.trim(),
        
      });
    } 
    else {
      return new Response(
        JSON.stringify({
          message:
            "Form names do not match. Please refresh the page and resubmit.",
        }),
        { status: 422 },
      );
    }

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
