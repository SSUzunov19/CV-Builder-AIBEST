import React from "react";
import "./Navbar.css"

export default function Navbar () {
  return (
    <div className="navbar-wrapper">
      <nav className="nav-bar">
        <div className="logo">
          <a href="">Wonder Woman</a>
        </div>
        <div className="account-btns">
          <a className="nav-bth" href="">Login</a>
          <a className="nav-bth"href="">Register</a>
        </div>
      </nav>
    </div>
  );
};