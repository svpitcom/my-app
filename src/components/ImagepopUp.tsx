"use client";
import { useState } from "react";
import Image from "next/image";

interface ImagePopupProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export default function ImagePopup({ src, alt, width = 360, height = 200 }: ImagePopupProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* รูปปกติ */}
      <div
        className="cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="rounded-lg shadow-md hover:opacity-80 transition"
        />
      </div>
      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-white bg-opacity-40 flex justify-center items-center"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-[70vw] h-[70vh] p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={src}
              alt={alt}
              fill
              className="rounded-lg shadow-lg object-contain"
            />
            <button
              className="absolute top-2 right-2 bg-white text-black rounded-full px-3 py-1 shadow-md"
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
