import React from "react";
import "./Header.css";

function Header({
  scrollToHero,
  scrollToFeatures,
  scrollToBottom,
  scrollToCommitment,
  scrollToPeople,
}) {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">HULL ADVISORY</div>
        <ul className="nav-list">
          <li>
            <button className="nav-button" onClick={scrollToHero}>
              Home
            </button>
          </li>
          <li>
            <button className="nav-button" onClick={scrollToFeatures}>
              Take the next step
            </button>
          </li>
          <li>
            <button className="nav-button" onClick={scrollToBottom}>
              Contact
            </button>
          </li>
          <li>
            <button className="nav-button" onClick={scrollToCommitment}>
              Our commitment
            </button>
          </li>
          <li>
            <button className="nav-button" onClick={scrollToPeople}>
              Our People
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
