import React from "react";
import TeacherItem from "./teacherItem/teacherItem";
import Image from "next/image";
import details from "./Text";
const teacher = () => (
  <div className="my-24 relative w-9/10 mx-auto">
    <Image
      src="/images/Vector 23.png"
      width="48"
      height="48"
      alt="arrow-different"
      className="absolute top-0 right-0 rotate-90"
    />
    <Image
      src="/images/Vector 23.png"
      width="48"
      height="48"
      alt="arrow-different"
      className="absolute bottom-0 right-0 rotate-180"
    />
    <Image
      src="/images/Vector 23.png"
      width="48"
      height="48"
      alt="arrow-different"
      className="absolute top-0 left-0"
    />
    <Image
      src="/images/Vector 23.png"
      width="48"
      height="48"
      alt="arrow-different"
      className="absolute bottom-0 left-0 -rotate-90"
    />

    <p className="text-center text-2xl font-bold translate-y-3 md:translate-y-0">مدرس های زبانـــیا</p>
    <div className="flex items-center gap-10 justify-center flex-wrap mt-6 md:mt-0">
      {details.map((item, index) => (
        <TeacherItem key={index} {...item} />
      ))}
    </div>
  </div>
);
export default teacher;
