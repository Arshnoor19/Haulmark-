import React from "react";
import {
  FaCheckCircle,
  FaUsers,
  FaGlobe,
  FaSchool,
  FaGraduationCap,
  FaUserGraduate,
  FaHandsHelping,
  FaAlgolia,
  FaLink,
} from "react-icons/fa";
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

  const handleApplicationClick = () => {
    console.log("Application button clicked");
    // Add your navigation or action here
  };

  const handleConnectClick = () => {
    console.log("Connect button clicked");
    // Add your navigation or action here
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

      {/* Section 2: What We've Achieved Together */}
      <div className="achievements-section">
        <h2>What We've Achieved Together</h2>
        <div className="features-grid">
          <div className="feature-card">
            <FaCheckCircle className="feature-icon" />
            <h3>100%</h3>
            <p>
              A significant number of students reported that receiving a loan
              played a crucial role in enabling them to pursue their education.
            </p>
          </div>
          <div className="feature-card">
            <FaUsers className="feature-icon" />
            <h3>20,000+</h3>
            <p>
              Students supported in achieving their educational dreams through
              our financial assistance programs.
            </p>
          </div>
          <div className="feature-card">
            <FaGlobe className="feature-icon" />
            <h3>190+</h3>
            <p>
              Countries represented by students who have benefited from our
              funding solutions.
            </p>
          </div>
          <div className="feature-card">
            <FaSchool className="feature-icon" />
            <h3>500+</h3>
            <p>
              Partner institutions worldwide where our students have
              successfully enrolled.
            </p>
          </div>
          <div className="feature-card">
            <FaGraduationCap className="feature-icon" />
            <h3>91%</h3>
            <p>
              Graduation rate among students who utilized our funding programs.
            </p>
          </div>
          <div className="feature-card">
            <FaUserGraduate className="feature-icon" />
            <h3>45%</h3>
            <p>
              Students who reported career advancement within one year of
              graduation.
            </p>
          </div>
        </div>
      </div>

      {/* Section 3: Application CTA */}
      <div className="application-box">
        <div className="application-section">
          <div className="application-content">
            <h2>Ready to Take the Next Step?</h2>
            <p>
              Start your application today and join thousands of students who
              have achieved their dreams with our financing.
            </p>
            <button
              className="application-button"
              onClick={handleApplicationClick}
            >
              Start Your Application
            </button>
          </div>
        </div>
      </div>

      {/* Section 4: Newsletter Signup */}
      <div className="newsletter-section">
        <div className="newsletter-form">
          <h2>Join the Live Webinars!</h2>
          <button
            type="button"
            className="submit-button"
            onClick={handleConnectClick}
          >
            CONNECT
            <FaLink size={15} />
          </button>
        </div>
        <p className="consent-message">
          Learn about funding opportunities directly from our experts
        </p>
      </div>
    </section>
  );
};

export default FeaturesSection;
