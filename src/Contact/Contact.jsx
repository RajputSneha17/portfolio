import React from "react";
import "./Contact.css";
import resume from "../assets/resume.pdf";

const Contact = () => {
  return (
    <div>
      <div className="top">
        <h3>CONTACT ME</h3>
        <p>* * * -------</p>
      </div>
      <div className="cards">
        <div className="card">
          <h3>CONTACT INFORMATION</h3>
          <p>_______</p>
          <p>
            If this website created a wonderful experience for you and left a
            lasting impression I would love to hear from you !
          </p>
          <ul>
            <li>
              <i className="fa-brands fa-discord"></i>
              &nbsp;&nbsp;&nbsp;sneha_r13
            </li>
            <li>
              <i className="fa-solid fa-envelope"></i>
              &nbsp;&nbsp;&nbsp;sneharajput63154@gmail.com
            </li>
          </ul>
        </div>
        <div className="card">
          <h3>RESUME</h3>
          <p>_______</p>
          <p>
            If this website created a wonderful experience for you and left a
            lasting impression I would love to hear from you !
          </p>
          <button>
            <a href={resume} download="Sneha_Rajput_Resume.pdf">
              DOWNLOAD HERE <i className="fa-solid fa-download"></i>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
