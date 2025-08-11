"use client";

import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
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
    <div className="bg-sky-50 py-30">
      <div className="container mx-auto px-4">
        <Link href="/" className="text-sky-500 hover:underline">
          ← Back
        </Link>
        <h1 className="text-4xl font-bold text-sky-700 mb-6">
          {getValue(data, `new_csr_header_${currentLang}` as keyof NewCrsData)}
        </h1>
        <Image
          src={data.new_csr_img || "/images/no-image.png"}
          alt="CSR Image"
          width={800}
          height={500}
          className="rounded-lg shadow-lg mb-6 mx-auto"
        />
        <h2 className="text-2xl font-semibold text-sky-600 mb-4">
          {getValue(data, `new_csr_title_${currentLang}` as keyof NewCrsData)}
        </h2>
        <p className="text-lg leading-relaxed text-gray-700 whitespace-pre-line">
          {getValue(data, `new_csr_detail_${currentLang}` as keyof NewCrsData)}
        </p>
      </div>
    </div>
  );
}
