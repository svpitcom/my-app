import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import Link from "next/link";
// /app/[locale]/page.tsx

// type Props = {
//   params: {
//     locale: string;
//   };
// };
// { params }: Props

export default function Home() {
  // const dict = await getDictionary(params.locale);
  return (
    <div className="h-full w-full min-h-screen flex flex-col">
      <div className="bg-[url('/assets/imgs/paratree.jpg')] bg-cover bg-center w-full">
        <div className="flex justify-center">
          <div className="relative py-20">
            <Image
              src="/assets/imgs/En.png"
              alt="Company Logo"
              width={800}
              height={640}
              className="object-cover opacity-80"
              priority
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
              <Image
                src="/assets/imgs/Card.png"
                alt="Card Overlay"
                width={800}
                height={640}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white text-black py-20 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          SV POLYMER INTRODUTIONS
        </h1>
        <div className=" max-w-4xl mx-auto">
          <p className="text-lg text-sky-700 font-bold">
            “SUSTAINABLE ECO-QUALITY RUBBER”
          </p>
          <p className="text-lg md:text-xl mb-6">
            SV Polymer Co., Ltd. is a european base joint venture BOI approved
            natural rubber processing and export company established since 2010.
            With strong strategic partnership of a world class tire maker and an
            experience natural rubber processor that share common vision to lead
            the different and be the benchmark through synergy in natural rubber
            industry
          </p>
          <br />
          <p className="text-lg md:text-xl mb-6">
            Our goal is to create an innovative material via improvement in
            product quality to satisfy beyond customer’s expectation.
            Sustainability is key to Nteq, in which we strive to become the
            cleanest and most eco-friendly factory that help improves the
            standard living of the people and community.
          </p>
        </div>
      </div>
      <AnimateOnScroll>
        <div className="bg-gradient-to-br from-sky-600 to-green-500 flex flex-col md:flex-row items-center justify-center gap-6 px-4 py-8">
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
      </AnimateOnScroll>
      <br />
      <div className="bg-gradient-to-br from-sky-600 to-green-500 rounded-lg py-4 flex flex-col md:flex-row items-center gap-6 shadow-lg">
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="bg-gray-200 rounded-lg border-4 border-white w-full h-full flex items-center justify-center">
            {/* <iframe
              className="aspect-video"
              src="https://www.youtube.com/embed/d36j9rJgi7E"
              title="SV Polymer Company Presentation Video"
            ></iframe> */}
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
      <AnimateOnScroll>
        <div className="bg-sky-50 flex flex-col md:flex-row items-center justify-center gap-6 px-8 py-8">
          <div className="w-95 h-full rounded-md bg-white flex flex-col justify-between items-center text-center p-2 shadow-md hover:shadow-lg transition-transform hover:scale-105 cursor-pointer">
            <Image
              src="/assets/imgs/Card-box-1.png"
              alt="Company Logo"
              width={350}
              height={350}
              className="p-2 "
            />
            <Link
              href="/"
              className="font-bold text-3xl text-sky-600 hover:text-sky-400"
            >
              News
            </Link>
            <Link
              href="/"
              className="font-bold text-xl text-sky-600 hover:text-sky-400"
            >
              Frequently Asked Questions (FAQs)
            </Link>
            <a
              className="bg-sky-700 text-xl w-full h-full hover:bg-blue-800 text-white rounded p-2"
              href="#"
            >
              Read Me
            </a>
          </div>
          <div className="w-95 h-full rounded-md bg-white flex flex-col justify-between items-center text-center p-2 shadow-md hover:shadow-lg transition-transform hover:scale-105 cursor-pointer">
            <Image
              src="/assets/imgs/Card-box-1.png"
              alt="Company Logo"
              width={350}
              height={350}
              className="p-2"
            />
            <Link
              href="/"
              className="font-bold text-3xl text-sky-600 hover:text-sky-400"
            >
              CSR
            </Link>
            <Link
              href="/"
              className="font-bold text-xl text-sky-600 hover:text-sky-400"
            >
              กิจกรรม
            </Link>
            <a
              className="bg-sky-700 text-xl w-full h-full hover:bg-blue-800 text-white rounded p-2"
              href="#"
            >
              Read Me
            </a>
          </div>
          <div className="w-95 h-full rounded-md bg-white flex flex-col justify-between items-center text-center p-2 shadow-md hover:shadow-lg transition-transform hover:scale-105 cursor-pointer">
            <Image
              src="/assets/imgs/Card-box-1.png"
              alt="Company Logo"
              width={350}
              height={350}
              className="p-2"
            />
            <Link
              href="/"
              className="font-bold text-2xl text-sky-600 hover:text-sky-400"
            >
              KNOWLEDGE CENTER
            </Link>
            <Link
              href="/"
              className="font-bold text-lg text-sky-600 hover:text-sky-400"
            >
              Diseases and enemies of rubbe
            </Link>
            <a
              className="bg-sky-700 text-xl w-full h-full hover:bg-blue-800 text-white rounded p-2"
              href="#"
            >
              Read Me
            </a>
          </div>
        </div>
      </AnimateOnScroll>
    </div>
  );
}
