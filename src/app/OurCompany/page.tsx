import React from "react";

export default function OurCompany() {
  return (
    <div className="flex items-center justify-center bg-[url('/assets/imgs/Tree-back.png')] bg-cover bg-center min-h-screen text-center">
      <main className="flex flex-col items-center justify-center">
        <h1 className="text-white text-4xl font-bold mb-4 bg-black/50 p-4 rounded">
          About Us
        </h1>
        <p className="bg-white text-gray-800 p-6 rounded-lg shadow-lg max-w-3xl">
          SV Polymer CO., LTD. (SV Polymer) is a European based joint venture
          BOI approved natural rubber processing and export company established
          in 26th July 2010. With combined experience of over 150 years in
          natural rubber business from world class tire maker (Michelin) and
          experience natural rubber processor (Mr. Chee Wan Lee, Mr. Payungsak
          Kerdvonbundit) who shared common vision to create sustainable value
          added product and service through research and development. We are
          headquartered with 252 ha (1,600 rais) of land in a strategic
          location, Mukdahan, Thailand the center of east west economic corridor
          that connects 4 countries Myanmar, Thailand, Laos and Vietnam which
          produces total estimation of 47% of world rubber production and raw
          material sources. To achieve sustainability in the natural rubber
          industry it is essential to continually develop process efficiency and
          quality, maintain high corporate social responsibility through
          breakthrough innovation to adapt to the ongoing changes in the world’s
          economy and environment. We understand the importance of quality and
          its impact on the final products which may have save lives. Therefore,
          we are committed to manufacturing rubber with stringent quality
          control policy that our company always upheld to meet the requirements
          of our customers. As we aim best in producing highest eco-quality
          standardized natural rubber. To prove our commitment, we had already
          been certified with ISO9001:2008, ISO14001:2015, TLS8001:2010, Silver
          Medal in Ecovadis with highest score in environmental aspect, Green
          industry award and soon ISO/IEC 17025:2005. We believe that skillful
          labor and employees, state-of-art technology, creative methodology and
          strong commitment to research and development will enable Nteq Polymer
          to be center of excellence in natural rubber processing technology in
          the future.
        </p>
        <div className="flex flex-col md:flex-row gap-8 bg-black/40 p-8 rounded-lg backdrop-blur-sm">
          {/* Vision Box */}
          <div className="bg-white/70 p-6 rounded-md shadow-md w-full md:w-1/2 text-center">
            <h2 className="text-2xl font-bold text-green-700 mb-4">Vision</h2>
            <p className="text-gray-800">
              "Lead the different and be the benchmark"
              <br />
              "through synergy in natural rubber industry"
            </p>
          </div>

          {/* Missions Box */}
          <div className="bg-white/70 p-6 rounded-md shadow-md w-full md:w-1/2 text-center">
            <h2 className="text-2xl font-bold text-green-700 mb-4">Missions</h2>
            <p className="text-gray-800">
              "Advance technology innovative material"
              <br />
              "Create customer satisfaction and produce products at the highest
              quality"
              <br />
              "Clean and environmentally friendly factory that help develop and
              improve standard of living"
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
