"use client";
import SectionWrapper from "../ui/SectionWrapper";
import { motion } from "framer-motion";

export default function AboutDeveloperPage() {
  return (
    <SectionWrapper
      id="o-deweloperze"
      className="bg-cream-dark flex-col items-center scroll-mt-26.25"
    >
      <motion.h1
        className="..."
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-105px" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        o deweloperze
      </motion.h1>

      <motion.h2
        className="font-mono text-[clamp(2rem,3.5vw,3rem)] font-light leading-[1.15] text-green-deep mb-6"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-105px" }}
        transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
      >
        Polana Invest&nbsp;
        <em className="italic text-green-mid">Sp.&nbsp;z&nbsp;o.o.</em>
      </motion.h2>
      <motion.p
        className="text-base text-text-mid leading-[1.8] max-w-155 text-center mb-10"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-105px" }}
        transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
      >
        Jesteśmy małopolskim deweloperem z&nbsp;wieloletnim doświadczeniem
        w&nbsp;budownictwie jednorodzinnym. Każdy dom traktujemy indywidualnie –
        bo wiemy, że to nie inwestycja, to dom Twojej rodziny. Stawiamy na
        jakość materiałów, rzetelność wykonania i&nbsp;transparentną współpracę
        na każdym etapie.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-4 gap-0.5 max-w-225 bg-green-pale rounded-sm text-center text-text-dark mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-105px" }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.3,
            },
          },
        }}
      >
        <motion.div
          className="bg-white py-9 px-6 text-center text-text-dark"
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1 },
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="font-mono text-5xl font-light text-green-deep leading-none text-center">
            14
          </div>
          <div className="text-[0.78rem] tracking-widest uppercase text-text-light mt-2">
            Lat na rynku
          </div>
        </motion.div>

        <motion.div
          className="bg-white py-9 px-6 text-center text-text-dark"
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1 },
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="font-mono text-5xl font-light text-green-deep leading-none text-center">
            180+
          </div>
          <div className="text-[0.78rem] tracking-widest uppercase text-text-light mt-2">
            Zrealizowanych domów
          </div>
        </motion.div>

        <motion.div
          className="bg-white py-9 px-6 text-center text-text-dark"
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1 },
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="font-mono text-5xl font-light text-green-deep leading-none text-center">
            98%{" "}
          </div>
          <div className="text-[0.78rem] tracking-widest uppercase text-text-light mt-2">
            Zadowolonych klientów
          </div>
        </motion.div>

        <motion.div
          className="bg-white py-9 px-6 text-center text-text-dark"
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1 },
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="font-mono text-5xl font-light text-green-deep leading-none text-center">
            3
          </div>
          <div className="text-[0.78rem] tracking-widest uppercase text-text-light mt-2">
            Aktywne inwestycje
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="flex justify-center gap-6 flex-wrap"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-105px" }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.08,
              delayChildren: 0.55,
            },
          },
        }}
      >
        <motion.span
          className="flex items-center gap-2.5 text-[0.88rem] text-text-mid"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.3 }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-mid shrink-0" />
          Transparentna umowa deweloperska
        </motion.span>

        <motion.span
          className="flex items-center gap-2.5 text-[0.88rem] text-text-mid"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.3 }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-mid shrink-0" />
          Gwarancja na budowę 5 lat
        </motion.span>

        <motion.span
          className="flex items-center gap-2.5 text-[0.88rem] text-text-mid"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.3 }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-mid shrink-0" />
          Nadzór budowlany w cenie
        </motion.span>

        <motion.span
          className="flex items-center gap-2.5 text-[0.88rem] text-text-mid"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.3 }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-mid shrink-0" />
          Materiały z certyfikatami ekologicznymi
        </motion.span>

        <motion.span
          className="flex items-center gap-2.5 text-[0.88rem] text-text-mid"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.3 }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-mid shrink-0" />
          Obsługa posprzedażowa
        </motion.span>
      </motion.div>
    </SectionWrapper>
  );
}
