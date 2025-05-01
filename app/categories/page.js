"use client";

import { Link, Button, Card, Image, Tabs, Tab } from "@nextui-org/react";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import "@/styles/categories.css";
import analytiqLogo from "@/public/assets/analytiqLogo.png";
import codeflowLogo from "@/public/assets/codeflowLogo.png";
import dimensionxLogo from "@/public/assets/dimensionxLogo.png";
import mostPopularLogo from "@/public/assets/mostPopularLogo.png";
import vortexLogo from "@/public/assets/vortexLogo.png";
import Navbar from "@/components/navbar";
import CountdownTimer from "@/components/countdown";

export default function CodeFlow() {
  const cardData = [
    {
      id: "codeFlow",
      logoSrc: codeflowLogo.src,
      title: "Monthly Plans",
      description:
        "Unleash your creativity in web development, from crafting captivating interfaces to coding seamless functionality",
      learnMoreLink: "/categories/codeflow/webdev",
      registerLink: "/register?tabIndex=codeFlowAndDimensionX",
    },
    {
      id: "analytIQ",
      logoSrc: codeflowLogo.src,
      title: "Achievements",
      description:
        "Engage your problem-solving skills in algorithm competition, where participants craft efficient solutions to intricate challenges.",
      learnMoreLink: "/categories/codeflow/algorithm",
      registerLink: "/register?tabIndex=codeFlowAndDimensionX",
    },
    {
      id: "dimensionX",
      logoSrc: dimensionxLogo.src,
      title: "Events",
      description:
        "Unleash artistic prowess in the poster design competition, shaping impactful narratives through compelling designs.",
      learnMoreLink: "/categories/dimensionx/postdesign",
      registerLink: "/register?tabIndex=codeFlowAndDimensionX",
    },
  ];

  const [tabIndex, setTabIndex] = useState(useSearchParams().get("tabIndex"));
  const router = useRouter();

  const filteredCardData =
    tabIndex === "null"
      ? cardData // No filtering, return all cards
      : cardData.filter((card) => card.id === tabIndex);

  useEffect(() => {
    router.push(`?tabIndex=${tabIndex}`, { scroll: false });
  }, [tabIndex, router]);

  return (
    <section>
      <section id="categoriesPage">
        <Navbar />
        <div id="cardGroup">
          {filteredCardData.map((card, index) => (
            <Card key={index} id="card">
              <div>
                <div id="cardLogoWrapper">
                  <Image
                    alt={`${card.title} Logo`}
                    id="cardLogo"
                    src={card.logoSrc}
                  />
                </div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
              <div>
                <Button
                  as={Link}
                  href={card.learnMoreLink}
                  id="cardFooterButton"
                  variant="light"
                >
                  Learn More
                </Button>
                <Button
                  as={Link}
                  href={card.registerLink}
                  id="cardFooterButton"
                  variant="faded"
                >
                  Register
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>
      <CountdownTimer targetDate="2024-10-05T00:00:00" />
    </section>
  );
}
