"use client";

import { House, Shield, SolarPanel, UsersRound } from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper";
import Image from "next/image";
import { useState } from "react";

export default function AboutInvestmentPage() {
  const [isNight, setIsNight] = useState(false);

  return (
    <SectionWrapper
      id="opis-inwestycji"
      className="bg-cream flex-col justify-center items-start scroll-mt-26.25 px-4 sm:px-10 lg:px-20 py-16 lg:py-24"
    >
      <h1 className="text-base uppercase text-text-mid mb-5 flex items-center gap-3 leading-[1.8] tracking-[0.22em] before:content-[''] before:block before:w-9 before:h-px before:bg-text-mid">
        o inwestycji
      </h1>
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center justify-center">
        <div className="flex flex-col justify-center w-full lg:w-1/2">
          <h2 className="font-mono text-[clamp(1.75rem,3.5vw,3rem)] font-light leading-[1.15] text-green-deep mb-6">
            Osiedle stworzone z&nbsp;
            <em className="italic text-green-mid">szacunkiem</em> dla natury
          </h2>

          <p className="text-sm sm:text-base leading-[1.8] text-text-mid mb-5">
            Asnyka to wyjątkowe osiedle 24 domów jednorodzinnych położonych na
            skraju lasu, 18&nbsp;km od centrum Krakowa. Każdy dom zaprojektowano
            z&nbsp;myślą o&nbsp;jak najniższym wpływie na środowisko – z użyciem
            ekologicznych materiałów, technologii odzysku ciepła
            i&nbsp;inteligentnych systemów zarządzania energią.
          </p>

          <p className="text-sm sm:text-base leading-[1.8] text-text-mid mb-5">
            Osiedle otacza zieleń – naturalne łąki, alejki spacerowe i&nbsp;mały
            staw tworzą przestrzeń, w&nbsp;której wypoczynek staje się
            codziennością. To miejsce dla rodzin ceniących spokój, świeże
            powietrze i&nbsp;kontakt z&nbsp;przyrodą.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {[
              {
                icon: <House className="w-9 h-9 text-green-mid stroke-[1.5]" />,
                title: "Energooszczędne domy",
                desc: "Standard A+ z\u00a0rekuperacją i\u00a0pompą ciepła w\u00a0każdym budynku",
              },
              {
                icon: (
                  <UsersRound className="w-9 h-9 text-green-mid stroke-[1.5]" />
                ),
                title: "Kameralna społeczność",
                desc: "Zaledwie 24 domy – wybrana, spokojna sąsiedzka przestrzeń",
              },
              {
                icon: (
                  <Shield className="w-9 h-9 text-green-mid stroke-[1.5]" />
                ),
                title: "Naturalne materiały",
                desc: "Drewno, kamień i\u00a0szkło – estetyka wynikająca z\u00a0otoczenia",
              },
              {
                icon: (
                  <SolarPanel className="w-9 h-9 text-green-mid stroke-[1.5]" />
                ),
                title: "Panele fotowoltaiczne",
                desc: "Instalacja PV 6\u00a0kWp w\u00a0standardzie każdego domu",
              },
            ].map(({ icon, title, desc }) => (
              <div
                key={title}
                className="flex flex-col bg-white border border-green-pale rounded-sm p-5 sm:p-6 gap-3"
              >
                {icon}
                <p className="text-base font-semibold font-mono text-green-deep">
                  {title}
                </p>
                <p className="text-[13px] text-green-light">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex w-full lg:w-1/2 h-full relative isolate justify-center mt-8 lg:mt-0">
          <div className="absolute z-10 top-0 left-0 -ml-4 sm:-ml-6 sm:mt-6 -mt-6 border border-green-pale rounded-sm flex flex-col py-4 px-5 bg-white w-fit justify-center items-center shadow-sm">
            <p className="font-mono text-3xl sm:text-4xl text-green-deep font-light">
              18&nbsp;km
            </p>
            <p className="uppercase text-xs font-medium text-text-light">
              od centrum krakowa
            </p>
          </div>

          <div className="relative w-full h-auto aspect-4/3 overflow-hidden bg-black">
            {" "}
            {/* DZIEŃ */}
            <Image
              src="/z_tylu_dzien.webp"
              alt="Osiedle dzień"
              fill
              className={`object-cover transition-opacity duration-700 ${isNight ? "opacity-0" : "opacity-100"}`}
            />
            {/* NOC */}
            <Image
              src="/z_tylu_noc.webp"
              alt="Osiedle noc"
              fill
              className={`object-cover transition-opacity duration-700 ${isNight ? "opacity-100" : "opacity-0"}`}
            />
          </div>

          <button
            onClick={() => setIsNight((prev) => !prev)}
            className="absolute bottom-4 left-4 z-20 bg-white/80 backdrop-blur px-4 py-2 text-xs uppercase tracking-wider"
          >
            {isNight ? "Tryb dzień" : "Tryb noc"}
          </button>

          <div className="w-32 h-32 sm:w-44 sm:h-44 absolute rounded-sm -mb-6 -mr-4 sm:-mr-6 -z-10 bg-green-deep bottom-0 right-0" />
        </div>
      </div>
    </SectionWrapper>
  );
}
