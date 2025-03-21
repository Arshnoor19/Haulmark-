import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Fund your education.</h1>
        <p className="hero-subtitle">Live your dream.</p>
        <p className="hero-description">
          Apply now for a loan to study in the U.S. or Canada and make your
          study abroad plans a reality!
        </p>
        <button className="cta-button">GET STARTED</button>
        <p className="hero-note">
          Start the new year with <strong>low rates!</strong>
        </p>
        <p className="hero-award">
          <strong>
            NerdWallet 2024 Best Student Loan for International Students
          </strong>
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
