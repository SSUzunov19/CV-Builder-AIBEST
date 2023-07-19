import React from "react";
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <nav className="nav-bar">
        <div className="logo">
          <a href="">buildMe</a>
        </div>
        <div className="account-btns">
          <a className="nav-bth" href="">Login</a>
          <a className="nav-bth"href="">Register</a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
