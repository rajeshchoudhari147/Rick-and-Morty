import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="black">
      <ul>
        <li className="yellow">
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        <li className="yellow">
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
