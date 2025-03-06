import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Authentication from "./pages/authentication";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/home"  /> */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<Authentication />} />
        </Routes>
      </Router>
    </>
  );
};
export default App;
