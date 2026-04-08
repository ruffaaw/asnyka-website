"use client";
import { House, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { href: "#opis-inwestycji", label: "Opis inwestycji" },
    { href: "#galeria", label: "Galeria" },
    { href: "#lokalizacja", label: "Lokalizacja" },
    { href: "#lokale", label: "Lokale" },
    { href: "#wykonczenie", label: "Wykończenie" },
    { href: "#o-deweloperze", label: "O deweloperze" },
    { href: "#kontakt", label: "Kontakt" },
  ];

  return (
    <nav className="font-sans bg-white border-b border-green-pale relative z-50">
      <div className="flex px-4 sm:px-10 lg:px-20 py-3.5 justify-between items-center">
        <motion.a
          href="#home"
          className="flex gap-3 items-center shrink-0"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="p-3 bg-green-deep rounded-full">
            <House className="text-cream w-6 h-6" />
          </div>
          <div>
            <h1 className="font-mono font-semibold text-green-deep text-[22px] leading-tight">
              Asnyka
            </h1>
            <h2 className="text-xs uppercase text-green-mid tracking-wide">
              Osiedle Ekologiczne
            </h2>
          </div>
        </motion.a>

        <ul className="hidden lg:flex gap-6 xl:gap-8 list-none items-center">
          {links.map(({ href, label }, i) => (
            <motion.li
              key={href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.1 + i * 0.06,
                ease: "easeOut",
              }}
            >
              <a
                href={href}
                className="
                  relative text-[0.82rem] font-medium tracking-[0.06em] uppercase
                  text-text-mid no-underline transition-colors duration-200
                  hover:text-green-deep
                  after:content-[''] after:absolute after:-bottom-0.5 after:left-0
                  after:w-0 after:h-px after:bg-green-mid
                  after:transition-[width] after:duration-300
                  hover:after:w-full
                "
              >
                {label}
              </a>
            </motion.li>
          ))}
        </ul>

        <motion.button
          className="lg:hidden p-2 text-green-deep transition-colors hover:text-green-mid"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Zamknij menu" : "Otwórz menu"}
          aria-expanded={isOpen}
          whileTap={{ scale: 0.85 }}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={isOpen ? "close" : "open"}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
              className="block"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.span>
          </AnimatePresence>
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden"
          >
            <ul className="flex flex-col px-4 sm:px-8 pb-4 gap-1 list-none border-t border-green-pale">
              {links.map(({ href, label }, i) => (
                <motion.li
                  key={href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: i * 0.05,
                    duration: 0.25,
                    ease: "easeOut",
                  }}
                >
                  <a
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className="
                      block py-3 text-[0.82rem] font-medium tracking-[0.06em] uppercase
                      text-text-mid no-underline transition-colors duration-200
                      hover:text-green-deep border-b border-green-pale/50 last:border-0
                    "
                  >
                    {label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
