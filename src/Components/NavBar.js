import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <NavLink to="/Home" className="nav-link">
        Home
      </NavLink>
      <NavLink to="/Home/interests" className="nav-link">
        Interests
      </NavLink>
      <NavLink to="/Home/admin" className="nav-link">
        Admin
      </NavLink>
    </>
  );
}

export default NavBar;
