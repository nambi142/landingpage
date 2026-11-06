
import React from "react";
import "../css/Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="workshop-footer">
      <div className="footer-container">

        <div className="footer-brand">
          <span className="footer-brand-icon">AI</span>
          <span>Python <strong>& AI Workshop</strong></span>
        </div>

        <div className="footer-divider"></div>

        <p className="footer-copyright">
          Copyright © {currentYear}. All Rights Reserved by{" "}
          <span>Muthu Nambi DEV</span>
        </p>

      </div>
    </footer>
  );
};

export default Footer;
