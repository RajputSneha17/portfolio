import React from "react";
import homeImg from "../assets/homeImg.webp";
import "./Home.css";

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
          Resume <i class="fa-solid fa-arrow-down"></i>
        </button>
      </div>

      <div className="right">
        <img src={homeImg} alt="Home" />
      </div>
    </div>
  );
};

export default Home;
