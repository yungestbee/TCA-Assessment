import React from "react";
import { Link } from "react-router-dom";
import { FaCode, FaRobot } from "react-icons/fa";
import "./HomePage.css";

const HomePage = () => {
  return (
    <>
      <div className="container1">
        <div className="left">
          <p className="heading">
            Welcome to the <br />
            <b>Talent Code Africa Student Assessment!</b>
          </p>
          <p>Pick a category to get started</p>
        </div>
        <div className="button-container">
          <Link to="/coding-assessment">
            <button className="button">
              <FaCode /> Coding & Web
            </button>
          </Link>

          <Link to="/robotics-assessment">
            <button className="button">
              <FaRobot /> Robotics
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomePage;
