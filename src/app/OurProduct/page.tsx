import React from "react";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function OurProduct() {
  return (
    <div className="bg-white bg-cover bg-center w-full">
      <div className="bg-[url('/assets/imgs/backgruondconstus.jpg')] bg-cover bg-center">
        <div className="flex justify-center py-12 md:py-20">
          <h1 className="text-white text-4xl md:text-6xl font-bold p-4 md:p-8 rounded text-center">
            OurProduct
          </h1>
        </div>
        <div className="bg-neutral-50 text-black py-10 md:py-16 px-4 md:px-10 text-center">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Technically Specified Rubber
            </h1>
            <br />
            <p className="text-base md:text-xl text-left leading-relaxed">
              Demand for TSR has been increasing over the years due to its
              measurable quality and production technology which allows better
              consistency in the rubber quality. Raw materials and finished
              goods are tested according to quality plan to ensure the rubber
              produced meets the required standard of our customers. Nteq core
              operations are processing of Standard Thai Rubber grade STR10, and
              STR20 as well as Mooney viscosity controlled 9710 and 9720.
            </p>
            <br />
            <br />
            <br />
            <p className="text-base md:text-xl text-left leading-relaxed">
              Customization of products or special request specifications of
              quality are always welcome. Our further research and development
              will lead to future production of new value added products.
              Currently, our annual production capacity is 72,000 tons that will
              be continuously expanded to support the growth of both domestic
              and international demands.
            </p>
          </div>
        </div>
        <AnimateOnScroll>
          <div className="flex flex-col md:flex-row w-full">
            <div className="w-full md:w-1/2 relative h-60 md:h-auto">
              <Image
                src="/assets/imgs/Rectangle54.png"
                alt="Company Logo"
                className="object-cover"
                fill
              />
            </div>
            <div className="w-full md:w-1/2 bg-sky-600 text-white flex items-center">
              <div className="p-6 md:p-10 space-y-3 text-left md:text-left">
                <h2 className="text-xl md:text-2xl font-semibold mb-2">
                  Product
                </h2>
                <div className="space-y-2 text-sm md:text-base">
                  <p className="font-semibold">Standard Thai Rubber 10</p>
                  <p className="font-semibold">Standard Thai Rubber 20</p>
                  <p className="font-semibold">Standard Thai Rubber 20M</p>
                  <p className="font-semibold">
                    Mooney Viscosity Controlled 9710
                  </p>
                  <p className="font-semibold">
                    Mooney Viscosity Controlled 9720
                  </p>
                  <p className="font-semibold">Constant Viscosity 60</p>
                  <p className="font-semibold">Constant Viscosity 65</p>
                  <p className="font-semibold">
                    Mixture Rubber (Pending 2017–2018)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <div className="bg-white py-8 px-4 md:px-10">
            <h2 className="text-4xl md:text-7xl font-bold text-center text-blue-700 mb-4 uppercase">
              Packaging
            </h2>
            <p className="text-sm md:text-lg max-w-4xl mx-auto text-center text-black">
              Various packaging are available to meet the requirements of our
              customers. Our container loading is carried out in our factory
              under close supervision to ensure that rubber arrives at the
              destination in its best conditions.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
              {[
                { weight: "35", description: "kilograms loose bales" },
                {
                  weight: "1.26",
                  description: "tons shrink wrapped Plastic base",
                },
                {
                  weight: "1.33",
                  description:
                    "tons shrink wrapped metal base/Friendly pack pallet",
                },
                { weight: "1.26", description: "tons Metal box" },
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-36 h-36 md:w-64 md:h-64 rounded-full bg-sky-700/50 flex items-center justify-center">
                    <div className="w-32 h-32 md:w-56 md:h-56 rounded-full bg-sky-700 text-white flex flex-col items-center justify-center text-center p-2">
                      <p className="text-xl md:text-3xl font-bold">
                        {item.weight}
                      </p>
                      <p className="text-xs md:text-lg">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
}
