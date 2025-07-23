import React from "react";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";

export default function GreenhouseGasManagement() {
  return (
    <div className="flex flex-col justify-center text-center bg-gradient-to-r from-sky-500 to-green-300 text-black items-center py-24 px-4 sm:px-10">
      <div className="bg-white rounded-lg w-full max-w-5xl p-4">
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
        <div className="text-left grid grid-cols-1 sm:grid-cols-6 gap-4 text-sm sm:text-base leading-relaxed">
          <h1 className="sm:col-span-4 sm:col-start-2 text-center text-lg sm:text-xl font-semibold mb-4">
            ประกาศนโยบาย เรื่อง การจัดการก๊าซเรือนกระจกและอนุรักษ์พลังงาน
          </h1>

          <p className="sm:col-start-2 sm:col-end-6 p-2">
            ด้วยคณะผู้บริหารมีความตระหนักถึงการมีส่วนร่วมแก้ไขปัญหาการเปลี่ยนแปลงสภาพภูมิอากาศ
            (climate change)
            จึงมุ่งมั่นผลักดันให้องค์กรมีส่วนร่วมในการลดก๊าซเรือนกระจก...
          </p>

          <ul className="sm:col-start-2 sm:col-end-6 p-2 list-decimal list-inside space-y-2">
            <li>
              ส่งเสริมการใช้พลังงานทดแทนหรือพลังงานสะอาด
              ในการผลิตและการดำเนินงานภายในองค์กร
            </li>
            <li>
              ปรับปรุงและพัฒนากระบวนการผลิตและกิจกรรมการดำเนินงานให้มีประสิทธิภาพ
              เพื่อลดความสิ้นเปลือง ใช้ทรัพยากรอย่างคุ้มค่า และนำกลับมาใช้ใหม่
              (Reduce - Reuse - Recycle)
            </li>
            <li>
              ลดการปล่อยก๊าซเรือนกระจกทั้งทางตรงและทางอ้อม
              จากกิจกรรมการผลิตและการดำเนินงานต่างๆ
            </li>
            <li>
              สร้างความตระหนัก ส่งเสริมให้พนักงานมีส่วนร่วมในการเสนอแนะ
              ที่เป็นประโยชน์ต่อการจัดการก๊าซเรือนกระจกและอนุรักษ์พลังงาน
            </li>
          </ul>

          <p className="sm:col-start-2 sm:col-end-6 p-2">
            เพื่อให้นโยบายฉบับนี้นำไปใช้เป็นแนวทางในการปฏิบัติอย่างเป็นรูปธรรม
            จึงได้กำหนดเป้าหมายการลดก๊าซเรือนกระจกและพลังงานในทุกๆ ปี
            พร้อมมอบหมายให้คณะทำงานขับเคลื่อน และพนักงานทุกคนร่วมมือ
            ปฏิบัติเป็นส่วนหนึ่งของวัฒนธรรมองค์กร
          </p>
        </div>
      </div>
    </div>
  );
}
