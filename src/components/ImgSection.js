import React from "react";
import "./ImgSection.css";

function ImgSection(props) {
  let horz = false;
  if (props.orientation === "horz") {
    horz = true;
  }
  return (
    <div
      className="img-section-container"
      id={props.orientation}
      data-aos="fade-up"
    >
      <div
        className="paragraph-container"
        data-aos={horz ? "fade-left" : "fade-right"}
      >
        <p>{props.content}</p>
      </div>

      <div className="img-container">
        <img src={props.src} alt="imagem selecionada" />
      </div>
    </div>
  );
}

export default ImgSection;
