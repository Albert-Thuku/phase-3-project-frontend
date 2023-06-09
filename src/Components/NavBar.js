import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className='navbar-container'>
      <h1 className='navbar-heading'>TRAVEL GURU</h1>
      <div className='navbar-links'>
        <NavLink to='/Home' className='nav-link'>
          Home
        </NavLink>
        <NavLink to='/Home/interests' className='nav-link'>
          Interests
        </NavLink>
        <NavLink to='/Home/admin' className='nav-link'>
          Admin
        </NavLink>
      </div>
    </div>
  )
}

export default NavBar