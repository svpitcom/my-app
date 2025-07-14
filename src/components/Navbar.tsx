"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="bg-slate-50 p-4 flex justify-between items-center">
      <Link href="/">
        <Image
          src="/assets/imgs/SVP-Logo.png"
          alt="Company Logo"
          width={240}
          height={160}
        />
      </Link>
      <nav className="space-x-4">
        <Link href="/" className="font-bold text-sky-600 hover:text-sky-200">
          Home
        </Link>
        <Link
          href="/OurCompany"
          className="font-bold text-sky-600 hover:text-sky-200"
        >
          OurCompany
        </Link>
        <Link
          href="/OurProdutct"
          className="font-bold text-sky-600  hover:text-sky-200"
        >
          OurProduct
        </Link>
        <Link
          href="/Policy"
          className="font-bold text-sky-600 hover:text-sky-200"
        >
          Policy
        </Link>

        <Link
          href="/NewMedia"
          className="font-bold text-sky-600 hover:text-sky-200"
        >
          New&Media
        </Link>
        <Link
          href="/JobOpportunity"
          className="font-bold text-sky-600 hover:text-sky-200"
        >
          Job Opportunity
        </Link>
        <Link
          href="/ContactUs"
          className="font-bold text-sky-600 hover:text-sky-200"
        >
          Contanct Us
        </Link>
      </nav>
    </div>
  );
}
