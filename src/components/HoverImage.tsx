// components/HoverImage.tsx
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
  return (
    <div className="relative w-[350px] h-[390px] group overflow-hidden shadow-lg">
      <Image
        src={defaultSrc}
        alt={alt || "default image"}
        width={350}
        height={390}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-100"
      />
      <Image
        src={hoverSrc}
        alt={alt || "hover image"}
        width={350}
        height={390}
        className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-70"
      />
    </div>
  );
}
