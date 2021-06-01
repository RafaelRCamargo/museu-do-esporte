import React from "react";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero">
      <div className="hero-container">
        <img
          src="./assets/img/logo.png"
          alt="logo do museu"
          className="hero-logo"
        />

        <div className="bar"></div>

        <div className="title-container">
          <h1 className="title">Museu do<br />Esporte<br />Cassoli</h1>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
