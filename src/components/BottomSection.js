import React from "react";
import "./BottomSection.css";

const BottomSection = () => {
  return (
    <section className="bottom-section">
      <div className="bottom-content">
        {/* Student Resources */}
        <div className="bottom-column">
          <h3>Get a Student Loan</h3>
          <ul>
            <li>
              <a href="/apply-now">Apply Now</a>
            </li>
            <li>
              <a href="/Learn-more">Learn More</a>
            </li>
            <li>
              <a href="/refer-and-earn">Refer a Friend</a>
            </li>
          </ul>
        </div>

        {/* Useful links*/}
        <div className="bottom-column">
          <h3>Useful links</h3>
          <ul>
            <li>
              <a href="/Contact-us">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* About us */}
        <div className="bottom-column">
          <h3>About us</h3>
          <ul>
            <li>
              <a href="/the-company">The Company</a>
            </li>
            <li>
              <a href="/social-impact">Social Impact</a>
            </li>
            <li>
              <a href="/careers">Careers</a>
            </li>
            <li>
              <a href="/news">News</a>
            </li>
          </ul>
        </div>

        {/* About us */}
        <div className="bottom-column">
          <h3>Refinance</h3>
          <ul>
            <li>
              <a href="/Refinance-again">Refinance My Loan</a>
            </li>
            <li>
              <a href="/Learn-more">Learn More</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Refinance Section */}
    </section>
  );
};

export default BottomSection;
