"use client";
import React from "react";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import ImagePopup from "@/components/ImagepopUp";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function Policy() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <div className="bg-cover bg-center h-full w-full">
      <div className="bg-[url('/assets/imgs/HomeOffice.png')] bg-cover bg-center bg-radial text-white h-full">
        <div className="flex flex-col text-center items-center px-4 py-30">
          <Image
            src="/assets/imgs/AW_LOGO_SVP [Final] + Stroke-01.png"
            alt="LogoSVP"
            width={260}
            height={260}
            className="mb-4 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64"
            priority
          />
          <h1 className="text-4xl md:text-6xl font-bold py-2">{t.policy}</h1>
          <h1
            className="text-base sm:text-lg md:text-4xl font-black uppercase text-sky-700 mt-2"
            style={{
              WebkitTextStroke: "1px white",
              WebkitFontSmoothing: "antialiased",
            }}
          >
            {t.company}
          </h1>

          <div className="mt-6 flex flex-col items-center gap-3 py-4 w-full px-2">
            {t.menu.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="bg-gradient-to-br from-sky-600 to-green-500 hover:from-green-300 hover:to-sky-500 text-white px-4 py-2 rounded w-full max-w-sm text-sm md:text-base text-center"
              >
                {item.text}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[url('/assets/imgs/EnergyConservation.jpg')] bg-cover bg-center h-full">
        <AnimateOnScroll>
          <div className="bg-gradient-to-br from-sky-600 to-green-500 text-white py-10 text-center px-4">
            <h1 className="text-3xl md:text-6xl font-bold mb-3">
              {t.energyTitle}
            </h1>
            <p className="max-w-4xl mx-auto text-base text-balance md:text-xl">
              {t.energyDesc}
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div className="bg-white/60 bg-cover bg-center p-4">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 py-8">
              {t.energyPoints.map((text, index) => (
                <div
                  key={index}
                  className="w-52 h-52 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-sky-600/60 to-green-500/60 text-white flex items-center justify-center text-center px-4"
                >
                  <div className="w-44 h-44 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-sky-600 to-green-500 text-white flex items-center justify-center text-xs md:text-base font-bold p-4">
                    {text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div className="flex mx-auto py-4 justify-center items-center bg-white/60 rounded-lg w-full px-4">
            <div className="max-w-3xl text-center">
              <p className="text-sm md:text-xl text-gray-700 mb-4">
                {t.energyNote}
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        {/* <AnimateOnScroll> */}
          <div className="flex flex-row justify-center items-center gap-6 p-4 w-full">
            <ImagePopup
              src="/assets/imgs/Certificate14001_SV_Polymer_page-0001.jpg"
              alt="Sample"
              width={220}
              height={220}
            />
            <ImagePopup
              src="/assets/imgs/CERTIFICATION-9001_SV_polymer_page-0001.jpg"
              alt="LogoSVP"
              width={220}
              height={220}
            />
            <ImagePopup
              src="/assets/imgs/Green_industry_SVP_68-71.jpg"
              alt="LogoSVP"
              width={220}
              height={220}
            />
          </div>
        {/* </AnimateOnScroll> */}
      </div>
    </div>
  );
}
