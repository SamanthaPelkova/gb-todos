import React from "react";

function StyledParagraph({ children }: any) {
  return (
    <p className="mx-3 lg:text-left lg:mx-20 mb-5 mt-5 text-lg">{children}</p>
  );
}

export default function Page() {
  return (
    <div>
      <h1 className="lg:text-5xl font-bold text-3xl p-3 text-center text-rose-400 underline mt-2">
        Historie našeho domu:
      </h1>
      <h2 className="bg-rose-300 text-white lg:w-1/4 w-1/1 mr-20 p-3 font-bold text-xl lg:mt-10 mt-3 rounded-r-full pl-10">
        Domov před přestavbou
      </h2>
      <StyledParagraph>
        Budova dětského domova byla postavena v roce 1921 a sloužila pro
        zdravotnické účely. Od roku 1945 byl v budově umístěn sirotčinec, který
        se v roce 1948 přejmenoval na dětský domov.
      </StyledParagraph>
      <StyledParagraph>
        V osmdesátých letech minulého století byla budova přestavěna na dětský
        domov rodinného typu se třemi byty pro 24 dětí, 6 - 9 vychovatelů a 4 -
        6 provozních zaměstnanců.
      </StyledParagraph>
      <StyledParagraph>
        Do současné podoby byl zrekonstruován v období od 3. března do 1. října
        roku 2004. Celá budova byla nadstavěna, přistavěna a zmodernizována.
        Nyní se v ní nacházejí čtyři byty po 6 - 8 dětech se třemi vychovateli
        na každý jeden byt. O provoz se stará sedm provozních pracovníků.
      </StyledParagraph>
    </div>
  );
}
