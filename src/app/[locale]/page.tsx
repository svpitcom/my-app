import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import Link from "next/link";

const imageList = [
  "/assets/imgs/209044.png",
  "/assets/imgs/209045.png",
  "/assets/imgs/209046.png",
  "/assets/imgs/209047.png",
];

const cardData = [
  {
    title: "News",
    subtitle: "Frequently Asked Questions (FAQs)",
    link: "/",
  },
  {
    title: "CSR",
    subtitle: "กิจกรรม",
    link: "/",
  },
  {
    title: "Knowledge Center",
    subtitle: "Diseases and enemies of rubber",
    link: "/",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col">
      {/* Banner Section */}
      <div className="bg-[url('/assets/imgs/tree.png')] bg-cover bg-center text-center">
        <div className="flex justify-center py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="relative px-4 py-10 sm:py-16">
            <div className="flex flex-col items-center text-center">
              <Image
                src="/assets/imgs/Card_6v1.png"
                alt="Card"
                width={800}
                height={640}
                className="mb-4"
              />
              {/* w-full max-w-md sm:max-w-lg md:max-w-2xl */}
            </div>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="bg-white text-black py-12 px-4 sm:px-6 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
          SV POLYMER INTRODUCTIONS
        </h1>
        <div className="max-w-4xl mx-auto">
          <p className="text-base sm:text-lg md:text-xl text-sky-700 font-bold mb-4">
            “SUSTAINABLE ECO-QUALITY RUBBER”
          </p>
          <p className="text-sm sm:text-base md:text-lg mb-4">
            SV Polymer Co., Ltd. is a European base joint venture BOI approved
            natural rubber processing and export company established since 2024.
            With strong strategic partnership of a world class tire maker and an
            experienced natural rubber processor that share common vision to
            lead the different and be the benchmark through synergy in natural
            rubber industry.
          </p>
          <p className="text-sm sm:text-base md:text-lg">
            Our goal is to create an innovative material via improvement in
            product quality to satisfy beyond customer’s expectation.
            Sustainability is key to Nteq, in which we strive to become the
            cleanest and most eco-friendly factory that helps improve the
            standard living of the people and community.
          </p>
        </div>
      </div>

      {/* Images Section */}
      <AnimateOnScroll>
        <div className="bg-gradient-to-br from-sky-600 to-green-500 flex flex-wrap justify-center gap-4 px-4 py-8">
          {imageList.map((src, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/4 px-2">
              <Image
                src={src}
                alt={`Company image ${index + 1}`}
                width={500}
                height={500}
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
            </div>
          ))}
        </div>
      </AnimateOnScroll>

      {/* Cards Section */}
      <AnimateOnScroll>
        <div className="bg-sky-50 flex flex-wrap justify-center gap-6 px-4 py-12">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="w-full sm:w-[90%] md:w-[45%] lg:w-[30%] bg-white rounded-md flex flex-col items-center text-center p-4 shadow-md hover:shadow-lg transition-transform hover:scale-105 cursor-pointer"
            >
              <Image
                src="/assets/imgs/Card-box-1.png"
                alt={`${card.title} image`}
                width={350}
                height={350}
                className="w-full h-auto p-2"
              />
              <Link
                href={card.link}
                className="font-bold text-xl md:text-2xl text-sky-600 hover:text-sky-400"
              >
                {card.title}
              </Link>
              <Link
                href={card.link}
                className="font-semibold text-base md:text-lg text-sky-600 hover:text-sky-400"
              >
                {card.subtitle}
              </Link>
              <a
                className="bg-sky-700 text-base md:text-lg w-full hover:bg-blue-800 text-white rounded p-2 mt-2"
                href="#"
              >
                Read Me
              </a>
            </div>
          ))}
        </div>
      </AnimateOnScroll>
    </div>
  );
}
