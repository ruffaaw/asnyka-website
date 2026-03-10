import Image from "next/image";
import SectionWrapper from "../ui/SectionWrapper";

export default function HomePage() {
  return (
    <SectionWrapper
      id="home"
      className="h-screen grid grid-cols-2 pt-27 pl-20 pr-20 overflow-hidden bg-white"
    >
      <div className="flex flex-col justify-center py-20 pl-20 pr-16 relative z-10">
        <p className="text-[0.72rem] uppercase text-green-mid mb-5 flex items-center gap-3 tracking-[0.22em] before:content-[''] before:block before:w-9 before:h-px before:bg-green-mid">
          Nowa inwestycja • Małopolska
        </p>

        <h1 className="font-mono text-[clamp(3rem,5vw,5.5rem)] font-light leading-[1.08] text-green-deep mb-7">
          Żyj blisko
          <br />
          <em className="italic text-green-mid">natury,</em>
          <br />
          dalej od zgiełku
        </h1>

        <p className="text-base leading-[1.75] text-text-mid max-w-119 mb-12">
          Osiedle Zielona Polana to 24 domy jednorodzinne otoczone lasem
          i&nbsp;łąkami. Zaprojektowane z&nbsp;myślą o&nbsp;harmonii człowieka
          z&nbsp;przyrodą – z&nbsp;poszanowaniem środowiska i&nbsp;Twojego
          komfortu.
        </p>

        <div className="flex gap-4 flex-wrap">
          <a
            href="#domy"
            className="px-8 py-3.5 bg-green-deep text-white no-underline text-[0.82rem] font-medium tracking-widest uppercase rounded-sm
              transition-all duration-200 hover:bg-green-mid hover:-translate-y-px"
          >
            Zobacz dostępne domy
          </a>
          <a
            href="#kontakt"
            className="px-8 py-3.5 border-[1.5px] border-green-deep text-green-deep no-underline text-[0.82rem] font-medium tracking-widest uppercase rounded-sm
              transition-all duration-200 hover:bg-green-deep hover:text-white"
          >
            Zapytaj o ofertę
          </a>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-8 py-10 pr-10">
        <div className="relative">
          <div className="absolute -bottom-3 -right-3 w-full h-full border border-green-mid/30 rounded-sm" />

          <Image
            src="/rzut_kwadratowy.webp"
            alt="Osiedle Zielona Polana"
            width={500}
            height={500}
            className="relative z-10 object-contain w-full max-w-150 rounded-sm"
            priority
            unoptimized
          />
        </div>

        <div className="flex gap-4 w-full justify-center">
          {[
            { num: "24", label: "Domy w ofercie" },
            { num: "2026", label: "Rok oddania" },
          ].map(({ num, label }) => (
            <div
              key={label}
              className="bg-green-deep/15 border border-green-deep/35 backdrop-blur-sm rounded-sm px-7 py-5 text-center text-green-deep"
            >
              <div className="font-mono text-[2.8rem] font-light leading-none">
                {num}
              </div>
              <div className="text-[0.72rem] tracking-[0.15em] uppercase opacity-80 mt-1">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>{" "}
    </SectionWrapper>
  );
}
