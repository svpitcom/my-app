"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import Link from "next/link";

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

function getValue(obj: NewCrsData, key: keyof NewCrsData): string {
  return (obj[key] as string) ?? "";
}

export default function NewCSR() {
  const { lang } = useLanguage();
  const [data, setData] = useState<NewCrsData[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/newcsr?lang=${lang}`);
      const json = await res.json();
      const sortedData = [...json.data].sort(
        (a, b) =>
          new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
      );
      setData(sortedData);
    };
    fetchData();
  }, [lang]);

  return (
    <div className="bg-gradient-to-bl from-sky-700 to-green-200 bg-cover bg-center py-30">
      <div className="container mx-auto  px-4">
        {/* Header */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white drop-shadow mb-8 text-center">
          NEW & CSR
        </h1>

        {/* Card Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 bg-white/20 lg:grid-cols-3 gap-6 p-8">
          {data?.map((item) => {
            const imgSrc =
              item.new_csr_img && item.new_csr_img.trim() !== ""
                ? item.new_csr_img
                : "/images/no-image.png";

            return (
              <div
                key={item.new_csr_id}
                className="bg-white rounded-md shadow-md hover:shadow-lg transition-transform hover:scale-105 cursor-pointer flex flex-col"
              >
                <Image
                  src={imgSrc}
                  alt="Company Logo"
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover rounded-t-md"
                />

                <div className="flex flex-col flex-grow p-4 text-center">
                  <Link
                    href={`/NewCSR/${item.new_csr_id}?lang=${lang}`}
                    className="font-bold text-lg sm:text-xl text-sky-700 hover:text-sky-500 mb-2"
                  >
                    {getValue(
                      item,
                      `new_csr_header_${lang}` as keyof NewCrsData
                    )}
                  </Link>

                  <Link
                    href={`/NewCSR/${item.new_csr_id}?lang=${lang}`}
                    className="font-semibold text-base sm:text-lg text-sky-600 hover:text-sky-400 mb-4"
                  >
                    {getValue(
                      item,
                      `new_csr_title_${lang}` as keyof NewCrsData
                    )}
                  </Link>

                  <Link
                    href={`/NewCSR/${item.new_csr_id}?lang=${lang}`}
                    className="mt-auto"
                  >
                    <button className="w-full bg-gradient-to-r from-sky-500 to-green-300 hover:from-green-300 hover:to-sky-500 text-white font-medium rounded py-2 px-4 transition duration-300 ease-in-out">
                      {getValue(item, `new_csr_bt_${lang}` as keyof NewCrsData)}
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
