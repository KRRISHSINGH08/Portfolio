import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer id="Footer">
      <div>
        <img
          src={"https://avatars.githubusercontent.com/u/86179288?v=4"}
          alt="Founder"
        />

        <h2>Krrish Singh</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.linkedin.com/in/krrish-singh-480b9b220/" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://instagram.com/krrish.singhh" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/KRRISHSINGH08" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
