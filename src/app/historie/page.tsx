import React from "react";

function StyledParagraph({ children }: any) {
  return (
    <p className="mx-3 lg:text-left lg:mx-20 mb-5 mt-5 lg:text-lg text-m">
      {children}
    </p>
  );
}

export default function Page() {
  return (
    <div>
      <h1 className="lg:text-5xl font-bold text-3xl p-3 text-center text-rose-400 underline mt-2">
        Historie našeho domu:
      </h1>
      <h2 className="bg-rose-300 text-indigo-950 lg:w-1/4 w-1/1 mr-20 p-3 font-bold text-xl lg:mt-10 mt-3 rounded-r-full pl-10">
        Domov před přestavbou
      </h2>
      <div className="lg:w-1/2 justify-start">
        <StyledParagraph>
          Budova dětského domova byla postavena v roce 1921 a sloužila pro
          zdravotnické účely. Od roku 1945 byl v budově umístěn sirotčinec,
          který se v roce 1948 přejmenoval na dětský domov.
        </StyledParagraph>
        <StyledParagraph>
          V osmdesátých letech minulého století byla budova přestavěna na dětský
          domov rodinného typu se třemi byty pro 24 dětí, 6 - 9 vychovatelů a 4
          - 6 provozních zaměstnanců.
        </StyledParagraph>
        <StyledParagraph>
          Do současné podoby byl zrekonstruován v období od 3. března do 1.
          října roku 2004. Celá budova byla nadstavěna, přistavěna a
          zmodernizována. Nyní se v ní nacházejí čtyři byty po 6 - 8 dětech se
          třemi vychovateli na každý jeden byt. O provoz se stará sedm
          provozních pracovníků.
        </StyledParagraph>
      </div>

      <div className="lg:flex lg:justify-end lg:-mt-80 mb-10 mx-5 lg:mx-0">
        <img
          src="/images/domov_stary.jpg"
          alt="domov-stary-image"
          className="lg:w-1/3 lg:mr-40 rounded-3xl shadow-2xl shadow-rose-400"
        />
      </div>

      <h2 className="bg-rose-300 text-white lg:w-1/4 w-1/1 mr-20 p-3 font-bold text-xl lg:mt-10 mt-3 rounded-r-full pl-10">
        Současný domov
      </h2>

      <StyledParagraph>
        Budova se skládá z jednoho podzemního a čtyř nadzemních podlaží. V 1. NP
        je umístěn byt pro nejstarších šest dětí. Jsou zde tři pokoje dětí se
        sociálním zařízením, kuchyně s jídelnou a čistící místnost. Převládající
        barvou je červená. Krom bytů se v prvním patře nacházejí i kanceláře
        ředitelky, zástupce ředitele, účetní, sociální pracovnice či kuchyň.
      </StyledParagraph>
      <div className="lg:w-1/2 justify-start">
        <StyledParagraph>
          2. NP je laděno do pomerančova. Ve třech pokojích zde žije osm dětí.
          Každý pokoj má vlastní sociální zařízení. Krom pokojů jsou tady také
          kuchyň s jídelnou, obývací pokoj a čistící místnost. Stejně jako 2. NP
          jsou řešeny i podlaží třetí a čtvrté. Rozdílnosti jsou jen v
          barevnosti bytů. 3. podlaží se pyšní zelenou barvou, zatímco ve
          čtvrtém patře vládne modrá.
        </StyledParagraph>
        <StyledParagraph>
          Pro zaměstnance je ve druhém patře zřízena denní místnost se šatnami a
          sociálním zařízením se sprchami.
        </StyledParagraph>
        <StyledParagraph>
          Domov je vybaven i místností arteterapie s keramickým kruhem, pecí a
          tkalcovským stavem. Dále máme i hobby místnost pro jakýkoliv pohyb a
          hru.
        </StyledParagraph>
        <StyledParagraph>
          Podzemní podlaží je královstvím našeho domovníka. Má zde kotelnu a
          taky tady máme sušárnu.
        </StyledParagraph>
        <StyledParagraph>
          Za domovem je vybudováno multifunkční hřiště s umělou trávou.
        </StyledParagraph>
      </div>

      <div className="lg:flex lg:justify-end lg:-mt-80 mb-40 mx-5 lg:mx-0 ">
        <img
          src="/images/domov_novy.jpeg"
          alt="domov-stary-image"
          className="lg:w-1/3 lg:mr-60 rounded-3xl lg:-mt-20 shadow-2xl shadow-rose-400"
        />
      </div>
    </div>
  );
}
