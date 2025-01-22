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
            <h3>Log in with</h3>

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
            <p className="sign_up">
              Don't have an account? <Link to="/signup">Sign up</Link>
            </p>
          </form>

          <p className="separator">
            <span>or</span>
          </p>

          <div className="login_option">
            {/* Google button */}
            <div className="option">
              <a href="#">
                <img src="logos/google.png" alt="Google" />
                <span>Google</span>
              </a>
            </div>
            {/* Apple button */}
            <div className="option">
              <a href="#">
                <img src="logos/apple.png" alt="Apple" />
                <span>Apple</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
