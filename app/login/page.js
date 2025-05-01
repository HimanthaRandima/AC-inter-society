"use client";

import { Link, Input, Button, Card } from "@nextui-org/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";

import Loading from "@/app/loading";
import "@/styles/login.css";
import Navbar from "@/components/navbar";
export default function Login() {
  const { data: session, status } = useSession();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result.error) {
      setError(result.error);
    } else {
      router.push("/");
    }
  };

  // return (
  //     <div>
  //         <h1>Sign In</h1>
  //         <form onSubmit={handleSubmit}>
  //             <input
  //                 type="email"
  //                 placeholder="Email"
  //                 value={email}
  //                 onChange={(e) => setEmail(e.target.value)}
  //             />
  //             <input
  //                 type="password"
  //                 placeholder="Password"
  //                 value={password}
  //                 onChange={(e) => setPassword(e.target.value)}
  //             />
  //             <button type="submit">Sign In</button>
  //         </form>
  //         {error && <p>{error}</p>}
  //     </div>
  // );

  // Delay the page loading until the session data loads.
  if (status === "loading") {
    return <Loading />;
  }

  return (
    <>
      {!session ? (
        <section id="login">
          <Navbar />
          <h1>Login</h1>
          <p id="registerSubText">
            Haven&apos;t Registered Yet?{" "}
            <Link href="/register" id="registerSubTextLink">
              Register
            </Link>
          </p>
          <Card id="formContainer">
            <div id="individualEventsLogin">
              <div id="individualEventsLoginForm">
                <form id="form" onSubmit={handleSubmit}>
                  <Input
                    isRequired
                    label="Email"
                    placeholder="Enter your email"
                    type="email"
                    value={email}
                    onValueChange={setEmail}
                  />
                  <Input
                    isRequired
                    label="Password"
                    placeholder="Enter your password"
                    type="password"
                    value={password}
                    onValueChange={setPassword}
                  />
                  <p>
                    Only for the participant of Coding & Graphic Designing
                    events.
                  </p>

                  <Button id="submitButton" type="submit">
                    Login
                  </Button>
                </form>
                {error && <p>{error}</p>}
              </div>
              <div id="individualEventsLoginGradient">Login</div>
            </div>
          </Card>
        </section>
      ) : (
        router.push("/")
      )}
    </>
  );
}
