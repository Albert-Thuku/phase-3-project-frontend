import React from "react";
import { Link } from "react-router-dom";

function Welcome() {

  return (
    <div id="welcome-page">
      <h1 id="welcome-header">Welcome to Travel Guru!</h1>
      <h3>Open yourself to new experiences with a collection of destinations to visit</h3>
      <p>
        Make a new account: <Link to="/signup">Sign Up</Link>
      </p>
      <p>
        Already have an account? <Link to="/login">Log in</Link>
      </p>
    </div>
  );
}

export default Welcome;