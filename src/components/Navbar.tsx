"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white/80 backdrop-blur-md"
      }`}
    >
      <div className="flex justify-between items-center px-4 py-3">
        <Link href="/">
          <Image
            src="/assets/imgs/SVP-Logo.png"
            alt="Company Logo"
            width={180}
            height={180}
            className="object-contain"
          />
        </Link>

        <nav className="hidden md:flex space-x-4">
          {[
            "Home",
            "OurCompany",
            "OurProduct",
            "Policy",
            "newmedia",
            "JobOpportunity",
            "ContactUs",
          ].map((item) => (
            <Link
              key={item}
              href={`/${item === "Home" ? "" : item}`}
              className="font-bold text-base text-sky-600 hover:text-sky-400"
            >
              {item === "newmedia"
                ? "News&Media"
                : item.replace(/([A-Z])/g, " $1").trim()}
            </Link>
          ))}
        </nav>

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

      {isOpen && (
        <nav className="md:hidden flex flex-col space-y-2 p-4 bg-white/30 backdrop-blur-md shadow">
          {[
            "Home",
            "OurCompany",
            "OurProduct",
            "Policy",
            "newmedia",
            "JobOpportunity",
            "ContactUs",
          ].map((item) => (
            <Link
              key={item}
              href={`/${item === "Home" ? "" : item}`}
              className="font-bold text-lg text-sky-600 hover:text-sky-400"
              onClick={() => setIsOpen(false)}
            >
              {item === "newmedia"
                ? "newmedia"
                : item.replace(/([A-Z])/g, " $1").trim()}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
