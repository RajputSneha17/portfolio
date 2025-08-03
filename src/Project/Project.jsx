import React from "react";
import "./Project.css";
import food from "../assets/food.png";
import Hotel from "../assets/Hotel.png";
import admin from "../assets/admin.png";
import yoga from "../assets/yoga.png";

const Project = () => {
  return (
    <div>
      <div className="top">
        <h3>PROJECTS</h3>
        <p>* * * -------</p>
      </div>
      <div className="cards">
        <div className="cardone card">
          <img src={Hotel} alt="" />
          <h3>Project One | Find Hotels</h3>
          <p>
            User authentication with sign-up, login, and role-based access
            (create/delete listings & reviews) Full-stack web app using Node.js,
            Express.js, and MongoDB for data management Clean, responsive UI
            with all core hotel listing and review features
          </p>
          <div className="button">
            <button>
              <a href="https://find-hotels-1.onrender.com/listings">
                VISIT SITE <i class="fa-solid fa-angle-right"></i>
              </a>
            </button>
            <button>
              <a href="https://github.com/RajputSneha17/Find-Hotels">
                GITHUB REPO <i class="fa-solid fa-angle-right"></i>
              </a>
            </button>
          </div>
        </div>
        <div className="cardone card">
          <img src={food} alt="" />
          <h3>Project Two | Food Delivery</h3>
          <p>
            Users can sign up or log in securely. Once logged in, users can:
            Browse a list of food items. Add items to cart and place an order.
            Make payments using Razorpay integration. Track their order status
            live. Built with the MERN stack. Fully responsive.
          </p>
          <div className="button">
            <button>
              <a href="https://food-delivery-ten-mocha.vercel.app/">
                LIVE DEMO <i class="fa-solid fa-angle-right"></i>
              </a>
            </button>
            <button>
              <a href="https://github.com/RajputSneha17/Food-Delivery">
                GITHUB REPO <i class="fa-solid fa-angle-right"></i>
              </a>
            </button>
          </div>
        </div>
        <div className="cardone card">
          <img src={admin} alt="" />
          <h3>Project Two | Food Delivery Admin Page</h3>
          <p>
            Change the status of orders (e.g., Processing, Out for Delivery,
            Delivered). Add new food items to the menu — they instantly appear
            on the user side. Delete existing food items, which removes them
            from the frontend as well.
          </p>
          <div className="button">
            <button>
              <a href="https://food-delivery-gz9p.vercel.app/">
                LIVE DEMO <i class="fa-solid fa-angle-right"></i>
              </a>
            </button>
            <button>
              <a href="https://github.com/RajputSneha17/Food-Delivery">
                GITHUB REPO <i class="fa-solid fa-angle-right"></i>
              </a>
            </button>
          </div>
        </div>
        <div className="cardone card">
          <img src={yoga} alt="" />
          <h3>Project Three | Yoga && Wellness</h3>
          <p>
            A full-stack web application to create, save, and explore yoga
            sessions. This app allows users to save yoga sessions as drafts or
            publish them with a title, tags, and a JSON file content.
          </p>
          <div className="button">
            <button>
              <a href="https://yoga-app-gamma.vercel.app/">
                LIVE DEMO <i class="fa-solid fa-angle-right"></i>
              </a>
            </button>
            <button>
              <a href="https://github.com/RajputSneha17/Yoga-App">
                GITHUB REPO <i class="fa-solid fa-angle-right"></i>
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
