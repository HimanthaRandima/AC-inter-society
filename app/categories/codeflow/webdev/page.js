"use client";
import { Link, Image, Button } from "@nextui-org/react";

import codeflowLogo from "@/public/assets/codeflowLogo.png";
import "@/styles/subCategories.css";
import Navbar from "@/components/navbar";
export default function WebDev() {
  return (
    <section id="subCategories">
      <div id="subCategoriesHero">
        <Navbar />
        <div id="subCategoriesLogo">
          <Image alt="Pulz Logo" id="logo" src={codeflowLogo.src} />
          <h1 id="heroH1txt">WEB DEVELOPMENT</h1>
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
        <h2>Task</h2>

        <p>
          Bob, a talented developer, has been entrusted with an exciting project
          for his school. His task is to design and implement a comprehensive
          student tracking system for the school administration. Bob envisions a
          system that not only keeps a detailed record of each student&apos;s
          personal information but also highlights their extracurricular
          activities and achievements, providing a holistic view of every
          student&apos;s journey. He wants the system to be intuitive,
          efficient, and user-friendly, empowering both students and staff.
          <br />
          <br />
          Bob has reached out to you for help, giving you the creative freedom
          to design a robust system that fulfills these requirements and
          includes any additional features you believe would enhance its
          functionality. This is an opportunity to build something impactful for
          the school community, making the lives of students, teachers, and
          administrators easier.
        </p>

        <h2>Eligibility</h2>
        <ul>
          <li>
            - Students from grade 6-13 can participate in this competition.
          </li>
          <li>- This competition is only for individuals, not for teams.</li>
          <li>
            - Projects must be original. Any instance of plagiarism will result
            in disqualification.
          </li>
        </ul>
        <h2>Instructions</h2>
        <ol>
          <li>
            - Participants are required to build a fully functioning web
            application.
          </li>
          <li>
            - Competitors can use any of the following frontend technologies :
            HTML, CSS, JavaScript, React, Angular, Vue.js
          </li>
          <li>
            - Participants can also build their project from scratch using only
            HTML, CSS, and JavaScript if they wish.
          </li>
          <li>
            - The website must be hosted on GitHub or any other hosting service
            (e.g., Netlify, Vercel).
          </li>
          <li>
            - A README.md file should be included in the project repository with
            proper documentation, outlining the project’s purpose, technologies
            used, and instructions for usage.
          </li>
          <li>
            - When submitting the project, contestants must upload the GitHub
            code link prior to the deadline. Any updates made after the deadline
            will result in disqualification.
          </li>
        </ol>
        <h2>Scoring</h2>
        <ul>
          <li>
            - We will present a task, and contestants will be required to
            develop a creative website solution to address the task.
          </li>
          <li>
            - The project will be evaluated based on functionality, design,
            creativity, and user experience.
          </li>
          <li>
            - Scores will be divided as follows:
            <ul>
              <li>01. Functionality</li>
              <li>02. Design & User Experience</li>
              <li>03. Creativity</li>
              <li>04. Code Architecture & Cleanliness</li>
            </ul>
          </li>
          <li>
            - Multiple submissions are not allowed, but only the first submitted
            version will be evaluated.
          </li>
          <li>- Adding backend functionalities boost your marks.</li>
        </ul>
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
