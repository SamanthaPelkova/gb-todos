import React from "react";

export default function Page() {
  return (
    <div>
      <h1 className="lg:text-5xl font-bold text-3xl p-3 text-center text-rose-400 underline mt-2">
        Kontaktní údaje:
      </h1>
      <div className="bg-white lg:pl-6 pl-3 pt-1 pb-9">
        <h2 className="lg:text-2xl text-m mt-9 mb-2 bg-rose-50 pl-5 -ml-6 p-1 italic text-rose-400 font-bold">
          Ředitel:
        </h2>
        <div className="flex space-x-4 lg:text-2xl text-s justify-between w-auto">
          <p className="lg:pl-3 -pl-6 font-bold lg:text-xl text-sm">
            Bc. Radek Hnilička
          </p>
          <p className="text-left lg:pr-20 pr-3 text-rose-400 font-bold text-sm text-left lg:text-xl">
            Tel: +420 773 591 230
          </p>
        </div>
        <h2 className="lg:text-2xl text-m mt-9 mb-2 bg-rose-50 pl-5 -ml-6 p-1 italic text-rose-400 font-bold">
          Zástupce ředitele:
        </h2>
        <div className="flex space-x-4 lg:text-2xl text-s justify-between w-auto">
          <p className="lg:pl-3 -pl-6 lg:text-xl text-sm">
            Mgr. Jana Fruhaufová, MBA
          </p>
          <p className="text-left lg:pr-20 pr-3 text-rose-400 text-sm text-left lg:text-xl">
            Tel: +420 773 591 210
          </p>
        </div>
        <h2 className="lg:text-2xl text-m mt-9 mb-2 bg-rose-50 pl-5 -ml-6 p-1 italic text-rose-400 font-bold">
          Sociální pracovnice:
        </h2>
        <div className="flex space-x-4 lg:text-2xl text-s justify-between w-auto">
          <p className="lg:pl-3 -pl-6 lg:text-xl text-sm">
            Bc. Jana Nejezchlebová, DiS.
          </p>
          <p className="text-left lg:pr-20 pr-3 text-rose-400 text-sm text-left lg:text-xl">
            Tel: +420 773 591 210
          </p>
        </div>
        <h2 className="lg:text-2xl text-m mt-9 mb-2 bg-rose-50 pl-5 -ml-6 p-1 italic text-rose-400 font-bold">
          Vychovatelé:
        </h2>
        <div className="flex space-x-4 text-xl justify-between">
          <p className="lg:pr-20 pr-6 text-rose-400">Tel: +420 773 591 210</p>
        </div>
        <h2 className="lg:text-2xl text-m mt-9 mb-2 bg-rose-50 pl-5 -ml-6 p-1 italic text-rose-400 font-bold">
          Správa webu:
        </h2>
        <div className="flex space-x-4 lg:text-2xl text-s justify-between w-auto">
          <p className="lg:pl-3 -pl-6 lg:text-xl text-sm">Samantha Pelková</p>
          <p className="text-left lg:pr-20 pr-3 text-rose-400 text-sm text-left lg:text-xl">
            Tel: +420 773 591 210
          </p>
        </div>
        <h1 className="text-3xl bg-rose-300 text-center text-white p-3 -ml-6 mt-20 w-80 rounded-r-full shadow-lg shadow-rose-400/90">
          Elektronická pošta:
        </h1>
        <div className="flex space-x-4 lg:text-xl text-sm justify-between mt-12">
          <p className="font-bold italic">DD Uherský Ostroh:</p>
          <p className="lg:pr-20 pr-6 text-rose-400">dduhostroh@centrum.cz</p>
        </div>
        <div className="flex space-x-4 lg:text-xl text-sm justify-between mt-8">
          <p className="font-bold italic">Sociální pracovnice:</p>
          <p className="lg:pr-20 pr-6 text-rose-400">ddsocialni@centrum.cz</p>
        </div>
        <div className="flex space-x-4 lg:text-xl text-sm justify-between mt-8">
          <p className="font-bold italic">Byt č.1 :</p>
          <p className="lg:pr-20 pr-6 text-rose-400">dduo.byt1@centrum.cz</p>
        </div>
        <div className="flex space-x-4 lg:text-xl text-sm justify-between mt-8">
          <p className="font-bold italic">Byt č.2 :</p>
          <p className="lg:pr-20 pr-6 text-rose-400">dduo.byt2@centrum.cz</p>
        </div>
        <div className="flex space-x-4 lg:text-xl text-sm justify-between mt-8">
          <p className="font-bold italic">Byt č.3 :</p>
          <p className="lg:pr-20 pr-6 text-rose-400">dduo.byt3@centrum.cz</p>
        </div>
        <div className="flex space-x-4 lg:text-xl text-sm justify-between mt-8">
          <p className="font-bold italic">Byt č.4 :</p>
          <p className="lg:pr-20 pr-6 text-rose-400">dduo.byt4@centrum.cz</p>
        </div>
        <h1 className="text-3xl lg:text-5xl bg-rose-300 text-center text-white p-3 -ml-6 mt-20 font-bold">
          Kde nás najdete?
        </h1>
      </div>
      <div className="w-auto lg:mx-80 mx-8">
        <div className="ml-15 lg:pl-10 pl-2 py-1 lg:py-3 bg-rose-400 lg:w-1/6 w-1/3 lg:text-xl text-xs text-white lg:mt-10 mt-5 absolute rounded-r-full">
          <h2 className="font-bold">Adresa:</h2>
          <p>Sokolovská 620</p>
          <p>Uherský Ostroh</p>
          <p>687 24</p>
        </div>
        <div className="mb-20">
          <img src="../images/mapadd.png" alt="#" className="rounded-3xl" />
        </div>
      </div>
    </div>
  );
}
