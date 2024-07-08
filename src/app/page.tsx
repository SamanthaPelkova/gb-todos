import Container from "@/components/Container";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-r from-rose-400 to-rose-200">
      <div className="relative inset-0">
        <img
          src="/images/background-photo.png"
          alt="background-image"
          className="w-full h-full object-cover"
        />
      </div>
      <Container className="relative z-10 min-h-screen bg-transparent font-sans antialiased mt-6 sm:mt-5">
        <div bg-white>
          <h1 className="text-indigo-950 font-bold lg:text-6xl text-3xl bg-rose-200 text-center lg:p-2 p-1 rounded-t-3xl lg:-mt-14 -mt-10 lg:w-auto w-1/1">
            Aktuality
          </h1>
          <HomePageActions />
        </div>
      </Container>
    </main>
  );
}

function HomePageActions() {
  return (
    <div className="bg-rose-100 p-4 rounded-b-3xl">
      <h2 className="lg:text-3xl text-2xl font-bold text-indigo-950 lg:ml-6 -mt-2 animate-pulse underline">
        Volná místa:
      </h2>
      <div className="lg:flex">
        <div className="justify-end">
          <img
            src="/images/aktuality-vychovatel.jpg"
            alt="vychovatel-aktuality-photo"
            className="lg:w-1/1 rounded-3xl lg:ml-6 mt-5"
          />
        </div>
        <div className="mt-2 p-4 rounded-3xl lg:text-xl text-m justify-start">
          <h3 className="lg:text-2xl text-xl font-bold text-white mb-2 bg-rose-400 p-3 lg:w-1/2 w-60 text-center rounded-3xl lg:-mt-6 -mt-16 absolute lg:relative lg:-ml-24 ml-28">
            VYCHOVATEL/KA
          </h3>
          <div className="lg:ml-6 ml-0">
            <p className="mb-6">
              Na dlouhodobý zástup za pracovní neschopnost do Dětského Domova v
              Uherském Ostrohu.
            </p>
            <p className="mb-4">
              V případě zájmu, prosím, zašlete e-mail se žádostí a doklad o
              nejvyšším dosaženém vzdělání.
            </p>
          </div>
          <div className="lg:ml-10 ml-2 p-2 rounded-3xl">
            <h4 className="font-bold mb-2 text-rose-400">Požadavky:</h4>
            <p className="mb-4">
              - VŠ vzdělání v oblasti speciální nebo sociální pedagogiky
            </p>
            <h4 className="font-bold mb-2 text-rose-400">Nástup:</h4>
            <p className="mb-4">
              - Možný od 1. 9. 2024, resp. od 26. 8. 2024, na Hlavní pracovní
              poměr
            </p>
          </div>
          <h1 className="flex justify-end font-extrabold text-rose-500 lg:text-lg text-sm mr-5 animate-bounce">
            +420 572 591 210 &nbsp; &nbsp; &nbsp; reditelna@centrum.cz
          </h1>
        </div>
      </div>
    </div>
  );
}
