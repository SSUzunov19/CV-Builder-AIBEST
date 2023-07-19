import React from "react";
import "./Navbar.css"
import { useNavigate } from 'react-router-dom';

export default function Navbar () {
  const navigate = useNavigate();
  return (
    <div className="navbar-wrapper">
      <nav className="nav-bar">
        <div className="logo">
          <a href="#" onClick={() => navigate("/")}>Wonder Woman</a>
        </div>
        <div className="account-btns">
          <a className="nav-bth" href="#" onClick={() => navigate("/login")}>Login</a>
          <a className="nav-bth" href="#" onClick={() => navigate("/register")}>Register</a>
        </div>
      </nav>
    </div>
  );
};
