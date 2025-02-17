import Image from "next/image";
import React from "react";

const teacherItem = ({ name, job, src }) => (
  <div className="text-center">
    <Image src={src} width="223" height="223" alt="main-img" />
    <h4 className="font-bold text-2xl">{name}</h4>
    <h5 className="text-xl mt-5 font-dana-light">{job}</h5>
  </div>
);
export default teacherItem;
