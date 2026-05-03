"use client";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper";
import { motion } from "framer-motion";

export default function ContactPage() {
  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3200.1930357422184!2d20.0704331!3d49.9832493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47164165c9638e0b%3A0x1865b13ffbf5586e!2sAdama%20Asnyka%2022%2C%2032-020%20Wieliczka!5e1!3m2!1spl!2spl!4v1777821026358!5m2!1spl!2spl";

  return (
    <SectionWrapper
      id="kontakt"
      className="bg-green-deep flex-col gap-10 scroll-mt-26.25"
    >
      <motion.h1
        className="text-[12px] uppercase text-green-light mb-5 flex items-center gap-3 leading-[1.8] tracking-[0.22em] before:content-[''] before:block before:w-9 before:h-px before:bg-green-light"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-105px" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        kontakt
      </motion.h1>

      <motion.div
        className="flex flex-col gap-10 md:flex-row md:justify-between md:gap-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-105px" }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
      >
        <motion.div
          className="flex flex-col w-full md:w-[45%]"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-105px" }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        >
          <motion.h2
            className="font-mono text-[clamp(2rem,3.5vw,3rem)] font-light leading-[1.15] text-white max-w-md mb-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-105px" }}
            transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
          >
            Porozmawiajmy o&nbsp;
            <em className="italic text-green-light">Twoim </em>
            domu
          </motion.h2>
          <motion.p
            className="text-white text-base leading-[1.8] max-w-xl mb-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-105px" }}
            transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
          >
            Chętnie pomożemy z ofertą inwestycyjną i formalnościami przed
            zakupem. W szczególności doradzamy także przy ubezpieczeniu
            nieruchomości.
          </motion.p>

          <motion.div
            className="flex flex-col gap-7"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-105px" }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.08,
                  delayChildren: 0.5,
                },
              },
            }}
          >
            <motion.div
              className="flex gap-4 items-center"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="w-11 h-11 border border-[rgba(200,221,200,0.3)] rounded-full flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 stroke-[1.5] stroke-green-light" />
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[0.72rem] tracking-[0.12em] uppercase text-green-light">
                  Telefon
                </span>
                <span className="text-white text-base">
                  <a href="tel:+48123456789" className="hover:text-green-pale">
                    +48 123 456 789
                  </a>
                </span>
              </div>
            </motion.div>

            <motion.div
              className="flex gap-4.5 items-center"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="w-10.5 h-10.5 border border-[rgba(200,221,200,0.3)] rounded-[50%] flex items-center justify-center shrink-0">
                <Mail className="w-4.5 h-4.5 stroke-[1.5] stroke-green-light" />
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[0.72rem] tracking-[0.12em] uppercase text-green-light">
                  Email
                </span>
                <span className="text-white text-base">
                  <a
                    href="mailto:biuro@zielonapolana.pl"
                    className="hover:text-green-pale"
                  >
                    biuro@zielonapolana.pl
                  </a>
                </span>
              </div>
            </motion.div>

            <motion.div
              className="flex gap-4.5 items-center"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="w-10.5 h-10.5 border border-[rgba(200,221,200,0.3)] rounded-[50%] flex items-center justify-center shrink-0">
                <MapPin className="w-4.5 h-4.5 stroke-[1.5] stroke-green-light" />
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[0.72rem] tracking-[0.12em] uppercase text-green-light">
                  Adres biura
                </span>
                <span className="text-white text-base">
                  ul. Adama Asnyka 22, 32-020 Wieliczka
                </span>
              </div>
            </motion.div>

            <motion.div
              className="flex gap-4.5 items-center"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="w-10.5 h-10.5 border border-[rgba(200,221,200,0.3)] rounded-[50%] flex items-center justify-center shrink-0">
                <Clock className="w-4.5 h-4.5 stroke-[1.5] stroke-green-light" />
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[0.72rem] tracking-[0.12em] uppercase text-green-light">
                  Godziny otwarcia
                </span>
                <span className="text-white text-base">Pon–Pt: 9:00–17:00</span>
                <span className="text-white text-base">Sob: 10:00–14:00</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-col gap-4 text-text-dark w-full"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-105px" }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
        >
          <motion.div
            className="grid grid-cols-1 gap-4 md:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-105px" }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.08,
                  delayChildren: 0.4,
                },
              },
            }}
          >
            <motion.div
              className="flex flex-col gap-2"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.3 }}
            >
              <label className="text-[0.75rem] tracking-widest uppercase text-green-light">
                Imię i nazwisko
              </label>
              <input
                type="text"
                id="name"
                placeholder="Jan Kowalski"
                className="bg-[rgba(255,255,255,0.07)] border border-[rgba(200,221,200,0.2)] rounded-sm px-4 py-3 text-white text-[0.9rem] outline-none transition-colors duration-200 focus:border-green-light"
              />
            </motion.div>

            <motion.div
              className="flex flex-col gap-2"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.3 }}
            >
              <label className="text-[0.75rem] tracking-widest uppercase text-green-light">
                Telefon
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="+48 123 456 789"
                className="bg-[rgba(255,255,255,0.07)] border border-[rgba(200,221,200,0.2)] rounded-sm px-4 py-3 text-white text-[0.9rem] outline-none transition-colors duration-200 focus:border-green-light"
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="flex flex-col gap-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-105px" }}
            transition={{ duration: 0.3, delay: 0.56, ease: "easeOut" }}
          >
            <label className="text-[0.75rem] tracking-widest uppercase text-green-light">
              Adres Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="jan.kowalski@example.com"
              className="bg-[rgba(255,255,255,0.07)] border border-[rgba(200,221,200,0.2)] rounded-sm px-4 py-3 text-white text-[0.9rem] outline-none transition-colors duration-200 focus:border-green-light"
            />
          </motion.div>

          <motion.div
            className="flex flex-col gap-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-105px" }}
            transition={{ duration: 0.3, delay: 0.64, ease: "easeOut" }}
          >
            <select
              id="interest"
              className="bg-[rgba(255,255,255,0.07)] border border-[rgba(200,221,200,0.2)] rounded-sm px-4 py-3 text-white text-[0.9rem] outline-none transition-colors duration-200 focus:border-green-light"
            >
              <option className="bg-green-deep">Opcja 1</option>
              <option className="bg-green-deep">Opcja 2</option>
              <option className="bg-green-deep">Opcja 3</option>
            </select>
          </motion.div>

          <motion.div
            className="flex flex-col gap-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-105px" }}
            transition={{ duration: 0.3, delay: 0.72, ease: "easeOut" }}
          >
            <textarea
              id="message"
              placeholder="Chciałbym dowiedzieć się więcej o..."
              className="bg-[rgba(255,255,255,0.07)] border border-[rgba(200,221,200,0.2)] rounded-sm px-4 py-3 text-white text-[0.9rem] outline-none transition-colors duration-200 focus:border-green-light resize-y min-h-40"
            />
          </motion.div>

          <motion.button
            className="px-9 py-3.5 bg-green-light text-green-deep border-none cursor-pointer text-[0.82rem] font-medium tracking-widest uppercase rounded-sm self-start transition-colors duration-200 hover:bg-white"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-105px" }}
            transition={{ duration: 0.3, delay: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Wyślij zapytanie
          </motion.button>
        </motion.div>
      </motion.div>
      <motion.div
        className="mt-8 overflow-hidden rounded-sm border border-[rgba(200,221,200,0.2)] bg-[rgba(255,255,255,0.04)]"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-105px" }}
        transition={{ duration: 0.4, delay: 0.9, ease: "easeOut" }}
      >
        <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-[rgba(200,221,200,0.2)]">
          <p className="text-[0.75rem] uppercase tracking-widest text-green-light">
            Mapa lokalizacji
          </p>
        </div>
        <div className="relative w-full aspect-16/7 bg-black">
          <iframe
            title="Mapa Google lokalizacji Asnyka"
            src={mapSrc}
            className="absolute inset-0 h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
