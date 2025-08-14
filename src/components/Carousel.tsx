"use client";

import Slider, { CustomArrowProps, Settings } from "react-slick";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type CarouselProps = {
  images: string[];
};

function PrevArrow({ onClick }: CustomArrowProps) {
  return (
    <button
      onClick={onClick}
      className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/70 hover:bg-white rounded-full p-1 sm:p-2 shadow-lg"
      aria-label="Previous Slide"
    >
      <FaChevronLeft className="text-green-700 text-sm sm:text-base" />
    </button>
  );
}

function NextArrow({ onClick }: CustomArrowProps) {
  return (
    <button
      onClick={onClick}
      className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/70 hover:bg-white rounded-full p-1 sm:p-2 shadow-lg"
      aria-label="Next Slide"
    >
      <FaChevronRight className="text-green-700 text-sm sm:text-base" />
    </button>
  );
}

export default function Carousel({ images }: CarouselProps) {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: "100px",
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: false, // ให้เต็มจอในมือถือ
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto carousel-custom">
      <Slider {...settings}>
        {images.map((src: string, index: number) => (
          <div key={index} className="px-1 sm:px-2">
            <Image
              src={src || "/images/no-image.png"}
              alt={`Slide ${index}`}
              width={800}
              height={500}
              className="rounded-lg shadow-lg mx-auto h-auto w-full object-cover transition-all duration-500"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
