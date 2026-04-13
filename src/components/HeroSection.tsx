import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { MoveRight } from "lucide-react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const earbudsRef = useRef<HTMLImageElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const wordmarkRef = useRef<HTMLParagraphElement | null>(null);

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
        duration: 0.6,
        stagger: 0.08,
      },
    );

    if (wordmarkRef.current) {
      gsap.fromTo(
        wordmarkRef.current,
        {
          scale: 0,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
        },
      );
    }

    mm.add("(min-width: 768px)", () => {
      if (wordmarkRef.current) {
        gsap.fromTo(
          wordmarkRef.current,
          { scale: 1, x: "20%", y: 0 },
          {
            scale: 0.1,
            x: "-35%",
            y: -190,
            scrollTrigger: {
              trigger: wordmarkRef.current,
              start: "top top",
              end: "top+=100px top",
              scrub: true,
            },
          },
        );
      }

      if (earbudsRef.current) {
        gsap.fromTo(
          earbudsRef.current,
          { scale: 1, y: 0, opacity: 1 },
          {
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
    });

    mm.add("(max-width: 767px)", () => {
      if (!earbudsRef.current || !sectionRef.current || !wordmarkRef.current) {
        return;
      }

      gsap.fromTo(
        earbudsRef.current,
        { y: 36, scale: 0.96, rotate: -3, opacity: 0 },
        {
          y: 0,
          scale: 1,
          rotate: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        },
      );

      gsap.fromTo(
        wordmarkRef.current,
        { y: 0, opacity: 0.9 },
        {
          y: -48,
          opacity: 0.34,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top+=86",
            end: "bottom top",
            scrub: true,
          },
        },
      );

      gsap.to(".earbud-feature-card", {
        y: 44,
        ease: "none",
        stagger: 0.08,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top+=86",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    gsap.fromTo(
      ".hero-secondary",
      {
        x: -120,
        opacity: 0,
        stagger: 0.16,
      },
      {
        x: 0,
        opacity: 1,
        stagger: 0.16,
        scrollTrigger: {
          trigger: ".hero-secondary-container",
          start: "top 82%",
          toggleActions: "play none none reverse",
        },
      },
    );

    return () => mm.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="HeroSection relative flex min-h-[1020px] w-full flex-col items-center justify-end overflow-hidden px-4 pb-12 pt-24 md:h-300 md:min-h-0 md:px-0 md:pb-0 md:pt-0"
    >
      <div className="pointer-events-none absolute inset-x-0 top-36 z-0 flex justify-center md:top-36 md:justify-start md:px-20">
        <p
          ref={wordmarkRef}
          className="font-head text-center text-[3rem] font-semibold uppercase leading-none whitespace-nowrap text-black md:text-left md:text-[8.5em] 2xl:text-[12em]"
        >
          Cilla Treats
        </p>
      </div>

      <img
        src="/imgs/hero-bg.png"
        ref={earbudsRef}
        alt="earbuds"
        className="absolute top-28 z-100 w-[92vw] max-w-[360px] drop-shadow-2xl [filter:drop-shadow(0_18px_34px_rgba(181,22,47,0.26))] md:top-28 md:w-auto md:max-w-none"
      />

      <div className="earbud-feature-card absolute left-3 top-[33rem] flex max-w-[182px] items-center gap-2 rounded-2xl bg-white/92 px-3 py-2.5 shadow-[0_16px_40px_rgba(0,0,0,0.08)] md:left-[10%] md:top-80 md:max-w-none md:gap-4 md:bg-transparent md:px-10 md:py-4">
        <img
          src="/imgs/earbud-feature-card-1.svg"
          alt="earbud-feature-card-icon"
          className="w-8 md:w-auto"
        />
        <span className="text-[0.72rem] italic text-neutral-800 md:text-base md:font-light">
          Frosted Foil Cakes
          <br />
          Freshly Finished
        </span>
      </div>

      <div className="earbud-feature-card absolute left-4 top-[26.75rem] flex max-w-[190px] items-center gap-2 rounded-2xl bg-white/92 px-3 py-2.5 shadow-[0_16px_40px_rgba(0,0,0,0.08)] md:left-[16%] md:top-120 md:max-w-none md:gap-4 md:bg-transparent md:px-10 md:py-4">
        <img
          src="/imgs/earbud-feature-card-2.svg"
          alt="earbud-feature-card-icon"
          className="w-8 md:w-auto"
        />
        <span className="text-[0.72rem] italic text-neutral-800 md:text-base md:font-light">
          Small Chops for
          <br />
          Every Celebration
        </span>
      </div>

      <div className="earbud-feature-card absolute right-2 top-[30rem] flex max-w-[188px] items-center gap-2 rounded-2xl bg-white/92 px-3 py-2.5 text-right shadow-[0_16px_40px_rgba(0,0,0,0.08)] md:right-[10%] md:top-90 md:max-w-none md:gap-4 md:bg-transparent md:px-10 md:py-4 md:text-left">
        <img
          src="/imgs/earbud-feature-card-3.svg"
          alt="earbud-feature-card-icon"
          className="w-8 md:w-auto"
        />
        <span className="text-[0.72rem] italic text-neutral-800 md:text-base md:font-light">
          Gift Hampers & Souvenirs
          <br />
          Beautifully Packed
        </span>
      </div>

      <div className="grid w-full grid-cols-1 gap-10 pb-6 pt-[35rem] md:grid-cols-2 md:px-20 md:pb-24 md:pt-[37rem]">
        <div className="hero-secondary-container flex h-full w-full flex-col items-center gap-5 md:items-start">
          <h2 className="hero-secondary text-center font-semibold text-[2.85rem] leading-[0.92] md:text-left md:text-6xl md:font-bold">
            Styled for gifting,
            <br />
            baked for cravings.
          </h2>

          <div className="hero-secondary max-w-[32rem] md:max-w-2xl">
            <p className="text-center text-[0.96rem] leading-7 text-neutral-700 md:text-left md:text-base">
              Cilla Treats creates warm, memorable bites for birthdays, office
              gifting, Valentine surprises, souvenirs, and everyday cravings,
              from buttercream cakes and doughnuts to parfaits, fries, chicken
              pies, and curated gift sets.
            </p>
          </div>

          <button className="hero-secondary mt-4 flex w-full max-w-56 items-center justify-center gap-2 rounded-full border border-[#b5162f] bg-[#b5162f] px-5 py-3 text-white transition hover:bg-[#8d1125] md:mx-0 md:mt-5 md:w-auto md:max-w-44">
            Explore Menu <MoveRight size={18} />
          </button>
        </div>

        <div className="hidden md:block" />
      </div>
    </div>
  );
}
