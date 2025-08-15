"use client";

import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

type OurProductionData = {
  our_production_id: number;
  our_production_title_en: string;
  our_production_title_th: string;
  our_production_detail_01_en: string;
  our_production_detail_01_th: string;
  our_production_detail_02_en: string;
  our_production_detail_02_th: string;
  our_production_detail_03_en: string;
  our_production_detail_03_th: string;
  our_production_detail_04_en: string;
  our_production_detail_04_th: string;
  our_production_detail_05_en: string;
  our_production_detail_05_th: string;
  created_at: string;
};

function getValue(
  obj: OurProductionData,
  key: keyof OurProductionData
): string {
  return (obj[key] as string) ?? "";
}

export default function OurProduct() {
  const { lang } = useLanguage();
  const [data, setData] = useState<OurProductionData[] | null>(null);

  useEffect(() => {
    const fetchOurProduction = async () => {
      const res = await fetch(`/api/ourproduction?lang=${lang}`);
      const json = await res.json();
      setData(json.data);
    };

    fetchOurProduction();
  }, [lang]);

  const productInfo = data?.find((item) => item.our_production_id === 1);
  const packagingInfo = data?.find((item) => item.our_production_id === 2);

  return (
    <div>
      {/* Header Section */}
      <div className="bg-[url('/assets/imgs/Ourproduction-v2.png')] bg-cover sm:bg-center bg-top text-white py-28 sm:py-28">
        <div className="flex justify-center items-center">
          <Image
            src="/assets/imgs/AW_LOGO_SVP [Final] + Stroke-01.png"
            alt="LogoSVP"
            width={260}
            height={260}
            className="mb-4 w-38 h-38 sm:w-46 sm:h-46 md:w-64 md:h-64"
          />
        </div>
      </div>

      {/* Title Section */}
      <div className="bg-gradient-to-r from-sky-500 to-green-300 bg-cover bg-center w-full">
        <div className="bg-cover bg-center">
          <div className="flex justify-center py-10 md:py-12">
            <h1 className="text-white text-shadow-lg/20 text-4xl md:text-6xl font-bold p-4 md:p-6 rounded text-center">
              OurProducts
            </h1>
          </div>

          {/* Content Section */}
          {/* Ourprodutioon id=1 */}
          {productInfo && (
            <div className="bg-neutral-50 text-black py-10 md:py-16 px-4 md:px-10 text-center">
              <div className="max-w-5xl mx-auto">
                {/* <div key={item.our_production_id}> */}
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  {getValue(
                    productInfo,
                    `our_production_title_${lang}` as keyof OurProductionData
                  )}
                </h1>

                <br />
                {[1, 2, 3, 4, 5].map((i) => {
                  const key =
                    `our_production_detail_0${i}_${lang}` as keyof OurProductionData;
                  const value = getValue(productInfo, key);
                  return value ? (
                    <p
                      key={i}
                      className="text-base md:text-lg mb-2 leading-relaxed"
                    >
                      {value}
                    </p>
                  ) : null;
                })}
                {/* </div> */}
              </div>
            </div>
          )}

          {/* Product List Section */}
          <AnimateOnScroll>
            <div className="flex flex-col md:flex-row w-full rounded-lg p-10">
              <div className="w-full md:w-1/2 relative h-60 md:h-auto">
                <Image
                  src="/assets/imgs/inProduction.png"
                  alt="Company Logo"
                  className="object-cover rounded-lg"
                  fill
                />
              </div>
              <div className="w-full md:w-1/2 bg-gradient-to-br from-sky-600 to-green-500 text-white rounded-lg flex items-center">
                <div className="p-6 md:p-10 space-y-3 text-left md:text-left">
                  <h2 className="text-xl md:text-2xl font-semibold mb-2">
                    Product
                  </h2>
                  <div className="space-y-2 text-sm md:text-base">
                    <p className="font-semibold">Standard Thai Rubber 10</p>
                    <p className="font-semibold">Standard Thai Rubber 20</p>
                    <p className="font-semibold">Standard Thai Rubber 20M</p>
                    <p className="font-semibold">
                      Mooney Viscosity Controlleds 9710
                    </p>
                    <p className="font-semibold">
                      Mooney Viscosity Controlled 9720
                    </p>
                    <p className="font-semibold">Constant Viscosity 60</p>
                    <p className="font-semibold">Constant Viscosity 65</p>
                    <p className="font-semibold">
                      Mixture Rubber (Pending 2017–2018)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Packaging Section */}
          {packagingInfo && (
            <AnimateOnScroll>
              <div className="bg-white py-8 px-4 md:px-10">
                {/* Ourprodutioon id=2 */}
                <h2 className="text-4xl md:text-7xl font-bold text-center text-sky-700 mb-4 uppercase">
                  {getValue(
                    packagingInfo,
                    `our_production_title_${lang}` as keyof OurProductionData
                  )}
                </h2>
                <p className="text-sm md:text-lg max-w-4xl mx-auto text-center text-black">
                  {getValue(
                    packagingInfo,
                    `our_production_detail_01_${lang}` as keyof OurProductionData
                  )}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
                  {[
                    { weight: "35", description: "kilograms loose bales" },
                    {
                      weight: "1.26",
                      description: "tons shrink wrapped Plastic base",
                    },
                    {
                      weight: "1.33",
                      description:
                        "tons shrink wrapped metal base/Friendly pack pallets",
                    },
                    { weight: "1.26", description: "tons Metal box" },
                  ].map((item, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div className="w-36 h-36 md:w-64 md:h-64 rounded-full bg-gradient-to-r from-sky-500/60 to-green-300/60 flex items-center justify-center">
                        <div className="w-32 h-32 md:w-56 md:h-56 rounded-full bg-gradient-to-r from-sky-500 to-green-300 text-white flex flex-col items-center justify-center text-center p-2">
                          <p className="text-xl md:text-3xl font-bold">
                            {item.weight}
                          </p>
                          <p className="text-xs md:text-lg">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          )}
        </div>
      </div>
    </div>
  );
}
