import React from "react";
import Image from "next/image";
const articles = () => (
  <article className="mt-16">
    <p className="font-bold text-2xl tracking-wide mb-10 text-center">
      جدیدترین مقالات
    </p>
    <Image
      src="/images/Frame 71.png"
      width="1280"
      height="416"
      alt="aritcle-img"
      className="mx-auto"
    />
  </article>
);
export default articles;
