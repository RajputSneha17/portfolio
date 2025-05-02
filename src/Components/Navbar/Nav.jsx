import React, { useState, useEffect } from "react";
import "./Nav.css";

const Nav = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true); // Default dark mode enabled

  useEffect(() => {
    document.body.classList.add("dark-mode"); // Apply dark mode on mount
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  const scroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  const handleClick = (section) => {
    closeSidebar();
    scroll(section);
  };
  return (
    <div className="navbarheight" id="Navbar">
      {/* Overlay */}
      <div
        className={`overlay ${sidebarOpen ? "active" : ""}`}
        onClick={closeSidebar}
      ></div>

      {/* Navbar */}
      <div className={`navbar ${sidebarOpen ? "hide" : ""}`}>
        <div className="navleft">
          <div className="logo-icon">S</div>
          <p className="logo">Sneha's Portfolio</p>
        </div>

        {/* Center Navigation (Visible on Large Screens) */}
        <div className="navcenter">
          <ul>
            <li onClick={() => scroll("Home")}>Home</li>
            <li onClick={() => scroll("About")}>About</li>
            <li onClick={() => scroll("Skills")}>Skills</li>
            <li onClick={() => scroll("Project")}>Project</li>
            <li onClick={() => scroll("Contact")}>Contact Me</li>
          </ul>
        </div>

        {/* Dark Mode Toggle (Visible on Large Screens) */}
        <div className="navright">
          <input
            type="checkbox"
            id="darkmode-toggle"
            checked={darkMode}
            onChange={toggleDarkMode}
          />
          <label htmlFor="darkmode-toggle">
            <i className="fa-solid fa-moon"></i>
            <i className="fa-solid fa-sun"></i>
          </label>
        </div>

        {/* Menu Toggle Button (Visible on Small Screens) */}
        <div className="menu-toggle" onClick={toggleSidebar}>
          ☰
        </div>
      </div>

      {/* Sidebar (Visible on Small Screens) */}
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="close-btn" onClick={closeSidebar}>
          ×
        </div>
        <ul>
          <li onClick={() => handleClick("Home")}>Home</li>
          <li onClick={() => handleClick("About")}>About</li>
          <li onClick={() => handleClick("Skills")}>Skills</li>
          <li onClick={() => handleClick("Project")}>Project</li>
          <li onClick={() => handleClick("Contact")}>Contact Me</li>
        </ul>
        <div className="navright">
          <input
            type="checkbox"
            id="darkmode-toggle-sidebar"
            checked={darkMode}
            onChange={toggleDarkMode}
          />
          <label htmlFor="darkmode-toggle-sidebar">
            <i className="fa-solid fa-moon"></i>
            <i className="fa-solid fa-sun"></i>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Nav;
