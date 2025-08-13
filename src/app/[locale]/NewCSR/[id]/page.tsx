"use client";

import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import Carousel from "@/components/Carousel";
// import Image from "next/image";

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
  new_csr_img_01: string;
  new_csr_img_02: string;
  new_csr_img_03: string;
  new_csr_img_04: string;
  created_at: string;
};

function getValue(obj: NewCrsData, key: keyof NewCrsData): string {
  return (obj[key] as string) ?? "";
}

export default function NewCSRDetail() {
  const params = useParams();
  const searchParams = useSearchParams();
  const { lang } = useLanguage();
  const [data, setData] = useState<NewCrsData | null>(null);

  const id = params.id;
  const currentLang = searchParams.get("lang") || lang;

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/newcsr/${id}?lang=${currentLang}`);
      const json = await res.json();
      setData(json.data);
    };
    fetchData();
  }, [id, currentLang]);

  if (!data) return <div className="text-center py-20">Loading...</div>;

  return (
    <div className="bg-gradient-to-br from-sky-600 to-green-500 py-30 px-20">
      <div className="container mx-auto p-6 bg-white rounded-sm">
        <Link
          href="/NewCSR"
          className="text-sky-500 hover:underline block mb-4"
        >
          ← {currentLang === "th" ? "ย้อนกลับ" : "Back"}
        </Link>
        <h1 className="text-4xl font-bold text-sky-700 mb-6">
          {getValue(data, `new_csr_header_${currentLang}` as keyof NewCrsData)}
        </h1>
        <Carousel
          images={[
            data.new_csr_img,
            data.new_csr_img_01,
            data.new_csr_img_02,
            data.new_csr_img_03,
            data.new_csr_img_04,
          ].filter((img) => img && img.trim() !== "")}
        />
        <h2 className="text-2xl font-semibold text-sky-600 mb-4 px-36">
          {getValue(data, `new_csr_title_${currentLang}` as keyof NewCrsData)}
        </h2>
        <p className="text-lg leading-relaxed text-gray-700 whitespace-pre-line px-36">
          {getValue(data, `new_csr_detail_${currentLang}` as keyof NewCrsData)}
        </p>
      </div>
    </div>
  );
}
