import React from "react";
import { motion } from "framer-motion";
import { AiFillIeCircle, AiFillAndroid, AiFillWindows } from "react-icons/ai";

const Services = () => {
  const animations = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    one: {
      opacity: 0,
      x: "-100%",
    },
    twoAndThree: {
      opacity: 0,
      y: "-100%",
    },

    four: {
      opacity: 0,
      x: "100%",
    },
  };

  return (
    <div id="services">
      <h2>Skills</h2>
      <div class="skills-container">
        <p>I am Krrish Singh pursuing Bachelor of Technology in CSE branch, passionate about my career and always believe in polishing my skills as a student as well as a future software engineer. I never run away from responsibilities and believe in working hard no matter what.I am always passionate for learning from surroundings as well as my professors.Feel free to connect with me for future opportunities.
      </p><p><strong> Tech Stack: </strong>
• C • C++ (Proficient) • Java (Basic)
• HTML • CSS • Bootstrap5 • Tailwind CSS • JavaScript
• ReactJS • MYSQL • NodeJS (Basic)
• Git • Github • Netlify • VSCode • Windows
• Leadership • Problem Solver • Team Work</p> 
    </div>
    </div>
    
  );
};

export default Services;
