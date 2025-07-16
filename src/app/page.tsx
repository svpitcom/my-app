import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[url('/assets/imgs/Tree-back.png')] bg-cover bg-center h-full w-full min-h-screen flex flex-col">
      {/* <Navbar /> */}
      <main className="flex justify-center">
        <div className="relative">
          <Image
            src="/assets/imgs/En.png"
            alt="Company Logo"
            width={800}
            height={640}
          />
          <div className="absolute top-0 left-0">
            <Image
              src="/assets/imgs/Card.png"
              alt="Card Overlay"
              width={800}
              height={640}
            />
          </div>
        </div>
      </main>
      <section className="bg-neutral-50 text-black py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          SV POLYMER INTRODUTIONS
        </h1>
        <p className="text-lg text-sky-700 font-bold">
          “SUSTAINABLE ECO-QUALITY RUBBER”
        </p>
        <p className="text-lg md:text-xl mb-6">
          SV Polymer Co., Ltd. is a european base joint venture BOI approved
          natural rubber processing and export company established since 2010.
          With strong strategic partnership of a world className tire maker and
          an experience natural rubber processor that share common vision to
          lead the different and be the benchmark through synergy in natural
          rubber industry.Our goal is to create an innovative material via
          improvement in product quality to satisfy beyond customer’s
          expectation. Sustainability is key to Nteq, in which we strive to
          become the cleanest and most eco-friendly factory that help improves
          the standard living of the people and community.
        </p>
      </section>
      <div className="columns-4 bg-neutral-50">
        <Image
          src="/assets/imgs/209044.png"
          alt="Company Logo"
          width={800}
          height={640}
        />
        <Image
          src="/assets/imgs/209045.png"
          alt="Company Logo"
          width={800}
          height={640}
        />
        <Image
          src="/assets/imgs/209046.png"
          alt="Company Logo"
          width={800}
          height={640}
        />
        <Image
          src="/assets/imgs/209047.png"
          alt="Company Logo"
          width={800}
          height={640}
        />
      </div>
      <div className="bg-sky-400 bg-gradient-to-br from-sky-500 to-sky-600 rounded-lg p-6 flex flex-col md:flex-row items-center gap-6 shadow-lg">
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="bg-gray-200 rounded-lg border-4 border-white w-full h-full flex items-center justify-center">
            <iframe
              className="aspect-video w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            ></iframe>
          </div>
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold text-white mb-2">
            VDO PRESENTATION
          </h2>
          <p className="text-white mb-4">
            บริษัท เอส วี โพลิเมอร์ จำกัด ขอเชิญชวน ร่วมสนับสนุน
            โครงการต่อเนื่อง มุทิตาคารโรงเรียนมัธยมยืน2 เพื่อส่งเสริมการเรียนรู้
            ปรับปรุงสภาพแวดล้อม ให้น่าเรียน น่าอยู่
            และพัฒนาการเรียนรู้ให้อยู่คู่เยาวชนไทยสืบต่อไป
          </p>
          <p className="text-white text-sm mb-4">Credit: SV POLYMER</p>

          <button className="bg-blue-700 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-300">
            MORE VDO
          </button>
        </div>
      </div>
    </div>
  );
}
