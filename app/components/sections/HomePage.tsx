import Image from "next/image";
import SectionWrapper from "../ui/SectionWrapper";

export default function HomePage() {
  return (
    <SectionWrapper
      id="home"
      className="relative h-screen overflow-hidden bg-white"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/asnyka1.webp"
          alt="Osiedle Zielona Polana"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-green-deep/20" />
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 h-full pt-27 pl-20 pr-20">
        <div className="flex flex-col justify-center py-20 pr-16 bg-black/40 p-8 rounded-lg backdrop-blur-sm">
          <h1 className="text-[0.72rem] uppercase text-white/90 mb-5 flex items-center gap-3 tracking-[0.22em] before:content-[''] before:block before:w-9 before:h-px before:bg-white/70">
            Nowa inwestycja • Małopolska
          </h1>

          <h2 className="font-mono text-[clamp(3rem,5vw,5.5rem)] font-semibold leading-[1.08] text-white drop-shadow-[0_1px_8px_rgba(0,0,0,0.8)] mb-7">
            Żyj blisko
            <br />
            <em className="italic text-green-mid">natury,</em>
            <br />
            dalej od zgiełku
          </h2>

          <p className="text-base leading-[1.75] text-white/90 max-w-119 mb-12 drop-shadow-[0_1px_8px_rgba(0,0,0,0.8)]">
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
              className="px-8 py-3.5 bg-white border-[1.5px] border-green-deep text-green-deep no-underline text-[0.82rem] font-medium tracking-widest uppercase rounded-sm
              transition-all duration-200 hover:bg-cream hover:-translate-y-px"
            >
              Zapytaj o ofertę
            </a>
          </div>
        </div>

        {/* <div className="flex flex-col justify-end items-start gap-4 py-10">
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
        </div> */}
      </div>
    </SectionWrapper>
  );
}
