"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import { useParams } from "next/navigation";
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
  const params = useParams();
  const locale = params.locale;

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/ourcompany?lang=${lang}`);
      const json = await res.json();
      setData(json.data);
    };
    fetchData();
  }, [lang]);

  return (
    <div className="bg-gradient-to-bl from-sky-700 to-green-200 bg-cover bg-center py-30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow mb-10 text-center">
          NEW & CRS
        </h1>
        {/* Card Container */}
        <div className="flex flex-wrap bg-sky-50/60 justify-center gap-6 p-18">
          {data?.map((item) => {
            const imgSrc =
              item.new_csr_img && item.new_csr_img.trim() !== ""
                ? item.new_csr_img
                : "/images/no-image.png";
            return (
              <div key={item.new_csr_id} className="flex-row p-2">
                <div className="w-95 h-full rounded-md bg-white flex flex-col justify-between items-center text-center p-2 shadow-md hover:shadow-lg transition-transform hover:scale-105 cursor-pointer">
                  <Image
                    src={imgSrc}
                    alt="Company Logo"
                    width={260}
                    height={260}
                    className="mb-4"
                  />

                  <Link
                    href={`/`}
                    className="font-bold text-2xl text-sky-700 hover:text-sky-500 mb-2"
                  >
                    {getValue(
                      item,
                      `new_csr_title_${lang}` as keyof NewCrsData
                    )}
                  </Link>

                  <Link
                    href="/"
                    className="font-semibold text-lg text-sky-600 hover:text-sky-400 mb-4"
                  >
                    {getValue(
                      item,
                      `new_csr_title_${lang}` as keyof NewCrsData
                    )}
                  </Link>

                  <a
                    href="#"
                    className="mt-auto w-full bg-gradient-to-r from-sky-500 to-green-300 hover:from-green-300 hover:to-sky-500 text-white font-medium rounded p-2 transition duration-300 ease-in-out cursor-pointer"
                  >
                    {getValue(
                      item,
                      `new_csr_title_${lang}` as keyof NewCrsData
                    )}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
