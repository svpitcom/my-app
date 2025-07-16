"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-slate-50 shadow">
      <div className="flex justify-between items-center p-4">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/assets/imgs/SVP-Logo.png"
            alt="Company Logo"
            width={240}
            height={160}
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-4">
          <Link
            href="/"
            className="font-bold text-xl text-sky-600 hover:text-sky-400"
          >
            Home
          </Link>
          <Link
            href="/OurCompany"
            className="font-bold text-xl text-sky-600 hover:text-sky-400"
          >
            OurCompany
          </Link>
          <Link
            href="/OurProduct"
            className="font-bold text-xl text-sky-600 hover:text-sky-400"
          >
            OurProduct
          </Link>
          <Link
            href="/Policy"
            className="font-bold text-xl text-sky-600 hover:text-sky-400"
          >
            Policy
          </Link>
          <Link
            href="/NewMedia"
            className="font-bold text-xl text-sky-600 hover:text-sky-400"
          >
            New&Media
          </Link>
          <Link
            href="/JobOpportunity"
            className="font-bold text-xl text-sky-600 hover:text-sky-400"
          >
            Job Opportunity
          </Link>
          <Link
            href="/ContactUs"
            className="font-bold text-xl text-sky-600 hover:text-sky-400"
          >
            Contact Us
          </Link>
        </nav>

        {/* Hamburger Button (Mobile) */}
        <button
          className="md:hidden flex flex-col space-y-1"
          onClick={() => setIsOpen(!isOpen)}
          title="Toggle navigation menu"
          aria-label="Toggle navigation menu"
        >
          <span className="w-6 h-0.5 bg-gray-800"></span>
          <span className="w-6 h-0.5 bg-gray-800"></span>
          <span className="w-6 h-0.5 bg-gray-800"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden flex flex-col space-y-2 p-4 bg-slate-100">
          <Link
            href="/"
            className="font-bold text-lg text-sky-600 hover:text-sky-400"
          >
            Home
          </Link>
          <Link
            href="/OurCompany"
            className="font-bold text-lg text-sky-600 hover:text-sky-400"
          >
            OurCompany
          </Link>
          <Link
            href="/OurProduct"
            className="font-bold text-lg text-sky-600 hover:text-sky-400"
          >
            OurProduct
          </Link>
          <Link
            href="/Policy"
            className="font-bold text-lg text-sky-600 hover:text-sky-400"
          >
            Policy
          </Link>
          <Link
            href="/NewMedia"
            className="font-bold text-lg text-sky-600 hover:text-sky-400"
          >
            New&Media
          </Link>
          <Link
            href="/JobOpportunity"
            className="font-bold text-lg text-sky-600 hover:text-sky-400"
          >
            Job Opportunity
          </Link>
          <Link
            href="/ContactUs"
            className="font-bold text-lg text-sky-600 hover:text-sky-400"
          >
            Contact Us
          </Link>
        </nav>
      )}
    </header>
  );
}
