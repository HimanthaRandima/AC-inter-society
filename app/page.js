"use client";

import { Link, Image, Button, Card, ButtonGroup } from "@nextui-org/react";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import { FaWhatsapp } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

import Navbar from "@/components/navbar";
import CountdownTimer from "@/components/countdown";
import Metadata from "@/components/metadata";
import Loading from "@/app/loading";
import pulzLogo from "@/public/pulzLogo.png";
import pulzLogoV2 from "@/public/pulzLogoV2.png";
import analytiqLogo from "@/public/assets/analytiqLogo.png";
import codeflowLogo from "@/public/assets/codeflowLogo.png";
import dimensionxLogo from "@/public/assets/dimensionxLogo.png";
import mostPopularLogo from "@/public/assets/mostPopularLogo.png";
import vortexLogo from "@/public/assets/vortexLogo.png";

import "@/styles/home.css";

export default function Home() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <Loading />;
  }

  return (
    <>
      <Metadata title="" url="" />
      <section id="hero">
        <div id="bgGrid" />
        <div id="bgPicture" />
        <div id="content">
          <Navbar />
          <div id="heroMiddleSection">
          <h1 id="mainTagline">Ananda College Clubs and Societies {"(CAS)"} Web Portal</h1>
            <h1 className="ml-10 mr-10" id="subTagline">Register your society or log in to update achievements, monthly plans, and event details from your dashboard</h1>
            {!session ? (
              <Button
                as={Link}
                id="loginButton"
                variant="light"
                onClick={() => signIn({ callbackUrl: "/" })}
              >
                LOGIN TO YOUR DASHBOARD
              </Button>
            ) : (
              <Button
                as={Link}
                href="/categories"
                id="loginButton"
                variant="light"
              >
                Submit Your Monthly Plan
              </Button>
            )}
          </div>
          <Button as={Link} href="/register" id="registerButton" variant="flat">
            <span>REGISTER YOUR SOCIETY</span>
          </Button>
          {/* {session ? (
            // If the user is logged in, show the button
            <Button auto shadow color="primary">
              Special Logged In Button
            </Button>
          ) : (
            // Optionally show a message or nothing if the user is not logged in
            <p>Please log in to see the special button</p>
          )}
          <button onClick={() => signOut({ callbackUrl: "/" })}>Logout</button> */}
        </div>
      </section>

      

      {/* <section id="categories">
        <h2>Categories</h2>
        <p id="categoriesSubText">
          Explore all{" "}
          <Link href="/categories?tabIndex=all" id="categoriesSubTextLink">
            events
          </Link>
        </p>
        <div id="cardGroup">
          <Card id="card">
            <div id="cardImageWrapper">
              <Image alt="Pulz Logo" id="cardLogo" src={codeflowLogo.src} />
            </div>
            <div id="cardFooter">
              <Button
                as={Link}
                href="/categories?tabIndex=codeFlow"
                id="cardFooterButton"
                variant="light"
              >
                Explore events
              </Button>
              <p>
                Inter-School
                <br />
                Coding
                <br />
                Competitions
              </p>
            </div>
          </Card>
          <Card id="card">
            <div id="cardImageWrapper">
              <Image alt="Pulz Logo" id="cardLogo" src={dimensionxLogo.src} />
            </div>
            <div id="cardFooter">
              <Button
                as={Link}
                href="/categories?tabIndex=dimensionX"
                id="cardFooterButton"
                variant="light"
              >
                Explore events
              </Button>
              <p>
                Inter-School
                <br />
                Graphic Designing
                <br />
                Competitions
              </p>
            </div>
          </Card>
          <Card id="card">
            <div id="cardImageWrapper">
              <Image alt="Pulz Logo" id="cardLogo" src={analytiqLogo.src} />
            </div>
            <div id="cardFooter">
              <Button
                as={Link}
                href="/categories?tabIndex=analytIQ"
                id="cardFooterButton"
                variant="light"
              >
                Explore event
              </Button>
              <p>
                Inter-School
                <br />
                Quiz
                <br />
                Competition
              </p>
            </div>
          </Card>
          <Card id="card">
            <div id="cardImageWrapper">
              <Image alt="Pulz Logo" id="cardLogo" src={vortexLogo.src} />
            </div>
            <div id="cardFooter">
              <Button
                as={Link}
                href="/categories?tabIndex=vortex"
                id="cardFooterButton"
                variant="light"
              >
                Explore event
              </Button>
              <p>
                Inter-School
                <br />
                Gaming
                <br />
                Competition
              </p>
            </div>
          </Card>
          <Card id="card">
            <div id="cardImageWrapper">
              <Image alt="Pulz Logo" id="cardLogo" src={mostPopularLogo.src} />
            </div>
            <div id="cardFooter">
              <Button
                as={Link}
                href="/categories?tabIndex=mostPopular"
                id="cardFooterButton"
                variant="light"
              >
                Explore event
              </Button>
              <p>
                Most Popular
                <br />
                School
                <br />
                ICT Society
              </p>
            </div>
          </Card>
          <Card id="card">
            <div id="cardFooter">
              <Button
                as={Link}
                href="/register"
                id="registerButton"
                variant="flat"
              >
                REGISTER NOW!
              </Button>
              <Button
                as={Link}
                href="#contactus"
                id="ContactUs"
                scroll={false}
                variant="light"
              >
                Confused? Contact Us
              </Button>
            </div>
          </Card>
        </div>
      </section> */}
      
    </>
  );
}
