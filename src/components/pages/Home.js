import React from "react";
import "../../App.css";

import HeroSection from "../HeroSection";
import DescSection from "../DescSection";
import ImgSection from "../ImgSection";

function Home() {
  return (
    <>
      <HeroSection />
      <DescSection />
      <ImgSection
        src="./assets/img/italo/italo-pais.jpeg"
        orientation="horz"
        content="Nascido em 24 de julho de 1950, na cidade de Pirassununga, São Paulo.
        Filho de um alfaiate apaixonado por futebol, Italo se encantou pelo esporte desde cedo, 
        tendo o seu pai como uma grande referência."
      />
      <ImgSection
        src="./assets/img/italo/italo-edirez.jpeg"
        orientation="vert"
        content="Edirez Perez,  seu professor de educação física, foi outra inspiração  para o mesmo, 
        com quem teve aulas durante 1962 - 1969. O professor querido da Escola S se inspira em muitas atividades 
        de Edirez para aplicar em suas aulas atuais."
      />
      <ImgSection
        src="./assets/img/italo/italo-colegio.jpeg"
        orientation="vert"
        content="Durante o seu tempo de escola,  Ítalo passou a praticar vôlei nos jogos de sua cidade e em colegiais. A partir daí a sua paixão por esportes começou a crescer, e consequentemente, por influencia de um professor da faculdade, seguiu para a Escola de Árbitros de Handebol da Federação Paulista. 
        "
      />
      <ImgSection
        src="./assets/img/italo/italo-microfone.jpeg"
        orientation="vert"
        content="Depois de um tempo ele começou a lecionar em São Paulo, no colégio Dante Alighieri.  Tudo aquilo que Ítalo aprendia de manhã na faculdade, ele ensinava para os alunos de tarde. Após alguns meses , foi convidado para ser um dos diretores pedagógicos do colégio, onde acabou permanecendo durante 20 anos ."
      />
      <ImgSection
        src="./assets/img/italo/italo-arbitro-maos.jpeg"
        orientation="horz"
        content="Em resumo, o esporte na vida de Italo Cassoli proporcionou grandes oportunidades , trouxeram os seus melhores amigos e o ensinou a ter muita responsabilidade, muita gentileza e uma melhor convivência com seus alunos, que inclusive, fazem grande parte de sua história até hoje.
        "
      />
      <ImgSection
        src="./assets/img/italo/italo-arbitro-escanteio.jpeg"
        orientation="vert"
        content="Existiram oportunidades incríveis durante o seu tempo de professor, tanto como ser convidado para lecionar na univerdade de San Antonio no Texas, como também para arbitrar em jogos de Handebol na Europa.  "
      />
      <ImgSection
        src="./assets/img/italo/italo-pais.jpeg"
        orientation="horz"
        content="Com certeza, o maior incentivo  de Italo foi a sua mãe, Jandyra Althen Cassoli,  ela que sempre o incentivava em todas as oportunidades que apareciam, dando todo o apoio necessário ao seu filho."
      />
    </>
  );
}

export default Home;
