import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <p>
            DISCLAIMER – Subject to credit approval, loans are made by Bank of
            Lake Mills or MPOWER Financing, PBC. Bank of Lake Mills does not
            have an ownership interest in MPOWER Financing. Neither MPOWER
            Financing nor Bank of Lake Mills is affiliated with the school you
            attended or are attending. Bank of Lake Mills is Member FDIC. None
            of the information contained in this website constitutes a
            recommendation, solicitation or offer by MPOWER Financing or its
            affiliates to buy or sell any securities or other financial
            instruments or other assets or provide any investment advice or
            service.
          </p>

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
