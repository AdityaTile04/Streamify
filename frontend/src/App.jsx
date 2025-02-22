import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/home"  /> */}
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
