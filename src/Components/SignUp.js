import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignUp() {
  const [userData, setUserData] = useState({
    name: '',
    password: ''
  });

  function handleInputChange(e) {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (userData.name && userData.password) {
      fetch("https://travel-guru-backend.onrender.com/signup", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
      })
        .then(resp => resp.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
    }
  }

  const { name, password } = userData;

  return (
    <div id="signup-formdiv">
      <header>Sign Up</header>
      <form onSubmit={handleSubmit} id="signup-form">
        <label htmlFor="name">Name:</label>
        <input 
          type="text"
          id="name"
          name="name"
          value={name}
          placeholder="Insert Full Name"
          required
          onChange={handleInputChange}
        />
        <label htmlFor="password">Password:</label>
        <input 
          type="password"
          id="password"
          name="password"
          value={password}
          placeholder="Insert password"
          required
          onChange={handleInputChange}
        />
        <button type="submit">Complete</button>
      </form>
      <Link to="/Home">Discover destinations</Link>
    </div>
  );
}

export default SignUp;
