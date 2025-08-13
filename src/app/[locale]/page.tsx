"use client";

import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

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

type NewCrsData = {
  new_csr_id: number;
  new_csr_header_en: string;
  new_csr_header_th: string;
  new_csr_title_en: string;
  new_csr_title_th: string;
  new_csr_bt_en: string;
  new_csr_bt_th: string;
  new_csr_detail_en: string;
  new_csr_detail_th: string;
  new_csr_img: string;
  created_at: string;
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

function getValueNewCRS(obj: NewCrsData, key: keyof NewCrsData): string {
  return (obj[key] as string) ?? "";
}

export default function HomePage() {
  const { lang } = useLanguage();
  const [data, setData] = useState<HomeData[] | null>(null);
  const [newCsr, setNewCsr] = useState<NewCrsData[] | null>(null);

  useEffect(() => {
    const fetchHome = async () => {
      const res = await fetch(`/api/home?lang=${lang}`);
      const json = await res.json();
      setData(json.data);
    };

    const fetchNewCSR = async () => {
      const res = await fetch(`/api/newcsr?lang=${lang}`);
      const json = await res.json();
      setNewCsr(json.data);
    };

    fetchHome();
    fetchNewCSR();
  }, [lang]);

  return (
    <div className="min-h-screen w-full flex flex-col">
      {/* Banner */}
      <div className="relative text-center">
        <div className="absolute inset-0 bg-[url('/assets/imgs/tree.png')] bg-cover bg-center"></div>
        <div className="relative z-10 flex justify-center py-12 sm:py-16 md:py-20 lg:py-24">
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
      {/* New & CSR */}
      {newCsr && newCsr.length > 0 && (
        <AnimateOnScroll>
          <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-8">
              {lang === "th" ? "ข่าวสารและกิจกรรม" : "News & CSR"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {newCsr.slice(0, 3).map((item) => (
                <div
                  key={item.new_csr_id}
                  className="bg-sky-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-transform hover:scale-105"
                >
                  <Image
                    src={item.new_csr_img}
                    alt={getValueNewCRS(
                      item,
                      `new_csr_title_${lang}` as keyof NewCrsData
                    )}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-2">
                      {getValueNewCRS(
                        item,
                        `new_csr_title_${lang}` as keyof NewCrsData
                      )}
                    </h3>

                    <Link href={`/NewCSR/${item.new_csr_id}?lang=${lang}`}>
                      <button className="mt-auto w-full bg-gradient-to-r from-sky-500 to-green-300 hover:from-green-300 hover:to-sky-500 text-white font-medium rounded py-2 px-10 transition duration-300 ease-in-out cursor-pointer">
                        {getValueNewCRS(
                          item,
                          `new_csr_bt_${lang}` as keyof NewCrsData
                        )}
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      )}
    </div>
  );
}
