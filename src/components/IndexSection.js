import React from "react";
import { Link } from "react-router-dom";
import "./IndexSection.css";

function IndexSection(props) {
  let horz = false;
  if (props.orientation === "horz") {
    horz = true;
  }
  return (
    <div
      className="index-section-container"
      id={props.orientation}
      data-aos="fade-up"
    >
      <div
        className="paragraph-container"
        data-aos={horz ? "fade-left" : "fade-right"}
      >
        <h2>{props.title}</h2>
        <p>
          {props.content}
          <Link to="/" className="index-link">
            Ler mais...
          </Link>
        </p>
      </div>

      <div className="img-container">
        <img src={props.src} alt="imagem selecionada" />
      </div>
    </div>
  );
}

export default IndexSection;
