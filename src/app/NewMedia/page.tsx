import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function NewMedia() {
  return (
    <div className="bg-[url('/assets/imgs/Tree-back.png')] bg-cover bg-center text-center py-10">
      <div className="container mx-auto">
        <div className="text center text-shadow-lg/20 text-6xl font-bold text-white p-2">
          <h1>NEW&MEDIA</h1>
        </div>
        <div className="columns-3 bg-sky-50 flex flex-col md:flex-row items-center justify-center gap-6 px-8 py-8">
          <div className="rounded-md bg-blue-100 w-full max-w-xs flex flex-col items-center text-center p-4 shadow">
            <Image
              src="/assets/imgs/Card-box-1.png"
              alt="Company Logo"
              width={350}
              height={350}
              className="p-2"
            />
            <Link
              href="/"
              className="font-bold text-3xl text-sky-600 hover:text-sky-400"
            >
              News
            </Link>
            <Link
              href="/"
              className="font-bold text-xl text-sky-600 hover:text-sky-400"
            >
              Frequently Asked Questions (FAQs)
            </Link>
            <a
              className="bg-sky-700 text-xl w-full h-full hover:bg-blue-800 text-white rounded p-2"
              href="#"
            >
              Read Me
            </a>
          </div>
          <div className="rounded-md bg-blue-100 w-full max-w-xs flex flex-col items-center text-center p-4 shadow">
            <Image
              src="/assets/imgs/Card-box-1.png"
              alt="Company Logo"
              width={350}
              height={350}
              className="p-2"
            />
            <Link
              href="/"
              className="font-bold text-3xl text-sky-600 hover:text-sky-400"
            >
              News
            </Link>
            <Link
              href="/"
              className="font-bold text-xl text-sky-600 hover:text-sky-400"
            >
              Frequently Asked Questions (FAQs)
            </Link>
            <a
              className="bg-sky-700 text-xl w-full h-full hover:bg-blue-800 text-white rounded p-2"
              href="#"
            >
              Read Me
            </a>
          </div>
          <div className="rounded-md bg-blue-100 w-full max-w-xs flex flex-col items-center text-center p-4 shadow">
            <Image
              src="/assets/imgs/Card-box-1.png"
              alt="Company Logo"
              width={350}
              height={350}
              className="p-2"
            />
            <Link
              href="/"
              className="font-bold text-3xl text-sky-600 hover:text-sky-400"
            >
              News
            </Link>
            <Link
              href="/"
              className="font-bold text-xl text-sky-600 hover:text-sky-400"
            >
              Frequently Asked Questions (FAQs)
            </Link>
            <a
              className="bg-sky-700 text-xl w-full h-full hover:bg-blue-800 text-white rounded p-2"
              href="#"
            >
              Read Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
