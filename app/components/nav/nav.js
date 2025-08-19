import React from "react";
import Image from "next/image";
const nav = () => (
  <nav className="flex justify-between items-center w-9/10 mx-auto my-4">
    <div className="flex items-center gap-8">
      <div className="relative">
        <h1 className="text-2xl text-praimary font-bold">زبانیا</h1>
        <span className="absolute top-0 -left-1.5 ">
          <Image
            src="/images/teacher.png"
            alt="teacher"
            width="16"
            height="10"
          />
        </span>
      </div>
      <ul className="md:flex hidden gap-10 text-lg  ">
        <li>خانه</li>
        <li className="flex items-center gap-1">
          زبان ها
          <svg className="w-4 h-4">
            <use href="#chevron-down"></use>
          </svg>
        </li>
        <li>مقالات</li>
        <li>تماس با ما</li>
        <li>درباره ما</li>
      </ul>
    </div>
    <div>
      <button type="submit" className="btn-custom text-xs">
        ورود / ثبت نام
      </button>
    </div>
  </nav>
);
export default nav;
