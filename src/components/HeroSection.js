import React from "react";
import "./HeroSection.css";
import profile from "./hull-head.jpg";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="profile-container">
        <img
          src={profile}
          alt="Dr. Manab Chakraborty"
          className="profile-pic"
        />
      </div>
      <div className="hero-content">
        Hull was founded in March 2024 by Dr. Manab Chakraborty, a serial social
        entrepreneur with a dream to remove barriers to vocational education for
        students hailing from low income and rural households. Hull is the
        preferred partner who will students to access the necessary training
        needed to achieve their dreams.
      </div>
    </section>
  );
};

export default HeroSection;
