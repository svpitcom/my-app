import Image from "next/image";

export default function Home() {
  return (
    <div className="d-flex bg-[url('/assets/imgs/Tree-back.png')] bg-cover bg-center h-full w-full">
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
          With strong strategic partnership of a world class tire maker and an
          experience natural rubber processor that share common vision to lead
          the different and be the benchmark through synergy in natural rubber
          industry.Our goal is to create an innovative material via improvement
          in product quality to satisfy beyond customer’s expectation.
          Sustainability is key to Nteq, in which we strive to become the
          cleanest and most eco-friendly factory that help improves the standard
          living of the people and community.
        </p>
      </section>
      <div className="columns-4">
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
