import React from "react";
import Image from "next/image";
const header = () => (
  <header className="relative">
    <Image
      src="/images/Vector-7.png"
      alt="main-img"
      width="1003"
      height="727"
      className="absolute left-0 top-0 z-10"
    />

    <Image
      src="/images/Vector-9.png"
      alt="main-img"
      width="1029"
      height="919"
      className="absolute left-0 top-0 z-10"
    />
    <div className="w-9/10 mx-auto flex items-center justify-between pt-16">
      <div>
        <div className="text-[64px] w-96">
          <span>یادگیری </span>
          <br />
          <h2>راحت زبان</h2>
          <div className="relative">
            <div className="flex gap-4">
              همراه با<h1 className="text-praimary font-bold">زبانیا</h1>
            </div>
            <span className="absolute top-0 left-8">
              <Image
                src="/images/teacher2.png"
                alt="teacher"
                width="46"
                height="30"
              />
            </span>
          </div>
        </div>
        <p className="mt-4 mb-10 -tracking-tighter">
          ما اینجا هستیم که تو پیشرفت کنی
        </p>
        <div className="flex gap-10">
          <button type="submit" className="btn-custom text-sm">
            مشاهده دوره ها
          </button>
          <p className="flex items-center">
            اساتید زبانیا
            <svg className="w-6 h-6 text-gray-400">
              <use href="#arrow-left"></use>
            </svg>
          </p>
        </div>
      </div>
      <div className="z-30">
        <Image src="/images/img.png" alt="main-img" width="759" height="535" />
      </div>
    </div>
  </header>
);
export default header;
