import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/home"  /> */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
};
export default App;
