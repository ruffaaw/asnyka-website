import Image from "next/image";
import SectionWrapper from "../ui/SectionWrapper";
import { Heart, House, Truck } from "lucide-react";

const houses = [
  {
    id: "1a",
    status: "Dostępny",
    statusColor: "text-green-mid border-green-mid",
    name: "Mieszkanie numer 1a",
    area: "132 m²",
    plot: "Działka 600 m²",
    rooms: "4 pokoje",
    price: "799 000 zł",
    src: "/asnyka1.webp",
  },
  {
    id: "2a",
    status: "Zarezerwowany",
    statusColor: "text-[#6B4F3A] border-[#6B4F3A]",
    name: "Mieszkanie numer 2a",
    area: "132 m²",
    plot: "Działka 600 m²",
    rooms: "4 pokoje",
    price: "799 000 zł",
    src: "/asnyka1.webp",
  },
];

export default function HousesPage() {
  return (
    <SectionWrapper
      id="lokale"
      className="bg-cream flex-col justify-center items-start scroll-mt-26.25 px-4 sm:px-10 lg:px-20 py-16 lg:py-24"
    >
      <h1 className="text-[12px] uppercase text-text-mid mb-4 flex items-center gap-3 leading-[1.8] tracking-[0.22em] before:content-[''] before:block before:w-9 before:h-px before:bg-text-mid">
        oferta
      </h1>

      <h2 className="font-mono text-[clamp(1.75rem,3.5vw,3rem)] font-light leading-[1.15] text-green-deep mb-8">
        Znajdź swoje <em className="italic text-green-mid">mieszkanie</em>
      </h2>

      <div className="hidden lg:grid grid-cols-3 gap-7.5 w-full">
        <div className="col-span-2 aspect-4/3 relative">
          <Image
            src="/asnyka1.webp"
            alt="Zdjęcie osiedla Asnyka z rzutu ptaka"
            fill
            className="shadow-lg object-cover"
            unoptimized
            quality={100}
          />
        </div>
        <div className="flex flex-col gap-2.5 overflow-y-auto max-h-[90vh] pr-1 scrollbar-thin scrollbar-thumb-green-mid scrollbar-track-green-pale scroll-smooth snap-y snap-mandatory">
          {houses.map((house) => (
            <HouseCard key={house.id} house={house} />
          ))}
        </div>
      </div>

      <div className="lg:hidden flex flex-col gap-5 w-full">
        <div className="w-full aspect-video relative overflow-hidden shadow-lg">
          <Image
            src="/asnyka1.webp"
            alt="Zdjęcie osiedla Asnyka z rzutu ptaka"
            fill
            className="object-cover"
            unoptimized
            quality={100}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {houses.map((house) => (
            <HouseCard key={house.id} house={house} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

function HouseCard({ house }: { house: (typeof houses)[0] }) {
  return (
    <div className="flex flex-col gap-2.5 bg-white border border-green-pale rounded-sm">
      <div className="flex w-full items-end justify-end pt-3.5 pr-3.5">
        <span
          className={`uppercase text-xs border rounded-xs px-3 py-1 ${house.statusColor}`}
        >
          {house.status}
        </span>
      </div>

      <div className="w-full aspect-video relative">
        <Image
          src={house.src}
          alt={house.name}
          fill
          className="object-cover"
          unoptimized
          quality={100}
        />
      </div>

      <div className="flex flex-col p-5 sm:p-6 gap-2.5">
        <h3 className="font-mono font-semibold text-xl sm:text-2xl text-green-deep mb-1">
          {house.name}
        </h3>

        <div className="flex flex-row flex-wrap gap-3 mb-3">
          <div className="flex flex-row gap-1.5 items-center">
            <House className="w-3.5 h-3.5 stroke-1 stroke-green-mid" />
            <p className="text-sm font-light text-text-light">{house.area}</p>
          </div>
          <div className="flex flex-row gap-1.5 items-center">
            <Truck className="w-3.5 h-3.5 stroke-1 stroke-green-mid" />
            <p className="text-sm font-light text-text-light">{house.plot}</p>
          </div>
          <div className="flex flex-row gap-1.5 items-center">
            <Heart className="w-3.5 h-3.5 stroke-1 stroke-green-mid" />
            <p className="text-sm font-light text-text-light">{house.rooms}</p>
          </div>
        </div>

        <div className="flex flex-row items-end border-t border-green-pale pt-4 pb-2">
          <p className="font-mono font-light text-xl sm:text-2xl text-green-deep">
            {house.price}{" "}
            <em className="text-text-light text-sm not-italic">brutto</em>
          </p>
        </div>

        <a
          href=""
          className="px-6 sm:px-8 py-3 sm:py-3.5 bg-green-deep text-white no-underline text-[0.82rem] font-medium tracking-widest uppercase rounded-xs
          transition-all duration-200 hover:bg-green-mid hover:-translate-y-px w-fit"
        >
          szczegóły
        </a>
      </div>
    </div>
  );
}
