"use client";
import Image from "next/image";
import SectionWrapper from "../ui/SectionWrapper";
import { Building2, Cross, School, Trees } from "lucide-react";
import { motion } from "framer-motion";

export default function LocalizationPage() {
  const distances = [
    {
      icon: <Building2 className="w-5 h-5 stroke-green-mid shrink-0" />,
      label: "Centrum Krakowa",
      value: "~18 km / 22 min",
    },
    {
      icon: <School className="w-5 h-5 stroke-green-mid shrink-0" />,
      label: "Szkoła podstawowa",
      value: "1,2 km / 4 min",
    },
    {
      icon: <Cross className="w-5 h-5 stroke-green-mid shrink-0" />,
      label: "Ośrodek zdrowia",
      value: "2,4 km / 7 min",
    },
    {
      icon: <Trees className="w-5 h-5 stroke-green-mid shrink-0" />,
      label: "Las i ścieżki przyrodnicze",
      value: "200 m / 3 min",
    },
  ];

  return (
    <SectionWrapper
      id="lokalizacja"
      className="bg-white flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-20 scroll-mt-26.25 overflow-hidden"
    >
      {/* Map image */}
      <motion.div
        className="relative flex items-center justify-center aspect-square w-full max-w-sm sm:max-w-md lg:max-w-2xl shrink-0"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-105px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Image
          src="/localization.jpg"
          alt="Zdjęcie lokalizacji osiedla Asnyka"
          fill
          className="object-cover"
          priority
          unoptimized
        />
      </motion.div>

      {/* Content */}
      <motion.div
        className="flex flex-col items-start w-full"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-105px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.h1
          className="text-[12px] uppercase text-text-mid mb-5 flex items-center gap-3 leading-[1.8] tracking-[0.22em] before:content-[''] before:block before:w-9 before:h-px before:bg-text-mid"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-105px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          Lokalizacja
        </motion.h1>

        <motion.h2
          className="font-mono text-[clamp(1.75rem,3.5vw,3rem)] font-light leading-[1.15] text-green-deep mb-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-105px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        >
          W&nbsp;sercu <em className="italic text-green-mid">Małopolski</em>
        </motion.h2>

        <motion.h3
          className="font-mono font-light text-2xl sm:text-3xl text-green-deep mb-2"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-105px" }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
        >
          Asnyka, gm. Zabierzów
        </motion.h3>

        <motion.p
          className="text-sm text-text-light mb-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-105px" }}
          transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
        >
          woj. małopolskie • 32-080 Zabierzów
        </motion.p>

        <motion.div
          className="flex flex-col gap-3 mb-10 w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-105px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.4,
              },
            },
          }}
        >
          {distances.map(({ icon, label, value }) => (
            <motion.div
              key={label}
              className="flex items-center gap-3 sm:gap-4 py-3 sm:py-3.5 px-3.5 sm:px-4.5 border-l-3 rounded-l-[3px] border-green-mid bg-cream"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {icon}
              <span className="flex-1 text-sm text-text-mid">{label}</span>
              <span className="font-mono text-base sm:text-lg font-semibold text-green-deep whitespace-nowrap">
                {value}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.a
          href="#lokale"
          className="px-6 sm:px-8 py-3 sm:py-3.5 bg-green-deep text-white no-underline text-[0.82rem] font-medium tracking-widest uppercase rounded-sm
              transition-all duration-200 hover:bg-green-mid"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-105px" }}
          transition={{ duration: 0.4, delay: 0.65, ease: "easeOut" }}
          whileTap={{ scale: 0.95 }}
        >
          Umów wizytę na miejscu
        </motion.a>
      </motion.div>
    </SectionWrapper>
  );
}
