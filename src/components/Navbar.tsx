"use client";
import React from "react";
import OurProduct from "@/app/OurProdutct/page";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="bg-linear-to-t from-sky-100/70 from-10% via-late-100 to-90% to-slate-100 to-90% p-4 flex justify-between items-center">
      <a href="#">
        <Image
          src="/assets/imgs/SVP-Logo.png"
          alt="Company Logo"
          width={240}
          height={160}
        />
      </a>
      <nav className="space-x-4">
        <Link href="/" className="hover:text-blue-600">
          Home
        </Link>
        <Link href="/OurCompany" className="hover:text-blue-600">
          OurCompany
        </Link>
        <a href="/OurProdutct" className="hover:text-blue-600">
          OurProduct
        </a>
        <a href="/Policy" className="hover:text-blue-600">
          Policy
        </a>

        <a href="/NewMedia" className="hover:text-blue-600">
          New&Media
        </a>
        <a href="/JobOpportunity" className="hover:text-blue-600">
          Job Opportunity
        </a>
        <a href="/ContactUs" className="hover:text-blue-600">
          Contanct Us
        </a>
      </nav>
    </div>
  );
}
