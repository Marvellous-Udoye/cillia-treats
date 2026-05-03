import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const earbudsRef = useRef<HTMLImageElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const wordmarkRef = useRef<HTMLParagraphElement | null>(null);
  const heroLines = ["treats that", "give sweet", "moments"];

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

    gsap.fromTo(
      ".hero-ochi-title-line",
      { yPercent: 105 },
      {
        yPercent: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".hero-ochi-content",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      },
    );

    gsap.fromTo(
      ".hero-ochi-meta",
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.08,
        delay: 0.25,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".hero-ochi-content",
          start: "top 85%",
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
        src="https://res.cloudinary.com/ds6nd4lbj/image/upload/v1777810266/hero-bg_y4ffcq.png"
        ref={earbudsRef}
        alt="Cilla Treats"
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

      <section className="hero-ochi-content w-full bg-[#fffdfa] pt-[40rem] text-[#1f1713] md:min-h-screen md:pt-[31rem]">
        <div className="px-5 md:px-10">
          {heroLines.map((line, index) => (
            <div className="overflow-hidden" key={line}>
              <div className="flex w-fit items-center">
                {index === 1 ? (
                  <div className="hero-ochi-title-line relative mr-[1vw] h-[11vw] w-[16vw] rounded-md bg-[#b5162f] md:h-[5.6vw] md:w-[8vw]" />
                ) : null}
                <h1 className="hero-ochi-title-line font-ochi-head text-[19vw] uppercase leading-[0.75] tracking-[-0.04em] md:text-[9vw]">
                  {line}
                </h1>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-5 border-t border-black/10 px-5 py-5 md:mt-24 md:flex-row md:items-center md:justify-between md:px-10">
          <p className="hero-ochi-meta font-brand text-base leading-none md:text-lg">
            Cilla Treats
          </p>
          <p className="hero-ochi-meta max-w-xl font-brand text-base leading-6 text-[#4d4139] md:text-lg">
            Cakes, small chops, pastries, hampers, souvenirs, and gift sets
            made for birthdays, office orders, Valentine surprises, and every
            table worth celebrating.
          </p>
          <div className="hero-ochi-meta flex items-center gap-2">
            <Link
              to="/#featured-products"
              className="rounded-full border border-[#b5162f] bg-[#b5162f] px-5 py-3 font-brand text-sm uppercase text-white"
            >
              Visit menu
            </Link>
            <Link
              to="/#ready-order"
              aria-label="Start an order"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#b5162f] text-[#b5162f]"
            >
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
