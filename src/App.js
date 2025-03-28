import React, { useRef } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";
import "./App.css";
import BottomSection from "./components/BottomSection";
import Commitment from "./components/Commitment";

function App() {
  // Refs must be created at the top level
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const bottomRef = useRef(null);
  const commitmentRef = useRef(null);

  // Scroll function must receive the REF, not a string
  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start", // Ensures alignment at top
      });
    }
  };

  return (
    <div className="App">
      <Header
        scrollToHero={() => scrollToSection(heroRef)}
        scrollToFeatures={() => scrollToSection(featuresRef)}
        scrollToBottom={() => scrollToSection(bottomRef)}
        scrollToCommitment={() => scrollToSection(commitmentRef)}
      />

      {/* Refs must be on DOM elements, not components */}
      <section ref={heroRef} id="home">
        <HeroSection />
      </section>

      <section ref={featuresRef} id="features">
        <FeaturesSection />
      </section>

      <section ref={commitmentRef} id="commitment">
        <Commitment />
      </section>

      <section ref={bottomRef} id="contact">
        <BottomSection />
      </section>

      <Footer />
    </div>
  );
}

export default App;
