import React from "react";
// import Image from "next/image";

export default function ContactUs() {
  return (
    <div className="bg-white bg-cover bg-center w-full h-full">
      <h1 className="text-6xl text-shadow-lg/20 font-bold p-4 text-white text-center">
        Contact Us
      </h1>
      <div className="flex flex-col md:flex-row gap-8 p-6 md:p-12 bg-white/70">
        {/* Left: Contact Info */}
        <div className="w-full md:w-1/2 text-black space-y-4 text-sm md:text-base p-2">
          <h2 className="font-bold text-lg uppercase">Contact Info</h2>
          <h3 className="font-bold text-xl">SV Polymer Co., Ltd.</h3>
          <p>
            888 Moo 6,Tambon Nam Phi, Amphur Thong Saen Khan,
            <br />
            Uttaradit 53230 Thailand.
          </p>
          <p>
            <span className="font-bold">Tel.</span> +66(0)55 409 686
          </p>
          <p>
            <span className="font-bold">Fax.</span>
          </p>
          <p>
            <span className="font-bold">Website:</span> www.sv-polymer.com
          </p>
          <p>
            <span className="font-bold">E-mail:</span> info@sv-polymer.com
          </p>
        </div>

        {/* Right: Contact Form */}
        <div className="w-full md:w-1/2 bg-white rounded-md shadow space-y-4 p-2">
          <h2 className="font-bold text-lg uppercase">Contact Form</h2>
          <p className="text-gray-600 text-sm">
            We appreciate your comments for our product and services, we will
            reply you as soon as possible.
          </p>

          <input
            type="text"
            placeholder="Name"
            className="border border-gray-300 rounded p-2 w-full"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="border border-gray-300 rounded p-2 w-full"
          />
          <input
            type="text"
            placeholder="Phone"
            className="border border-gray-300 rounded p-2 w-full"
          />
          <input
            type="text"
            placeholder="Subject"
            className="border border-gray-300 rounded p-2 w-full"
          />
          <textarea
            placeholder="Your message..."
            className="border border-gray-300 rounded p-2 w-full h-32"
          ></textarea>

          <button className="bg-sky-700 hover:bg-sky-800 text-white font-semibold rounded p-2 w-full">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}
