import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
};
export default App;
