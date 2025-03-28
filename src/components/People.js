import React from "react";
import "./People.css";
import { FaLinkedin } from "react-icons/fa";

const PeopleSection = () => {
  return (
    <section className="people-section">
      <h2 className="section-title">Our People</h2>

      <div className="team-category">
        <h3>Board Of Directors</h3>
        <div className="team-grid">
          <div className="team-member">
            <div className="member-photo"></div>
            <h4>Dr. Manab Chakraborty</h4>
            <p>Director and Executive Chair</p>
            <p>
              Manab is a serial social entrepreneur and international
              agribusiness consultant.
            </p>

            <a
              href="https://www.linkedin.com/in/manabchakraborty/"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-icon"
            >
              <FaLinkedin />
            </a>
          </div>
          <div className="team-member">
            <div className="member-photo"></div>
            <h4>Mr. Rajkamal Mukherjee</h4>
            <p>Director</p>
            <p>
              Rajkamal Mukherjee is a seasoned banker and closely associated
              with livelihood, microfinance and micro-insurance initiatives in
              India.
            </p>
          </div>
          <div className="team-member">
            <div className="member-photo"></div>
            <h4>Mr. Habib Shaik</h4>
            <p>Observer</p>
            <p>
              Habib is currently Senior Vice President at Microfinance Industry
              Network. He is a finance expert specializing in credit and risk
              management.
            </p>
          </div>
        </div>
        <h3>Our Investors</h3>
        <h3>Our Partners and Collaborators</h3>
      </div>
    </section>
  );
};

export default PeopleSection;
