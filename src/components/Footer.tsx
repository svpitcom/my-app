import React from "react";
import Image from "next/image";

type FooterProps = {
  locale: string;
};

export default function Footer({ locale: _locale }: { locale: string }) {
  return (
    <footer className="row-start-3 flex justify-stretch items-center bg-gradient-to-br from-sky-600 to-green-500 py-8 columns-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
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
        </div>
        <div className="text-center ">
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
    </footer>
  );
}
