import React from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";

export const SignUpPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
  };

  return (
    <>
      <div>
        <div className="login_form">
          <div className="logo">
            <img src="" alt="" />
          </div>
          {/* Login form container */}
          <form onSubmit={handleSubmit}>
            <h3>Sign In</h3>

            {/* First Name input box */}
            <div className="input_box">
              <label htmlFor="First Name">First Name</label>
              <input
                type="text"
                id="email"
                placeholder="Enter First Name"
                required
                aria-label="First Name"
              />
            </div>

            {/* Last Name input box */}
            <div className="input_box">
              <label htmlFor="Last Name">Last Name</label>
              <input
                type="text"
                id="email"
                placeholder="Enter Last Name"
                required
                aria-label="Last Name"
              />
            </div>

            {/* Email input box */}
            <div className="input_box">
              <label htmlFor="email">Grade</label>
              <select name="" id="">
                <option value="">7</option>
                <option value="">8</option>
                <option value="">9</option>
                <option value="">10</option>
                <option value="">11</option>
                <option value="">12</option>
              </select>
            </div>

            {/* Login button */}
            <button type="submit">Proceed</button>
          </form>
        </div>
      </div>
    </>
  );
};
