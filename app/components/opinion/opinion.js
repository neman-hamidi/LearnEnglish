import React from "react";
import OpinionItem from "./opinionItem/opinionItem";
import details from "./Text";
const opinion = () => (
  <section className="bg-[#F0F0F0] py-8">
    <p className="text-2xl font-bold mb-10 text-center">دیدگاه دانشجویان</p>
    <div className="flex items-center justify-center gap-6 w-9/10 mx-auto">
      {details.map((item, index) => (
        <OpinionItem key={index} {...item} />
      ))}
    </div>
  </section>
);
export default opinion;
