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
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 h-full p-4 sm:p-8 md:p-12 lg:p-20">
        <div className="flex flex-col justify-center py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:pr-16 bg-black/40 rounded-lg backdrop-blur-sm">
          <h1 className="text-[clamp(0.65rem,2vw,0.82rem)] uppercase text-white/90 mb-3 sm:mb-4 md:mb-5 flex items-center gap-2 sm:gap-3 tracking-[0.22em] before:content-[''] before:block before:w-6 sm:before:w-8 md:before:w-9 before:h-px before:bg-white/70">
            Nowa inwestycja • Małopolska
          </h1>

          <h2 className="font-mono text-[clamp(2rem,5vw,5.5rem)] font-semibold leading-[1.08] text-white drop-shadow-[0_1px_8px_rgba(0,0,0,0.8)] mb-4 sm:mb-5 md:mb-6 lg:mb-7">
            Żyj blisko
            <br />
            <em className="italic text-green-mid">natury,</em>
            <br />
            dalej od zgiełku
          </h2>

          <p className="text-sm sm:text-base md:text-base leading-[1.75] text-white/90 max-w-none sm:max-w-sm md:max-w-lg lg:max-w-xl mb-6 sm:mb-8 md:mb-10 lg:mb-12 drop-shadow-[0_1px_8px_rgba(0,0,0,0.8)]">
            Osiedle Zielona Polana to 24 domy jednorodzinne otoczone lasem
            i&nbsp;łąkami. Zaprojektowane z&nbsp;myślą o&nbsp;harmonii człowieka
            z&nbsp;przyrodą – z&nbsp;poszanowaniem środowiska i&nbsp;Twojego
            komfortu.
          </p>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 flex-wrap">
            <a
              href="#lokale"
              className="px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 bg-green-deep text-white no-underline text-[0.72rem] sm:text-[0.82rem] font-medium tracking-widest uppercase rounded-sm
              transition-all duration-200 hover:bg-green-mid hover:-translate-y-px whitespace-nowrap text-center"
            >
              Zobacz dostępne domy
            </a>
            <a
              href="#kontakt"
              className="px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 bg-white border-[1.5px] border-green-deep text-green-deep no-underline text-[0.72rem] sm:text-[0.82rem] font-medium tracking-widest uppercase rounded-sm
              transition-all duration-200 hover:bg-cream hover:-translate-y-px whitespace-nowrap text-center"
            >
              Zapytaj o ofertę
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
