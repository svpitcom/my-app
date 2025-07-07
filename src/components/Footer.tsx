import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="row-start-3 flex justify-stretch items-center bg-sky-700 py-20 columns-4">
      <div className="flex flex-col justify-start text-white p-4">
        <Image
          src="/assets/imgs/LOGO_SVP_White.png"
          alt="Company Logo"
          width={260}
          height={240}
        />
        <p className="text-sm">
          888 Moo 6, Nampee sub-district, Thongseankhan district, Uttaradit
          53230
          <br />
          Tel: +66(0)55 409 686
        </p>
      </div>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/window.svg"
          alt="Window icon"
          width={16}
          height={16}
        />
        Examples
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/globe.svg"
          alt="Globe icon"
          width={16}
          height={16}
        />
        Go to nextjs.org →
      </a>
    </footer>
  );
}
