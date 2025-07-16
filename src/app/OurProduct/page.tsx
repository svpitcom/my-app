import React from "react";
import Image from "next/image";

export default function OurProduct() {
  return (
    <div className="bg-[url('/assets/imgs/Rectangle54.png')] bg-cover min-h-screen bg-center h-full w-full">
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
      <div className="bg-sky-700 flex items-center min-h-screen">
        <Image
          src="/assets/imgs/Rectangle54.png"
          alt="Company Logo"
          width={700}
          height={600}
        />
        <div className="md:w-1/2 bg-blue-700 text-white p-8 flex flex-col justify-center min-h-screen">
          <h2 className="text-2xl font-semibold mb-4">Product</h2>
          <ul className="space-y-1 text-sm md:text-base">
            <li>Standard Thai Rubber 10</li>
            <li>Standard Thai Rubber 20</li>
            <li>Standard Thai Rubber 20M</li>
            <li>Mooney Viscosity Controlled 9710</li>
            <li>Mooney Viscosity Controlled 9720</li>
            <li>Constant Viscosity 60</li>
            <li>Constant Viscosity 65</li>
            <li>Mixture Rubber (Pending 2017–2018)</li>
          </ul>
        </div>
      </div>
      <div className="bg-white py-12 px-6 text-center">
        <h2 className="text-2xl font-bold text-blue-700 mb-2 uppercase">
          Packaging
        </h2>
        <p className="text-sm max-w-2xl mx-auto mb-10">
          Various packaging are available to meet the requirements of our
          customers. Our container loading is carried out in our factory under
          close supervision to ensure that rubber arrives at the destination in
          its best conditions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          <div className="flex flex-col items-center">
            <div className="bg-blue-700 text-white w-40 h-40 rounded-full flex items-center justify-center text-3xl font-bold shadow-lg">
              35
            </div>
            <p className="mt-3 text-sm">kilograms loose bales</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-blue-700 text-white w-40 h-40 rounded-full flex items-center justify-center text-3xl font-bold shadow-lg">
              1.26
            </div>
            <p className="mt-3 text-sm text-center">
              tons shrink wrapped
              <br />
              Plastic base
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-blue-700 text-white w-40 h-40 rounded-full flex items-center justify-center text-3xl font-bold shadow-lg">
              1.33
            </div>
            <p className="mt-3 text-sm text-center">
              tons shrink wrappedmetal base / Friendlypack pallet
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-blue-700 text-white w-40 h-40 rounded-full flex items-center justify-center text-3xl font-bold shadow-lg">
              1.26
            </div>
            <p className="mt-3 text-sm">
              tons
              <br />
              Metal box
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
