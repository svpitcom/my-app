"use client";
import { useState } from "react";
import React from "react";
import Image from "next/image";

const DataJob = [
  {
    id: 1,
    label: "ผช.ผจก.ฝ่ายบุคคลและธุรการ ประจำที่อุตรดิตถ์",
    description:
      "รายละเอียดงาน: รับผิดชอบการจัดซื้อ จัดหาและประสานงานกับผู้ขาย",
    detail:
      "คุณสมบัติ ไม่จำกัดเพศ อายุ 28 ปีขึ้นไป ปริญาตรี หรือ ปริญญาโท สาขาบริหารธุรกิจ หรือสาขาที่กี่ยวข้อง",
  },
  {
    id: 2,
    label: "พนักงานสนับสนุน (LAB)",
    description:
      "รายละเอียดงาน: ตรวจสอบคุณภาพและจัดทำรายงานผลการทดสอบในห้อง LAB",
    detail:
      "คุณสมบัติ ไม่จำกัดเพศ อายุ 28 ปีขึ้นไป ปริญาตรี หรือ ปริญญาโท สาขาบริหารธุรกิจ หรือสาขาที่กี่ยวข้อง",
  },
  {
    id: 3,
    label: "เจ้าหน้าที่คลังสินค้า",
    description: "รายละเอียดงาน: ควบคุมสต๊อกสินค้า และดูแลการจัดส่ง",
    detail:
      "คุณสมบัติ ไม่จำกัดเพศ อายุ 28 ปีขึ้นไป ปริญาตรี หรือ ปริญญาโท สาขาบริหารธุรกิจ หรือสาขาที่กี่ยวข้อง",
  },
];

export default function JobOpportunity() {
  const [selected, setSelected] = useState<number>(DataJob[0].id);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Banner Section */}
      <div className="bg-[url('/assets/imgs/svp-office-tree.jpg')] bg-cover bg-center text-white w-full relative">
        <div className="flex flex-col text-center items-center justify-center bg-white/50 w-full h-full py-20">
          <Image
            src="/assets/imgs/LogoSVP.png"
            alt="LogoSVP"
            width={180}
            height={180}
            className="mb-4"
          />
        </div>
      </div>

      {/* Title */}
      <div className="text-center py-8 bg-sky-50">
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-500">
          ตำแหน่งว่าง
        </h1>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row gap-6 p-6 md:p-10">
        {/* Left: Buttons */}
        <div className="flex-1 space-y-4">
          {DataJob.map((dtj) => (
            <button
              key={dtj.id}
              onClick={() => setSelected(dtj.id)}
              className={`flex items-center justify-between w-full px-4 py-3 rounded-full shadow transition duration-200
              ${
                selected === dtj.id
                  ? "bg-gradient-to-r from-blue-600 to-green-700 text-white"
                  : "bg-white text-blue-700 border border-gray-300"
              }`}
            >
              <span className="font-bold">{dtj.label}</span>
              <span
                className={`flex items-center justify-center w-8 h-8 rounded-full
                ${
                  selected === dtj.id
                    ? "bg-white"
                    : "bg-gradient-to-r from-blue-600 to-green-700"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 ${
                    selected === dtj.id ? "text-blue-600" : "text-white"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </button>
          ))}
        </div>

        {/* Right: Job Details */}
        {selected && (
          <div className="flex-1 bg-gradient-to-br from-sky-600 to-green-500 text-white rounded-xl shadow p-6 transition-all duration-300">
            <h2 className="text-2xl font-bold mb-4">
              {DataJob.find((dtj) => dtj.id === selected)?.label}
            </h2>
            <p className="text-lg">
              {DataJob.find((dtj) => dtj.id === selected)?.description}
            </p>
            <p className="text-lg">
              {DataJob.find((dtj) => dtj.id === selected)?.detail}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
