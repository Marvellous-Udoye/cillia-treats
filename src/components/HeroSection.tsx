import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { MoveRight } from "lucide-react";
import { useRef } from "react";

export default function HeroSection() {
  gsap.registerPlugin(ScrollTrigger);
  const earbudsRef = useRef<HTMLImageElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const wordmarkRef = useRef<HTMLParagraphElement | null>(null);
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

  useGSAP(() => {
    const mm = gsap.matchMedia();

    gsap.fromTo(
      ".earbud-feature-card",
      {
        scale: 0,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
      },
    );

    if (wordmarkRef.current) {
      gsap.fromTo(
        wordmarkRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
      );
    }

    mm.add("(min-width: 768px)", () => {
      if (earbudsRef.current) {
        gsap.fromTo(
          earbudsRef.current,
          { scale: 1, y: 0, opacity: 1 },
          {
            scale: 1,
            x: 300,
            scrollTrigger: {
              trigger: earbudsRef.current,
              start: "top top",
              end: "bottom top",
              pin: true,
              scrub: true,
            },
          },
        );
      }

      gsap.to(".HeroSection", {
        scrollTrigger: {
          trigger: ".HeroSection",
          start: "bottom 200%",
          end: "bottom+=100px top",
          onEnter: () => console.log("Middle reached!"),
          toggleActions: "play none none reverse",
        },
      });
    });

    mm.add("(max-width: 767px)", () => {
      if (!earbudsRef.current || !sectionRef.current) {
        return;
      }

      gsap.fromTo(
        earbudsRef.current,
        { y: 0, scale: 1, opacity: 1, rotate: 0 },
        {
          y: 220,
          scale: 0.96,
          rotate: -6,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top+=88",
            end: "bottom top+=120",
            scrub: true,
            pin: earbudsRef.current,
            pinSpacing: false,
          },
        },
      );

      gsap.to(".earbud-feature-card", {
        y: 60,
        ease: "none",
        stagger: 0.08,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top+=88",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    gsap.fromTo(
      ".hero-secondary",
      {
        x: -200,
        opacity: 0,
        stagger: 0.2,
      },
      {
        x: 0,
        opacity: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".hero-secondary-container",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    );

    return () => mm.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="HeroSection relative flex min-h-[1080px] w-full flex-col items-center justify-end overflow-hidden pb-12 pt-8 md:h-300 md:min-h-0 md:pb-0 md:pt-0"
    >
      <div className="relative w-full md:flex-1/4">
        <p
          ref={soniqueRef}
          className={`font-head font-semibold uppercase pointer-events-none whitespace-nowrap text-[2.7rem] leading-none md:absolute md:-z-10 top-36 md:text-[9em] 2xl:text-[12em] ${
            isHeroDark ? "text-black" : "text-white"
          }`}
        >
          Cillia Treats
        </p>
      </div>

      <img
        src="/imgs/hero-bg.png"
        ref={earbudsRef}
        alt="earbuds"
        className="absolute top-20 z-100 w-[94vw] max-w-[380px] drop-shadow-2xl [filter:drop-shadow(0_18px_34px_rgba(181,22,47,0.26))] md:top-20 md:w-auto md:max-w-none"
      />
      <div className="earbud-feature-card absolute left-4 top-[17rem] flex max-w-[210px] items-center gap-3 rounded-xl bg-white/90 px-4 py-3 shadow-sm md:left-[10%] md:top-80 md:max-w-none md:gap-4 md:bg-transparent md:px-10">
        <img
          src="/imgs/earbud-feature-card-1.svg"
          alt="earbud-feature-card-icon text-sm"
        />
        <span className="text-neutral-800 font-light italic">
          Frosted Foil Cakes
          <br />
          Freshly Finished
        </span>
      </div>
      <div className="earbud-feature-card absolute left-3 top-[28rem] flex max-w-[220px] items-center gap-3 rounded-xl bg-white/90 px-4 py-3 shadow-sm md:left-[20%] md:top-120 md:max-w-none md:gap-4 md:bg-transparent md:px-10">
        <img
          src="/imgs/earbud-feature-card-2.svg"
          alt="earbud-feature-card-icon text-sm"
        />
        <span className="text-neutral-800 font-light italic">
          Small Chops for <br /> Every Celebration
        </span>
      </div>
      <div className="earbud-feature-card absolute right-3 top-[22.75rem] flex max-w-[220px] items-center gap-3 rounded-xl bg-white/90 px-4 py-3 text-right shadow-sm md:right-[10%] md:top-90 md:max-w-none md:gap-4 md:bg-transparent md:px-10 md:text-left">
        <img
          src="/imgs/earbud-feature-card-3.svg"
          alt="earbud-feature-card-icon text-sm"
        />
        <span className="text-neutral-800 font-light italic">
          Gift Hampers & Souvenirs
          <br />
          Beautifully Packed
        </span>
      </div>

      <div className="grid w-full grid-cols-1 gap-10 px-4 pb-8 pt-[37rem] md:grid-cols-2 md:px-20 md:pb-40">
        <div className="hero-secondary-container flex h-full w-full flex-col gap-5">
          <h2 className="hero-secondary text-center text-[3.2rem] leading-[0.92] md:text-left md:text-7xl font-bold font-head">
            Styled for gifting,
            <br />
            baked for craving
          </h2>

          <div className="hero-secondary md:max-w-2xl">
            <p className="text-center text-base leading-7 text-neutral-700 md:text-left">
              Cillia Treats creates warm, memorable bites for birthdays, office
              gifting, Valentine surprises, souvenirs, and everyday cravings,
              from buttercream cakes and doughnuts to parfaits, fries, chicken
              pies, and curated gift sets.
            </p>
          </div>

          <button className="hero-secondary mx-auto mt-5 flex max-w-44 items-center justify-center gap-2 rounded-full border border-[#b5162f] bg-[#b5162f] px-5 py-3 text-white transition hover:bg-[#8d1125] md:mx-0">
            Explore Menu <MoveRight size={18} />
          </button>
        </div>

        <div className="hidden md:block"></div>
      </div>
    </div>
  );
}
