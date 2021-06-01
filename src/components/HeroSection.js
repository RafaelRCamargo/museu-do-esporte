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
          data-aos="fade-up"
          data-aos-delay="300"
        />

        <div className="bar" data-aos="fade-up" data-aos-delay="500"></div>

        <div
          className="title-container"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          <h1 className="title">
            Museu do
            <br />
            Esporte
            <br />
            Cassoli
          </h1>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
