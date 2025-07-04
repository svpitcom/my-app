import React from "react";
import OurProduct from "@/app/OurProduct";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-sky-50 shadow p-8 flex justify-between items-center">
      <h1 className="text-xl font-bold">SV Polymer</h1>
      <nav className="space-x-4">
        <a href="" className="hover:text-blue-600">
          Home
        </a>
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
