import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { MoveRight } from "lucide-react";
import { useRef } from "react";

export default function HeroSection() {
  gsap.registerPlugin(ScrollTrigger);
  const earbudsRef = useRef<HTMLImageElement | null>(null);

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
      if (earbudsRef.current) {
        gsap.fromTo(
          earbudsRef.current,
          { y: 24, opacity: 0.85, rotate: -4 },
          {
            y: -24,
            opacity: 1,
            rotate: 4,
            duration: 2.8,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
          },
        );
      }
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
    <div className="HeroSection relative flex min-h-[980px] w-full flex-col items-center justify-end overflow-hidden pb-12 pt-8 md:h-300 md:min-h-0 md:pb-0 md:pt-0">
      <img
        src="/imgs/hero-bg.png"
        ref={earbudsRef}
        alt="earbuds"
        className="absolute top-18 z-150 w-[92vw] max-w-[360px] drop-shadow-2xl drop-shadow-lime-300 md:top-20 md:w-auto md:max-w-none"
      />
      <div className="earbud-feature-card absolute left-4 top-[18rem] flex max-w-[210px] items-center gap-3 rounded-xl bg-white/90 px-4 py-3 shadow-sm md:left-[10%] md:top-80 md:max-w-none md:gap-4 md:bg-transparent md:px-10">
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
      <div className="earbud-feature-card absolute left-4 top-[28rem] flex max-w-[220px] items-center gap-3 rounded-xl bg-white/90 px-4 py-3 shadow-sm md:left-[20%] md:top-120 md:max-w-none md:gap-4 md:bg-transparent md:px-10">
        <img
          src="/imgs/earbud-feature-card-2.svg"
          alt="earbud-feature-card-icon text-sm"
        />
        <span className="text-neutral-800 font-light italic">
          Small Chops for <br /> Every Celebration
        </span>
      </div>
      <div className="earbud-feature-card absolute right-4 top-[23rem] flex max-w-[220px] items-center gap-3 rounded-xl bg-white/90 px-4 py-3 text-right shadow-sm md:right-[10%] md:top-90 md:max-w-none md:gap-4 md:bg-transparent md:px-10 md:text-left">
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

      <div className="grid w-full grid-cols-1 gap-10 px-4 pb-8 pt-[34rem] md:grid-cols-2 md:px-20 md:pb-40">
        <div className="hero-secondary-container flex h-full w-full flex-col gap-5">
          <h2 className="hero-secondary text-center text-5xl leading-[0.92] md:text-left md:text-7xl font-bold font-head">
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

          <button className="hero-secondary mx-auto mt-5 flex max-w-44 items-center justify-center gap-2 rounded-full border-1 border-black px-5 py-3 text-black hover:bg-black hover:text-white md:mx-0">
            Explore Menu <MoveRight size={18} />
          </button>
        </div>

        <div className="hidden md:block"></div>
      </div>
    </div>
  );
}
