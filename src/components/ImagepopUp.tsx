"use client";
import { useState } from "react";
import Image from "next/image";

interface ImagePopupProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export default function ImagePopup({
  src,
  alt,
  width = 360,
  height = 200,
}: ImagePopupProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Thumbnail */}
      <div className="cursor-pointer" onClick={() => setIsOpen(true)}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="rounded-lg shadow-md hover:opacity-80 transition w-40 sm:w-64"
        />
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-white/40 backdrop-blur-sm flex justify-center items-center z-50 p-2"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl h-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={src}
              alt={alt}
              fill
              className="object-contain rounded-lg"
            />
            <button
              className="absolute top-4 right-4 bg-white text-black rounded-full px-3 py-1 shadow-md text-xl"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
