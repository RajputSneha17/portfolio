import React from "react";
import "./About.css";
import snehaImg from "../assets/snehaImg.jpg";

const About = () => {
  return (
    <div className="about-container">
      <div className="left">
        <img src={snehaImg} alt="" />
      </div>
      <div className="right">
        <h4>About Me</h4>
        <h3>here's a little bit about myself</h3>
        <ul>
          <li>
            Passionate about building clean, responsive, and dynamic web
            experiences
          </li>
          <li>
            Skilled in frontend development with a focus on creating
            user-friendly interfaces
          </li>
          <li>
            Learning backend technologies to develop more functional web
            applications
          </li>
          <li>
            Familiar with database management and version control for efficient
            project handling
          </li>
          <li>Pursuing BCA from Amity University Online</li>
          <li>
            Learning full-stack development and DSA with Java through Sigma 4.0
            by Apna College
          </li>
          <li>
            Always eager to explore new technologies, take on challenges, and
            improve my skills
          </li>
          <li>Open to collaborations and learning opportunities</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
