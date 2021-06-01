import React from "react";
import "./DescSection.css";

function DescSection() {
  return (
    <div className="desc-container">
      <div className="horizontal"></div>
      <div className="title-container">
        <h1 className="title">
          Exposição
          <br />
          <span>Italo Cassoli</span>
        </h1>
      </div>

      <div className="vertical"></div>
      <img
        src="./assets/img/logo.png"
        alt="logo do museu"
        className="desc-logo"
      />
    </div>
  );
}

export default DescSection;
