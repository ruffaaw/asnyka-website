"use client";

import { Fence, Home, TreeDeciduous, Users } from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function AboutInvestmentPage() {
  const [isNight, setIsNight] = useState(false);

  return (
    <SectionWrapper
      id="opis-inwestycji"
      className="bg-cream flex-col justify-center items-start scroll-mt-26.25 px-4 sm:px-10 lg:px-20 py-16 lg:py-24"
    >
      <motion.h1
        className="text-base uppercase text-text-mid mb-5 flex items-center gap-3 leading-[1.8] tracking-[0.22em] before:content-[''] before:block before:w-9 before:h-px before:bg-text-mid"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-105px" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        o inwestycji
      </motion.h1>
      <motion.div
        className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-105px" }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
      >
        <div className="flex flex-col justify-center w-full lg:w-1/2">
          <motion.h2
            className="font-mono text-[clamp(1.75rem,3.5vw,3rem)] font-light leading-[1.15] text-green-deep mb-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-105px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          >
            Osiedle stworzone z&nbsp;
            <em className="italic text-green-mid">szacunkiem</em> dla natury
          </motion.h2>

          <motion.p
            className="text-sm sm:text-base leading-[1.8] text-text-mid mb-5"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-105px" }}
            transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
          >
            Asnyka to kameralna inwestycja 6 lokali mieszkalnych położona blisko
            centrum Krakowa. Każde mieszkanie zostało zaprojektowane z myślą o
            funkcjonalności i&nbsp;jak najniższym wpływie na środowisko – z
            użyciem ekologicznych materiałów, systemów odzysku ciepła oraz
            inteligentnego zarządzania energią.
          </motion.p>

          <motion.p
            className="text-sm sm:text-base leading-[1.8] text-text-mid mb-5"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-105px" }}
            transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
          >
            Inwestycję otacza zieleń – naturalne łąki, alejki spacerowe
            i&nbsp;strefy rekreacji, które tworzą przyjazne tło do codziennego
            wypoczynku. To idealne miejsce dla osób i rodzin ceniących spokój,
            komfort i bliski dostęp do centrum.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
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
            {[
              {
                icon: <Users className="w-9 h-9 text-green-mid stroke-[1.5]" />,
                title: "Kameralny charakter",
                desc: "6 lokali — intymna, kameralna inwestycja",
              },
              {
                icon: <Home className="w-9 h-9 text-green-mid stroke-[1.5]" />,
                title: "Funkcjonalne układy",
                desc: "Przemyślane, ergonomiczne rozkłady mieszkań",
              },
              {
                icon: (
                  <TreeDeciduous className="w-9 h-9 text-green-mid stroke-[1.5]" />
                ),
                title: "Dolne mieszkania z ogródkami",
                desc: "Parterowe lokale z prywatnymi ogródkami",
              },
              {
                icon: <Fence className="w-9 h-9 text-green-mid stroke-[1.5]" />,
                title: "Górne mieszkania z balkonami",
                desc: "Duże, funkcjonalne balkony — idealne do wypoczynku",
              },
            ].map(({ icon, title, desc }) => (
              <motion.div
                key={title}
                className="flex flex-col bg-white border border-green-pale rounded-sm p-5 sm:p-6 gap-3"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {icon}
                <p className="text-base font-semibold font-mono text-green-deep">
                  {title}
                </p>
                <p className="text-[13px] text-green-light">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="flex w-full lg:w-1/2 h-full relative isolate justify-center mt-8 lg:mt-0">
          {/* <motion.div
            className="absolute z-10 top-0 left-0 -ml-4 sm:-ml-6 sm:mt-6 -mt-6 border border-green-pale rounded-sm flex flex-col py-4 px-5 bg-white w-fit justify-center items-center shadow-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-105px" }}
            transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
          >
            <p className="font-mono text-3xl sm:text-4xl text-green-deep font-light">
              Blisko
            </p>
            <p className="uppercase text-xs font-medium text-text-light">
              centrum Krakowa
            </p>
          </motion.div> */}

          <motion.div
            className="relative w-full h-auto aspect-4/3 overflow-hidden bg-black"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-105px" }}
            transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
          >
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
          </motion.div>

          <motion.button
            onClick={() => setIsNight((prev) => !prev)}
            className={`absolute bottom-4 left-4 z-20 backdrop-blur px-4 py-2 text-xs uppercase tracking-wider cursor-pointer ${isNight ? "bg-green-deep text-white" : "bg-white text-text-dark"}`}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-105px" }}
            transition={{ duration: 0.4, delay: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isNight ? "Noc" : "Dzień"}
          </motion.button>

          <motion.div
            className="w-32 h-32 sm:w-44 sm:h-44 absolute rounded-sm -mb-6 -mr-4 sm:-mr-6 -z-10 bg-green-deep bottom-0 right-0"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-105px" }}
            transition={{ duration: 0.5, delay: 0.9, ease: "easeOut" }}
          />
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
