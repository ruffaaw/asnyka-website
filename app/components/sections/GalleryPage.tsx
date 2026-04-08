"use client";

import SectionWrapper from "../ui/SectionWrapper";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
export default function GalleryPage() {
  const galleryImages = [
    { id: 1, src: "/asnyka.webp", alt: "Zdjęcie osiedla Asnyka" },
    { id: 2, src: "/z_tylu_dzien.webp", alt: "Zdjęcie z tyłu osiedla Asnyka" },
    {
      id: 2,
      src: "/z_tylu_noc.webp",
      alt: "Zdjęcie z tyłu osiedla Asnyka w nocy",
    },
    { id: 4, src: "/dron.webp", alt: "Zdjęcie z drona osiedla Asnyka" },
  ];

  return (
    <SectionWrapper
      id="galeria"
      className="bg-green-deep flex-col scroll-mt-26.25 "
    >
      <h1 className="text-[12px] uppercase text-green-light mb-5 flex items-center gap-3 leading-[1.8] tracking-[0.22em] before:content-[''] before:block before:w-9 before:h-px before:bg-green-light">
        galeria
      </h1>
      <div className="flex flex-col md:flex-row justify-between gap-6 mb-10">
        <div className="flex items-center">
          <h2 className="font-mono text-[clamp(2rem,3.5vw,3rem)] font-light leading-[1.15] text-white">
            Poczuj{" "}
            <em className="italic text-green-light">
              klimat
              <br />
            </em>{" "}
            osiedla
          </h2>
        </div>

        <div className="flex items-end">
          <p className="text-base leading-[1.8] text-green-pale max-w-md">
            Naturalne materiały, panoramiczne przeszklenia i&nbsp;zieleń tuż za
            progiem – tak wygląda codzienność na Zielonej Polanie.
          </p>
        </div>
      </div>

      <div className="w-full flex items-center justify-center">
        <div className="w-full lg:w-9/12 h-full flex flex-col items-center">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 10000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="w-full"
          >
            {galleryImages.map((src, index) => (
              <SwiperSlide
                key={index}
                className="flex justify-center rounded-lg"
              >
                <div className="relative w-full aspect-video">
                  <Image
                    src={src.src}
                    alt={src.alt}
                    fill
                    className="shadow-lg object-cover"
                    unoptimized
                    quality={100}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </SectionWrapper>
  );
}
