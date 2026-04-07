import Image from "next/image";
import SectionWrapper from "../ui/SectionWrapper";
import { Building2, Cross, School, Trees } from "lucide-react";

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
      <div className="relative flex items-center justify-center aspect-square w-full max-w-sm sm:max-w-md lg:max-w-2xl shrink-0">
        <Image
          src="/localization.jpg"
          alt="Zdjęcie lokalizacji osiedla Asnyka"
          fill
          className="object-cover"
          priority
          unoptimized
        />
      </div>

      {/* Content */}
      <div className="flex flex-col items-start w-full">
        <h1 className="text-[12px] uppercase text-text-mid mb-5 flex items-center gap-3 leading-[1.8] tracking-[0.22em] before:content-[''] before:block before:w-9 before:h-px before:bg-text-mid">
          Lokalizacja
        </h1>

        <h2 className="font-mono text-[clamp(1.75rem,3.5vw,3rem)] font-light leading-[1.15] text-green-deep mb-6">
          W&nbsp;sercu <em className="italic text-green-mid">Małopolski</em>
        </h2>

        <h3 className="font-mono font-light text-2xl sm:text-3xl text-green-deep mb-2">
          Asnyka, gm. Zabierzów
        </h3>

        <p className="text-sm text-text-light mb-8">
          woj. małopolskie • 32-080 Zabierzów
        </p>

        <div className="flex flex-col gap-3 mb-10 w-full">
          {distances.map(({ icon, label, value }) => (
            <div
              key={label}
              className="flex items-center gap-3 sm:gap-4 py-3 sm:py-3.5 px-3.5 sm:px-4.5 border-l-3 rounded-l-[3px] border-green-mid bg-cream"
            >
              {icon}
              <span className="flex-1 text-sm text-text-mid">{label}</span>
              <span className="font-mono text-base sm:text-lg font-semibold text-green-deep whitespace-nowrap">
                {value}
              </span>
            </div>
          ))}
        </div>

        <a
          href="#domy"
          className="px-6 sm:px-8 py-3 sm:py-3.5 bg-green-deep text-white no-underline text-[0.82rem] font-medium tracking-widest uppercase rounded-sm
              transition-all duration-200 hover:bg-green-mid hover:-translate-y-px"
        >
          Umów wizytę na miejscu
        </a>
      </div>
    </SectionWrapper>
  );
}
