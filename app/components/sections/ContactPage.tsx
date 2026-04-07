import { Clock, Mail, MapPin, Phone } from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper";

export default function ContactPage() {
  return (
    <SectionWrapper
      id="kontakt"
      className="bg-green-deep flex-col gap-10 scroll-mt-26.5"
    >
      <h1 className="text-[12px] uppercase text-green-light mb-5 flex items-center gap-3 leading-[1.8] tracking-[0.22em] before:content-[''] before:block before:w-9 before:h-px before:bg-green-light">
        kontakt
      </h1>

      <div className="flex flex-col gap-10 md:flex-row md:justify-between md:gap-14">
        <div className="flex flex-col w-full md:w-[45%]">
          <h2 className="font-mono text-[clamp(2rem,3.5vw,3rem)] font-light leading-[1.15] text-white max-w-md mb-6">
            Porozmawiajmy o&nbsp;
            <em className="italic text-green-light">Twoim </em>
            domu
          </h2>
          <p className="text-white text-base leading-[1.8] max-w-xl mb-8">
            Chętnie pomożemy z ofertą inwestycyjną i formalnościami przed
            zakupem. W szczególności doradzamy także przy ubezpieczeniu
            nieruchomości.
          </p>

          <div className="flex flex-col gap-7">
            <div className="flex gap-4 items-center">
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
            </div>

            <div className="flex gap-4.5 items-center">
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
            </div>

            <div className="flex gap-4.5 items-center">
              <div className="w-10.5 h-10.5 border border-[rgba(200,221,200,0.3)] rounded-[50%] flex items-center justify-center shrink-0">
                <MapPin className="w-4.5 h-4.5 stroke-[1.5] stroke-green-light" />
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[0.72rem] tracking-[0.12em] uppercase text-green-light">
                  Adres biura
                </span>
                <span className="text-white text-base">
                  ul. Leśna 12, 32-080 Zabierzów
                </span>
              </div>
            </div>

            <div className="flex gap-4.5 items-center">
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
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 text-text-dark w-full">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label className="text-[0.75rem] tracking-widest uppercase text-green-light">
                Imię i nazwisko
              </label>
              <input
                type="text"
                id="name"
                placeholder="Jan Kowalski"
                className="bg-[rgba(255,255,255,0.07)] border border-[rgba(200,221,200,0.2)] rounded-sm px-4 py-3 text-white text-[0.9rem] outline-none transition-colors duration-200 focus:border-green-light"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[0.75rem] tracking-widest uppercase text-green-light">
                Telefon
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="+48 123 456 789"
                className="bg-[rgba(255,255,255,0.07)] border border-[rgba(200,221,200,0.2)] rounded-sm px-4 py-3 text-white text-[0.9rem] outline-none transition-colors duration-200 focus:border-green-light"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[0.75rem] tracking-widest uppercase text-green-light">
              Adres Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="jan.kowalski@example.com"
              className="bg-[rgba(255,255,255,0.07)] border border-[rgba(200,221,200,0.2)] rounded-sm px-4 py-3 text-white text-[0.9rem] outline-none transition-colors duration-200 focus:border-green-light"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[0.75rem] tracking-widest uppercase text-green-light">
              Interesuje mnie
            </label>
            <select
              id="interest"
              className="bg-[rgba(255,255,255,0.07)] border border-[rgba(200,221,200,0.2)] rounded-sm px-4 py-3 text-white text-[0.9rem] outline-none transition-colors duration-200 focus:border-green-light"
            >
              <option className="bg-green-deep">Opcja 1</option>
              <option className="bg-green-deep">Opcja 2</option>
              <option className="bg-green-deep">Opcja 3</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[0.75rem] tracking-widest uppercase text-green-light">
              Wiadomość
            </label>
            <textarea
              id="message"
              placeholder="Chciałbym dowiedzieć się więcej o..."
              className="bg-[rgba(255,255,255,0.07)] border border-[rgba(200,221,200,0.2)] rounded-sm px-4 py-3 text-white text-[0.9rem] outline-none transition-colors duration-200 focus:border-green-light resize-y min-h-[10rem]"
            />
          </div>

          <button className="px-9 py-3.5 bg-green-light text-green-deep border-none cursor-pointer text-[0.82rem] font-medium tracking-widest uppercase rounded-sm self-start transition-colors duration-200 hover:bg-white">
            Wyślij zapytanie
          </button>
        </div>
      </div>
    </SectionWrapper>
  );
}
