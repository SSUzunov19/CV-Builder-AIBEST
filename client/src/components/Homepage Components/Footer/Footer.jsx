import React from "react";
import "./Footer.css"

export default function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="footer-container">
        <div className="footer-logo">
          <a>Wonder Woman</a>
        </div>
        <p>&copy; Wonder Woman {new Date().getFullYear()}, All rights reserved</p>
      </div>
    </div>
  );
};
