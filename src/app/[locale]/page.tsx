"use client";

import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
// import { useParams } from 'next/navigation';

type HomeData = {
  home_id: number;
  home_title_th?: string;
  home_title_en?: string;
  home_detail_01_th?: string;
  home_detail_01_en?: string;
  home_detail_02_th?: string;
  home_detail_02_en?: string;
  home_detail_03_th?: string;
  home_detail_03_en?: string;
};

const imageList = [
  "/assets/imgs/209044.png",
  "/assets/imgs/209045.png",
  "/assets/imgs/209046.png",
  "/assets/imgs/209047.png",
];

function getValue(obj: HomeData, key: keyof HomeData): string {
  return (obj[key] as string) ?? "";
}

export default function HomePage() {
  const { lang } = useLanguage();
  const [data, setData] = useState<HomeData[] | null>(null);
  // const params = useParams();
  // const locale = params.locale;

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/home?lang=${lang}`);
      const json = await res.json();
      setData(json.data);
    };

    fetchData();
  }, [lang]);

  return (
    <div className="min-h-screen w-full flex flex-col">
      {/* Locale: {locale} */}
      {/* Banner */}
      <div className="bg-[url('/assets/imgs/tree.png')] bg-cover bg-center text-center">
        <div className="flex justify-center py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="relative px-4 py-10 sm:py-16">
            <div className="flex flex-col items-center text-center">
              <Image
                src="/assets/imgs/Card_6v1.png"
                alt="Card"
                width={800}
                height={640}
                className="mb-4"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Introduction */}
      <div>
        {data?.map((item) => (
          <div
            key={item.home_id}
            className="bg-white text-black py-12 px-4 sm:px-6 text-center"
          >
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
              {getValue(item, `home_title_${lang}` as keyof HomeData)}
            </h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-base sm:text-lg md:text-xl text-sky-700 font-bold mb-4">
                {getValue(item, `home_detail_01_${lang}` as keyof HomeData)}
              </p>
              <p className="text-sm sm:text-base md:text-lg mb-4 text-balance">
                {getValue(item, `home_detail_02_${lang}` as keyof HomeData)}
              </p>
              <p className="text-sm sm:text-base md:text-lg mb-4 text-balance">
                {getValue(item, `home_detail_03_${lang}` as keyof HomeData)}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* Images */}
      <AnimateOnScroll>
        <div className="bg-gradient-to-br from-sky-600 to-green-500 flex flex-col md:flex-row items-center justify-center gap-6 px-4 py-8">
          {imageList.map((src, index) => (
            <div key={index} className="w-full w-1/2 md:w-1/4">
              <Image
                src={src}
                alt={`Company image ${index + 1}`}
                width={180}
                height={180}
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
            </div>
          ))}
        </div>
      </AnimateOnScroll>
      {/* Cards */}
      <AnimateOnScroll>
        <div className="bg-sky-50 flex flex-wrap justify-center gap-6 px-4 py-12">
          <div
            className="w-full sm:w-[90%] md:w-[45%] lg:w-[30%] bg-white rounded-md flex flex-col items-center text-center p-4 shadow-md hover:shadow-lg transition-transform hover:scale-105 cursor-pointer"
          >
            <Image
              src="/assets/imgs/Card-box-1.png"
              alt="image"
              width={350}
              height={350}
              className="w-full h-auto p-2"
            />
            <Link
              href="#"
              className="font-bold text-xl md:text-2xl text-sky-600 hover:text-sky-400"
            >
              Hello
            </Link>
            <Link
              href="#"
              className="font-semibold text-base md:text-lg text-sky-600 hover:text-sky-400"
            >
              Hello
            </Link>
            <a
              className="bg-sky-700 text-base md:text-lg w-full hover:bg-blue-800 text-white rounded p-2 mt-2"
              href="#"
            >
              HelloWorld
            </a>
          </div>
        </div>
      </AnimateOnScroll>
     
    </div>
  );
}
