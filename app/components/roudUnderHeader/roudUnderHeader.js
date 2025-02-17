import React from "react";
import Image from "next/image";
import Language from "./language/language";
import details from "./Text";
const roudUnderHeader = () => (
  <>
    <div className="relative">
      <div className="mr-52 -translate-y-10">
        <Image
          src="/images/Vector 10.png"
          width="473"
          height="330"
          alt="main-img"
        />
        <Image
          src="/images/flagg.png"
          width="60"
          height="60"
          alt="main-img"
          className="-translate-y-16 translate-x-12"
        />
      </div>
      <div className="absolute top-12 left-0 right-0">
        <Image
          src="/images/side.png"
          width="1474"
          height="50"
          alt="main-img"
          className="w-full"
        />
      </div>
    </div>
    <div className="grid grid-cols-2 gap-8 w-9/10 mx-auto">
      {details.map((item, index) => (
        <Language key={index} {...item}>
          {item.imgs.map((one, index) => (
            <Image
              key={index}
              src={one.src}
              width="37"
              height="37"
              alt="imgs"
            />
          ))}
        </Language>
      ))}
    </div>
    <div className="flex justify-center my-10">
      <button className="btn-custom flex items-center gap-1">
        مشاهده همه زبان ها
        <svg className="w-5 h-5 ">
          <use href="#arrow-left"></use>
        </svg>
      </button>
    </div>
  </>
);
export default roudUnderHeader;
