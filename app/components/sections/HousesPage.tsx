"use client";

import Image from "next/image";
import SectionWrapper from "../ui/SectionWrapper";
import { Heart, House, Truck } from "lucide-react";
import { useState } from "react";

const houses = [
  {
    id: "1a",
    status: "Zarezerwowany" as const,
    statusColor: "text-[#6B4F3A] border-[#6B4F3A]",
    name: "Mieszkanie numer 1a",
    area: "132 m²",
    plot: "Działka 600 m²",
    rooms: "4 pokoje",
    price: "799 000 zł",
    src: "/asnyka1.webp",
    points: [
      [36.4, 59.3],
      [44, 61],
      [44.1, 70.5],
      [37, 68],
    ] as [number, number][],
  },
  {
    id: "1b",
    status: "Dostępny" as const,
    statusColor: "text-green-mid border-green-mid",
    name: "Mieszkanie numer 1b",
    area: "132 m²",
    plot: "Działka 600 m²",
    rooms: "4 pokoje",
    price: "799 000 zł",
    src: "/asnyka1.webp",
    points: [
      [36.2, 55.5],
      [40, 52],
      [44, 57],
      [44, 61],
      [36.4, 59.3],
    ] as [number, number][],
  },
  {
    id: "2a",
    status: "Sprzedany" as const,
    statusColor: "text-red-700 border-red-400",
    name: "Mieszkanie numer 2a",
    area: "132 m²",
    plot: "Działka 600 m²",
    rooms: "4 pokoje",
    price: "799 000 zł",
    src: "/asnyka1.webp",
    points: [
      [44, 61],
      [52, 63],
      [52, 73.5],
      [44.1, 70.5],
    ] as [number, number][],
  },
  {
    id: "2b",
    status: "Dostępny" as const,
    statusColor: "text-green-mid border-green-mid",
    name: "Mieszkanie numer 2b",
    area: "132 m²",
    plot: "Działka 600 m²",
    rooms: "4 pokoje",
    price: "799 000 zł",
    src: "/asnyka1.webp",
    points: [
      [44, 57],
      [48, 53.9],
      [52, 59],
      [52, 63],
      [44, 61],
    ] as [number, number][],
  },
  {
    id: "3a",
    status: "Zarezerwowany" as const,
    statusColor: "text-[#6B4F3A] border-[#6B4F3A]",
    name: "Mieszkanie numer 3a",
    area: "132 m²",
    plot: "Działka 600 m²",
    rooms: "4 pokoje",
    price: "799 000 zł",
    src: "/asnyka1.webp",
    points: [
      [52, 63],
      [61.3, 65.5],
      [61.3, 76.5],
      [52, 73.5],
    ] as [number, number][],
  },
  {
    id: "3b",
    status: "Dostępny" as const,
    statusColor: "text-green-mid border-green-mid",
    name: "Mieszkanie numer 3b",
    area: "132 m²",
    plot: "Działka 600 m²",
    rooms: "4 pokoje",
    price: "799 000 zł",
    src: "/asnyka1.webp",
    points: [
      [52, 59],
      [56.9, 55.6],
      [61.3, 61.5],
      [61.3, 65.5],
      [52, 63],
    ] as [number, number][],
  },
];

const AREA_COLORS = {
  Dostępny: {
    fill: "rgba(74, 160, 90, 0.25)",
    stroke: "rgba(74, 160, 90, 0.85)",
    fillActive: "rgba(74, 160, 90, 0.45)",
    strokeActive: "rgba(74, 160, 90, 1)",
  },
  Zarezerwowany: {
    fill: "rgba(107, 79, 58, 0.22)",
    stroke: "rgba(107, 79, 58, 0.75)",
    fillActive: "rgba(107, 79, 58, 0.4)",
    strokeActive: "rgba(107, 79, 58, 1)",
  },
  Sprzedany: {
    fill: "rgba(180, 40, 40, 0.2)",
    stroke: "rgba(180, 40, 40, 0.7)",
    fillActive: "rgba(180, 40, 40, 0.38)",
    strokeActive: "rgba(180, 40, 40, 1)",
  },
};

export default function HousesPage() {
  const [activeId, setActiveId] = useState<string | null>(null);

  function scrollToCard(id: string) {
    const el = document.getElementById(`house-card-${id}`);
    el?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    setActiveId(id);
  }

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
            src="/dron.webp"
            alt="Zdjęcie osiedla Asnyka z rzutu ptaka"
            fill
            className="shadow-lg object-cover"
            unoptimized
            quality={100}
          />

          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {houses.map((house) => {
              const colors = AREA_COLORS[house.status];
              const isActive = activeId === house.id;
              const pts = house.points.map((p) => p.join(",")).join(" ");

              return (
                <g key={house.id}>
                  <polygon
                    points={pts}
                    fill={isActive ? colors.fillActive : colors.fill}
                    stroke={isActive ? colors.strokeActive : colors.stroke}
                    strokeWidth="0.2"
                    className="transition-all duration-200 cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      scrollToCard(house.id);
                    }}
                    onMouseEnter={(e) => {
                      (e.target as SVGPolygonElement).setAttribute(
                        "fill",
                        colors.fillActive,
                      );
                    }}
                    onMouseLeave={(e) => {
                      if (activeId !== house.id)
                        (e.target as SVGPolygonElement).setAttribute(
                          "fill",
                          colors.fill,
                        );
                    }}
                  />
                  <PolygonLabel
                    points={house.points}
                    label={house.id.toUpperCase()}
                    isActive={isActive}
                    status={house.status}
                    onClick={() => scrollToCard(house.id)}
                  />
                </g>
              );
            })}
          </svg>
        </div>

        <div className="flex flex-col gap-2.5 overflow-y-auto max-h-[90vh] pr-1 scrollbar-thin scrollbar-thumb-green-mid scrollbar-track-green-pale scroll-smooth snap-y snap-mandatory">
          {houses.map((house) => (
            <HouseCard
              key={house.id}
              house={house}
              isActive={activeId === house.id}
              onActivate={() => setActiveId(house.id)}
            />
          ))}
        </div>
      </div>

      <div className="lg:hidden flex flex-col gap-5 w-full">
        <div className="w-full aspect-4/3 relative overflow-hidden shadow-lg">
          <Image
            src="/dron.webp"
            alt="Zdjęcie osiedla Asnyka z rzutu ptaka"
            fill
            className="object-cover"
            unoptimized
            quality={100}
          />
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {houses.map((house) => {
              const colors = AREA_COLORS[house.status];
              const isActive = activeId === house.id;
              const pts = house.points.map((p) => p.join(",")).join(" ");
              return (
                <g key={house.id}>
                  <polygon
                    points={pts}
                    fill={isActive ? colors.fillActive : colors.fill}
                    stroke={isActive ? colors.strokeActive : colors.stroke}
                    strokeWidth="0.2"
                    className="cursor-pointer"
                    onClick={() => {
                      setActiveId(house.id);
                      document
                        .getElementById(`house-card-mobile-${house.id}`)
                        ?.scrollIntoView({
                          behavior: "smooth",
                          inline: "center",
                          block: "nearest",
                        });
                    }}
                  />
                  <PolygonLabel
                    points={house.points}
                    label={house.id.toUpperCase()}
                    isActive={isActive}
                    status={house.status}
                    onClick={() => {
                      setActiveId(house.id);
                      document
                        .getElementById(`house-card-mobile-${house.id}`)
                        ?.scrollIntoView({
                          behavior: "smooth",
                          inline: "center",
                          block: "nearest",
                        });
                    }}
                  />
                </g>
              );
            })}
          </svg>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-none px-4 sm:-mx-10 sm:px-10">
          {houses.map((house) => (
            <MobileHouseCard
              key={house.id}
              house={house}
              isActive={activeId === house.id}
              onActivate={() => setActiveId(house.id)}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

function PolygonLabel({
  points,
  label,
  isActive,
  status,
  onClick,
}: {
  points: [number, number][];
  label: string;
  isActive: boolean;
  status: "Dostępny" | "Zarezerwowany" | "Sprzedany";
  onClick: () => void;
}) {
  const cx = points.reduce((s, p) => s + p[0], 0) / points.length;
  const cy = points.reduce((s, p) => s + p[1], 0) / points.length;
  const color =
    status === "Dostępny"
      ? "rgba(74,160,90,1)"
      : status === "Sprzedany"
        ? "rgba(180,40,40,1)"
        : "rgba(107,79,58,1)";
  return (
    <g onClick={onClick} style={{ cursor: "pointer" }}>
      <circle
        cx={cx}
        cy={cy}
        r="1.5"
        fill={isActive ? color : "white"}
        fillOpacity="0.9"
        style={{ transition: "all 0.2s ease-in-out" }}
      />
      <text
        x={cx}
        y={cy}
        textAnchor="middle"
        dominantBaseline="central"
        fontSize="1"
        fontWeight="600"
        fill={isActive ? "white" : color}
        style={{
          fontFamily: "var(--font-mono, monospace)",
          userSelect: "none",
        }}
      >
        {label}
      </text>
    </g>
  );
}

function HouseCard({
  house,
  isActive,
  onActivate,
}: {
  house: (typeof houses)[0];
  isActive: boolean;
  onActivate: () => void;
}) {
  return (
    <div
      id={`house-card-${house.id}`}
      onClick={onActivate}
      className={`
        flex flex-col gap-2.5 bg-white border rounded-sm transition-all duration-300 scroll-mt-4
        ${isActive ? "border-green-mid shadow-md ring-1 ring-green-mid/30" : "border-green-pale hover:border-green-mid/50"}
      `}
    >
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
          onClick={(e) => e.stopPropagation()}
        >
          szczegóły
        </a>
      </div>
    </div>
  );
}

function MobileHouseCard({
  house,
  isActive,
  onActivate,
}: {
  house: (typeof houses)[0];
  isActive: boolean;
  onActivate: () => void;
}) {
  return (
    <div
      id={`house-card-mobile-${house.id}`}
      onClick={onActivate}
      className={`
        shrink-0 w-52 flex flex-col bg-white border rounded-sm
        transition-all duration-300 snap-start cursor-pointer
        ${isActive ? "border-green-mid shadow-md ring-1 ring-green-mid/30" : "border-green-pale"}
      `}
    >
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
      <div className="flex flex-col p-3 gap-1.5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-mono font-semibold text-sm text-green-deep leading-snug">
            {house.name}
          </h3>
          <span
            className={`uppercase text-[10px] border rounded-xs px-2 py-0.5 shrink-0 ${house.statusColor}`}
          >
            {house.status}
          </span>
        </div>
        <p className="font-mono font-light text-base text-green-deep">
          {house.price}
        </p>

        <a
          href=""
          className="mt-1 px-4 py-2 bg-green-deep text-white no-underline text-[0.7rem] font-medium tracking-widest uppercase rounded-xs
          transition-all duration-200 hover:bg-green-mid w-fit"
          onClick={(e) => e.stopPropagation()}
        >
          szczegóły
        </a>
      </div>
    </div>
  );
}
