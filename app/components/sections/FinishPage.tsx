"use client";

import SectionWrapper from "../ui/SectionWrapper";
import { motion } from "framer-motion";

export default function FinishPage() {
  const items = [
    "Ogrzewanie podłogowe na parterze i piętrze",
    "Rekuperacja z wymiennikiem gruntowym",
    "Pompa ciepła powietrze-woda (COP ≥ 4)",
    "Instalacja fotowoltaiczna 6 kWp + magazyn energii",
    "Zbiornik na deszczówkę do nawadniania ogrodu",
    "Drzwi zewnętrzne antywłamaniowe RC3",
    "Okna 3-szybowe z profilem ciepłym",
    "Elewacja z tynkiem silikonowym + elementy drewniane",
    "Garaż jednostanowiskowy lub podjazd utwardzony",
    "Ogrodzenie działki z furtką i bramą automatyczną",
  ];

  return (
    <SectionWrapper
      id="wykonczenie"
      className="bg-white flex-col scroll-mt-26.25"
    >
      <motion.h1
        className="text-[12px] uppercase text-text-mid mb-5 flex items-center gap-3 leading-[1.8] tracking-[0.22em] before:content-[''] before:block before:w-9 before:h-px before:bg-text-mid"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-105px" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        Wykończenie
      </motion.h1>
      <motion.div
        className="flex flex-col lg:flex-row items-center w-full gap-10 lg:gap-25"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-105px" }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
      >
        <motion.div
          className="flex flex-col w-full"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-105px" }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        >
          <motion.h2
            className="font-mono text-[clamp(2rem,3.5vw,3rem)] font-light leading-[1.15] text-green-deep mb-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-105px" }}
            transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
          >
            W&nbsp;sercu <em className="italic text-green-mid">Małopolski</em>
          </motion.h2>
          <motion.p
            className="text-text-mid leading-[1.8] max-w-110"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-105px" }}
            transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
          >
            Oferujemy kompleksowe wykończenie wnętrz pod klucz – jeden partner,
            jeden budżet, jeden termin. Ty wybierasz styl, my zajmujemy się
            resztą.
          </motion.p>

          <motion.div
            className="flex flex-col gap-0 mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-105px" }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.5,
                },
              },
            }}
          >
            <motion.div
              className="flex gap-6 pb-9 relative items-center after:content-[''] after:absolute after:left-4.75 after:top-10 after:w-px after:h-[calc(100%-30px)] after:bg-green-pale last:after:hidden"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="w-10 h-10 rounded-[50%] border-[1.5px] border-green-mid flex items-center justify-center font-mono text-base text-green-mid shrink-0 bg-white relative z-1">
                01
              </div>
              <div>
                <h4 className="font-mono text-[1.1rem] font-semibold text-green-deep mb-1.5">
                  Konsultacja i projekt
                </h4>
                <p className="text-[0.88rem] text-text-light leading-[1.65]">
                  Spotkanie z architektem wnętrz, wybór stylu, materiałów i
                  kolorystyki. Projekt 3D w cenie pakietu.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex gap-6 pb-9 relative items-center after:content-[''] after:absolute after:left-4.75 after:top-10 after:w-px after:h-[calc(100%-30px)] after:bg-green-pale last:after:hidden"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="w-10 h-10 rounded-[50%] border-[1.5px] border-green-mid flex items-center justify-center font-mono text-base text-green-mid shrink-0 bg-white relative z-1">
                02
              </div>
              <div>
                <h4 className="font-mono text-[1.1rem] font-semibold text-green-deep mb-1.5">
                  Prace wykończeniowe
                </h4>
                <p className="text-[0.88rem] text-text-light leading-[1.65]">
                  Tynki, posadzki, zabudowy meblowe, instalacje elektryczne i
                  sanitarne – wszystko w harmonogramie.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex gap-6 pb-9 relative items-center after:content-[''] after:absolute after:left-4.75 after:top-10 after:w-px after:h-[calc(100%-30px)] after:bg-green-pale last:after:hidden"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="w-10 h-10 rounded-[50%] border-[1.5px] border-green-mid flex items-center justify-center font-mono text-base text-green-mid shrink-0 bg-white relative z-1">
                03
              </div>
              <div>
                <h4 className="font-mono text-[1.1rem] font-semibold text-green-deep mb-1.5">
                  Umeblowanie i wyposażenie
                </h4>
                <p className="text-[0.88rem] text-text-light leading-[1.65]">
                  Dobór mebli, oświetlenia i dekoracji spójnych z projektem.
                  Opcjonalnie AGD i smart home.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex gap-6 pb-9 relative items-center after:content-[''] after:absolute after:left-4.75 after:top-10 after:w-px after:h-[calc(100%-30px)] after:bg-green-pale last:after:hidden"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="w-10 h-10 rounded-[50%] border-[1.5px] border-green-mid flex items-center justify-center font-mono text-base text-green-mid shrink-0 bg-white relative z-1">
                04
              </div>
              <div>
                <h4 className="font-mono text-[1.1rem] font-semibold text-green-deep mb-1.5">
                  Odbiór i zamieszkanie
                </h4>
                <p className="text-[0.88rem] text-text-light leading-[1.65]">
                  Przekazanie kluczy do gotowego, urządzonego domu. Gwarancja na
                  wykonanie przez 3 lata.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-col items-start w-full h-full p-12 bg-cream gap-6 border border-green-pale rounded-sm"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-105px" }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
        >
          <motion.h3
            className="font-mono text-[1.3rem] text-green-deep"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-105px" }}
            transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
          >
            Standard wykończenia obejmuje
          </motion.h3>
          <motion.ul
            className="flex flex-col gap-3 list-none text-text-dark"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-105px" }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.06,
                  delayChildren: 0.5,
                },
              },
            }}
          >
            {items.map((item) => (
              <motion.li
                key={item}
                className="flex items-center gap-3 text-[0.88rem] text-text-mid leading-normal"
                variants={{
                  hidden: { opacity: 0, x: -10 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.3 }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-green-mid shrink-0" />
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
