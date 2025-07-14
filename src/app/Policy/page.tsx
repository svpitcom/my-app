import React from "react";

export default function Policy() {
  return (
    <div className="bg-cover bg-center h-full w-full font-sans">
      <div className="bg-[url('/assets/imgs/hardtree.png')] bg-cover bg-center text-white py-2">
        <div className="text-center">
          <h1 className="text-xl md:text-3xl font-bold">Policy</h1>
          <h2 className="text-lg md:text-2xl font-semibold text-blue-300 mt-2">
            SV Polymer .Co .Ltd
          </h2>
        </div>

        <div className="mt-6 flex flex-col items-center gap-2">
          <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded">
            นโยบาย EU-Deforestation
          </button>
          <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded">
            SVP Sustainable Natural Rubber Policy 2022
          </button>
          <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded">
            นโยบายด้านสิ่งแวดล้อม (Environmental Policy)
          </button>
          <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded">
            นโยบายคุณภาพ (Quality Policy)
          </button>
          <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded">
            นโยบายการรักษาพลังงานและอนุรักษ์พลังงาน
          </button>
        </div>
      </div>
      <div className="bg-blue-700 text-white py-10 text-center px-4">
        <h3 className="text-lg md:text-2xl font-bold mb-3">
          Energy Conservation Policy
        </h3>
        <p className="max-w-3xl mx-auto text-sm md:text-base">
          Energy is a valuable resource. The production of energy and its
          consumption has environmental impacts. The following policy is
          established as guidelines to conservation and promotes efficient use
          of energy.
        </p>
      </div>
      <div className="bg-[url('/assets/imgs/Towertree.png')] bg-cover bg-center p-2">
        <div className="flex justify-center gap-4">
          <div className="w-64 h-64 md:w-64 md:h-64 rounded-full bg-white text-blue-700 flex items-center justify-center text-xl font-bold">
            1
          </div>
          <div className="w-64 h-64 md:w-64 md:h-64 rounded-full bg-white text-blue-700 flex items-center justify-center text-xl font-bold">
            2
          </div>
          <div className="w-64 h-64 md:w-64 md:h-64 rounded-full bg-white text-blue-700 flex items-center justify-center text-xl font-bold">
            3
          </div>
          <div className="w-64 h-64 md:w-64 md:h-64 rounded-full bg-white text-blue-700 flex items-center justify-center text-xl font-bold">
            4
          </div>
        </div>
        <div className="flex w-[1080px] h-[480px] mx-auto py-4 justify-center items-center bg-white rounded-lg">
          <div className="max-w-3xl text-center">
            <p className="text-sm md:text-base mb-4">
              Energy conservation is the responsibility of executives and
              employees of the Company to the extent that giving cooperation to
              comply with measures specified for monitoring and reporting in
              accordance with laws.
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
      </div>
    </div>
  );
}
