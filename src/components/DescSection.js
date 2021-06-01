import React from "react";
import "./DescSection.css";

function DescSection() {
  return (
    <div className="desc-container">
      <div className="horizontal" data-aos="flip-up" data-aos-delay="200"></div>
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
      </div>

      <div className="vertical" data-aos="flip-left" data-aos-delay="200"></div>
      <img
        src="./assets/img/logo.png"
        alt="logo do museu"
        className="desc-logo"
        data-aos="zoom-in"
        data-aos-delay="200"
      />
    </div>
  );
}

export default DescSection;
