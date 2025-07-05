import React from "react";
import Image from "next/image";

export default function Abouts() {
  return (
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
  );
}
