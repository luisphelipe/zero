import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import "./link-style.css";

function PublicNav() {
  return (
    <Navbar>
      <li>
        <NavLink to="/signin/" activeClassName="selected">
          Sign In
        </NavLink>
      </li>
      <li>
        <NavLink to="/signup/" activeClassName="selected">
          Sign Up
        </NavLink>
      </li>
    </Navbar>
  );
}

export default PublicNav;
