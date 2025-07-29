"use client";
import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useParams } from "next/navigation";
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

  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const currentLocale = (params.locale as string) || "en";

  const [selected, setSelected] = useState(currentLocale);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    setSelected(newLocale);

    // แก้ path เฉพาะส่วน locale
    const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    router.push(newPath);
  };

  const menuItems = [
    { key: "Home", path: "" },
    { key: "OurCompany", path: "OurCompany" },
    { key: "OurProduct", path: "OurProduct" },
    { key: "Policy", path: "Policy" },
    { key: "NewMedia", path: "NewMedia" },
    { key: "JobOpportunity", path: "JobOpportunity" },
    { key: "ContactUs", path: "ContactUs" },
  ];

  const menuLabels: Record<string, Record<string, string>> = {
    en: {
      Home: "Home",
      OurCompany: "Our Company",
      OurProduct: "Our Product",
      Policy: "Policy",
      NewMedia: "New Media",
      JobOpportunity: "Careers",
      ContactUs: "Contact Us",
    },

    th: {
      Home: "หน้าหลัก",
      OurCompany: "เกี่ยวกับเรา",
      OurProduct: "ผลิตภัณฑ์",
      Policy: "นโยบาย",
      NewMedia: "สื่อใหม่",
      JobOpportunity: "ร่วมงานกับเรา",
      ContactUs: "ติดต่อเรา",
    },
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white/80 backdrop-blur-md"
      }`}
    >
      <div className="flex justify-between items-center px-4 py-3">
        <Link href={`/${currentLocale}`}>
          <Image
            src="/assets/imgs/SVP-Logo.png"
            alt="Company Logo"
            width={180}
            height={180}
            className="object-contain"
          />
        </Link>

        <nav className="hidden md:flex space-x-4">
          {menuItems.map((item) => (
            <Link
              key={item.key}
              href={`/${currentLocale}/${item.path}`}
              className="font-bold text-base text-sky-600 hover:text-sky-400"
            >
              {menuLabels[currentLocale]?.[item.key] ?? item.key}
            </Link>
          ))}
          <div className="">
            <select
              value={selected}
              onChange={handleChange}
              className="font-bold text-base text-sky-600 hover:text-sky-400"
            >
              <option value="en">ENG</option>
              <option value="th">TH</option>
            </select>
          </div>
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
          {menuItems.map((item) => (
            <Link
              key={item.key}
              href={`/${currentLocale}/${item.path}`}
              className="font-bold text-base text-sky-600 hover:text-sky-400"
            >
              {menuLabels[currentLocale]?.[item.key] ?? item.key}
            </Link>
          ))}
          <div className="inline-block">
            <select
              value={selected}
              onChange={handleChange}
              className="font-bold text-base text-sky-600 hover:text-sky-400"
            >
              <option value="en">ENG</option>
              <option value="th">TH</option>
            </select>
          </div>
        </nav>
      )}
    </header>
  );
}
