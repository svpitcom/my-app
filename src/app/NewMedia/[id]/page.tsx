"use client"; // 👈 ทำให้เป็น Client Component

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

type NewmediaItem = {
  id: number;
  borard_header: string;
  borad_title: string;
  borad_button: string;
  borad_img: string;
};

export default function NewmediaDetailClient() {
  const params = useParams();
  const [data, setData] = useState<NewmediaItem | null>(null);

  useEffect(() => {
    const id = params.id;
    if (!id) return;

    fetch(`/api/newmedia/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Not Found");
        return res.json();
      })
      .then(setData)
      .catch(() => setData(null));
  }, [params.id]);

  if (!data) return <div className="p-8 text-red-500">ไม่พบข้อมูล</div>;

  return (
    <div className="p-30">
      <h1 className="text-3xl font-bold text-sky-700">{data.borard_header}</h1>
      <p className="text-lg text-gray-600 mb-4">{data.borad_title}</p>
      <img
        src={data.borad_img}
        alt={data.borad_title}
        className="rounded mb-6 w-96"
      />
    </div>
  );
}
