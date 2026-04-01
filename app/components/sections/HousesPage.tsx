import Image from "next/image";
import SectionWrapper from "../ui/SectionWrapper";
import { Heart, House, Truck } from "lucide-react";

export default function HousesPage() {
  return (
    <SectionWrapper
      id="lokale"
      className="bg-cream flex-col justify-center items-start scroll-mt-26.5"
    >
      <h1 className="text-sm uppercase text-text-mid mb-4 flex items-center gap-3 leading-[1.8] tracking-[0.22em] before:content-[''] before:block before:w-9 before:h-px before:bg-text-mid">
        oferta
      </h1>

      <h2 className="font-mono text-[clamp(2rem,3.5vw,3rem)] font-light leading-[1.15] text-green-deep mb-6">
        Znajdź swoje <em className="italic text-green-mid">mieszkanie</em>
      </h2>

      <div className="grid grid-cols-3 gap-7.5 w-full">
        <div className="col-span-2 aspect-4/3 relative">
          <Image
            src="/asnyka1.webp"
            alt="Zdjęcie osiedla Asnyka z rzutu ptaka"
            fill
            className="rounded-lg shadow-lg object-cover"
            unoptimized
            quality={100}
          />
        </div>
        <div className="flex flex-col gap-2.5 overflow-y-auto max-h-[90vh] pr-1 scrollbar-thin scrollbar-thumb-green-mid scrollbar-track-green-pale scroll-smooth snap-y snap-mandatory">
          <div className="flex flex-col gap-2.5 bg-white border border-green-pale rounded-sm snap-start">
            <div className="flex w-full items-end justify-end pt-3.5 pr-3.5">
              <span className=" uppercase text-green-mid border border-green-mid rounded-xs px-3 py-1.25">
                Dostępny
              </span>
            </div>
            <div className="w-full aspect-video relative">
              <Image
                src="/asnyka1.webp"
                alt="Zdjęcie osiedla Asnyka z rzutu ptaka"
                fill
                className="object-cover"
                unoptimized
                quality={100}
              />
            </div>
            <div className="flex flex-col p-6 gap-2.5">
              <h3 className="font-mono font-semibold text-2xl text-green-deep mb-2">
                Mieszkanie numer 1a
              </h3>
              <div className="flex flex-row gap-3.5 mb-4">
                <div className="flex flex-row gap-1.5 items-center">
                  <House className="w-3.5 h-3.5 stroke-1 stroke-green-mid" />
                  <p className="text-sm font-light text-text-light">132 m²</p>
                </div>
                <div className="flex flex-row gap-1.5 items-center">
                  <Truck className="w-3.5 h-3.5 stroke-1 stroke-green-mid" />
                  <p className="text-sm font-light text-text-light">
                    Działka 600 m²
                  </p>
                </div>
                <div className="flex flex-row gap-1.5 items-center">
                  <Heart className="w-3.5 h-3.5 stroke-1 stroke-green-mid" />
                  <p className="text-sm font-light text-text-light">4 pokoje</p>
                </div>
              </div>
              <div className="flex flex-row items-end border-t border-green-pale pt-4 pb-2">
                <p className="font-mono font-light text-2xl text-green-deep">
                  799 000 zł <em className="text-text-light text-sm">brutto</em>
                </p>
              </div>
              <a
                href=""
                className="px-8 py-3.5 bg-green-deep text-white no-underline text-[0.82rem] font-medium tracking-widest uppercase rounded-xs
              transition-all duration-200 hover:bg-green-mid hover:-translate-y-px w-fit"
              >
                szczegóły
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-2.5 bg-white border border-green-pale rounded-sm snap-start">
            <div className="flex w-full items-end justify-end pt-3.5 pr-3.5">
              <span className=" uppercase text-[#6B4F3A] border border-[#6B4F3A] rounded-xs px-3 py-1.25">
                Zarezerwowany
              </span>
            </div>
            <div className="w-full aspect-video relative">
              <Image
                src="/asnyka1.webp"
                alt="Zdjęcie osiedla Asnyka z rzutu ptaka"
                fill
                className="object-cover"
                unoptimized
                quality={100}
              />
            </div>
            <div className="flex flex-col p-6 gap-2.5">
              <h3 className="font-mono font-semibold text-2xl text-green-deep mb-2">
                Mieszkanie numer 2a
              </h3>
              <div className="flex flex-row gap-3.5 mb-4">
                <div className="flex flex-row gap-1.5 items-center">
                  <House className="w-3.5 h-3.5 stroke-1 stroke-green-mid" />
                  <p className="text-sm font-light text-text-light">132 m²</p>
                </div>
                <div className="flex flex-row gap-1.5 items-center">
                  <Truck className="w-3.5 h-3.5 stroke-1 stroke-green-mid" />
                  <p className="text-sm font-light text-text-light">
                    Działka 600 m²
                  </p>
                </div>
                <div className="flex flex-row gap-1.5 items-center">
                  <Heart className="w-3.5 h-3.5 stroke-1 stroke-green-mid" />
                  <p className="text-sm font-light text-text-light">4 pokoje</p>
                </div>
              </div>
              <div className="flex flex-row items-end border-t border-green-pale pt-4 pb-2">
                <p className="font-mono font-light text-2xl text-green-deep">
                  799 000 zł <em className="text-text-light text-sm">brutto</em>
                </p>
              </div>
              <a
                href=""
                className="px-8 py-3.5 bg-green-deep text-white no-underline text-[0.82rem] font-medium tracking-widest uppercase rounded-xs
              transition-all duration-200 hover:bg-green-mid hover:-translate-y-px w-fit"
              >
                szczegóły
              </a>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
