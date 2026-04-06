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
      },
    );

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
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
          i * 0.3,
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
            "<",
          )
          .fromTo(
            card,
            { opacity: 0, scale: 0.9, y: 20 },
            { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "power3.out" },
            ">-0.3",
          );
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section id="corporate-orders" className="Feature3 relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white px-4 py-16 text-black md:px-10 md:py-20">
      <div className="mb-16 max-w-8xl text-center">
        <h2 className="fade-up Feature3-title mb-4 font-head text-5xl tracking-tight md:text-9xl">
          CURATED TO DELIGHT
        </h2>
        <p className="fade-up mx-auto max-w-2xl text-lg text-gray-500">
          A closer look at the thoughtful details behind every cake box, platter, and gift package.
        </p>
      </div>

      <div className="Feature3-central-image relative flex w-full max-w-6xl flex-col items-center justify-center md:block">
        <img
          src="/imgs/headphone-no-frame.svg"
          alt="Headphones"
          className="relative z-10 w-[260px] md:mx-auto md:w-[420px]"
        />

        <svg
          className="absolute left-0 top-0 hidden h-full w-full md:block"
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

        <div ref={topDotRef} className="absolute hidden h-3 w-3 rounded-full bg-black shadow-md md:block"></div>
        <div ref={rightDotRef} className="absolute hidden h-3 w-3 rounded-full bg-black shadow-md md:block"></div>
        <div ref={bottomDotRef} className="absolute hidden h-3 w-3 rounded-full bg-black shadow-md md:block"></div>
        <div ref={leftDotRef} className="absolute hidden h-3 w-3 rounded-full bg-black shadow-md md:block"></div>

        <div className="mt-10 grid w-full gap-4 md:hidden">
          <div className="rounded-xl border border-gray-300 bg-white px-5 py-4 shadow-sm">
            <h3 className="mb-1 text-lg font-semibold">Custom Cake Orders</h3>
            <p className="max-w-[220px] text-sm text-gray-600">
              Buttercream cakes and celebration designs tailored for your moments.
            </p>
          </div>
          <div className="rounded-xl border border-gray-300 bg-white px-5 py-4 shadow-sm">
            <h3 className="mb-1 text-lg font-semibold">Corporate Gifting</h3>
            <p className="max-w-[220px] text-sm text-gray-600">
              Well-presented treats and hampers for clients, teams, and branded occasions.
            </p>
          </div>
          <div className="rounded-xl border border-gray-300 bg-white px-5 py-4 shadow-sm">
            <h3 className="mb-1 text-lg font-semibold">Pastry Selection</h3>
            <p className="max-w-[220px] text-sm text-gray-600">
              Doughnuts, banana bread, chicken pies, and dessert bites for every craving.
            </p>
          </div>
          <div className="rounded-xl border border-gray-300 bg-white px-5 py-4 shadow-sm">
            <h3 className="mb-1 text-lg font-semibold">Event Platters</h3>
            <p className="max-w-[220px] text-sm text-gray-600">
              Small chops and party trays packed for easy serving and memorable hosting.
            </p>
          </div>
        </div>

        <div
          ref={topCardRef}
          className="absolute top-0 right-[150px] hidden rounded-xl border border-gray-300 bg-white px-6 py-5 shadow-sm backdrop-blur-sm md:block"
        >
          <h3 className="mb-1 text-lg font-semibold">Custom Cake Orders</h3>
          <p className="max-w-[180px] text-sm text-gray-600">
            Buttercream cakes and celebration designs tailored for your moments.
          </p>
        </div>

        <div
          ref={rightCardRef}
          className="absolute right-[80px] top-[250px] hidden rounded-xl border border-gray-300 bg-white px-6 py-5 shadow-sm md:block"
        >
          <h3 className="mb-1 text-lg font-semibold">Corporate Gifting</h3>
          <p className="max-w-[180px] text-sm text-gray-600">
            Well-presented treats and hampers for clients, teams, and branded occasions.
          </p>
        </div>

        <div
          ref={bottomCardRef}
          className="absolute left-[70px] top-[0px] hidden rounded-xl border border-gray-300 bg-white px-6 py-5 shadow-sm md:block"
        >
          <h3 className="mb-1 text-lg font-semibold">Pastry Selection</h3>
          <p className="max-w-[180px] text-sm text-gray-600">
            Doughnuts, banana bread, chicken pies, and dessert bites for every craving.
          </p>
        </div>

        <div
          ref={leftCardRef}
          className="absolute left-[80px] top-[320px] hidden rounded-xl border border-gray-300 bg-white px-6 py-5 shadow-sm md:block"
        >
          <h3 className="mb-1 text-lg font-semibold">Event Platters</h3>
          <p className="max-w-[180px] text-sm text-gray-600">
            Small chops and party trays packed for easy serving and memorable hosting.
          </p>
        </div>
      </div>
    </section>
  );
}
