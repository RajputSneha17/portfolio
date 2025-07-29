import React from "react";
import "./Skills.css";
import htmlImg from "../assets/html.png";
import cssImg from "../assets/css.png";
import jsImg from "../assets/js.png";
import reactImg from "../assets/react.png";
import bootstrapImg from "../assets/bootstrap.png";
import tailwindImg from "../assets/tailwind.png";
import nodejsImg from "../assets/nodejs.png";
import expressImg from "../assets/expressjs.png";
import mongodbImg from "../assets/mongodb.png";
import sqlImg from "../assets/sql.png";
import gitImg from "../assets/git.png";
import githubImg from "../assets/github.png";

const skills = [
  { name: "HTML", img: htmlImg },
  { name: "CSS", img: cssImg },
  { name: "JavaScript", img: jsImg },
  { name: "React", img: reactImg },
  { name: "Bootstrap", img: bootstrapImg },
  { name: "Tailwind CSS", img: tailwindImg },
  { name: "Node.js", img: nodejsImg },
  { name: "Express.js", img: expressImg },
  { name: "MongoDB", img: mongodbImg },
  { name: "Git", img: gitImg },
  { name: "GitHub", img: githubImg },
];

const Skills = () => {
  return (
    <div className="skills-container">
      <div className="top">
        <h3>SKILLS</h3>
        <p>* * * -------</p>
      </div>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-box"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <img src={skill.img} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
