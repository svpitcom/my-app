"use client";
import { useState } from "react";
import Image from "next/image";

export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const res = await fetch("/api/email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    alert(data.message);
  };

  return (
    <div className="bg-cover bg-center w-full h-full">
      {/* Banner */}
      <div className="bg-[url('/assets/imgs/Contnot-editai.jpg')] bg-cover bg-center text-white py-28 sm:py-30">
        <div className="flex flex-col text-center items-center px-4">
          <Image
            src="/assets/imgs/AW_LOGO_SVP [Final] + Stroke-01.png"
            alt="LogoSVP"
            width={260}
            height={260}
            className="mb-4 w-38 h-38 sm:w-46 sm:h-46 md:w-64 md:h-64"
          />
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-sky-500 to-green-300 rounded-sm">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold p-4 sm:p-8 text-white text-center">
          Contact Us
        </h1>

        <div className="flex flex-col md:flex-row gap-6 sm:gap-8 p-4 sm:p-6 md:p-20 bg-white">
          {/* Left: Contact Info */}
          <div className="w-full md:w-1/2 text-black space-y-3 sm:space-y-4 text-sm md:text-base p-2">
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
          <div className="w-full md:w-1/2 bg-white rounded-md shadow space-y-3 sm:space-y-4 p-4 sm:p-6">
            <h2 className="font-bold text-lg uppercase">Contact Form</h2>
            <p className="text-gray-600 text-sm">
              We appreciate your comments for our product and services, we will
              reply you as soon as possible.
            </p>

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
              className="border border-gray-300 rounded p-2 w-full text-sm sm:text-base"
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="border border-gray-300 rounded p-2 w-full text-sm sm:text-base"
            />

            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone"
              className="border border-gray-300 rounded p-2 w-full text-sm sm:text-base"
            />

            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="border border-gray-300 rounded p-2 w-full text-sm sm:text-base"
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your message..."
              className="border border-gray-300 rounded p-2 w-full h-32 text-sm sm:text-base"
            />

            <button
              type="button"
              onClick={handleSubmit}
              className="bg-gradient-to-r from-sky-500 to-green-300 hover:from-green-300 hover:to-sky-500 text-white font-semibold rounded p-2 w-full text-sm sm:text-base"
            >
              Send Message
            </button>
          </div>
        </div>

        {/* Map */}
        <div className="w-full mt-6 sm:mt-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3803.7766792461057!2d100.24383437463086!3d17.565815997641547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30df47221e2000eb%3A0xd59727c4b2705837!2zU1YgUG9seW1lciDguK3guLjguJXguKPguJTguLTguJXguJbguYw!5e0!3m2!1sen!2sus!4v1754406724806!5m2!1sen!2sus"
            width="100%"
            height="300"
            loading="lazy"
            allowFullScreen
            className="rounded-md border-none w-full"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
