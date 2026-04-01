import Image from "next/image";
import SectionWrapper from "../ui/SectionWrapper";
import { Building2, Cross, School, Trees } from "lucide-react";

export default function LocalizationPage() {
  return (
    <SectionWrapper
      id="lokalizacja"
      className="bg-white flex-row items-center justify-between gap-20 scroll-mt-26.5"
    >
      <div className="relative flex items-center justify-center aspect-square w-full max-w-2xl">
        <Image
          src="/localization.jpg"
          alt="Zdjęcie lokalizacji osiedla Asnyka"
          fill
          className="object-contain"
          priority
          unoptimized
        />
      </div>
      <div className="flex flex-col items-start w-full h-full">
        <h1 className="text-[12px] uppercase text-text-mid mb-5 flex items-center gap-3 leading-[1.8] tracking-[0.22em] before:content-[''] before:block before:w-9 before:h-px before:bg-text-mid">
          Lokalizacja
        </h1>

        <h2 className="font-mono text-[clamp(2rem,3.5vw,3rem)] font-light leading-[1.15] text-green-deep mb-6">
          W&nbsp;sercu <em className="italic text-green-mid">Małopolski</em>
        </h2>

        <h3 className="font-mono font-light text-3xl text-green-deep mb-2">
          Asnyka, gm. Zabierzów
        </h3>

        <p className="text-sm text-text-light mb-8">
          woj. małopolskie • 32-080 Zabierzów
        </p>

        <div className="flex flex-col gap-3 mb-10 w-full">
          <div className=" flex items-center gap-4 py-3.5 px-4.5 border-l-3 rounded-l-[3px] border-green-mid bg-cream">
            <Building2 className="w-5 h-5 stroke-green-mid shrink-0" />
            <span className=" flex-1 text-sm text-text-mid">
              Centrum Krakowa
            </span>
            <span className="font-mono text-lg font-semibold text-green-deep">
              ~18 km / 22 min
            </span>
          </div>
          <div className=" flex items-center gap-4 py-3.5 px-4.5 border-l-3 rounded-l-[3px] border-green-mid bg-cream">
            <School className="w-5 h-5 stroke-green-mid shrink-0" />
            <span className=" flex-1 text-sm text-text-mid">
              Szkoła podstawowa
            </span>
            <span className="font-mono text-lg font-semibold text-green-deep">
              1,2 km / 4 min
            </span>
          </div>
          <div className=" flex items-center gap-4 py-3.5 px-4.5 border-l-3 rounded-l-[3px] border-green-mid bg-cream">
            <Cross className="w-5 h-5 stroke-green-mid shrink-0" />
            <span className=" flex-1 text-sm text-text-mid">
              Ośrodek zdrowia
            </span>
            <span className="font-mono text-lg font-semibold text-green-deep">
              2,4 km / 7 min
            </span>
          </div>
          <div className=" flex items-center gap-4 py-3.5 px-4.5 border-l-3 rounded-l-[3px] border-green-mid bg-cream">
            <Trees className="w-5 h-5 stroke-green-mid shrink-0" />
            <span className=" flex-1 text-sm text-text-mid">
              Las i ścieżki przyrodnicze
            </span>
            <span className="font-mono text-lg font-semibold text-green-deep">
              200 m / 3 min
            </span>
          </div>
        </div>

        <a
          href="#domy"
          className="px-8 py-3.5 bg-green-deep text-white no-underline text-[0.82rem] font-medium tracking-widest uppercase rounded-sm
              transition-all duration-200 hover:bg-green-mid hover:-translate-y-px"
        >
          Umów wizytę na miejscu
        </a>
      </div>
    </SectionWrapper>
  );
}
