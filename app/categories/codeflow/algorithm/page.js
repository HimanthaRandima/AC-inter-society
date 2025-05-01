"use client";
import { Link, Image, Button } from "@nextui-org/react";

import codeflowLogo from "@/public/assets/codeflowLogo.png";
import Navbar from "@/components/navbar";
import "@/styles/subCategories.css";

export default function algorithm() {
  return (
    <section id="subCategories">
      <div id="subCategoriesHero">
        <Navbar />
        <div id="subCategoriesLogo">
          <Image alt="Pulz Logo" id="logo" src={codeflowLogo.src} />
          <h1 id="heroH1txt">ALGORITHM</h1>
        </div>
        <div id="heroBtnTop">
          <Button as={Link} href="/login" id="button" variant="light">
            SUBMIT
          </Button>
          <Button
            as={Link}
            href="/register?tabIndex=codeFlowAndDimensionX"
            id="button"
            variant="flat"
          >
            REGISTER
          </Button>
        </div>

        <p>
          If you have already registered, you can submit your project after you
          log in to the site.
        </p>
      </div>
      <div id="catContent">
        <h2>Eligibility</h2>
        <ol>
          <li>
            - Students from grade 9-13 can participate in this competition.
          </li>
          <li>- This competition is only for individuals, not for teams.</li>
          <li>
            - Solutions must be original. Any instance of code plagiarism will
            result in disqualification.
          </li>
        </ol>
        <h2>Instructions</h2>
        <ol>
          <li>- The competition will be held via Hackerrank Platform.</li>
          <li>- There will be 4 problems which carry 100 marks for each.</li>
          <li>- Competitors will have 4 hours to solve all 4 problems.</li>
          <li>
            - Competitors can use C++, JavaScript, Python, or Java to solve the
            problems.
          </li>
          <li>- There will be only one round.</li>
          <li>
            - The competition will be held in the 2nd week of October, and we
            will share further details about the competition in the relevant
            WhatsApp group. The competition date will be finalized based on the
            contestants&apos; convenience.
          </li>
        </ol>
        <h2>Scoring</h2>
        <ol>
          <li>
            - Each problem consists of a certain number of subtasks; therefore,
            when a competitor solves a subtask, they will obtain marks relevant
            for that subtask.
          </li>
          <li>
            - A competitor’s score depends on the number of test cases their
            code successfully passes.
          </li>
          <li>
            - If a competitor submits multiple solutions for a problem, the
            highest score achieved will be counted.
          </li>
          <li>
            - A competitor&apos;s total score is the sum of the scores earned
            for each problem attempted.
          </li>
          <li>
            - Competitors are ranked by their total score. In the event of a
            tie, the time of the first correct submission of the last solved
            problem will be used to break the tie.
          </li>
          <li>- There will not be any penalty for wrong submissions.</li>
        </ol>
        <h2>Additional Rules</h2>
        <ul>
          <li>
            - Plagiarism is strictly prohibited. Any plagiarized projects will
            result in immediate disqualification.
          </li>
          <li>
            - Competitors are allowed to use open-source libraries and
            frameworks but must cite them properly in the project documentation.
          </li>
        </ul>
        <h2>Submission</h2>
        <ul>
          <li>- Submit a link to your public GitHub repository</li>
          <li>
            - Include a maximum 5-minute video explaining the system the team
            created.
          </li>
          <li>- Provide a hosted link to the web app.</li>
        </ul>
      </div>
    </section>
  );
}
