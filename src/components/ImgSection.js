import React from "react";
import "./ImgSection.css";

function ImgSection(props) {
  return (
    <div className="img-section-container" id={props.orientation}>
      <div className="paragraph-container">
        <p>{props.content}</p>
      </div>

      <div className="img-container">
        <img src={props.src} alt="imagem selecionada"/>
      </div>
    </div>
  );
}

export default ImgSection;
