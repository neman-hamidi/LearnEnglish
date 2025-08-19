const language = ({ title, children, desc }) => (
  <section className="p-8 bg-[#F0F0F0] rounded-3xl">
    <div className="flex md:flex-nowrap flex-wrap items-center justify-between">
      <h3 className="md:text-4xl text-base font-bold">{title}</h3>
      <div className="flex flex-wrap items-center justify-between gap-2">{children}</div>
    </div>
    <p className="py-4 tracking-wide leading-7 text-justify">{desc}</p>
    <p className="text-praimary flex gap-2 items-center justify-end font-bold">
      مشاهده دوره ها
      <svg className="w-5 h-5">
        <use href="#arrow-left"></use>
      </svg>
    </p>
  </section>
);
export default language;
