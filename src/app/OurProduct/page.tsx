import React from "react";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function OurProduct() {
  return (
    <div className="bg-white bg-cover bg-center w-full">
      <div className="bg-[url('/assets/imgs/backgruondconstus.jpg')] bg-cover bg-center w-full h-full">
        <div className="flex justify-center py-20">
          <h1 className="text-white text-6xl font-bold mb-4 p-8 rounded">
            OurProduct
          </h1>
        </div>
        <div className="bg-neutral-50 text-black py-16 px-2 text-center">
          <div className="max-w-5xl mx-auto px-2 py-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Technically Specified Rubber
            </h1>
            <br />
            <p className="text-xl text-left">
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
            <p className="text-xl text-left">
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
          <div className="flex flex-col md:flex-row w-auto">
            <div className="w-full md:w-1/2 relative">
              <Image
                src="/assets/imgs/Rectangle54.png"
                alt="Company Logo"
                className="object-cover"
                fill
              />
            </div>
            <div className="w-full md:w-1/2 bg-sky-600 text-white flex items-center">
              <div className="p-10 space-y-4">
                <h2 className="text-2xl font-semibold mb-4">Product</h2>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold">Standard Thai Rubber 10</p>
                  </div>
                  <div>
                    <p className="font-semibold">Standard Thai Rubber 20</p>
                  </div>
                  <div>
                    <p className="font-semibold">Standard Thai Rubber 20M</p>
                  </div>
                  <div>
                    <p className="font-semibold">
                      Mooney Viscosity Controlled 9710
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">
                      Mooney Viscosity Controlled 9710
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">
                      Mooney Viscosity Controlled 9720
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Constant Viscosity 60</p>
                  </div>
                  <div>
                    <p className="font-semibold">Constant Viscosity 65</p>
                  </div>
                  <div>
                    <p className="font-semibold">
                      Mixture Rubber (Pending 2017–2018)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <div className="bg-white py-8 px-2 ">
            <h2 className="text-7xl font-bold text-center text-blue-700 mb-2 uppercase">
              Packaging
            </h2>
            <p className="text-lg max-w-4xl mx-auto py4">
              Various packaging are available to meet the requirements of our
              customers. Our container loading is carried out in our factory
              under close supervision to ensure that rubber arrives at the
              destination in its best conditions.
            </p>
            <br />
            <br />
            <br />
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 justify-center">
              <div className="flex flex-col items-center">
                <div className="w-64 h-64 md:w-64 md:h-64 rounded-full bg-sky-700/50 text-blue-100 flex items-center justify-center text-xl font-bold">
                  <div className="w-58 h-58 md:w-58 md:h-58 rounded-full bg-sky-700 text-blue-100 flex items-center justify-center text-xl font-bold">
                    <div className="bg-cover bg-center text-center text-base text-white">
                      <p className="text-3xl font-bold">35</p>
                      <p className="text-lg">kilograms loose bales</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-64 h-64 md:w-64 md:h-64 rounded-full bg-sky-700/50 text-blue-100 flex items-center justify-center text-xl font-bold">
                  <div className="w-58 h-58 md:w-58 md:h-58 rounded-full bg-sky-700 text-blue-100 flex items-center justify-center text-xl font-bold">
                    <div className="bg-cover bg-center text-center text-base text-white">
                      <p className="text-3xl font-bold">1.26</p>
                      <p className="text-lg">
                        tons shrink wrapped Plastic base
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-64 h-64 md:w-64 md:h-64 rounded-full bg-sky-700/50 text-blue-100 flex items-center justify-center text-xl font-bold">
                  <div className="w-58 h-58 md:w-58 md:h-58 rounded-full bg-sky-700 text-blue-100 flex items-center justify-center text-xl font-bold">
                    <div className="bg-cover bg-center text-center text-base text-white">
                      <p className="text-3xl font-bold">1.33</p>
                      <p className="text-lg">
                        tons shrink wrapped metal base/Friendly pack pallet
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-64 h-64 md:w-64 md:h-64 rounded-full bg-sky-700/50 text-blue-100 flex items-center justify-center text-xl font-bold">
                  <div className="w-58 h-58 md:w-58 md:h-58 rounded-full bg-sky-700 text-blue-100 flex items-center justify-center text-xl font-bold">
                    <div className="bg-cover bg-center text-center text-base text-white">
                      <p className="text-3xl font-bold">1.26</p>
                      <p className="text-lg">tons Metal box</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
}
