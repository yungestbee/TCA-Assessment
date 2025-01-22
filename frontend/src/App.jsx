import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignUpPage } from "./login/SignUpPage"; // Example for another page
import { LoginPage } from "./login/LoginPage";
import HomePage from "./homepage/HomePage";
import QuestionPage from "./Question-Page/QuestionPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/coding-assessment" element={<QuestionPage />} />
          {/* Add other routes here */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
