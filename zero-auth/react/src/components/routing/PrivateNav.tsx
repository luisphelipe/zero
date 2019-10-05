import React from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../../contexts/auth";
import Navbar from "./Navbar";
import "./link-style.css";

function PrivateNav() {
  return (
    <AuthContext.Consumer>
      {auth => (
        <Navbar>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li onClick={auth.signout}>
            <a href="/" onClick={event => event.preventDefault()}>
              Sign out
            </a>
          </li>
        </Navbar>
      )}
    </AuthContext.Consumer>
  );
}

export default PrivateNav;
