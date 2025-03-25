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
  return (
    <section className="features-section">
      {/* Section 1: Funding for International Students */}
      <div className="funding-section">
        <h2>Flexible Funding Options</h2>

        <p>
          Fixed-rate loans from US$2,001 to US$100,000 total at competitive
          interest rates with up to 0.25% in interest rate discounts. Plus – we
          don’t mind if you have loans from other lenders; you can still apply
          for an MPOWER loan!
        </p>
        <div className="funding-grid">
          <div className="funding-card">
            <div className="card-icon">
              <FaHandsHelping size={40} /> {/* Add the icon */}
            </div>
            <h3>Support Along the Way</h3>
            <p>
              Free visa support letters, exclusive career strategy services and
              the potential for a conditional loan offer in a matter of days.
            </p>
          </div>
          <div className="funding-card">
            <div className="card-icon">
              <FaAlgolia size={40} /> {/* Add the icon */}
            </div>
            <h3>Our Fastest Process Yet</h3>
            <p>
              In just 30 seconds, see if you’re eligible to apply. From our
              lightning-speed application process to our seamless disbursement,
              we have you covered.
            </p>
          </div>
          <div className="funding-card">
            <div className="card-icon">
              <FaHandsHelping size={40} /> {/* Add the icon */}
            </div>
            <h3>Support Along the Way</h3>
            <p>
              Free visa support letters, exclusive career strategy services and
              the potential for a conditional loan offer in a matter of days.
            </p>
          </div>
          <div className="funding-card">
            <div className="card-icon">
              <FaUsers size={40} /> {/* Add the icon */}
            </div>
            <h3>Funding at Your Fingertips</h3>
            <p>
              Secure your loan faster than ever with MPOWER’s quickest
              application yet, available worldwide. Apply today for funding!
            </p>
          </div>
        </div>
      </div>

      {/* Section 2: What We've Achieved Together */}
      <h2>What We've Achieved Together</h2>
      <div className="features-grid">
        <div className="feature-card">
          <FaCheckCircle className="feature-icon" />
          <h3>100%</h3>
          <p>
            A significant number of students reported that receiving a loan
            played a crucial role in enabling them to pursue their education, as
            it provided the necessary financial support to cover tuition fees,
            living expenses, and other academic costs, ultimately allowing them
            to focus on their studies without constant financial stress.
          </p>
        </div>
        <div className="feature-card">
          <FaUsers className="feature-icon" />
          <h3>20,000+</h3>
          <p>
            A significant number of students reported that receiving a loan
            played a crucial role in enabling them to pursue their education, as
            it provided the necessary financial support to cover tuition fees,
            living expenses, and other academic costs, ultimately allowing them
            to focus on their studies without constant financial stress.
          </p>
        </div>
        <div className="feature-card">
          <FaGlobe className="feature-icon" />
          <h3>190+</h3>
          <p>
            A significant number of students reported that receiving a loan
            played a crucial role in enabling them to pursue their education, as
            it provided the necessary financial support to cover tuition fees,
            living expenses, and other academic costs, ultimately allowing them
            to focus on their studies without constant financial stress.
          </p>
        </div>
        <div className="feature-card">
          <FaSchool className="feature-icon" />
          <h3>500+</h3>
          <p>
            A significant number of students reported that receiving a loan
            played a crucial role in enabling them to pursue their education, as
            it provided the necessary financial support to cover tuition fees,
            living expenses, and other academic costs, ultimately allowing them
            to focus on their studies without constant financial stress.
          </p>
        </div>
        <div className="feature-card">
          <FaGraduationCap className="feature-icon" />
          <h3>91%</h3>
          <p>
            A significant number of students reported that receiving a loan
            played a crucial role in enabling them to pursue their education, as
            it provided the necessary financial support to cover tuition fees,
            living expenses, and other academic costs, ultimately allowing them
            to focus on their studies without constant financial stress.
          </p>
        </div>
        <div className="feature-card">
          <FaUserGraduate className="feature-icon" />
          <h3>45%</h3>
          <p>
            A significant number of students reported that receiving a loan
            played a crucial role in enabling them to pursue their education, as
            it provided the necessary financial support to cover tuition fees,
            living expenses, and other academic costs, ultimately allowing them
            to focus on their studies without constant financial stress.
          </p>
        </div>
      </div>

      <div className="application-box">
        <div className="application-section">
          <div className="application-content">
            <h2>Ready to Take the Next Step?</h2>
            <p>
              Start your application today and join thousands of students who
              have achieved their dreams with Financing.
            </p>
            <button className="application-button">
              Start Your Application
            </button>
          </div>
        </div>
      </div>

      {/* Section 3: Newsletter Signup */}
      <div className="newsletter-section">
        <div className="newsletter-form">
          <h2>Join the Live Webinars!</h2>

          <button type="submit" className="submit-button">
            CONNECT
            <FaLink size={15} />
          </button>
        </div>
        <p className="consent-message">
          By submitting your email address, you consent to receive email
          communication from US.
        </p>
      </div>

      {/* Section 4: Start Your Application */}
    </section>
  );
};

export default FeaturesSection;
