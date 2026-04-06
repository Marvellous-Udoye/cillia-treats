import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
  const soniqueRef = useRef<HTMLParagraphElement | null>(null);
  const isHeroDark = true;

  useGSAP(() => {
    const element = soniqueRef.current;
    const mm = gsap.matchMedia();

    if (!element) {
      return;
    }

    gsap.fromTo(
      element,
      {
        scale: 0,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
      },
    );

    mm.add("(min-width: 768px)", () => {
      gsap.fromTo(
        element,
        { scale: 1, x: "20%", y: 0 },
        {
          scale: 0.1,
          x: "-35%",
          y: -190,
          scrollTrigger: {
            trigger: element,
            start: "top top",
            end: "top+=100px top",
            scrub: true,
          },
        },
      );

      gsap.fromTo(
        ".sq",
        { opacity: 1 },
        {
          opacity: 0,
          scrollTrigger: {
            trigger: ".sq",
            start: "top top",
            end: "top+=230",
            scrub: true,
          },
        },
      );
    });

    return () => mm.revert();
  }, []);

  return (
    <div
      className={`w-full transition-colors duration-500 backdrop-blur-2xl ${
        isHeroDark ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      <div className="flex flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-center md:p-3">
        <div className="relative w-full md:flex-1/4">
          <span className="sq text-xl md:ms-20 md:text-2xl">CT</span>
          <p
            ref={soniqueRef}
            className={`font-head font-semibold uppercase pointer-events-none whitespace-nowrap text-[2.7rem] leading-none md:absolute md:-z-10 md:top-40 md:text-[9em] 2xl:text-[12em] ${
              isHeroDark ? "text-black" : "text-white"
            }`}
          >
            Cillia Treats
          </p>
        </div>

        <div className="grid w-full grid-cols-2 gap-x-5 gap-y-2 pt-16 text-xs md:flex md:flex-2/4 md:items-center md:justify-center md:gap-10 md:pt-0 md:text-sm">
          <a href="#cakes">Cakes</a>
          <a href="#small-chops">Small Chops</a>
          <a href="#pastries">Pastries</a>
          <a href="#gift-sets">Gift Sets</a>
          <a href="#corporate-orders">Corporate Orders</a>
        </div>

        <div className="flex w-full items-center md:w-full md:flex-1/4 md:justify-center">
          <button
            className={`flex w-full items-center justify-center gap-2 rounded-full border px-6 py-3 text-sm transition-colors duration-500 md:w-auto md:px-10 ${
              isHeroDark
                ? "border-black text-black"
                : "border-white text-white"
            }`}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}
