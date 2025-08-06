"use client";

import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import Link from "next/link";
import { useEffect, useState } from "react";

interface HomeData {
  home_id: number;
  home_title_th?: string;
  home_title_en?: string;
  home_detail_01_th?: string;
  home_detail_01_en?: string;
  home_detail_02_th?: string;
  home_detail_02_en?: string;
  home_detail_03_th?: string;
  home_detail_03_en?: string;
}

const imageList = [
  "/assets/imgs/209044.png",
  "/assets/imgs/209045.png",
  "/assets/imgs/209046.png",
  "/assets/imgs/209047.png",
];

export default function HomeClient() {
  const [items, setItems] = useState<HomeData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // const [t, setT] = useState<any>({
  //   cards: [],
  //   readMore: "อ่านเพิ่มเติม",
  // });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/home");
        const json = await res.json();

        if (!res.ok) throw new Error(json.error || "Failed to fetch");

        setItems(json.data);
      } catch (err: any) {
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    // สมมติ fetch dictionary ด้วย
    const fetchDictionary = async () => {
      // const dict = await getDictionary("th");
      const dict = {
        cards: [
          {
            title: "การบริการ",
            subtitle: "รายละเอียดบริการ",
            link: "/services",
          },
          {
            title: "เกี่ยวกับเรา",
            subtitle: "รายละเอียดบริษัท",
            link: "/about",
          },
        ],
        readMore: "อ่านเพิ่มเติม",
      };
      // setT(dict);
    };

    fetchData();
    fetchDictionary();
  }, []);

  if (loading) return <p>กำลังโหลดข้อมูล...</p>;
  if (error) return <p className="text-red-600">เกิดข้อผิดพลาด: {error}</p>;

  return (
    <div className="min-h-screen w-full flex flex-col">
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
      {items.map((item) => (
        <div
          key={item.home_id}
          className="bg-white text-black py-12 px-4 sm:px-6 text-center"
        >
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
            {item.home_title_en}
          </h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-base sm:text-lg md:text-xl text-sky-700 font-bold mb-4">
              {item.home_detail_01_en}
            </p>
            <p className="text-sm sm:text-base md:text-lg mb-4 text-balance">
              {item.home_detail_02_en}
            </p>
            <p className="text-sm sm:text-base md:text-lg mb-4 text-balance">
              {item.home_detail_03_en}
            </p>
          </div>
        </div>
      ))}

      {/* Images */}
      <AnimateOnScroll>
        <div className="bg-gradient-to-br from-sky-600 to-green-500 flex flex-wrap justify-center gap-4 px-4 py-8">
          {imageList.map((src, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/4 px-2">
              <Image
                src={src}
                alt={`Company image ${index + 1}`}
                width={500}
                height={500}
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
            </div>
          ))}
        </div>
      </AnimateOnScroll>

      {/* Cards */}
      <AnimateOnScroll>
        <div className="bg-sky-50 flex flex-wrap justify-center gap-6 px-4 py-12">
          {/* {t.cards.map((card: any, index: number) => ( */}
            <div
              // key={index}
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
                href="/"
                className="font-bold text-xl md:text-2xl text-sky-600 hover:text-sky-400"
              >
                {/* {card.title} */}
              </Link>
              <Link
                href="/"
                className="font-semibold text-base md:text-lg text-sky-600 hover:text-sky-400"
              >
                {/* {card.subtitle} */}
              </Link>
              <a
                className="bg-sky-700 text-base md:text-lg w-full hover:bg-blue-800 text-white rounded p-2 mt-2"
                href="/"
              >
                HelloWorld
              </a>
            </div>
          {/* ))} */}
        </div>
      </AnimateOnScroll>
    </div>
  );
}
