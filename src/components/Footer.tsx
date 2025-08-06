import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="row-start-3 flex flex-col justify-stretch items-center bg-gradient-to-br from-sky-600 to-green-500 p-4">
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="flex flex-col justify-start text-white p-4">
            <Image
              src="/assets/imgs/LOGO_SVP_White.png"
              alt="Company Logo"
              width={600}
              height={500}
            />
            <p className="text-xl">
              888 Moo 6, Nampee sub-district, Thongseankhan district, Uttaradit
              53230
              <br />
              Tel: +66(0)55 409 686
              <br />
              Email: info@sv-polymer.com
            </p>
          </div>
          <div className="text-center text-white font-semibold text-3xl border-y md:border-y-0 md:border-x border-white py-2">
            CUSTOMER CASE
            <br />
            <p className="text-2xl">Tel: +66(0)55 409 686</p>
            <br />
            <p className="text-xl font-normal">Email: info@sv-polymer.com</p>
          </div>
          <div className="text-center">
            <h2 className="font-bold text-3xl text-white">
              SV POLYMER
              <br />
              INTRANET
            </h2>
            <button className="mt-3 px-4 py-2 bg-white text-blue-800 font-semibold rounded hover:bg-gray-100 flex items-center justify-center gap-2 mx-auto">
              Member Login
            </button>
          </div>
        </div>
      </div>
      {/* Copyright section */}
      <div className="bg-gradient-to-r from-sky-500 to-green-300 w-full text-center sm:text-left text-white text-sm sm:text-base px-4 sm:px-12 md:px-24 lg:px-48 py-2">
        © {new Date().getFullYear()} SV Polymer. All rights reserved.
      </div>
    </footer>
  );
}
