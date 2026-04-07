"use client";

import { House, Menu, X } from "lucide-react";
import { useState } from "react";

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
        <div className="flex gap-3 items-center shrink-0">
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
        </div>

        <ul className="hidden lg:flex gap-6 xl:gap-8 list-none items-center">
          {links.map(({ href, label }) => (
            <li key={href}>
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
            </li>
          ))}
        </ul>

        <button
          className="lg:hidden p-2 text-green-deep transition-colors hover:text-green-mid"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Zamknij menu" : "Otwórz menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <div
        className={`
          lg:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <ul className="flex flex-col px-4 sm:px-8 pb-4 gap-1 list-none border-t border-green-pale">
          {links.map(({ href, label }) => (
            <li key={href}>
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
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
