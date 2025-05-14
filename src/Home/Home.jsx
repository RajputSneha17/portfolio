import React from "react";
import homeImg from "../assets/homeImg.webp";
import "./Home.css";
import resume from "../assets/resume.pdf";

const Home = () => {
  return (
    <div className="home-container">
      <div className="left">
        <div className="lights-container">
          <div className="light"></div>
          <div className="light"></div>
          <div className="light"></div>
          <div className="light"></div>
          <div className="light"></div>
        </div>
        <h4>Hii, I'm Sneha</h4>
        <h1>Full-Stack Developer</h1>
        <p>
          Looking for opportunities to build and enhance <br /> full-stack
          applications with creative and <br /> impactful solutions.
        </p>
        <hr />

        <button>
          <a href={resume} download="Sneha_Rajput_Resume.pdf">
            Resume <i class="fa-solid fa-arrow-down"></i>
          </a>
        </button>
      </div>

      <div className="right">
        <img src={homeImg} alt="Home" />
      </div>
    </div>
  );
};

export default Home;
