"use client";
import React from "react";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";

export default function Page() {
  return (
    <div className="flex flex-col justify-center text-center item-center bg-gradient-to-r from-sky-500 to-green-300 text-black items-center py-24 px-4 sm:px-10">
      <div className="bg-white rounded-xl w-full max-w-5xl px-4 sm:px-10 py-8">
        <Breadcrumb />
        {/* โลโก้ */}
        <div className="flex justify-center items-center mb-6">
          <Image
            src="/assets/imgs/LogoSVP.png"
            alt="Company Logo"
            width={200}
            height={120}
            priority
          />
        </div>

        {/* เนื้อหา */}
        <div className="text-left space-y-6">
          <h1 className="text-xl font-bold text-center sm:text-2xl">
            ประกาศ นโยบายสิ่งแวดล้อม (Environmental policy)
          </h1>

          <p className="text-base leading-relaxed">
            บริษัท เอส วีโพลิเมอร์ จำกัด
            ตระหนักถึงความรับผิดชอบต่อสังคมและมีพันธกิจเป็นโรงงานที่เป็นมิตรต่อสิ่งแวดล้อม
            จึงได้จัดทำระบบบริหารจัดการสิ่งแวดล้อม (มาตรฐาน ISO14001)
            เป็นพื้นฐานการปฏิบัติงาน โดยมีความมุ่งมั่นดังนี้ SV Polymer Company
            Limited is aware of social responsibility and has a mission to be an
            environmentally friendly factory. Therefore, an environmental
            management system (ISO14001 standard) has been established as the
            basis for operations with the following commitments:
          </p>

          <ul className="list-decimal list-inside space-y-2 text-base leading-relaxed">
            <li>
              ปฏิบัติตามกฎหมาย กฎระเบียบ และข้อกำหนดด้านสิ่งแวดล้อม (Comply with
              environmental laws, regulations, and requirements.)
            </li>
            <li>
              ปกป้องสิ่งแวดล้อม ป้องกันมลภาวะ และลดผลกระทบสิ่งแวดล้อมที่เกิดจาก
              กิจกรรมขององค์กรทั้งทางตรงและทางอ้อม (Protect the environment...)
            </li>
            <li>
              ปรับปรุงและพัฒนาระบบบริหารจัดการสิ่งแวดล้อมอย่างต่อเนื่อง
              (Continuously improve...)
            </li>
            <li>
              ใช้ทรัพยากรและพลังงานอย่างคุ้มค่าและเกิดประโยชน์สูงสุด (Use
              resources wisely...)
            </li>
            <li>
              ส่งเสริมองค์กรที่เป็นมิตรต่อสิ่งแวดล้อม รวมถึงสื่อสารกับชุมชน
              และผู้มีส่วนได้ส่วนเสีย (Promote environmental awareness...)
            </li>
          </ul>

          <p className="text-center">
            โดยได้ทบทวนปรับปรุงนโยบายแล้ว จึงขอประกาศให้ทราบโดยทั่วกัน (The
            policy has been reviewed and improved.)
          </p>
          <p className="text-center font-medium">
            จึงประกาศมาเพื่อทราบโดยทั่วกัน ประกาศ ณ วันที่ 15-10-2567
          </p>
        </div>
      </div>
    </div>
  );
}
