import { House } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex px-12 py-3.5 justify-between font-sans bg-white border-b-[1] border-green-pale">
      <div className="w-1/4 flex gap-3 ">
        <div className="p-3 bg-green-deep rounded-full">
          <House className="text-cream w-6 h-6" />
        </div>
        <div>
          <h1 className="font-mono font-semibold text-green-deep text-[22px]">
            Asnyka
          </h1>
          <h2 className="text-xs uppercase text-green-mid">
            Osiedle Ekologiczne
          </h2>
        </div>
      </div>
      <div className="flex items-center w-full justify-end">
        <ul className="flex gap-8 list-none w-full justify-end">
          {[
            { href: "#opis-inwestycji", label: "Opis inwestycji" },
            { href: "#galeria", label: "Galeria" },
            { href: "#lokalizacja", label: "Lokalizacja" },
            { href: "#lokale", label: "Lokale" },
            { href: "#wykonczenie", label: "Wykończenie" },
            { href: "#o-deweloperze", label: "O deweloperze" },
            { href: "#kontakt", label: "Kontakt" },
          ].map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="
            relative text-[0.82rem] font-medium tracking-[0.06em] uppercase
            text-text-mid no-underline transition-colors duration-200
            hover:text-green-deep
            after:content-[''] after:absolute after:-bottom-0.75 after:left-0
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
      </div>
    </nav>
  );
}
