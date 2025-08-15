// components/HoverImage.tsx
import { useState, useEffect } from "react";
import Image from "next/image";

interface HoverImageProps {
  defaultSrc: string;
  hoverSrc: string;
  alt?: string;
}

export default function HoverImage({
  defaultSrc,
  hoverSrc,
  alt,
}: HoverImageProps) {
  const [isTapped, setIsTapped] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 768);
    }
  }, []);

  const handleTap = () => {
    if (isMobile) {
      setIsTapped(!isTapped);
    }
  };

  return (
    <div
      className="relative w-[350px] h-[390px] group overflow-hidden shadow-lg cursor-pointer"
      onClick={handleTap}
    >
      {/* ภาพหลัก */}
      <Image
        src={defaultSrc}
        alt={alt || "default image"}
        fill
        className={`object-cover transition-opacity duration-300 ${
          isMobile
            ? isTapped
              ? "opacity-100"
              : "opacity-100"
            : "group-hover:opacity-100"
        }`}
      />

      {/* ภาพ hover */}
      <Image
        src={hoverSrc}
        alt={alt || "hover image"}
        fill
        className={`object-cover transition-opacity duration-300 ${
          isMobile
            ? isTapped
              ? "opacity-70"
              : "opacity-0"
            : "opacity-0 group-hover:opacity-70"
        }`}
      />
    </div>
  );
}
