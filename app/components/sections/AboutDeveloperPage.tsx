import SectionWrapper from "../ui/SectionWrapper";

export default function AboutDeveloperPage() {
  return (
    <SectionWrapper
      id="o-deweloperze"
      className="bg-cream-dark flex-col items-center scroll-mt-26.5"
    >
      <h1 className="text-base uppercase text-text-mid mb-5 flex items-center gap-3 leading-[1.8] tracking-[0.22em] before:content-[''] before:block before:w-9 before:h-px before:bg-text-mid">
        o deweloperze
      </h1>

      <h2 className="font-mono text-[clamp(2rem,3.5vw,3rem)] font-light leading-[1.15] text-green-deep mb-6">
        Polana Invest&nbsp;
        <em className="italic text-green-mid">Sp.&nbsp;z&nbsp;o.o.</em>
      </h2>
      <p className="text-base text-text-mid leading-[1.8] max-w-155 text-center mb-10">
        Jesteśmy małopolskim deweloperem z&nbsp;wieloletnim doświadczeniem
        w&nbsp;budownictwie jednorodzinnym. Każdy dom traktujemy indywidualnie –
        bo wiemy, że to nie inwestycja, to dom Twojej rodziny. Stawiamy na
        jakość materiałów, rzetelność wykonania i&nbsp;transparentną współpracę
        na każdym etapie.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-0.5 max-w-225 bg-green-pale rounded-sm text-center text-text-dark mb-16">
        <div className="bg-white py-9 px-6 text-center text-text-dark">
          <div className="font-mono text-5xl font-light text-green-deep leading-none text-center">
            14
          </div>
          <div className="text-[0.78rem] tracking-widest uppercase text-text-light mt-2">
            Lat na rynku
          </div>
        </div>

        <div className="bg-white py-9 px-6 text-center text-text-dark">
          <div className="font-mono text-5xl font-light text-green-deep leading-none text-center">
            180+
          </div>
          <div className="text-[0.78rem] tracking-widest uppercase text-text-light mt-2">
            Zrealizowanych domów
          </div>
        </div>

        <div className="bg-white py-9 px-6 text-center text-text-dark">
          <div className="font-mono text-5xl font-light text-green-deep leading-none text-center">
            98%{" "}
          </div>
          <div className="text-[0.78rem] tracking-widest uppercase text-text-light mt-2">
            Zadowolonych klientów
          </div>
        </div>

        <div className="bg-white py-9 px-6 text-center text-text-dark">
          <div className="font-mono text-5xl font-light text-green-deep leading-none text-center">
            3
          </div>
          <div className="text-[0.78rem] tracking-widest uppercase text-text-light mt-2">
            Aktywne inwestycje
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-6 flex-wrap">
        <span className="flex items-center gap-2.5 text-[0.88rem] text-text-mid">
          <span className="w-1.5 h-1.5 rounded-full bg-green-mid shrink-0" />
          Transparentna umowa deweloperska
        </span>

        <span className="flex items-center gap-2.5 text-[0.88rem] text-text-mid">
          <span className="w-1.5 h-1.5 rounded-full bg-green-mid shrink-0" />
          Gwarancja na budowę 5 lat
        </span>

        <span className="flex items-center gap-2.5 text-[0.88rem] text-text-mid">
          <span className="w-1.5 h-1.5 rounded-full bg-green-mid shrink-0" />
          Nadzór budowlany w cenie
        </span>

        <span className="flex items-center gap-2.5 text-[0.88rem] text-text-mid">
          <span className="w-1.5 h-1.5 rounded-full bg-green-mid shrink-0" />
          Materiały z certyfikatami ekologicznymi
        </span>

        <span className="flex items-center gap-2.5 text-[0.88rem] text-text-mid">
          <span className="w-1.5 h-1.5 rounded-full bg-green-mid shrink-0" />
          Obsługa posprzedażowa
        </span>
      </div>
    </SectionWrapper>
  );
}
