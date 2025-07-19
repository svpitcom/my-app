import React from "react";
// import Link from "next/link";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function Policy() {
  return (
    <div className="bg-cover bg-center h-full w-full">
      <div className="bg-[url('/assets/imgs/svp-office-tree.jpg')] bg-cover bg-center text-white h-full py-2">
        <div className="text-center py-6">
          <div className="flex flex-col bg-white items-center py-4">
            <Image
              src="/assets/imgs/LogoSVP.png"
              alt="LogoSVP"
              width={180}
              height={180}
            />
          </div>

          <h1 className="text-6xl font-bold py-4">Policy</h1>
          <h2 className="text-2xl font-semibold text-sky-700 mt-2">
            SV Polymer .Co .Ltd
          </h2>
        </div>

        <div className="mt-6 flex flex-col items-center gap-2 py-6">
          <a
            className="bg-sky-700 hover:bg-blue-800 text-white px-6 py-2 rounded"
            href="/Policy/EU-Def"
          >
            นโยบาย EU-Deforestation
          </a>
          <a
            className="bg-sky-700 hover:bg-blue-800 text-white px-6 py-2 rounded"
            href="/Policy/SVP-Sus"
          >
            SVP Sustainable Natural Rubber Policy 2022
          </a>
          <a
            className="bg-sky-700 hover:bg-blue-800 text-white px-6 py-2 rounded"
            href="/Policy/Envi-Policy"
          >
            นโยบายด้านสิ่งแวดล้อม (Environmental Policy)
          </a>
          <a
            className="bg-sky-700 hover:bg-blue-800 text-white px-6 py-2 rounded"
            href="/Policy/QA-Policy"
          >
            นโยบายคุณภาพ (Quality Policy)
          </a>
          <a
            className="bg-sky-700 hover:bg-blue-800 text-white px-6 py-2 rounded"
            href="/Policy/GGM"
          >
            นโยบายการรักษาพลังงานและอนุรักษ์พลังงาน
          </a>
        </div>
      </div>
      <AnimateOnScroll>
        <div className="bg-sky-700 text-white py-10 text-center">
          <h3 className="text-4xl md:text-2xl font-bold mb-3 p-4">
            Energy Conservation Policy
          </h3>
          <p className="max-w-3xl mx-auto text-sm md:text-base p-6">
            Energy is a valuable resource. The production of energy and its
            consumption has environmental impacts. The following policy is
            established as guidelines to conservation and promotes efficient use
            of energy.
          </p>
        </div>
      </AnimateOnScroll>
      <div className="bg-[url('/assets/imgs/Towertree.png')] bg-cover bg-center p-2">
        <AnimateOnScroll>
          <div className="flex justify-center gap-4 py-8">
            {/* ทำเป็นรูป */}
            <div className="w-72 h-72 md:w-72 md:h-72 rounded-full bg-white/50 text-blue-100 flex items-center justify-center text-xl font-bold">
              <div className="w-64 h-64 md:w-64 md:h-64 rounded-full bg-white text-blue-100 flex items-center justify-center text-xl font-bold">
                <div className="bg-cover bg-center text-center text-base text-blue-500">
                  CONTROL THE TEST OF ELECTRICTY AND FUEL USE TO ACCOMMODATE TO
                  THE NATURE OF ENERGY CONSUMPTION OF THE COMPANY
                </div>
              </div>
            </div>
            <div className="w-72 h-72 md:w-72 md:h-72 rounded-full bg-white/50 text-blue-100 flex items-center justify-center text-xl font-bold">
              <div className="w-64 h-64 md:w-64 md:h-64 rounded-full bg-white text-blue-100 flex items-center justify-center text-xl font-bold">
                <div className="bg-cover bg-center text-center text-base text-blue-500">
                  PROMOTE ENERGY-SAVING ACTIVITES
                </div>
              </div>
            </div>

            <div className="w-72 h-72 md:w-72 md:h-72 rounded-full bg-white/50 text-blue-100 flex items-center justify-center text-xl font-bold">
              <div className="w-64 h-64 md:w-64 md:h-64 rounded-full bg-white text-blue-100 flex items-center justify-center text-xl font-bold">
                <div className="bg-cover bg-center text-center text-base text-blue-500">
                  ESTABLHISH TARGET OF ENERGY CONSUMPTION REDUCTION
                </div>
              </div>
            </div>

            <div className="w-72 h-72 md:w-72 md:h-72 rounded-full bg-white/50 text-blue-100 flex items-center justify-center text-xl font-bold">
              <div className="w-64 h-64 md:w-64 md:h-64 rounded-full bg-white text-blue-100 flex items-center justify-center text-xl font-bold">
                <div className="bg-cover bg-center text-center text-base text-blue-500">
                  SUPPOAT OPEAATIONS AND DEVELOPMENT OF ENRGY MANAGEMENT SYSTEM
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <div className="flex mx-auto py-4 justify-center items-center bg-white rounded-lg">
            <div className="max-w-3xl text-center">
              <p className="text-xl md:text-base mb-4">
                Energy conservation is the responsibility of executives and
                employees of the Company to the extent that giving cooperation
                to comply with measures specified for monitoring and reporting
                in accordance with laws.
              </p>
              <h4 className="text-gray-700 font-semibold mb-2">
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
      </div>
    </div>
  );
}
