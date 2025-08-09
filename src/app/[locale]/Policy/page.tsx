import React from "react";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import ImagePopup from "@/components/ImagepopUp";

export default function Policy() {
  return (
    <div className="bg-cover bg-center h-full w-full">
      <div className="bg-[url('/assets/imgs/HomeOffice.png')] bg-cover bg-center bg-radial text-white h-full">
        <div className="flex flex-col text-center items-center px-4 py-30">
          <Image
            src="/assets/imgs/AW_LOGO_SVP [Final] + Stroke-01.png"
            alt="LogoSVP"
            width={260}
            height={260}
            className="mb-4"
          />
          <h1 className="text-4xl md:text-6xl font-bold py-2">Policy</h1>
          <h1
            className="text-lg md:text-4xl font-black uppercase text-sky-700 mt-2"
            style={{
              WebkitTextStroke: "2px white",
              WebkitFontSmoothing: "antialiased",
            }}
          >
            SV Polymer Co., Ltd.
          </h1>

          <div className="mt-6 flex flex-col items-center gap-3 py-4 w-full px-2">
            {[
              { text: "นโยบาย EU-Deforestation", link: "/Policy/EU-Def" },
              {
                text: "SVP Sustainable Natural Rubber Policy 2022",
                link: "/Policy/SVP-Sus",
              },
              {
                text: "นโยบายด้านสิ่งแวดล้อม (Environmental Policy)",
                link: "/Policy/Envi-Policy",
              },
              {
                text: "นโยบายคุณภาพ (Quality Policy)",
                link: "/Policy/QA-Policy",
              },
              {
                text: "นโยบายการรักษาพลังงานและอนุรักษ์พลังงาน",
                link: "/Policy/GGM",
              },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="bg-gradient-to-br from-sky-600 to-green-500 hover:from-green-300 hover:to-sky-500 text-white px-4 py-2 rounded w-full max-w-sm text-sm md:text-base text-center"
              >
                {item.text}
              </a>
            ))}
          </div>
        </div>
      </div>

      <AnimateOnScroll>
        <div className="bg-gradient-to-br from-sky-600 to-green-500 text-white py-10 text-center px-4">
          <h1 className="text-3xl md:text-6xl font-bold mb-3">
            Energy Conservation Policy
          </h1>
          <p className="max-w-4xl mx-auto text-base md:text-xl">
            Energy is a valuable resource. The production of energy and its
            consumption has environmental impacts. The following policy is
            established as guidelines to conservation and promotes efficient use
            of energy.
          </p>
        </div>
      </AnimateOnScroll>

      <div className="bg-white/75 bg-cover bg-center ">
        <AnimateOnScroll>
          <div className="bg-white/60 bg-cover bg-center p-4">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 py-8">
              {[
                "CONTROL THE TEST OF ELECTRICTY AND FUEL USE TO ACCOMMODATE TO THE NATURE OF ENERGY CONSUMPTION OF THE COMPANY",
                "PROMOTE ENERGY-SAVING ACTIVITIES",
                "ESTABLISH TARGET OF ENERGY CONSUMPTION REDUCTION",
                "SUPPORT OPERATIONS AND DEVELOPMENT OF ENERGY MANAGEMENT SYSTEM",
              ].map((text, index) => (
                <div
                  key={index}
                  className="w-52 h-52 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-sky-600/60 to-green-500/60 text-white flex items-center justify-center text-center px-4"
                >
                  <div className="w-44 h-44 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-sky-600 to-green-500 text-white flex items-center justify-center text-xs md:text-base font-bold p-4">
                    {text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div className="flex mx-auto py-4 justify-center items-center bg-white rounded-lg w-full px-4">
            <div className="max-w-3xl text-center">
              <p className="text-sm md:text-xl text-gray-700 mb-4">
                Energy conservation is the responsibility of executives and
                employees of the Company to the extent that giving cooperation
                to comply with measures specified for monitoring and reporting
                in accordance with laws.
              </p>
              <h4 className="text-gray-700 text-xl md:text-4xl font-semibold mb-2">
                SV POLYMER COMPANY LIMITED
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed mb-2">
                บริษัท เอสวี โพลิเมอร์ จำกัด ให้ความสำคัญกับการรักษาสิ่งแวดล้อม
                <br />
                และมุ่งมั่นที่จะดำเนินธุรกิจควบคู่ไปกับการใช้ทรัพยากรอย่างมีประสิทธิภาพ
                <br />
                ลดผลกระทบที่เกิดจากการผลิต และการดำเนินงานอย่างต่อเนื่อง
              </p>
              <p className="text-xs text-gray-500 mt-4">
                นโยบายนี้ เริ่มใช้: วันที่ 5 สิงหาคม พ.ศ. 2564
              </p>
            </div>
          </div>
        </AnimateOnScroll>
        <div className="bg-gradient-to-br from-sky-600 to-green-500 text-white flex flex-row justify-center items-center gap-6 p-4 w-full">
          นโยบายสิ่งแวดล้อม บริษัท เอ็นเทค โพลิเมอร์ จำกัด
          ดำเนินธุรกิจด้านผลิตยางแท่ง
          ซึ่งตระหนักถึงความสำคัญของระบบบริหารงานด้านสิ่งแวดล้อม
          เพื่อการดำรงอยู่ และทำงานร่วมกัน เพื่อประโยชน์ของส่วนรวม
          จึงได้จัดตั้งระบบการบริหารงานด้านสิ่งแวดล้อม
          โดยผู้บริหารระดับสูงและพนักงานทุกคน
          มีความมุ่งมั่นที่จะปฏิบัติดังต่อไปนี้ ปฏิบัติตามกฎหมายและข้อกำหนดต่างๆ
          ทางด้านสิ่งแวดล้อมและกฎหมายระหว่างประเทศ รวมถึงข้อกำหนดอื่นๆ
          ที่เกี่ยวข้อง เช่น ข้อกำหนดของลูกค้า ข้อกำหนดการจัดการด้านสิ่งแวดล้อม
          เป็นต้น มีความมุ่งมั่นในการปกป้องสิ่งแวดล้อมรวมถึงป้องกันมลพิษ
          และความมุ่งมั่นเฉพาะอื่นๆ ที่เกี่ยวข้องกับบริบทองค์กร สร้างจิตสำนึก
          ให้ความรู้ และเผยแพร่นโยบายเกี่ยวกับการจัดการด้านสิ่งแวดล้อม
          ให้แก่พนักงาน บุคลากรที่ทำงานในนามองค์กร
          ตลอดทั้งผู้ที่ทำงานภายใต้การควบคุมขององค์กร
          ให้ดำเนินงานภายใต้นโยบายของบริษัทฯ
          ส่งเสริมให้พนักงานมีส่วนร่วมในการอนุรักษ์พลังงานมีการจัดทำโครงการเพื่อสิ่งแวดล้อม
          เช่น รณรงค์ปิดไฟเมื่อไม่ใช้งาน ใช้น้ำอย่างประหยัด
          การรับคืนตลับหมึกที่ใช้งานแล้วคืน การคัดแยกของเสียอันตราย เป็นต้น
          โดยจะพิจารณานำไปจัดทำเป็นวัตถุประสงค์และเป้าหมาย
          เพื่อนำไปปฏิบัติและทบทวนอย่างต่อเนื่อง มีการป้องกันอันตราย
          และลดอุบัติเหตุที่เกิดจากการทำงาน เช่น จากการใช้ไฟฟ้า จากการใช้สารเคมี
          เป็นต้น โดยบริษัทฯ จัดให้มีสภาพแวดล้อมการทำงานที่ปลอดภัย
          พร้อมทั้งจัดสรรอุปกรณ์ป้องกันอันตรายจากการทำงานตามความเสี่ยงของงานได้อย่างเหมาะสม
          บริษัทฯ จะมีการติดตามประเมินผลการดำเนินงานตามนโยบาย และวัตถุประสงค์
          เพื่อก่อให้เกิดประสิทธิภาพ ประสิทธิผลและมีการปรับปรุงอย่างต่อเนื่อง
          บริษัทฯ ยินดีสื่อสารนโยบายนี้ สู่สาธารณชน
          รวมถึงผู้มีส่วนได้ส่วนเสียต่างๆ สามารถเข้าถึงนโยบายนี้ได้
        </div>

        <div className="bg-sky-700 flex flex-row justify-center items-center gap-6 p-4 w-full">
          <ImagePopup
            src="/assets/imgs/Certificate14001_SV_Polymer_page-0001.jpg"
            alt="Sample"
            width={220}
            height={220}
          />

          <ImagePopup
            src="/assets/imgs/CERTIFICATION-9001_SV_polymer_page-0001.jpg"
            alt="LogoSVP"
            width={220}
            height={220}
          />
        </div>
      </div>
    </div>
  );
}
