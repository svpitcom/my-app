"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";

type OurCompanyData = {
  our_company_id: number;
  our_company_title_en: string;
  our_company_title_th: string;
  our_company_detail_01_en: string;
  our_company_detail_01_th: string;
  our_company_detail_02_en: string;
  our_company_detail_02_th: string;
  our_company_detail_03_en: string;
  our_company_detail_03_th: string;
  our_company_detail_04_en: string;
  our_company_detail_04_th: string;
  our_company_detail_05_en: string;
  our_company_detail_05_th: string;
  our_company_detail_06_en: string;
  our_company_detail_06_th: string;
  our_company_subtitle_en: string;
  our_company_subtitle_th: string;
  created_at: string; // หรือ Date ถ้าคุณแปลงเป็น Date object
};

function getValue(obj: OurCompanyData, key: keyof OurCompanyData): string {
  return (obj[key] as string) ?? "";
}

export default function OurCompany() {
  const { lang } = useLanguage();
  const [data, setData] = useState<OurCompanyData[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/ourcompany?lang=${lang}`);
      const json = await res.json();
      console.log("OurCompany API data:", json.data);
      console.log("Current language:", lang);
      setData(json.data);
    };

    fetchData();
  }, [lang]);

  return (
    <div className="containers">
      <div className="bg-[url('/assets/imgs/Ourcompanyv3.png')] sm:bg-[url('/assets/imgs/Ourcompanyv3.png')] bg-cover bg-center text-white relative py-20">
        <div className="flex flex-col text-center items-center px-4 py-6">
          <Image
            src="/assets/imgs/AW_LOGO_SVP [Final] + Stroke-01.png"
            alt="LogoSVP"
            width={180}
            height={180}
            className="mb-4 w-40 h-40 md:w-64 md:h-64 object-contain"
          />
          {data?.map((item) => (
            <h1
              key={item.our_company_id}
              className="text-white text-shadow-lg/20 text-center text-3xl md:text-6xl font-bold mb-4 py-2 md:py-6"
            >
              {getValue(
                item,
                `our_company_title_${lang}` as keyof OurCompanyData
              )}
            </h1>
          ))}
        </div>
      </div>
      <div className="bg-gradient-to-br from-sky-600 to-green-500">
        <div className="max-w-4xl mx-auto">
          {data?.map((item) => (
            <div
              key={item.our_company_id}
              className="text-white p-8 rounded-lg text-balance"
            >
              <h1 className="text-xl md:text-3xl font-bold text-white py-2 md:py-4">
                {getValue(
                  item,
                  `our_company_subtitle_${lang}` as keyof OurCompanyData
                )}
              </h1>
              <p className="text-sm md:text-base mt-2 leading-relaxed whitespace-pre-line">
                {getValue(
                  item,
                  `our_company_detail_01_${lang}` as keyof OurCompanyData
                )}
              </p>
              <br />
              <p className="text-sm md:text-base mt-2 leading-relaxed whitespace-pre-line">
                {getValue(
                  item,
                  `our_company_detail_02_${lang}` as keyof OurCompanyData
                )}
              </p>
              <br />
              <p className="text-sm md:text-base mt-2 leading-relaxed whitespace-pre-line">
                {getValue(
                  item,
                  `our_company_detail_03_${lang}` as keyof OurCompanyData
                )}
              </p>
              <br />
              <p className="text-sm md:text-base mt-2 leading-relaxed whitespace-pre-line">
                {getValue(
                  item,
                  `our_company_detail_04_${lang}` as keyof OurCompanyData
                )}
              </p>
              <br />
              <p className="text-sm md:text-base mt-2 leading-relaxed whitespace-pre-line">
                {getValue(
                  item,
                  `our_company_detail_05_${lang}` as keyof OurCompanyData
                )}
              </p>
              <br />
              <p className="text-sm md:text-base mt-2 leading-relaxed whitespace-pre-line">
                {getValue(
                  item,
                  `our_company_detail_06_${lang}` as keyof OurCompanyData
                )}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-10 p-4 md:p-16 rounded-lg backdrop-blur-sm">
          <div className="bg-gradient-to-r from-sky-500 to-green-300 p-6 md:py-16 md:px-16 rounded-md shadow-md w-full h-auto md:h-96 text-center text-balance">
            <h2 className="text-xl md:text-5xl font-bold text-blue-700 mb-4">
              Vision
            </h2>
            <p className="text-white text-sm md:text-lg leading-relaxed">
              Lead the different and be the benchmark through synergy in natural
              rubber industry
            </p>
          </div>

          <div className="bg-gradient-to-r from-sky-500 to-green-300 p-6 md:py-16 md:px-16 rounded-md shadow-md w-full h-auto md:h-96 text-center text-balance">
            <h2 className="text-xl md:text-5xl font-bold text-blue-700 mb-4">
              Missions
            </h2>
            <p className="text-white text-sm md:text-lg leading-relaxed">
              Advance technology innovative material Create customer
              satisfaction and produce products at the highest quality Clean and
              environmentally friendly factory that help develop and improve
              standard of living
            </p>
          </div>
        </div>
        <div className="bg-white w-full text-center justify-center items-center py-8">
          <h1 className="text-xl md:text-5xl py-8 text-blue-700">
            Oraganization Chart
          </h1>
          <Image
            src="/assets/imgs/Borad-v1.png"
            alt="Borad"
            width={1366}
            height={800}
            className="w-full max-w-full object-contain"
          />
        </div>
        <AnimateOnScroll>
          <div className="flex flex-col md:flex-row w-full h-auto mt-6">
            <div className="w-full md:w-1/2 relative h-64 md:h-auto">
              <Image
                src="/assets/imgs/Rectangle27.png"
                alt="Boardroom"
                className="object-cover"
                fill
              />
            </div>
            <div className="w-full md:w-1/2 bg-gradient-to-br from-sky-600 to-green-500 text-white flex items-center">
              <div className="p-4 md:p-10 space-y-3">
                <h1 className="text-2xl md:text-4xl font-bold text-center md:text-left">
                  Board of Directors
                </h1>
                <div className="space-y-3">
                  <div className="space-y-2 text-left md:text-left text-sm md:text-base">
                    <p className="font-semibold">Mr. Chaipon Kerdvonbundit</p>
                    <p>Chief Executive Officer</p>
                    <p className="font-semibold">Mrs. Wei-Mei Wang</p>
                    <p>Executive Director</p>
                    <p className="font-semibold">Mr. Gnoh Tong Tan</p>
                    <p>Executive Director</p>
                    <p className="font-semibold">Mr. Segsarn Trai Ukos</p>
                    <p>Executive Director</p>
                    <p className="font-semibold">Mr. Sethasit Nitayakul</p>
                    <p>Executive Director</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
}
