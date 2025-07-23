import React from "react";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";

export default function QualityPolicy() {
  return (
    <div className="flex flex-col justify-center text-center bg-gradient-to-r from-sky-500 to-green-300 text-black items-center py-24 px-4 sm:px-10">
      <div className="bg-white rounded-xl w-full max-w-5xl px-4 sm:px-10 py-8">
        <Breadcrumb />
        <div className="flex justify-center items-center mb-6">
          <Image
            src="/assets/imgs/LogoSVP.png"
            alt="Company Logo"
            width={200}
            height={120}
            className="h-auto w-auto max-w-[60%] sm:max-w-none"
          />
        </div>
        <div className="text-left grid grid-cols-1 sm:grid-cols-6 gap-4 text-sm sm:text-base">
          <h1 className="sm:col-span-4 sm:col-start-2 text-center text-lg sm:text-xl font-semibold">
            ประกาศ นโยบายคุณภาพ (Quality policy)
          </h1>
          <p className="sm:col-start-2 sm:col-end-6 p-2 leading-relaxed">
            บริษัท เอส วี โพลิเมอร์ จำกัด
            มีความมุ่งมั่นในการดำเนินธุรกิจแปรรูปยางธรรมชาติ
            โดยใช้เทคโนโลยีที่ทันสมัย เพื่อให้สินค้ามีคุณภาพ
            บริษัทฯได้นำระบบบริหารจัดการคุณภาพ ISO 9001
            มาประยุกต์ใช้เพื่อให้เกิดการทำงานที่เป็นมาตรฐานสากล
            พร้อมยกระดับมาตรฐาน และพัฒนาให้องค์กรเติบโตอย่างต่อเนื่อง SV Polymer
            Company Limited is committed to conducting natural rubber processing
            business. Using modern technology to have quality products. The
            company has applied the ISO 9001 quality management system to
            achieve international standard work. Ready to raise standards and
            develop the organization to grow continuously จึงขอประกาศ
            นโยบายคุณภาพ
            เพื่อเป็นกรอบและแนวทางในการดำเนินงานแก่พนักงานทุกระดับดังนี้
            Therefore, we would like to announce our quality policy. To provide
            a framework and operational guidelines for employees at all levels
            as follows:
          </p>
          <ul className="sm:col-start-2 sm:col-end-6 p-2 space-y-2 list-disc list-inside">
            <li>
              1 มุ่งมั่นผลิตสินค้าที่มีคุณภาพ ส่งมอบตรงเวลา (Committed to
              producing quality products delivered on time)
            </li>
            <li>
              2 สร้างความพึงพอใจสูงสุดแก่ลูกค้าอย่างต่อเนื่อง (Continuously
              create maximum satisfaction for customers.)
            </li>
            <li>
              3 ปรับปรุงและพัฒนาระบบบริหารจัดการคุณภาพ รวมถึงระบบการผลิตต่างๆ
              อย่างต่อเนื่องเพื่อให้สอดคล้องต่อเป้าหมายองค์กร (Improve and
              develop the quality management system including various production
              systems continuously to be consistent with the goals)
            </li>
            <li>
              4
              ส่งเสริมความตระหนักด้านคุณภาพและพัฒนาศักยภาพบุคลากรให้เติบโตไปพร้อมองค์กรอย่างต่อเนื่อง
              (Promote quality awareness and develop the potential of personnel
              to continuously grow with the organization.)
              โดยได้ทบทวนปรับปรุงนโยบายแล้ว จึงขอประกาศให้ทราบโดยทั่วกัน (The
              policy has been reviewed and improved. Therefore, we would like to
              announce this for everyone to know.)
            </li>
          </ul>
          <p className="sm:col-start-2 sm:col-end-6 p-2 space-y-2 list-disc list-inside">
            จึงประกาศมาเพื่อทราบโดยทั่วกัน ประกาศ ณ วันที่ 15-10-2567
          </p>
        </div>
      </div>
    </div>
  );
}
