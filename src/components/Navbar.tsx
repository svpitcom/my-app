import React from "react";
import OurProduct from "@/app/OurProduct";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="bg-linear-to-t from-sky-100/80 from-10% via-late-100 to-90% to-slate-100 to-90% p-4 flex justify-between items-center">
      <a href="#">
        <Image src="/assets/imgs/SVP-Logo.png" alt="Company Logo" width={240} height={160} />
      </a>
      <nav className="space-x-4">
        <Link href="/" className="hover:text-blue-600">
          Home
        </Link>
        <Link href="/our-company" className="hover:text-blue-600">
          OurCompany
        </Link>
        <a href="" className="hover:text-blue-600">
          OurProduct
        </a>
        <a href="" className="hover:text-blue-600">
          Policy
        </a>

        <a href="" className="hover:text-blue-600">
          New&Media
        </a>
        <a href="#services" className="hover:text-blue-600">
          Job Opportunity
        </a>
        <a href="#contact" className="hover:text-blue-600">
          Contanct Us
        </a>
      </nav>
    </header>
  );
}
