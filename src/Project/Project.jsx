import React from "react";
import "./Project.css";
import food from "../assets/food.png";
import Hotel from "../assets/Hotel.png";
import petAdoption from "../assets/petAdoption.png";

const Project = () => {
  return (
    <div>
      <div className="top">
        <h3>PROJECTS</h3>
        <p>* * * -------</p>
      </div>
      <div className="cards">
        <div className="cardone card">
          <img src={food} alt="" />
          <h3>Project One | Food Delivery</h3>
          <p>
            This design showcases a website for a company that offers food
            delivery services using MERN, helping users order meals quickly and
            easily.
          </p>
          <button>
            <a href="https://tomato-swart-psi.vercel.app/">
              VISIT SITE <i class="fa-solid fa-angle-right"></i>
            </a>
          </button>
        </div>
        <div className="cardone card">
          <img src={Hotel} alt="" />
          <h3>Project Two | Find Hotels</h3>
          <p>
            This design showcases a website for a service that helps users find
            suitable hotels and helps hotels connect with potential guests using
            Express and Node.js.
          </p>
          <button>
            <a href="https://find-hotels-o82u.onrender.com/listings">
              VISIT SITE <i class="fa-solid fa-angle-right"></i>
            </a>
          </button>
        </div>
        <div className="cardone card">
          <img src={petAdoption} alt="" />
          <h3>Project One | Pet's life</h3>
          <p>
            This design showcases a website for a company that helps pets find
            wonderful owners using MERN, with options for adoption, donate, and
            help.
          </p>
          <button>
            Panding <i class="fa-solid fa-angle-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
