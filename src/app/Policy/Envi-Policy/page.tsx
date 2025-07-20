import React from "react";
import Image from "next/image";

export default function page() {
  return (
    <div className="flex flex-col justify-center bg-white text-xl text-center item-center">
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
          ประกาศ นโยบายสิ่งแวดล้อม (Environmental policy)
        </h1>
        <p className="col-start-2 col-end-6 p-2">
          บริษัท เอส วีโพลิเมอร์ จำกัด
          ตระหนักถึงความรับผิดชอบต่อสังคมและมีพันธกิจเป็นโรงงานที่เป็นมิตรต่อสิ่งแวดล้อม
          จึงได้จัดทำระบบบริหารจัดการสิ่งแวดล้อม (มาตรฐาน ISO14001)
          เป็นพื้นฐานการปฏิบัติงาน โดยมีความมุ่งมั่นดังนี้ SV Polymer Company
          Limited is aware of social responsibility and has a mission to be an
          environmentally friendly factory. Therefore, an environmental
          management system (ISO14001 standard) has been established as the
          basis for operations with the following commitments:
        </p>
        <ul className="col-start-2 col-end-6 p-2">
          <li>
            1.ปฏิบัติตามกฎหมาย กฎระเบียบ และข้อกำหนดด้านสิ่งแวดล้อม (Comply with
            environmental laws, regulations, and requirements.)
          </li>
          <li>
            2.ปกป้องสิ่งแวดล้อม ป้องกันมลภาวะ และลดผลกระทบสิ่งแวดล้อมที่เกิดจาก
            กิจกรรมการดำเนินงานขององค์กรทั้งทางตรงและทางอ้อม (Protect the
            environment Prevent pollution and reduce environmental impacts
            caused by the organizations operating activities, both direct and
            indirect.)
          </li>
          <li>
            3.ปรับปรุงและพัฒนาระบบบริหารจัดการสิ่งแวดล้อมอย่างต่อเนื่อง
            (Continuously improve and develop the environmental management
            system.)
          </li>
          <li>
            4.ใช้ทรัพยากรและพลังงานอย่างคุ้มค่าและเกิดประโยชน์สูงสุด (Use
            resources and energy in the most worthwhile and beneficial manner.)
          </li>
          <li>
            5.ส่งเสริมการดำเนินงานในองค์กรที่เป็นมิตรต่อสิ่งแวดล้อม
            รวมถึงสื่อสารข้อมูลกับชุมชน
            ผู้มีส่วนได้ส่วนเสียเพื่อสร้างความตระหนักด้านสิ่งแวดล้อม (Promote
            environmentally friendly operations in organizations including
            communicating information to the community Stakeholders to create
            environmental awareness)
          </li>
        </ul>

        <p className="text-center col-start-2 col-end-6 p-2">
          โดยได้ทบทวนปรับปรุงนโยบายแล้ว จึงขอประกาศให้ทราบโดยทั่วกัน (The policy
          has been reviewed and improved.)
        </p>
        <p className="text-center col-start-2 col-end-6 p-2">
          จึงประกาศมาเพื่อทราบโดยทั่วกัน ประกาศ ณ วันที่ 15-10-2567
        </p>
      </div>
    </div>
  );
}
