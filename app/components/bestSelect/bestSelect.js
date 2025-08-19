import React from "react";
import Image from "next/image";
const bestSelect = () => (
  <>
    <div className="relative hidden md:block">
      <div>
        <Image
          src="/images/Vector 14.png"
          width="322"
          height="298"
          alt="main-img"
          className="mx-auto"
        />
        <Image
          src="/images/dart.png"
          width="65"
          height="65"
          alt="main-img"
          className="mx-auto translate-x-28"
        />
      </div>
      <div className="absolute top-16 left-0 right-0">
        <Image
          src="/images/section 3.png"
          width="1440"
          height="93"
          alt="main-img"
          className="w-full"
        />
      </div>
    </div>
    <Image
      src="/images/section 4.png"
      width="1294"
      height="781"
      alt="main-img"
      className="mx-auto hidden md:block"
    />
  </>
);
export default bestSelect;
