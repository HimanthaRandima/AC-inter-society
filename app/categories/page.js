"use client";

import { Link, Button, Card, Image, Tabs, Tab } from "@nextui-org/react";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import "@/styles/categories.css";
import "@/styles/subCategories.css";
import analytiqLogo from "@/public/assets/analytiqLogo.png";
import codeflowLogo from "@/public/assets/codeflowLogo.png";
import dimensionxLogo from "@/public/assets/dimensionxLogo.png";
import mostPopularLogo from "@/public/assets/mostPopularLogo.png";
import acicts from "@/public/assets/acicts.png";
import Navbar from "@/components/navbar";
import CountdownTimer from "@/components/countdown";

export default function CodeFlow() {
  const cardData = [
    {
      id: "codeFlow",
      logoSrc: acicts.src,
      title: "Monthly Plans",
      description:
        "Upload your monthly plan",
      learnMoreLink: "/categories/codeflow/webdev",
      registerLink: "/categories/submission",
    },
    {
      id: "analytIQ",
      logoSrc: acicts.src,
      title: "Achievements",
      description:
        "Upload your monthly achievements",
      learnMoreLink: "/categories/codeflow/algorithm",
      registerLink: "/categories/achievements",
    },
    {
      id: "dimensionX",
      logoSrc: acicts.src,
      title: "Events",
      description:
        "Upload the events that you've done in this month",
      learnMoreLink: "/categories/dimensionx/postdesign",
      registerLink: "/categories/events/",
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
        <div className="extra-space"></div>
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
    </section>
  );
}
