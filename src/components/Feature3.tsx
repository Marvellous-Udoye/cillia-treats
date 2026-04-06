import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

export default function Feature3() {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

  const topLineRef = useRef<SVGPathElement | null>(null);
  const rightLineRef = useRef<SVGPathElement | null>(null);
  const bottomLineRef = useRef<SVGPathElement | null>(null);
  const leftLineRef = useRef<SVGPathElement | null>(null);
  const topDotRef = useRef<HTMLDivElement | null>(null);
  const rightDotRef = useRef<HTMLDivElement | null>(null);
  const bottomDotRef = useRef<HTMLDivElement | null>(null);
  const leftDotRef = useRef<HTMLDivElement | null>(null);
  const topCardRef = useRef<HTMLDivElement | null>(null);
  const rightCardRef = useRef<HTMLDivElement | null>(null);
  const bottomCardRef = useRef<HTMLDivElement | null>(null);
  const leftCardRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".fade-up",
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: ".Feature3",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".Feature3-central-image",
        start: "top center",
        toggleActions: "play none none reverse",
      },
    });

    const items = [
      { path: topLineRef.current, dot: topDotRef.current, card: topCardRef.current },
      { path: rightLineRef.current, dot: rightDotRef.current, card: rightCardRef.current },
      { path: bottomLineRef.current, dot: bottomDotRef.current, card: bottomCardRef.current },
      { path: leftLineRef.current, dot: leftDotRef.current, card: leftCardRef.current },
    ];

    items.forEach((item, i) => {
      const { path, dot, card } = item;

      if (!path || !dot || !card) {
        return;
      }

      tl.fromTo(
        path,
        { strokeDasharray: 800, strokeDashoffset: 800 },
        {
          strokeDashoffset: 0,
          duration: 1.8,
          ease: "power2.inOut",
        },
        i * 0.3
      )
        .fromTo(
          dot,
          {
            motionPath: {
              path,
              align: path,
              alignOrigin: [0.5, 0.5],
              start: 0,
            },
          },
          {
            motionPath: {
              path,
              align: path,
              alignOrigin: [0.5, 0.5],
              end: 1,
            },
            duration: 1.8,
            ease: "power2.inOut",
          },
          "<"
        )
        .fromTo(
          card,
          { opacity: 0, scale: 0.9, y: 20 },
          { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "power3.out" },
          ">-0.3"
        );
    });
  }, []);

  return (
    <section className="Feature3 relative min-h-screen flex flex-col items-center justify-center bg-white text-black px-10 py-20 overflow-hidden">
      <div className="max-w-8xl text-center mb-16">
        <h2 className="fade-up Feature3-title text-9xl font-extrabold mb-4 tracking-tight">
          ENGINEERED TO INSPIRE
        </h2>
        <p className="fade-up text-gray-500 text-lg max-w-2xl mx-auto">
          The art of precision, balance, and technology - visualized.
        </p>
      </div>

      <div className="Feature3-central-image relative flex justify-center items-center w-full max-w-6xl">
        <img
          src="/imgs/headphone-no-frame.svg"
          alt="Headphones"
          className="w-[420px] relative z-10"
        />

        <svg
          className="absolute w-full h-full left-0 top-0"
          viewBox="0 0 1200 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            ref={topLineRef}
            d="M800 400 L800 100 L1000 100"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            ref={rightLineRef}
            d="M800 400 L1050 700 L1130 700"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            ref={bottomLineRef}
            d="M400 400 L200 100 L50 100"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            ref={leftLineRef}
            d="M600 400 L250 800 L100 800"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>

        <div ref={topDotRef} className="absolute w-3 h-3 bg-black rounded-full shadow-md"></div>
        <div ref={rightDotRef} className="absolute w-3 h-3 bg-black rounded-full shadow-md"></div>
        <div ref={bottomDotRef} className="absolute w-3 h-3 bg-black rounded-full shadow-md"></div>
        <div ref={leftDotRef} className="absolute w-3 h-3 bg-black rounded-full shadow-md"></div>

        <div
          ref={topCardRef}
          className="absolute top-0 right-[150px] bg-white border border-gray-300 rounded-xl px-6 py-5 shadow-sm backdrop-blur-sm"
        >
          <h3 className="text-lg font-semibold mb-1">Acoustic Precision</h3>
          <p className="text-gray-600 text-sm max-w-[180px]">
            Tuned for soundstage depth and clarity.
          </p>
        </div>

        <div
          ref={rightCardRef}
          className="absolute top-[250px] right-[80px] bg-white border border-gray-300 rounded-xl px-6 py-5 shadow-sm"
        >
          <h3 className="text-lg font-semibold mb-1">Sleek Ergonomics</h3>
          <p className="text-gray-600 text-sm max-w-[180px]">
            Designed to fit perfectly for long sessions.
          </p>
        </div>

        <div
          ref={bottomCardRef}
          className="absolute top-[0px] left-[70px] bg-white border border-gray-300 rounded-xl px-6 py-5 shadow-sm"
        >
          <h3 className="text-lg font-semibold mb-1">Sustainable Build</h3>
          <p className="text-gray-600 text-sm max-w-[180px]">
            Crafted with eco-conscious materials and precision assembly.
          </p>
        </div>

        <div
          ref={leftCardRef}
          className="absolute top-[320px] left-[80px] bg-white border border-gray-300 rounded-xl px-6 py-5 shadow-sm"
        >
          <h3 className="text-lg font-semibold mb-1">Dynamic Performance</h3>
          <p className="text-gray-600 text-sm max-w-[180px]">
            Adaptive frequency response for every moment.
          </p>
        </div>
      </div>
    </section>
  );
}
