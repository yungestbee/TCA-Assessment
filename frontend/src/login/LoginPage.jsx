import React from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";

export const LoginPage = () => {
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
            <h3>Log in</h3>

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

            {/* Password input box */}
            <div className="input_box">
              <div className="password_title">
                <label htmlFor="password">Password</label>
                <Link to="/forgot-password">Forgot Password?</Link>
              </div>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                required
                aria-label="Password"
              />
            </div>

            {/* Login button */}
            <button type="submit">Log In</button>
           
          </form>

         
        </div>
      </div>
    </>
  );
};
