"use client";
import { useState } from "react";

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
      <div className="bg-[url('/assets/imgs/DJI_0674.JPG')] bg-cover bg-center bg-radial text-white py-60"></div>
      <div className="bg-gradient-to-r from-sky-500 to-green-300 rounded-sm">
        <h1 className="text-6xl font-bold p-8 text-white text-center">
          Contact Us
        </h1>
        <div className="flex flex-col md:flex-row gap-8 p-6 md:p-20 bg-white">
          {/* Left: Contact Info */}
          <div className="w-full md:w-1/2 text-black space-y-4 text-sm md:text-base p-2">
            <h2 className="font-bold text-black text-lg uppercase">
              Contact Info
            </h2>
            <h3 className="font-bold text-black text-xl">
              SV Polymer Co., Ltd.
            </h3>
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
          <div className="w-full md:w-1/2 bg-white rounded-md shadow space-y-4 p-6">
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
              className="border border-gray-300 rounded p-2 w-full"
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="border border-gray-300 rounded p-2 w-full"
            />

            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone"
              className="border border-gray-300 rounded p-2 w-full"
            />

            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="border border-gray-300 rounded p-2 w-full"
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your message..."
              className="border border-gray-300 rounded p-2 w-full h-32"
            />

            <button
              type="button"
              onClick={handleSubmit}
              className="bg-gradient-to-r from-sky-500 to-green-300 hover:from-green-300 hover:to-sky-500 text-white font-semibold rounded p-2 w-full cursor-pointer"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
