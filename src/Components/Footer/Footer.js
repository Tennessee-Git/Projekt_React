import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <p className="footer_element">
        &copy;{new Date().getFullYear()} Projekt REACT | All rights reserved
      </p>
    </div>
  );
}

export default Footer;
