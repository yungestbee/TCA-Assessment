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
            <div className="logo"><img src="" alt="" /></div>
          {/* Login form container */}
          <form onSubmit={handleSubmit}>
            <h3>Sign Up</h3>

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
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter email address"
                required
                aria-label="Email"
              />
            </div>

            {/* Login button */}
            <button type="submit">Sign Up</button>
            <p className="sign_up">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
