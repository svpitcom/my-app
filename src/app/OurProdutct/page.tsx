import React from "react";
import Image from "next/image";

export default function OurProduct() {
  return (
    <div className="bg-[url('/assets/imgs/Rectangle54.png')] bg-cover bg-center h-full w-full">
      <main className="flex justify-center">
        <h1 className="text-white text-4xl font-bold mb-4 bg-black/50 p-4 rounded">
          OurProduct
        </h1>
      </main>
      <section className="bg-neutral-50 text-black py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Technically Specified Rubber
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Demand for TSR has been increasing over the years due to its
          measurable quality and production technology which allows better
          consistency in the rubber quality. Raw materials and finished goods
          are tested according to quality plan to ensure the rubber produced
          meets the required standard of our customers. Nteq core operations are
          processing of Standard Thai Rubber grade STR10, and STR20 as well as
          Mooney viscosity controlled 9710 and 9720.Customization of products or
          special request specifications of quality are always welcome. Our
          further research and development will lead to future production of new
          value added products. Currently, our annual production capacity is
          72,000 tons that will be continuously expanded to support the growth
          of both domestic and international demands.
        </p>
      </section>
      <div className="bg-blue-700">
        <Image
          src="/assets/imgs/En.png"
          alt="Company Logo"
          width={800}
          height={640}
        />
        <Image
          src="/assets/imgs/En.png"
          alt="Company Logo"
          width={800}
          height={640}
        />
      </div>
    </div>
  );
}
