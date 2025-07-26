"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type NewMedia = {
  id: number;
  borard_header: string;
  borad_title: string;
  borad_button: string;
  borad_img: string;
};

// const NewMediaData = [
//   {
//     id: 1,
//     borard_header: "Frequently Asked Questions (FAQs)",
//     borad_title: "Frequently Asked Questions (FAQs)",
//     borad_button: "Read Me",
//     borad_img: "/assets/imgs/Card-box-1.png",
//   },
//   {
//     id: 2,
//     borard_header: "EUDR Rubber Trading Process",
//     borad_title: "Frequently Asked Questions (FAQs)",
//     borad_button: "Read Me",
//     borad_img: "/assets/imgs/Card-box-1.png",
//   },
//   {
//     id: 3,
//     borard_header: "News",
//     borad_title: "Frequently Asked Questions (FAQs)",
//     borad_button: "Read Me",
//     borad_img: "/assets/imgs/Card-box-1.png",
//   },
//   {
//     id: 4,
//     borard_header: "News",
//     borad_title: "Frequently Asked Questions (FAQs)",
//     borad_button: "Read Me",
//     borad_img: "/assets/imgs/Card-box-1.png",
//   },
//   {
//     id: 5,
//     borard_header: "News",
//     borad_title: "Frequently Asked Questions (FAQs)",
//     borad_button: "Read Me",
//     borad_img: "/assets/imgs/Card-box-1.png",
//   },
// ];

export default function NewMedia() {
  const [news, setNews] = useState<NewMedia[]>([]);
  useEffect(() => {
    fetch("/api/newmedia")
      .then((res) => res.json())
      .then(setNews);
  }, []);

  return (
    <div className="bg-gradient-to-bl from-sky-700 to-green-200 bg-cover bg-center py-26">
      <div className="container mx-auto px-4">
        {/* Header */}
        <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow mb-10 text-center">
          NEW & MEDIA
        </h1>

        {/* Card Container */}
        <div className="flex flex-wrap bg-sky-50/60 justify-center gap-6 p-18">
          {news.map((item) => (
            <div key={item.id} className="flex-row p-2">
              <div className="w-95 h-full rounded-md bg-white flex flex-col justify-between items-center text-center p-2 shadow-md hover:shadow-lg transition-transform hover:scale-105 cursor-pointer">
                {/* Image */}
                <Image
                  src={item.borad_img}
                  alt="Company Logo"
                  width={260}
                  height={260}
                  className="mb-4"
                />

                {/* Header */}
                <Link
                  href={`/newmedia/${item.id}`}
                  className="font-bold text-2xl text-sky-700 hover:text-sky-500 mb-2"
                >
                  {item.borard_header}
                </Link>

                {/* Title */}
                <Link
                  href="/"
                  className="font-semibold text-lg text-sky-600 hover:text-sky-400 mb-4"
                >
                  {item.borad_title}
                </Link>

                {/* Button */}
                <a
                  href="#"
                  className="mt-auto w-full bg-gradient-to-r from-sky-500 to-green-300 hover:from-green-300 hover:to-sky-500 text-white font-medium rounded p-2 transition duration-300 ease-in-out cursor-pointer"
                >
                  {item.borad_button}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
