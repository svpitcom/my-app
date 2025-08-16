"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";

// ---------- Types ----------
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
  created_at: string;
};

type BannerData = {
  banner_id: number;
  banner_title_en: string;
  banner_title_th: string;
  banner_detail_en: string;
  banner_detail_th: string;
  created_at: string;
};

// ---------- Utils ----------
function getValue<T>(obj: T, key: keyof T): string {
  return (obj[key] as string) ?? "";
}

// ---------- Component ----------
export default function OurCompany() {
  const { lang } = useLanguage();
  const [companyData, setCompanyData] = useState<OurCompanyData[] | null>(null);
  const [bannerData, setBannerData] = useState<BannerData[] | null>(null);

  // Fetch OurCompany
  useEffect(() => {
    const fetchCompany = async () => {
      const res = await fetch(`/api/ourcompany?lang=${lang}`);
      const json = await res.json();
      setCompanyData(json.data);
    };
    fetchCompany();
  }, [lang]);

  // Fetch Banner
  useEffect(() => {
    const fetchBanner = async () => {
      const res = await fetch(`/api/banner?lang=${lang}`);
      const json = await res.json();
      setBannerData(json.data);
    };
    fetchBanner();
  }, [lang]);

  // Helper: find banner by ID
  const findBannerById = (id: number) =>
    bannerData?.find((banner) => banner.banner_id === id);

  const banner1 = findBannerById(1);
  const banner2 = findBannerById(2);

  return (
    <div className="containers">
      {/* ---------- Header Section ---------- */}
      <div className="bg-[url('/assets/imgs/Ourcompanyv3.png')] bg-cover bg-center text-white relative py-20">
        <div className="flex flex-col text-center items-center px-4 py-6">
          <Image
            src="/assets/imgs/AW_LOGO_SVP [Final] + Stroke-01.png"
            alt="LogoSVP"
            width={180}
            height={180}
            className="mb-4 w-40 h-40 md:w-64 md:h-64 object-contain"
          />
          {companyData?.map((item) => (
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

      {/* ---------- Company Detail Section ---------- */}
      <div className="bg-gradient-to-r from-sky-500 to-green-300 p-4">
        <div className="bg-gradient-to-br from-sky-600 to-green-500 text-balance">
          <div className="max-w-5xl mx-auto">
            {companyData?.map((item) => (
              <div
                key={item.our_company_id}
                className="text-white p-8 rounded-lg text-balance"
              >
                <h1 className="text-xl md:text-3xl font-bold text-white py-2">
                  {getValue(
                    item,
                    `our_company_subtitle_${lang}` as keyof OurCompanyData
                  )}
                </h1>

                {Array.from({ length: 6 }, (_, i) => (
                  <p
                    key={i}
                    className="text-sm md:text-lg mt-2 leading-relaxed mb-4"
                  >
                    {getValue(
                      item,
                      `our_company_detail_0${
                        i + 1
                      }_${lang}` as keyof OurCompanyData
                    )}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ---------- Banner Section ---------- */}
      <div className="bg-[url('/assets/imgs/our_sv.png')] bg-cover bg-center">
        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-10 p-4 md:p-16 rounded-lg backdrop-blur-sm">
          {banner1 && (
            <div className="bg-gradient-to-r from-sky-500 to-green-300 p-6 md:py-16 md:px-16 rounded-md shadow-md w-full h-auto md:h-96 text-center">
              <h2 className="text-xl md:text-5xl font-bold text-blue-700 mb-4">
                {getValue(banner1, `banner_title_${lang}` as keyof BannerData)}
              </h2>
              <p className="text-white text-sm md:text-lg leading-relaxed">
                {getValue(banner1, `banner_detail_${lang}` as keyof BannerData)}
              </p>
            </div>
          )}

          {banner2 && (
            <div className="bg-gradient-to-r from-sky-500 to-green-300 p-6 md:py-16 md:px-16 rounded-md shadow-md w-full h-auto md:h-96 text-center">
              <h2 className="text-xl md:text-5xl font-bold text-blue-700 mb-4">
                {getValue(banner2, `banner_title_${lang}` as keyof BannerData)}
              </h2>
              <p className="text-white text-sm md:text-lg leading-relaxed">
                {getValue(banner2, `banner_detail_${lang}` as keyof BannerData)}
              </p>
            </div>
          )}
        </div>
        {/* ---------- Organization Chart ---------- */}
        <div className="bg-white w-full text-center py-8">
          <h1 className="text-xl md:text-5xl py-8 text-blue-700">
            Organization Chart
          </h1>
          <Image
            src="/assets/imgs/Borad-v1.png"
            alt="Borad"
            width={1366}
            height={800}
            className="w-full max-w-full object-contain"
          />
        </div>
      </div>

      {/* ---------- Board of Directors ---------- */}
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
              <div className="space-y-2 text-sm md:text-base">
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
      </AnimateOnScroll>
    </div>
  );
}
