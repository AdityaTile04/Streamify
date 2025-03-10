import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/home"  /> */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
};
export default App;
