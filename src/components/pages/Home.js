import React from "react";
import "../../App.css";

import HeroSection from "../HeroSection";
import DescSection from "../DescSection";
import ImgSection from "../ImgSection";
import AboutSection from "../AboutSection";

function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <DescSection>
        Índice <br /> <span>Museu do esporte</span>
      </DescSection>
      <ImgSection
        src="./assets/img/italo/italo-pais.jpeg"
        orientation="horz"
        content="Nascido em 24 de julho de 1950, na cidade de Pirassununga, São Paulo.
        Filho de um alfaiate apaixonado por futebol, Italo se encantou pelo esporte desde cedo, 
        tendo o seu pai como uma grande referência."
      />
    </>
  );
}

export default Home;
