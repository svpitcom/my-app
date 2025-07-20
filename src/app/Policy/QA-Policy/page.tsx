import React from "react";
import Image from "next/image";

export default function QualityPolicy() {
  return (
    <div className="flex flex-col justify-center bg-white text-xl item-center">
      <div className="flex justify-center items-center mb-4">
        <Image
          src="/assets/imgs/LogoSVP.png"
          alt="Company Logo"
          width={240}
          height={160}
        />
      </div>
      <div className="text-left grid grid-cols-6 gap-4">
        <h1 className="col-span-4 col-start-2">
          ประกาศ นโยบายคุณภาพ (Quality policy)
        </h1>
        <p className="col-start-2 col-end-6 p-2">
          บริษัท เอส วี โพลิเมอร์ จำกัด
          มีความมุ่งมั่นในการดำเนินธุรกิจแปรรูปยางธรรมชาติ
          โดยใช้เทคโนโลยีที่ทันสมัย เพื่อให้สินค้ามีคุณภาพ
          บริษัทฯได้นำระบบบริหารจัดการคุณภาพ ISO 9001
          มาประยุกต์ใช้เพื่อให้เกิดการทำงานที่เป็นมาตรฐานสากล
          พร้อมยกระดับมาตรฐาน และพัฒนาให้องค์กรเติบโตอย่างต่อเนื่อง SV Polymer
          Company Limited is committed to conducting natural rubber processing
          business. Using modern technology to have quality products. The
          company has applied the ISO 9001 quality management system to achieve
          international standard work. Ready to raise standards and develop the
          organization to grow continuously จึงขอประกาศ นโยบายคุณภาพ
          เพื่อเป็นกรอบและแนวทางในการดำเนินงานแก่พนักงานทุกระดับดังนี้
          Therefore, we would like to announce our quality policy. To provide a
          framework and operational guidelines for employees at all levels as
          follows:
        </p>
        <ul className="col-start-2 col-end-6 p-2">
          <li>
            1 มุ่งมั่นผลิตสินค้าที่มีคุณภาพ ส่งมอบตรงเวลา (Committed to
            producing quality products delivered on time)
          </li>
          <li>
            2 สร้างความพึงพอใจสูงสุดแก่ลูกค้าอย่างต่อเนื่อง (Continuously create
            maximum satisfaction for customers.)
          </li>
          <li>
            3 ปรับปรุงและพัฒนาระบบบริหารจัดการคุณภาพ รวมถึงระบบการผลิตต่างๆ
            อย่างต่อเนื่องเพื่อให้สอดคล้องต่อเป้าหมายองค์กร (Improve and develop
            the quality management system including various production systems
            continuously to be consistent with the goals)
          </li>
          <li>
            4
            ส่งเสริมความตระหนักด้านคุณภาพและพัฒนาศักยภาพบุคลากรให้เติบโตไปพร้อมองค์กรอย่างต่อเนื่อง
            (Promote quality awareness and develop the potential of personnel to
            continuously grow with the organization.)
            โดยได้ทบทวนปรับปรุงนโยบายแล้ว จึงขอประกาศให้ทราบโดยทั่วกัน (The
            policy has been reviewed and improved. Therefore, we would like to
            announce this for everyone to know.)
          </li>
        </ul>
        <p className="col-start-2 col-end-6 p-2">
          จึงประกาศมาเพื่อทราบโดยทั่วกัน ประกาศ ณ วันที่ 15-10-2567
        </p>
      </div>
    </div>
  );
}
