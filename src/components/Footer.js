import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <p>DISCLAIMER – some DISCLAIMER</p>

          <h3>Indian Office Location </h3>
          <ul>
            <li>
              <a href="/about">B-10 / 7071 Vasant kunj, New Delhi - 110070 </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom"></div>
    </footer>
  );
};

export default Footer;
