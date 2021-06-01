import React from "react";
import "./AboutSection.css";

function AboutSection() {
  return (
    <div className="about-container">
      <div
        className="title-container"
        data-aos="fade-left"
        data-aos-delay="400"
      >
        <h1 className="title">
          Exposição
          <br />
          <span>Italo Cassoli</span>
        </h1>
        <p>
          texto mto bom texto mto bom texto mto bom texto mto bom texto mto bom
          texto mto bom texto mto bom texto mto bom texto mto bom texto mto bom
          texto mto bom texto mto bom texto mto bom texto mto bom texto mto bom
          texto mto bom texto mto bom texto mto bom texto mto bom texto mto bom
          texto mto bom texto mto bom texto mto bom texto mto bom texto mto bom
          texto mto bom texto mto bom texto mto bom texto mto bom texto mto bom
          texto mto bom texto mto bom texto mto bom texto mto bom texto mto bom
          texto mto bom texto mto bom texto mto bom texto mto bom texto mto bom
          texto mto bom texto mto bom
        </p>
      </div>

      <img
        src="./assets/img/logo.png"
        alt="logo do museu"
        className="about-logo"
        data-aos="zoom-in"
        data-aos-delay="200"
      />
    </div>
  );
}

export default AboutSection;
