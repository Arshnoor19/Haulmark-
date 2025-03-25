import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>
          Fund your <div>Education!</div>
        </h1>
        <p className="hero-subtitle">Live your dream.</p>
        <p className="hero-description">
          Apply now for a loan to study and make your study abroad plans a
          reality!
        </p>
        <button className="cta-button">GET STARTED</button>
        <p className="hero-note">
          Start the new year with <strong>low rates!</strong>
        </p>
        <p className="hero-award">
          <strong>Some TEXT</strong>
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
