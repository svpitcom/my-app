"use client";
import { useState } from "react";
import React from "react";
import Image from "next/image";

const DataJob = [
  {
    id: 1,
    header: "ผช.ผจก.ฝ่ายบุคคลและธุรการ ประจำที่อุตรดิตถ์",
    description: "รายละเอียด",
    dsti: "*สรรหาว่าจ้าง",
    dstii: "*ค่าจ้างค่าตอบแทน",
    dstiii: "*งานด้านแรงงานสัมพันธ์",
    dstiv: "*บริหารงานบุคคล",
    dstv: "*งานสโตร์",
    dstvi: "*งานจัดซื้อทั่วไป",
    dstvii: "*ISO9001 / 14001",
    dstviii: "*กฏหมายที่เกี่ยวข้องกับแรงงาน",
    dstviv: "*งานอื่นๆ ที่ได้รับมอบหมาย",
    detail: "คุณสมบัติ",
    dti: "ปริญญาตรีสาขา บริหารทรัพยากรมนุษย์ หรือสาขาที่เกี่ยวข้อง",
    dtii: "อายุ 30 ปี ขึ้นไป มีประสบการณ์ด้านงานบุคคล ธุรการ ในโรงงานอุตสาหกรรม อย่างน้อย 3 ปี",
    dtiii: "มีทักษะในการสื่อสารที่ดี (สื่อสารเชิงบวก) ทัศนะคติเชิงบวก",
    dtiv: "มีความรู้ในงานประกันสังคม",
    dtv: "มีความรู้ในกฏหมายแรงงาน",
    dtvi: "มีความรู้เกี่ยวกับ ISO9001, ISO14001 จะได้รับการพิจารณาเป็นพิเศษ",
    dtvii: "มีประสบการณ์ด้านงานบุคคล จัดซื้อ สโตร์ จะพิจารณาเป็นพิเศษ",
    dtviii: "มนุษยสัมพันธ์ที่ดี ทำงานเป็นทีม ใจบริการ",
    dtviv: "**สามารถใช้โปรแกรม B plus ในระดับที่ดี**",
  },
  {
    id: 2,
    header: "จัดซื้อทั่วไป , จัดซื้อวัตถุดิบ ประจำสาขาอุตรดิตถ์",
    description: "รายละเอียด",
    dsti: "*สรรหา เปรียบเทียบราคาและต่อรองราคากับ Supplier",
    dstii: "*วางแผนการทำงานและตรวจสอบใบสั่งซื้อจากแผนกต่างๆ",
    dstiii: "*ดูแลจัดการออกใบสั่งซื้อ / ใบจัดจ้าง",
    dstiv: "*ประสานงานระหว่าง Supplier กับหน่วยงานที่เกี่ยวข้อง",
    dstv: "*ตรวจสินค้าคงเหลือ เพื่อทำการวางแผนการสั่งซื้อสินค้า",
    dstvi: "",
    dstvii: "",
    dstviii: "",
    dstviv: "",
    detail: "คุณสมบัติ",
    dti: "เพศหญิง",
    dtii: "อายุไม่เกิน 30ปี",
    dtiii: "จบการศึกษาปริญญาตรีขึ้นไป สาขาที่เกี่ยวข้อง",
    dtiv: "มีประสบการณ์การจัดซื้อ/จัดจ้าง สินค้าประเภทกลุ่มโรงงานอุตสาหกรรม",
    dtv: "มีทักษะการสื่อสาร การประสานงานและรายงานผล",
    dtvi: "มีความกระตืนรือล้นในการทำงาน มีความรับผิดชอบในหน้าที่เป็นอย่างดี",
    dtvii: "มีประสบการณ์การจัดซื้อวัตถุดิบ",
    dtviii: "",
    dtviv: "",
  },
  {
    id: 3,
    header: "Safety officer ประจำสาขาอุตรดิถต์",
    description: "รายละเอียด",
    dsti: "*ตรวจสอบความปลอดภัย/สิ่งแวดล้อม ก่อนเริ่มงานและระหว่างปฎิบัติงาน",
    dstii:
      "*การวิเคราะห์งาน ชี้บ่งอันตราย สําหรับตรวจสอบหรือส่งข้อมูลให้ลูกค้า ในการประเมินความเสี่ยงและนําผลจากการประเมินความเสี่ยงมาจัดลําดับและจัดทําแผนควบคุมตามหัวข้อเสนอต่อนายจ้างให้มีการพัฒนาอย่างต่อเนื่อง",
    dstiii:
      "*บันทึก วิเคราะห์ จัดทํารายงาน ในส่วนของสถิติต่างๆที่เกี่ยวกับ กิจกรรม ความปลอดภัยและสภาพแวดล้อมในการทํางาน",
    dstiv: "*สุ่มตรวจควมพร้อมของอุปกรณ์และพนักงาน",
    dstv: "*ซ้อมแผนฉุกเฉินต่างๆตามแผน SSHE และส่งรายงานให้ลูกค้า",
    dstvi: "*สนับสนุนลูกค้าในเรื่องของความปลอดภัยและสภาพแวดล้อมในการทํางาน",
    dstvii:
      "*แนะนํานายจ้างให้ดําเนินการและพัฒนาเรื่องของความปลอดภัยและสภาพแวดล้อมในการทํางานให้สอดคล้องตามกฎหมาย",
    dstviii: "",
    dstviv: "",
    detail: "คุณสมบัติ",
    dti: "เพศหญิง",
    dtii: "อายุ 25-35 ปี",
    dtiii:
      "วุฒิการศึกษาปริญญาตรี สาขาอาชีวอนามัยและความปลอดภัย หรือคณะที่สามารถขึ้นทะเบียนเป็น จป.วิชาชีพได้",
    dtiv: "สามารถใช้โปรแกรม MS Office และ Internet ได้เป็นอย่างดี",
    dtv: "มีความรู้ เกี่ยวกับกฎหมายความปลอดภัย และกฎหมายหรือข้อบังคับอื่นๆ ที่เกี่ยวข้อง",
    dtvi: "สามารถแนะนำ ให้ความรู้ หรือถ่ายทอด เกี่ยวกับความปลอดภัยในการทำงานกับพนักงานได้",
    dtvii: "",
    dtviii: "",
    dtviv: "",
  },
];

export default function JobOpportunity() {
  const [selected, setSelected] = useState<number>(DataJob[0].id);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Banner Section */}
      <div className="bg-[url('/assets/imgs/svp-office-tree.jpg')] bg-cover bg-center text-white w-full relative">
        <div className="flex flex-col text-center items-center justify-center bg-white/50 w-full h-full py-28">
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
      <div className="text-center py-8 bg-gradient-to-br from-sky-600 to-green-500">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          ตำแหน่งว่าง
        </h1>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row gap-6 p-6 md:p-10 bg-white">
        {/* Left: Buttons */}
        <div className="flex-1 space-y-4 ">
          {DataJob.map((dtj) => (
            <button
              key={dtj.id}
              onClick={() => setSelected(dtj.id)}
              className={`flex items-center justify-between w-full px-4 py-3 rounded-full shadow transition duration-200 cursor-pointer
              ${
                selected === dtj.id
                  ? "bg-gradient-to-br from-sky-600 to-green-500 text-white"
                  : "bg-white text-blue-700 border border-gray-300"
              }`}
            >
              <span className="font-bold">{dtj.header}</span>
              <span
                className={`flex items-center justify-center w-8 h-8 rounded-full
                ${
                  selected === dtj.id
                    ? "bg-white"
                    : "bg-gradient-to-br from-sky-600 to-green-500"
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
              {DataJob.find((dtj) => dtj.id === selected)?.header}
            </h2>
            <p className="text-lg font-semibold py-4">
              {DataJob.find((dtj) => dtj.id === selected)?.description}
            </p>
            <p className="text-lg">
              {DataJob.find((dtj) => dtj.id === selected)?.dsti}
            </p>
            <p className="text-lg">
              {DataJob.find((dtj) => dtj.id === selected)?.dstii}
            </p>
            <p className="text-lg">
              {DataJob.find((dtj) => dtj.id === selected)?.dstiii}
            </p>
            <p className="text-lg">
              {DataJob.find((dtj) => dtj.id === selected)?.dstiv}
            </p>
            <p className="text-lg">
              {DataJob.find((dtj) => dtj.id === selected)?.dstv}
            </p>
            <p className="text-lg">
              {DataJob.find((dtj) => dtj.id === selected)?.dstvi}
            </p>
            <p className="text-lg font-semibold py-4">
              {DataJob.find((dtj) => dtj.id === selected)?.detail}
            </p>
            <p className="text-lg">
              {DataJob.find((dtj) => dtj.id === selected)?.dti}
            </p>
            <p className="text-lg">
              {DataJob.find((dtj) => dtj.id === selected)?.dtii}
            </p>
            <p className="text-lg">
              {DataJob.find((dtj) => dtj.id === selected)?.dtiii}
            </p>
            <p className="text-lg">
              {DataJob.find((dtj) => dtj.id === selected)?.dtiv}
            </p>
            <p className="text-lg">
              {DataJob.find((dtj) => dtj.id === selected)?.dtv}
            </p>
            <p className="text-lg">
              {DataJob.find((dtj) => dtj.id === selected)?.dtvi}
            </p>
            <p className="text-lg">
              {DataJob.find((dtj) => dtj.id === selected)?.dtvii}
            </p>
            <p className="text-lg">
              {DataJob.find((dtj) => dtj.id === selected)?.dtviii}
            </p>
            <p className="text-lg">
              {DataJob.find((dtj) => dtj.id === selected)?.dtviv}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
