import Image from "next/image";
import Navbar from "@/components/Navbar";
import Abouts from "./Abouts";
import OurCompany from "./OurCompany";
import OurProduct from "./OurProduct";
import Policy from "./Policy";
import NewMedia from "./NewMedia";
import JobOpportunity from "./JobOpportunity";
import ContactUs from "./ContactUs";
import Router from "next/router";

export default function Home() {
  return (
    <div className="d-flex bg-[url('/assets/imgs/Tree-back.png')] bg-cover bg-center h-200 w-full">
      <Navbar />
      <main className="flex justify-center">
        <Abouts />
        {/* <OurCompany />
        <OurProduct />
        <Policy />
        <NewMedia />
        <JobOpportunity />
        <ContactUs /> */}
      </main>
      {/* <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
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
      </footer> */}
    </div>
  );
}
