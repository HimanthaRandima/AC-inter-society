"use client";

import { Link, Button, Accordion, AccordionItem } from "@nextui-org/react";

import Navbar from "@/components/navbar";
import "@/styles/subCategories.css";

export default function rnr() {
  return (
    <section id="subCategories">
      <div id="subCategoriesHero">
        <Navbar />

        <div id="subCategoriesLogo">
          <h1 id="heroH1txt">Rules and Regulations</h1>
        </div>

        <div id="heroBtnTop">
          <Button as={Link} href="/login" id="button" variant="light">
            LOGIN
          </Button>
          <Button as={Link} href="/register" id="button" variant="flat">
            REGISTER
          </Button>
        </div>

        <p id="rnrDes">
          Please carefully review the following rules and regulations before
          participating in our event.All participants are expected to comply
          with the following regulations to ensure a fair and competitive
          setting for everyone involved. By participating in this event, you
          agree to abide by these rules and regulations.
        </p>
      </div>

      <div id="catContent">
        <Accordion id="rnrAccordion" variant="bordered">
          <AccordionItem
            key="1"
            subtitle="Press to expand"
            title="CodeFlow | Algorithm Rules and Regulations"
          >
            <div id="rnrContent">
              <h2>Eligibility</h2>
              <ol>
                <li>
                  - Students from grade 9-13 can participate in this
                  competition.
                </li>
                <li>
                  - This competition is only for individuals, not for teams.
                </li>
                <li>
                  - Solutions must be original. Any instance of code plagiarism
                  will result in disqualification.
                </li>
              </ol>
              <h2>Instructions</h2>
              <ol>
                <li>- The competition will be held via Hackerrank Platform.</li>
                <li>
                  - There will be 4 problems which carry 100 marks for each.
                </li>
                <li>
                  - Competitors will have 4 hours to solve all 4 problems.
                </li>
                <li>
                  - Competitors can use C++, JavaScript, Python, or Java to
                  solve the problems.
                </li>
                <li>- There will be only one round.</li>
                <li>
                  - The competition will be held in the 2nd week of October, and
                  we will share further details about the competition in the
                  relevant WhatsApp group. The competition date will be
                  finalized based on the contestants&apos; convenience.
                </li>
              </ol>
              <h2>Scoring</h2>
              <ol>
                <li>
                  - Each problem consists of a certain number of subtasks;
                  therefore, when a competitor solves a subtask, they will
                  obtain marks relevant for that subtask.
                </li>
                <li>
                  - A competitor’s score depends on the number of test cases
                  their code successfully passes.
                </li>
                <li>
                  - If a competitor submits multiple solutions for a problem,
                  the highest score achieved will be counted.
                </li>
                <li>
                  - A competitor&apos;s total score is the sum of the scores
                  earned for each problem attempted.
                </li>
                <li>
                  - Competitors are ranked by their total score. In the event of
                  a tie, the time of the first correct submission of the last
                  solved problem will be used to break the tie.
                </li>
                <li>- There will not be any penalty for wrong submissions.</li>
              </ol>
              <h2>Additional Rules</h2>
              <ul>
                <li>
                  - Plagiarism is strictly prohibited. Any plagiarized projects
                  will result in immediate disqualification.
                </li>
                <li>
                  - Competitors are allowed to use open-source libraries and
                  frameworks but must cite them properly in the project
                  documentation.
                </li>
              </ul>
              <h2>Submission</h2>
              <ul>
                <li>- Submit a link to your public GitHub repository</li>
                <li>
                  - Include a maximum 5-minute video explaining the system the
                  team created.
                </li>
                <li>- Provide a hosted link to the web app.</li>
              </ul>
            </div>
          </AccordionItem>

          <AccordionItem
            key="2"
            subtitle="Press to expand"
            title="CodeFlow | Web Development Rules and Regulations"
          >
            <div id="rnrContent">
              <h2>Eligibility</h2>
              <ul>
                <li>
                  - Students from grade 6-13 can participate in this
                  competition.
                </li>
                <li>
                  - This competition is only for individuals, not for teams.
                </li>
                <li>
                  - Projects must be original. Any instance of plagiarism will
                  result in disqualification.
                </li>
              </ul>
              <h2>Instructions</h2>
              <ol>
                <li>
                  - Participants are required to build a fully functioning web
                  application.
                </li>
                <li>
                  - Competitors can use any of the following frontend
                  technologies : HTML, CSS, JavaScript, React, Angular, Vue.js
                </li>
                <li>
                  - Participants can also build their project from scratch using
                  only HTML, CSS, and JavaScript if they wish.
                </li>
                <li>
                  - The website must be hosted on GitHub or any other hosting
                  service (e.g., Netlify, Vercel).
                </li>
                <li>
                  - A README.md file should be included in the project
                  repository with proper documentation, outlining the project’s
                  purpose, technologies used, and instructions for usage.
                </li>
                <li>
                  - When submitting the project, contestants must upload the
                  GitHub code link prior to the deadline. Any updates made after
                  the deadline will result in disqualification.
                </li>
              </ol>
              <h2>Scoring</h2>
              <ul>
                <li>
                  - We will present a task, and contestants will be required to
                  develop a creative website solution to address the task.
                </li>
                <li>
                  - The project will be evaluated based on functionality,
                  design, creativity, and user experience.
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
                  - Multiple submissions are not allowed, but only the first
                  submitted version will be evaluated.
                </li>
                <li>- Adding backend functionalities boost your marks.</li>
              </ul>
              <h2>Additional Rules</h2>
              <ul>
                <li>
                  - Plagiarism is strictly prohibited. Any plagiarized projects
                  will result in immediate disqualification.
                </li>
                <li>
                  - Competitors are allowed to use open-source libraries and
                  frameworks but must cite them properly in the project
                  documentation.
                </li>
              </ul>
              <h2>Submission</h2>
              <ul>
                <li>- Submit a link to your public GitHub repository</li>
                <li>
                  - Include a maximum 5-minute video explaining the system the
                  team created.
                </li>
                <li>- Provide a hosted link to the web app.</li>
              </ul>
            </div>
          </AccordionItem>

          <AccordionItem
            key="3"
            subtitle="Press to expand"
            title="DimensionX | 3D Design Rules and Regulations"
          >
            <div id="rnrContent">
              <h2>General Information</h2>
              <ul>
                <li>
                  <strong>Eligibility :</strong> Open to students from grades 6
                  to 13.
                </li>
                <li>
                  <strong>Type of Event :</strong> Individual participation
                  only. No teams are allowed.
                </li>
                <li>
                  <strong>Theme :</strong> Open Theme. Participants can choose
                  any theme but must create original, self-designed artwork.
                </li>
                <li>
                  <strong>Software :</strong> Participants can use any 3D
                  software to develop their artwork, though Blender is highly
                  recommended.
                </li>
              </ul>

              <h2>Submission Requirements</h2>
              <ul>
                <li>
                  <strong>Base File:</strong>
                  <ul>
                    <li>
                      - A base file in Blender, FBX, or OBJ formats containing
                      an object and a camera angle will be provided.
                    </li>
                    <li>
                      - Participants must work from this base file and create
                      their own unique artwork within this environment.
                    </li>
                  </ul>
                </li>
                <br />
                <li>
                  <strong>Submission Format:</strong>
                  <ul>
                    <li>
                      - Project File: Submit the completed project file, OBJ,
                      and FBX files.
                    </li>
                    <li>
                      - Output Images: At least 3 high-quality renders of the
                      final model in image format (PNG/JPEG).
                    </li>
                    <li>
                      - All files must be named with the participant&apos;s name
                      and school.
                    </li>
                  </ul>
                </li>
                <br />
                <li>
                  <strong>Submission Platform:</strong>
                  <ul>
                    <li>
                      - All submissions must be uploaded via the pulz.acicts.lk
                      site.
                    </li>
                  </ul>
                </li>
                <li>
                  - Deadline : Participants must submit their entries before the
                  deadline date. Late submissions will not be accepted.
                </li>
              </ul>

              <h2>Additional Rules</h2>
              <ul>
                <li>
                  - Plagiarism : Any use of non-original models or artworks from
                  third-party sources will result in immediate disqualification.
                </li>
                <li>
                  - Third-Party Models : Use of excessive third-party 3D models
                  that are not created by the participant will result in a
                  significant deduction in marks.
                </li>
                <li>
                  - AI-Generated Submissions : AI-generated content is strictly
                  prohibited.
                </li>
                <li>
                  - References & Assets : Participants are allowed to use
                  references for inspiration, HDRIs, textures, and other assets
                  if needed.
                </li>
              </ul>

              <h2>Judging Criteria</h2>
              <ul>
                <li>
                  - Originality & Creativity : How unique and creative is the
                  model?
                </li>
                <li>
                  - Technical Skill : How well-executed is the model
                  technically? Includes attention to detail, modeling
                  complexity, and clean topology.
                </li>
                <li>
                  - Aesthetic Quality : How visually appealing is the design,
                  including colors, materials, lighting, and composition of
                  rendered images?
                </li>
                <li>
                  - Presentation : Quality of rendered images, angles, and how
                  well the final model is presented.
                </li>
              </ul>
            </div>
          </AccordionItem>

          <AccordionItem
            key="4"
            subtitle="Press to expand"
            title="DimensionX | Photo Manipulation Rules and Regulations"
          >
            <div id="rnrContent">
              <h2>Task</h2>
              <p>
                Design an infographic about “The role of AI and Robots in future
                Warfare”
              </p>

              <h2>Eligibility and Participation</h2>
              <ul>
                <li>
                  - The competition is open for any category. All contestants
                  studying in grade 6-13 are eligible to participate.
                </li>
                <li>- This competition is for individuals, not for teams.</li>
                <li>
                  - No limitation is added to the number of contestants
                  participating from a school.
                </li>
                <li>- Only ONE submission is accepted from each contestant.</li>
              </ul>

              <h2>Instructions</h2>
              <ul>
                <li>
                  - You can only use either Adobe Photoshop or Adobe Illustrator
                  for this competition.
                </li>
                <li>
                  - You must regularly capture screenshots during the creation
                  of your artwork for submission purposes.
                </li>
                <li>
                  - You must NOT use any templates, and plagiarism is strictly
                  prohibited. Any instance will result in immediate
                  disqualification.
                </li>
                <li>- Your designs should have a consistent theme.</li>
                <li>
                  - Dimensions of your design should follow a 1:2:1 scale.
                </li>
              </ul>

              <h2>Submission</h2>
              <ul>
                <li>
                  - You must submit ALL the project files (including any
                  textures, overlays, images, etc.) as a .rar file.
                </li>
                <li>
                  - The artwork should be exported only in either .png / .jpg or
                  .pdf format.
                </li>
                <li>
                  - You must also upload a PDF file containing the screenshots
                  of{" "}
                  <strong>
                    all the layers used in creating the artwork and 5
                    screenshots of your workspace during the creation of the
                    artwork
                  </strong>
                </li>
                <li>
                  - The file should be renamed as “Post_SchoolName_YourName.rar”
                  format.
                  <br />
                  Example:{" "}
                  <strong>Post_AnandaCollege_SathishkaFernando.rar</strong>
                </li>
                <li>
                  - All the submissions should be uploaded to Google Drive, and
                  the public-accessed Google Drive link should be sent through
                  the pulz.acicts.lk website.
                </li>
                <li>
                  - Submissions received after the specified deadline will not
                  be accepted under any circumstances.
                </li>
              </ul>

              <h2>Judging Criteria</h2>
              <ul>
                <li>
                  - Judging will be done by a panel of experts in Graphic
                  Designing. Points for your design will be based on the
                  following criteria:
                  <ul>
                    <li>
                      Functionality : The theme-relativity of the post and
                      understanding the intended purpose of the theme.
                    </li>
                    <li>
                      Creativity : The uniqueness of the post and the
                      introduction of innovative ideas or approaches.
                    </li>
                    <li>
                      Aesthetics : The visual appeal of the design and the usage
                      of colors and textures.
                    </li>
                    <li>
                      Technical Execution : The materials and techniques used
                      for the post and their appropriateness.
                    </li>
                    <li>
                      User Experience : The level of consideration given to the
                      needs and preferences of the targeted audience.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </AccordionItem>

          <AccordionItem
            key="5"
            subtitle="Press to expand"
            title="DimensionX | Poster Design Rules and Regulations"
          >
            <div id="rnrContent">
              <h2>Task</h2>
              <p>
                Design an infographic about “The role of AI and Robots in future
                Warfare”
              </p>

              <h2>Eligibility and Participation</h2>
              <ul>
                <li>
                  - The competition is open for any category. All contestants
                  studying in grade 6-13 are eligible to participate.
                </li>
                <li>- This competition is for individuals, not for teams.</li>
                <li>
                  - No limitation is added to the number of contestants
                  participating from a school.
                </li>
                <li>- Only ONE submission is accepted from each contestant.</li>
              </ul>

              <h2>Instructions</h2>
              <ul>
                <li>
                  - You can only use either Adobe Photoshop or Adobe Illustrator
                  for this competition.
                </li>
                <li>
                  - You must regularly capture screenshots during the creation
                  of your artwork for submission purposes.
                </li>
                <li>
                  - You must NOT use any templates, and plagiarism is strictly
                  prohibited. Any instance will result in immediate
                  disqualification.
                </li>
                <li>- Your designs should have a consistent theme.</li>
                <li>
                  - Dimensions of your design should follow a 1:2:1 scale.
                </li>
              </ul>

              <h2>Submission</h2>
              <ul>
                <li>
                  - You must submit ALL the project files (including any
                  textures, overlays, images, etc.) as a .rar file.
                </li>
                <li>
                  - The artwork should be exported only in either .png / .jpg or
                  .pdf format.
                </li>
                <li>
                  - You must also upload a PDF file containing the screenshots
                  of{" "}
                  <strong>
                    all the layers used in creating the artwork and 5
                    screenshots of your workspace during the creation of the
                    artwork
                  </strong>
                </li>
                <li>
                  - The file should be renamed as “Post_SchoolName_YourName.rar”
                  format.
                  <br />
                  Example:{" "}
                  <strong>Post_AnandaCollege_SathishkaFernando.rar</strong>
                </li>
                <li>
                  - All the submissions should be uploaded to Google Drive, and
                  the public-accessed Google Drive link should be sent through
                  the pulz.acicts.lk website.
                </li>
                <li>
                  - Submissions received after the specified deadline will not
                  be accepted under any circumstances.
                </li>
              </ul>

              <h2>Judging Criteria</h2>
              <ul>
                <li>
                  - Judging will be done by a panel of experts in Graphic
                  Designing. Points for your design will be based on the
                  following criteria:
                  <ul>
                    <li>
                      Functionality : The theme-relativity of the post and
                      understanding the intended purpose of the theme.
                    </li>
                    <li>
                      Creativity : The uniqueness of the post and the
                      introduction of innovative ideas or approaches.
                    </li>
                    <li>
                      Aesthetics : The visual appeal of the design and the usage
                      of colors and textures.
                    </li>
                    <li>
                      Technical Execution : The materials and techniques used
                      for the post and their appropriateness.
                    </li>
                    <li>
                      User Experience : The level of consideration given to the
                      needs and preferences of the targeted audience.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </AccordionItem>
        </Accordion>

        <Accordion id="rnrAccordion" variant="bordered">
          <AccordionItem
            key="1"
            subtitle="Press to expand"
            title="Votex | eSports Rules and Regulations"
          >
            <div id="rnrContent">
              <h2>Eligibility</h2>
              <ul>
                <li>- The tournament is open to all school students.</li>
                <li>
                  - Teams must consist of 5 main players from the same school.
                  Teams can optionally include 1 substitute, but having a
                  substitute is not mandatory.
                </li>
                <li>
                  - All team members must provide their names and other
                  requested details to the organizing committee during
                  registration.
                </li>
                <li>
                  - Team members cannot be changed on the day of the event
                  unless the organizing committee is notified beforehand and
                  approves the change. Failure to comply will result in
                  disqualification.
                </li>
                <li>
                  - Players must use their own Valorant accounts. No account
                  sharing is allowed.
                </li>
              </ul>

              <h2>Team Registration</h2>
              <ul>
                <li>
                  - Each team must register with a team name, along with the
                  full names, in-game Riot IDs, and other details of all players
                  (including the optional substitute).
                </li>
                <li>
                  - Registration must be completed by the specified deadline.
                </li>
                <li>
                  - Players listed during registration must be present on the
                  day of the tournament. Team members cannot be swapped,
                  changed, or replaced without prior notice to the organizing
                  committee.
                </li>
              </ul>

              <h2>Match Format</h2>
              <ul>
                <li>
                  <strong>- Game Mode :</strong> 5v5, Unrated.
                </li>
                <li>
                  <strong>- Format :</strong> Best of 1 or Best of 3 depending
                  on the tournament stage.
                </li>
                <li>
                  <strong>- Map Selection:</strong>
                  <ul>
                    <li>
                      Teams will participate in a map banning phase prior to
                      each match.
                    </li>
                    <li>
                      Both teams will take turns banning maps from the available
                      pool until one map is left for the match.
                    </li>
                    <li>
                      The list of available maps will be released before the map
                      banning phase.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>- Match Rules:</strong> The first team to win 13
                  rounds wins the match.
                </li>
                <li>
                  - In case of a tie (12-12), overtime will be played with
                  standard Valorant overtime rules (win by two rounds).
                </li>
              </ul>

              <h2>Technical Requirements</h2>
              <ul>
                <li>
                  - Teams are responsible for having the necessary equipment
                  (PC, headset, keyboard, mouse, etc.).
                </li>
                <li>
                  - Ensure stable internet connectivity. Disconnects during the
                  game will not result in match pauses unless agreed upon by
                  both teams.
                </li>
                <li>
                  - The tournament organizers are not responsible for any
                  technical issues experienced during the match.
                </li>
              </ul>

              <h2>Code of Conduct</h2>
              <ul>
                <li>
                  - No toxicity, abusive language, or harassment will be
                  tolerated, including in-game voice chat and text chat.
                </li>
                <li>
                  - Cheating or hacking of any kind (e.g., using third-party
                  software) will lead to immediate disqualification.
                </li>
                <li>
                  - Sportsmanship is mandatory. Respect your opponents and
                  teammates at all times.
                </li>
              </ul>

              <h2>Punctuality</h2>
              <ul>
                <li>
                  - Teams must arrive 15 minutes before their scheduled match
                  time.
                </li>
                <li>
                  - If a team fails to show up within 10 minutes of the
                  scheduled time, the match will be forfeited.
                </li>
              </ul>

              <h2>Substitution and Player Changes</h2>
              <ul>
                <li>
                  - Teams may include a substitute player, but it is not
                  required. Substitutes can only be used between games (not
                  during a game) and must be pre-registered with the team.
                </li>
                <li>
                  - No changes to the registered team members are allowed on the
                  day of the match unless special notice is provided and
                  approved by the organizing committee prior to the match.
                </li>
                <li>
                  - Once a match has started, no team members may be
                  substituted.
                </li>
              </ul>

              <h2>Map Selection Process</h2>
              <ul>
                <li>- A map-banning phase will take place before the match.</li>
                <li>
                  - Teams will alternate banning maps from the available pool
                  until one map remains, which will be played for the match.
                </li>
                <li>
                  - The available maps for the banning phase will be released to
                  the teams prior to the match.
                </li>
              </ul>

              <h2>Streaming and Content Creation</h2>
              <ul>
                <li>
                  - Matches may be recorded or streamed by tournament officials.
                </li>
                <li>
                  - Teams are allowed to stream their games, but they must use a
                  5-minute delay to prevent stream sniping.
                </li>
              </ul>
            </div>
          </AccordionItem>

          <AccordionItem
            key="2"
            subtitle="Press to expand"
            title="AnalytIQ | Quiz Competition Rules and Regulations"
          >
            <div id="rnrContent">
              <h2>Overview</h2>
              <p>
                The AnalytIQ Quiz Competition is designed to test students’
                knowledge in Information and Communication Technology (ICT),
                programming, and general knowledge. The competition aims to
                promote learning while fostering a competitive spirit. The first
                round will be held online, and the top two teams will qualify
                for the final round, which will be held physically at Pulz
                &apos;24, the annual ICT Day of Ananda College.
              </p>

              <h2>Team Composition</h2>
              <ul>
                <li>
                  <strong>- Number of Participants :</strong> Each school is
                  allowed to send one team to participate.
                </li>
                <li>
                  <strong>- Team Size :</strong> A maximum of 4 students per
                  team.
                </li>
                <li>
                  <strong>- Eligibility :</strong> All team members must be
                  students of the participating school.
                </li>
              </ul>

              <h2>Competition Format</h2>
              <h3>Preliminary Round (Online)</h3>
              <ul>
                <li>
                  <strong>- Platform :</strong> The first round will be
                  conducted online on this website.
                </li>
                <li>
                  <strong>- Question Types :</strong> The round will feature a
                  mix of Multiple Choice Questions (MCQs) and Short Answer
                  Questions.
                </li>
                <li>
                  <strong>- Discussion :</strong> Teams will collaborate in Zoom
                  Breakout Rooms to discuss and answer questions.
                </li>
                <li>
                  <strong>- Duration :</strong> The quiz duration and the number
                  of questions will be communicated before the event.
                </li>
                <li>
                  <strong>- Scoring :</strong> Teams will be ranked based on
                  their total score.
                </li>
              </ul>

              <br />

              <h3>Final Round (Physical)</h3>
              <ul>
                <li>
                  <strong>- Venue :</strong> The final round will be held
                  physically at Ananda College during Pulz &apos;24, the annual
                  ICT Day.
                </li>
                <li>
                  <strong>- Qualifying Teams :</strong> The top two teams from
                  the preliminary round will qualify for the final.
                </li>
                <li>
                  <strong>- Question Conten :</strong> Questions in the final
                  round will be based on: Advanced Level and Ordinary Level ICT
                  syllabus, Programming concepts, General knowledge
                </li>
              </ul>

              <h2>Guidelines for the Online Preliminary Round</h2>
              <ul>
                <li>
                  <strong>- Platform :</strong> All participants will use this
                  website for answering questions.
                </li>
                <li>
                  <strong>- Zoom Breakout Rooms :</strong> Each team will be
                  assigned to a Zoom Breakout Room for private discussions.
                </li>
                <li>
                  <strong>- Camera and Microphones :</strong> All team members
                  must have their cameras and microphones on during the quiz for
                  monitoring purposes.
                </li>
                <li>
                  <strong>- No Cheating :</strong> Any attempt to cheat, consult
                  external resources, or seek outside help will result in
                  immediate disqualification.
                </li>
              </ul>

              <h2>Code of Conduct</h2>
              <ul>
                <li>
                  <strong>- Cheating and Dishonesty :</strong> Any form of
                  cheating or violation of the rules will lead to immediate
                  disqualification.
                </li>
                <li>
                  <strong>- Team Communication :</strong> Only team members are
                  allowed to communicate with each other in the breakout rooms.
                  Communication with external individuals is strictly
                  prohibited.
                </li>
                <li>
                  <strong>- Proctoring :</strong> The organizing team will
                  monitor the breakout rooms to ensure compliance.
                </li>
              </ul>

              <h2>Time Management</h2>
              <ul>
                <li>
                  <strong>- Time Allocation :</strong> Each question will have a
                  set time limit. Teams must submit their answers within the
                  given timeframe.
                </li>
                <li>
                  <strong>- Late Submissions :</strong> Late answers will not be
                  considered.
                </li>
              </ul>

              <h2>Equipment and Technical Requirements</h2>
              <ul>
                <li>
                  <strong> - Devices :</strong> Each participant must join the
                  Zoom meeting on a device equipped with: A working camera and
                  microphone, Stable internet access
                </li>
                <li>
                  <strong>- Platform Access :</strong> Teams must ensure they
                  can access both Zoom and PULZ &apos;24 analytIQ platforms
                  without technical difficulties.
                </li>
              </ul>

              <h2>Scoring and Qualification</h2>
              <ul>
                <li>
                  <strong>Preliminary Round:</strong>
                  <ul>
                    <li>
                      - Scoring will be based on the correctness of answers
                      submitted on pulz.acicts.lk
                    </li>
                    <li>
                      - Teams will be ranked according to their total score.
                    </li>
                    <li>
                      - The top 2 teams will advance to the final round held at
                      Pulz &apos;24.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Final Round:</strong> Scoring and ranking for the
                  final round will be explained during the event.
                </li>
              </ul>

              <h2>Conclusion</h2>
              <p>
                The AnalytIQ Quiz Competition aims to be a challenging and
                rewarding experience for all participants, promoting academic
                excellence in ICT and fostering a spirit of fair competition. We
                encourage all teams to adhere to the rules and maintain the
                highest standards of integrity throughout the competition.
              </p>
            </div>
          </AccordionItem>

          <AccordionItem
            key="3"
            subtitle="Press to expand"
            title="Award for the Most Popular School ICT Society Rules and Regulations"
          >
            <div id="rnrContent" />
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
