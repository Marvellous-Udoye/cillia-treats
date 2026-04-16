import { marqueeText } from "../../data/home-page-data";

export function CategoryMarqueeSection() {
  return (
    <section
      id="celebration-cakes"
      className="relative rounded-t-3xl bg-[#b5162f] py-[5vw] text-white"
    >
      <div className="mt-8 overflow-hidden whitespace-nowrap border-y-2 border-white/30">
        <div className="ochi-marquee-track flex w-max gap-10">
          {[0, 1, 2, 3].map((item) => (
            <h2
              className="-mb-[1rem] -mt-6 font-ochi-head text-[28vw] uppercase leading-none md:-mb-[2rem] md:-mt-16 md:text-[30vw]"
              key={item}
            >
              {marqueeText}
            </h2>
          ))}
        </div>
      </div>
    </section>
  );
}
