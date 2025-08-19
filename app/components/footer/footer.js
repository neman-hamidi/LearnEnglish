import React from "react";
import Image from "next/image";
import { icons, Ps } from "./Text";
const footer = () => (
  <footer className="bg-[#1A1A1A] text-white relative mt-28 pb-4">
    <Image
      src="/images/Vector 24.png"
      width="431"
      height="160"
      alt="img-footer"
      className="absolute -top-24 right-0"
    />
    <div className="ml-auto mr-14 flex flex-wrap gap-20 pt-10">
      <div>
        <div className="relative w-fit">
          <h1 className="text-praimary font-bold text-6xl translate-x-0">
            زبانیا
          </h1>
          <span className="absolute -top-5 -left-5">
            <Image
              src="/images/teacher2.png"
              alt="teacher"
              width="46"
              height="30"
            />
          </span>
        </div>
        <p className="mb-14 mt-2 max-w-96 leading-8 tracking-wide">
          تو یک روز بهاری با چنتا از دوستانم تصمیم گرفتیم که یک آموزشگاه زبان که
          به دانشجو ها اهمیت میده تاسیس کنم تا بتونم خودمم کنار دانشجو ها درس
          بخونم و پیشرفت کنم . جمله خوبی نبود ولی من به عنوان برنامه نویس تلاش
          خودمو کردم .
        </p>
        <div className="flex gap-6">
          {icons.map((item, index) => (
            <div key={index}>{item.icon}</div>
          ))}
        </div>
      </div>
      <div className="text-xl font-dana-light">
        {Ps.slice(0, 6).map((item, index) => (
          <p key={index} className={item.className}>
            {item.title}
          </p>
        ))}
      </div>
      <div className="text-xl font-dana-light">
        {Ps.slice(6, 12).map((item, index) => (
          <p key={index} className={item.className}>
            {item.title}
          </p>
        ))}
      </div>
      <div>
        {Ps.slice(12).map((item, index) => (
          <p key={index} className={item.className}>
            {item.title}
          </p>
        ))}
      </div>
    </div>
    
    <div className="hidden md:block md:absolute bottom-0 left-0">
      <Image
        src="/images/Vector 25.png"
        width="728"
        height="609"
        alt="footer-img"
      />
      <div className="text-white absolute bottom-24 left-6 text-center hidden md:block">
        <h2 className="font-bold text-2xl">باشگاه زبانــیا</h2>
        <p className="font-dana-light text-xl">کلی خبر خوب داریم</p>
        <input
          type="text"
          placeholder="شماره موبایل"
          className="w-60 my-2 py-3 px-4 bg-white rounded-3xl"
        />
        <br />
        <button
          type="submit"
          className="py-3 w-60 text-center bg-[#82A31F] rounded-3xl"
        >
          ارسال
        </button>
      </div>
    </div>
  </footer>
);
export default footer;
