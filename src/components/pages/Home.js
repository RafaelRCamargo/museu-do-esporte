import React from "react";
import "../../App.css";

import HeroSection from "../HeroSection";
import DescSection from "../DescSection";
import IndexSection from "../IndexSection";
import AboutSection from "../AboutSection";

function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <DescSection>
        Índice <br /> <span>Museu do esporte</span>
      </DescSection>
      <IndexSection
        src="./assets/img/italo/italo-pais.jpeg"
        orientation="horz"
        title="Esportes na guerra fria"
        content="Nascido em 24 de julho de 1950, na cidade de Pirassununga, São Paulo.
        Filho de um alfaiate apaixonado por futebol, Italo se encantou pelo esporte desde cedo, 
        tendo o seu pai como uma grande referência."
      />

      <IndexSection
        src="./assets/img/italo/italo-pais.jpeg"
        orientation="horz"
        title="Pesquisa sobre a ideologia nazista"
        content="A ideologia nazista pregava que a sua raça ariana deveria ser
        massiva, pura e mais eficiente possível. Para que fosse massiva era
        necessário que casais tivessem o maior número possível de filhos, com algumas regalias estatais, "
      />

      <IndexSection
        src="./assets/img/italo/italo-pais.jpeg"
        orientation="horz"
        title="Esportes pelo mundo"
        content="Sepaktakraw: Possui pontuações parecidas com o vôlei, habilidades do futevôlei misturadas com movimentos de artes marciais e uma bola feita de folhas de palmeira. Teve a sua origem na Malásia, no século XV e segue sendo muito popular no continente asiático."
      />

      <IndexSection
        src="./assets/img/italo/italo-pais.jpeg"
        orientation="horz"
        title="E-sports e a consolidação dos esportes digitais"
        content="Para aquilo que começou como brincadeira, um mero entretenimento, hoje, muitos dos jogos eletrônicos constituem um negócio multimilionário, a transposição da casualidade ao profissionalismo. "
      />

      <IndexSection
        src="./assets/img/italo/italo-pais.jpeg"
        orientation="horz"
        title="Memorias esportivas de SC"
        content="Nascido em 26 de junho de 1941, em Joinville, o centroavante Norberto Hoppe, estabeleceu um feito em 1966 disputando o campeonato catarinense pelo Caxias, de Joinville. Anotou 33 gols e foi o maior goleador do Brasil naquele ano, ultrapassando Pelé, que, "
      />

      <IndexSection
        src="./assets/img/italo/italo-pais.jpeg"
        orientation="horz"
        title="Paraolimpiadas"
        content="Nascido em 24 de julho de 1950, na cidade de Pirassununga, São Paulo.
        Filho de um alfaiate apaixonado por futebol, Italo se encantou pelo esporte desde cedo, 
        tendo o seu pai como uma grande referência."
      />
    </>
  );
}

export default Home;
