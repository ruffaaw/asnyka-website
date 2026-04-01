import { House, Shield, SolarPanel, UsersRound } from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper";
import Image from "next/image";

export default function AboutInvestmentPage() {
  return (
    <SectionWrapper
      id="opis-inwestycji"
      className="bg-cream flex-row justify-center items-center gap-20 scroll-mt-26.5"
    >
      <div className="flex flex-col justify-center w-full">
        <h1 className="text-base uppercase text-text-mid mb-5 flex items-center gap-3 leading-[1.8] tracking-[0.22em] before:content-[''] before:block before:w-9 before:h-px before:bg-text-mid">
          o inwestycji
        </h1>

        <h2 className="font-mono text-[clamp(2rem,3.5vw,3rem)] font-light leading-[1.15] text-green-deep mb-6">
          Osiedle stworzone z&nbsp;
          <em className="italic text-green-mid">szacunkiem</em> dla natury
        </h2>

        <p className="text-base leading-[1.8] text-text-mid mb-5">
          Asnyka to wyjątkowe osiedle 24 domów jednorodzinnych położonych na
          skraju lasu, 18&nbsp;km od centrum Krakowa. Każdy dom zaprojektowano
          z&nbsp;myślą o&nbsp;jak najniższym wpływie na środowisko – z użyciem
          ekologicznych materiałów, technologii odzysku ciepła
          i&nbsp;inteligentnych systemów zarządzania energią.
        </p>

        <p className="text-base leading-[1.8] text-text-mid mb-5">
          Osiedle otacza zieleń – naturalne łąki, alejki spacerowe i&nbsp;mały
          staw tworzą przestrzeń, w&nbsp;której wypoczynek staje się
          codziennością. To miejsce dla rodzin ceniących spokój, świeże
          powietrze i&nbsp;kontakt z&nbsp;przyrodą.
        </p>

        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col bg-white border border-green-pale rounded-sm p-6 gap-3.75">
            <House className="w-9 h-9 text-green-mid stroke-[1.5]" />
            <p className="text-base font-semibold font-mono text-green-deep">
              Energooszczędne domy
            </p>
            <p className="text-[13px] text-green-light">
              Standard A+ z&nbsp;rekuperacją i&nbsp;pompą ciepła w&nbsp;każdym
              budynku
            </p>
          </div>

          <div className="flex flex-col bg-white border border-green-pale rounded-sm p-6 gap-3.75">
            <UsersRound className="w-9 h-9 text-green-mid stroke-[1.5]" />
            <p className="text-base font-semibold font-mono text-green-deep">
              Kameralna społeczność
            </p>
            <p className="text-[13px] text-green-light">
              Zaledwie 24 domy – wybrana, spokojna sąsiedzka przestrzeń
            </p>
          </div>

          <div className="flex flex-col bg-white border border-green-pale rounded-sm p-6 gap-3.75">
            <Shield className="w-9 h-9 text-green-mid stroke-[1.5]" />
            <p className="text-base font-semibold font-mono text-green-deep">
              Naturalne materiały
            </p>
            <p className="text-[13px] text-green-light">
              Drewno, kamień i&nbsp;szkło – estetyka wynikająca
              z&nbsp;otoczenia{" "}
            </p>
          </div>

          <div className="flex flex-col bg-white border border-green-pale rounded-sm p-6 gap-3.75">
            <SolarPanel className="w-9 h-9 text-green-mid stroke-[1.5]" />
            <p className="text-base font-semibold font-mono text-green-deep">
              Panele fotowoltaiczne
            </p>
            <p className="text-[13px] text-green-light">
              Instalacja PV 6&nbsp;kWp w&nbsp;standardzie każdego domu
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full h-full relative isolate">
        <div className="absolute z-10 mt-6 -ml-6 border border-green-pale rounded-sm flex flex-col py-4 px-5.5 bg-white w-fit justify-center items-center">
          <p className="font-mono text-4xl text-green-deep font-light">
            18&nbsp;km
          </p>
          <p className="uppercase text-xs font-medium text-text-light">
            od centrum krakowa
          </p>
        </div>
        <Image
          src="/rzut_kwadratowy.webp"
          alt="Osiedle Zielona Polana"
          width={800}
          height={500}
          className="object-contain z-0"
          priority
          unoptimized
        />
        <div className="w-44 h-44 absolute rounded-sm -mb-6 -mr-6 -z-10 bg-green-deep bottom-0 right-0" />
      </div>
    </SectionWrapper>
  );
}
