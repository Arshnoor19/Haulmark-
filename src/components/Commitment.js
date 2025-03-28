import React from "react";

import "./Commitment.css";

const Commitment = () => {
  return (
    <div className="achievements-section">
      <h2>Our commitment</h2>
      <div className="features-grid">
        <div className="feature-card">
          <h3>Our Vision </h3>
          <p>
            A world where every vocational student can pursue their dream
            fearlessly.
          </p>
        </div>
        <div className="feature-card">
          <h3>Our Mission</h3>
          <p>
            <li>
              To delight our clients with dedication while adhering to high
              standards of service, quality, reliability, safety and personal
              care.
            </li>
            <li>
              To be a technology-driven, customer-centric, financially sound
              organization
            </li>
            <li>
              To be a responsible corporate citizen nurturing human values and
              concern for society, the environment and, above all, the people.
            </li>
            <li>
              To promote a work culture that fosters individual growth, team
              spirit and creativity to overcome challenges and attain goals.
            </li>
            <li>
              To uphold the guiding values in all interactions and dealings.
            </li>
          </p>
        </div>
        <div className="feature-card">
          <h3>Our Core Values</h3>
          <p>
            <li>
              Passion: Create value for customers, partners, and investors.
            </li>
            <li>Integrity: Being honest, accountable, and transparent.</li>
            <li>
              Audacious: Being innovative driven by system thinking, evidence,
              creativity and risk taking.
            </li>
            <li>
              Sustainability: Building collaborations that support long-term
              success, profitability and mutual benefit.
            </li>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Commitment;
