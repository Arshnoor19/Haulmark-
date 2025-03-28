import React from "react";
import {
  FaBullseye,
  FaFlag,
  FaHeart,
  FaHandshake,
  FaLeaf,
  FaLightbulb,
} from "react-icons/fa";
import "./Commitment.css";

const Commitment = () => {
  return (
    <section className="vision-mission-section">
      <div className="vm-container">
        {/* Vision Section */}
        <div className="vm-card vision-card">
          <div className="vm-icon">
            <FaBullseye size={32} />
          </div>
          <div className="vm-content">
            <h2>Our Vision</h2>
            <ul>
              <li>
                A world where every vocational student can pursue their dream
                fearlessly
              </li>
            </ul>
          </div>
        </div>

        {/* Mission Section */}
        <div className="vm-card mission-card">
          <div className="vm-icon">
            <FaFlag size={32} />
          </div>
          <div className="vm-content">
            <h2>Our Mission</h2>
            <ul>
              <li>
                To delight our clients with dedication while adhering to high
                standards of service, quality, reliability, safety and personal
                care
              </li>
              <li>
                To be a responsible corporate citizen nurturing human values and
                concern for society, the environment and, above all, the people
              </li>
              <li>
                To promote a work culture that fosters individual growth, team
                spirit and creativity to overcome challenges and attain goals
              </li>
              <li>
                To uphold the guiding values in all interactions and dealings
              </li>
            </ul>
          </div>
        </div>

        {/* Values Section */}
        <div className="vm-card values-card">
          <div className="vm-icon">
            <FaHeart size={32} />
          </div>
          <div className="vm-content">
            <h2>Our Core Values</h2>
            <div className="values-grid">
              <div className="value-item">
                <FaHandshake className="value-icon" />
                <h3>Passion</h3>
                <p>Create value for customers, partners, and investors</p>
              </div>
              <div className="value-item">
                <FaLeaf className="value-icon" />
                <h3>Integrity</h3>
                <p>Being honest, accountable, and transparent</p>
              </div>
              <div className="value-item">
                <FaLightbulb className="value-icon" />
                <h3>Audacious</h3>
                <p>
                  Being innovative driven by system thinking, evidence,
                  creativity and risk taking
                </p>
              </div>
              <div className="value-item">
                <FaHandshake className="value-icon" />
                <h3>Sustainability</h3>
                <p>
                  Building collaborations that support long-term success,
                  profitability and mutual growth
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Commitment;
