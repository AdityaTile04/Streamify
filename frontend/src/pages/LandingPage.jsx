import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landingPageContainer">
      <nav>
        <div className="navHeader">
          <h2>Streamify</h2>
        </div>
        <div className="navList">
          <p>Join as Guest</p>
          <p>Register</p>
          <div role="button">
            <p>Login</p>
          </div>
        </div>
      </nav>
      <div className="landingMainContainer">
        <div>
          <h1>
            {" "}
            <span style={{ color: "#FF9839" }}>Connect</span> with your loved
            ones.
          </h1>
          <p>Cover distance by Streamify</p>
          <div role="button">
            <Link to={"/home"}>Get Started</Link>
          </div>
        </div>
        <div>
          <img src="/mobile.png" alt="mobile_photo" />
        </div>
      </div>
    </div>
  );
};


export default LandingPage;
