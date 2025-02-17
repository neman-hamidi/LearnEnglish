import Image from "next/image";
import React from "react";

const opinionItem = ({ name, src, language, desc }) => (
  <section className="bg-white rounded-3xl py-4 px-5">
    <div className="flex items-center justify-between pb-1.5">
      <div className="flex items-center gap-2">
        <Image
          src={src}
          width="54"
          height="54"
          alt="main-img"
          className="rounded-full"
        />
        <h5 className="font-bold">{name}</h5>
      </div>
      <h3 className="text-praimary">{language}</h3>
    </div>
    <p className="text-justify font-dana-light tracking-wide leading-7">
      {desc}
    </p>
  </section>
);
export default opinionItem;
