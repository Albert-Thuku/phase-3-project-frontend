import React, { useState } from "react";
import { Link } from "react-router-dom";

function LogIn(){
    const [homeLink, setHomeLink] = useState(false)
    const [signup, setSignUp] = useState(false)
    const [userData, setUserData] = useState({
        id:0,
        name: '',
        password: ''
      });
    
      function handleInputChange(e) {
        setUserData({ ...userData, [e.target.name]: e.target.value });
      }
    
      function handleSubmit(e) {
        e.preventDefault();
        if (userData.name && userData.password) {
            fetch('https://travel-guru-backend.onrender.com/users')
            .then(resp => resp.json())
            .then(data => {
                let selectUser = data.filter(user => user.name === userData.name && user.password === userData.password);
                if (selectUser.length > 0) {
                    setHomeLink(true);
                }else{
                    setSignUp(true)
                }
            })
            .catch(error => console.error(error));
        }
      }
    
      const { name, password } = userData;
    
      return (
        <div id="login-formdiv">
          <header>Log In</header>
          <form onSubmit={handleSubmit} id="login-form">
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
            <button type="submit">Verify User</button>
          </form>
          {homeLink? <Link to="/Home">Welcome back</Link>:null}
          {signup? <p>Invalid user details! <Link to='/signup'>Sign up</Link></p>:null}
        </div>
      );
}

export default LogIn;