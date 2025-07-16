import React from "react";
import Image from "next/image";

export default function NewMedia() {
  return (
    <div className="bg-[url('/assets/imgs/Tree-back.png')] bg-cover bg-center text-center py-2">
      <div className="text center p-2">
        <h1>NEW&MEDIA</h1>
      </div>
      <div className="grid grid-cols-3">
        <div className="max-w-sm mx-auto border rounded-lg shadow overflow-hidden p-2">
          <div className="bg-gradient-to-b from-blue-500 to-indigo-700 p-4 text-center relative">
            <div className="absolute top-2 right-2 bg-slat-50">
              <Image
                src="/assets/imgs/SVP-Logo.png"
                alt="Company Logo"
                width={80}
                height={64}
              />
            </div>

            <div className="w-12 h-12 mx-auto bg-white rounded-full flex items-center justify-center text-blue-700 text-2xl font-bold">
              ?
            </div>

            <div className="mt-4 text-white font-bold text-lg">
              รวมคำถามที่พบบ่อย
            </div>

            <div className="mt-2">
              <span className="bg-gray-200 text-gray-800 text-sm px-4 py-1 rounded-full inline-block">
                สำหรับพ่อค้ายาง
              </span>
            </div>
          </div>

          <div className="bg-white p-4 text-center">
            <div className="text-gray-800 font-medium mb-2">
              Frequently Asked Questions (FAQs)
            </div>
            <a
              href="#"
              className="inline-block bg-blue-700 text-white text-sm px-4 py-2 rounded hover:bg-blue-800 transition"
            >
              READ MORE
            </a>
          </div>
        </div>
        <div className="max-w-sm mx-auto border rounded-lg shadow overflow-hidden">
          <div className="bg-gradient-to-b from-blue-500 to-indigo-700 p-4 text-center relative">
            <div className="absolute top-2 right-2">
              <img
                src="/path/to/logo.png"
                alt="SV Polymer Logo"
                className="h-6"
              />
            </div>

            <div className="w-12 h-12 mx-auto bg-white rounded-full flex items-center justify-center text-blue-700 text-2xl font-bold">
              ?
            </div>

            <div className="mt-4 text-white font-bold text-lg">
              รวมคำถามที่พบบ่อย
            </div>

            <div className="mt-2">
              <span className="bg-gray-200 text-gray-800 text-sm px-4 py-1 rounded-full inline-block">
                สำหรับพ่อค้ายาง
              </span>
            </div>
          </div>

          <div className="bg-white p-4 text-center">
            <div className="text-gray-800 font-medium mb-2">
              Frequently Asked Questions (FAQs)
            </div>
            <a
              href="#"
              className="inline-block bg-blue-700 text-white text-sm px-4 py-2 rounded hover:bg-blue-800 transition"
            >
              READ MORE
            </a>
          </div>
        </div>
        <div className="max-w-sm mx-auto border rounded-lg shadow overflow-hidden">
          <div className="bg-gradient-to-b from-blue-500 to-indigo-700 p-4 text-center relative">
            <div className="absolute top-2 right-2">
              <img
                src="/path/to/logo.png"
                alt="SV Polymer Logo"
                className="h-6"
              />
            </div>

            <div className="w-12 h-12 mx-auto bg-white rounded-full flex items-center justify-center text-blue-700 text-2xl font-bold">
              ?
            </div>

            <div className="mt-4 text-white font-bold text-lg">
              รวมคำถามที่พบบ่อย
            </div>

            <div className="mt-2">
              <span className="bg-gray-200 text-gray-800 text-sm px-4 py-1 rounded-full inline-block">
                สำหรับพ่อค้ายาง
              </span>
            </div>
          </div>

          <div className="bg-white p-4 text-center">
            <div className="text-gray-800 font-medium mb-2">
              Frequently Asked Questions (FAQs)
            </div>
            <a
              href="#"
              className="inline-block bg-blue-700 text-white text-sm px-4 py-2 rounded hover:bg-blue-800 transition"
            >
              READ MORE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
