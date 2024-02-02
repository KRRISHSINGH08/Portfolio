import React from "react";

const Experience = () => {
  return (
    <div id="Experience">
      <h2>Experience</h2>

      <section>
        <ExperienceCard
          title={"OPEN SOURCE CONTRIBUTOR - HACTOBERFEST'23"}
          description={"Contribution to Projects using web tech like HTML, CSS, JS, Tailwind, Git, Github."}
        />

        <ExperienceCard
          title={"OPEN SOURCE CONTRIBUTOR - GSSOC''23"}
          description={
            "Contribution to Projects using web technologies like HTML, CSS, JS, React, Git, Github.Successfully merged my PR to Dev-Geeks Repository."
          }
        />

        <ExperienceCard
          title={"WEB DEVELOPMENT INTERN | Code Clause"}
          description={"Successfully completed my task which was to design a Weather Application using ReactJs."}
        />
      </section>
    </div>
  );
};

const ExperienceCard = ({ title, description }) => (
  <article>
    <h4>{title}</h4>
    <p>{description}</p>
  </article>
);

export default Experience;
