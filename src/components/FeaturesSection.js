import React from "react";
import { FaUsers, FaHandsHelping, FaAlgolia } from "react-icons/fa";
import "./FeaturesSection.css";

const FeaturesSection = () => {
  // Button click handlers for funding section
  const handleButton1Click = () => {
    console.log("Support button clicked");
    // Add your navigation or action here
    // Example: navigate('/support');
  };

  const handleButton2Click = () => {
    console.log("Fast Process button clicked");
    // Add your navigation or action here
  };

  const handleButton3Click = () => {
    console.log("Quick Approval button clicked");
    // Add your navigation or action here
  };

  const handleButton4Click = () => {
    console.log("Global Funding button clicked");
    // Add your navigation or action here
  };

  const handleButton5Click = () => {
    console.log("Support button clicked");
    // Add your navigation or action here
    // Example: navigate('/support');
  };

  const handleButton6Click = () => {
    console.log("Support button clicked");
    // Add your navigation or action here
    // Example: navigate('/support');
  };

  const handleButton7Click = () => {
    console.log("Support button clicked");
    // Add your navigation or action here
    // Example: navigate('/support');
  };

  return (
    <section className="features-section">
      {/* Section 1: Funding for International Students */}
      <div className="funding-section">
        <h2>Take the next step with us?</h2>
        <p>
          Fixed-rate loans from US$2,001 to US$100,000 total at competitive
          interest rates with up to 0.25% in interest rate discounts.
        </p>

        <div className="funding-button-grid">
          <button className="funding-button" onClick={handleButton1Click}>
            <div className="button-icon">
              <FaHandsHelping size={24} />
            </div>
            <div className="button-content">
              <h3>Apply for vocational student loan</h3>
            </div>
          </button>

          <button className="funding-button" onClick={handleButton2Click}>
            <div className="button-icon">
              <FaAlgolia size={24} />
            </div>
            <div className="button-content">
              <h3>Join our team</h3>
            </div>
          </button>

          <button className="funding-button" onClick={handleButton3Click}>
            <div className="button-icon">
              <FaHandsHelping size={24} />
            </div>
            <div className="button-content">
              <h3>Apply for a work tool loan</h3>
            </div>
          </button>

          <button className="funding-button" onClick={handleButton4Click}>
            <div className="button-icon">
              <FaUsers size={24} />
            </div>
            <div className="button-content">
              <h3>Talk to us</h3>
            </div>
          </button>

          <button className="funding-button" onClick={handleButton5Click}>
            <div className="button-icon">
              <FaHandsHelping size={24} />
            </div>
            <div className="button-content">
              <h3>Apply for carrier advancement</h3>
            </div>
          </button>

          <button className="funding-button" onClick={handleButton6Click}>
            <div className="button-icon">
              <FaHandsHelping size={24} />
            </div>
            <div className="button-content">
              <h3>Join our webinar</h3>
            </div>
          </button>

          <button className="funding-button" onClick={handleButton7Click}>
            <div className="button-icon">
              <FaHandsHelping size={24} />
            </div>
            <div className="button-content">
              <h3>Apply for a job</h3>
            </div>
          </button>
          <button className="funding-button" onClick={handleButton7Click}>
            <div className="button-icon">
              <FaHandsHelping size={24} />
            </div>
            <div className="button-content">
              <h3>EXTRA BUTTON</h3>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
