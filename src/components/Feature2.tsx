import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Feature3 from "./Feature3";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Feature2() {
  useGSAP(() => {
    const mm = gsap.matchMedia();
    const firstMsgSplit = SplitText.create(".first-message", {
      type: "words",
    });
    const secondMsgSplit = SplitText.create(".second-message", {
      type: "words",
    });
    const paragraphSplit = SplitText.create(".message-content p", {
      type: "words, lines",
      linesClass: "paragraph-line",
    });

    gsap.to(firstMsgSplit.words, {
      color: "#f3f4f6",
      ease: "power1.in",
      stagger: 1,
      scrollTrigger: {
        trigger: ".message-content",
        start: "top center",
        end: "30% center",
        scrub: true,
      },
    });

    gsap.to(secondMsgSplit.words, {
      color: "#f3f4f6",
      ease: "power1.in",
      stagger: 1,
      scrollTrigger: {
        trigger: ".second-message",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });

    const revealTl = gsap.timeline({
      delay: 0.1,
      scrollTrigger: {
        trigger: ".msg-text-scroll",
        start: "top 60%",
        toggleActions: "play none none reverse",
      },
    });

    revealTl.to(".msg-text-scroll", {
      duration: 0.3,
      clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0% 100%)",
      ease: "circ.inOut",
    });

    const paragraphTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".message-content p",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
      },
    });

    paragraphTl.from(paragraphSplit.lines, {
      yPercent: 320,
      rotate: 3,
      ease: "power1.inOut",
      duration: 1,
      stagger: 0.1,
    });

    const splitText = (selector: string) => {
      const elements = gsap.utils.toArray<HTMLElement>(selector);
      elements.forEach((el) => {
        const words = (el.textContent ?? "").trim().split(" ");
        el.innerHTML = words
          .map(
            (word) =>
              `<span class='word inline-block overflow-hidden'><span class='char inline-block translate-y-full'>${word}</span></span>`,
          )
          .join(" ");
      });
    };

    splitText(".scroll-color-text");

    const textEls = gsap.utils.toArray<HTMLElement>(".scroll-color-text");
    textEls.forEach((el) => {
      const chars = el.querySelectorAll(".char");

      gsap
        .timeline({
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
          },
        })
        .to(chars, {
          y: "0%",
          color: "#FFD700",
          stagger: 0.05,
          ease: "power2.out",
          duration: 0.8,
        });
    });

    gsap.utils.toArray<HTMLElement>(".float-img").forEach((img) => {
      const speedClass = Array.from(img.classList).find((cls) =>
        cls.startsWith("scroll-speed-"),
      );
      const speedValue = speedClass
        ? parseFloat(speedClass.replace("scroll-speed-", "")) * 0.4
        : 1;

      gsap.to(img, {
        y: -450,
        ease: "none",
        scrollTrigger: {
          trigger: ".Feature2",
          start: "top bottom",
          end: "bottom top",
          scrub: speedValue,
        },
      });
    });

    mm.add("(min-width: 768px)", () => {
      const zoomTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".zoom-transition",
          start: "top top",
          end: "bottom top",
          scrub: 2,
          pin: true,
        },
      });

      zoomTl.to(
        ".zoom-text",
        {
          scale: 16,
          ease: "power2.inOut",
          duration: 10,
        },
        0,
      );
      zoomTl
        .to(
          ".transition-overlay",
          {
            scale: 1,
            ease: "power2.inOut",
            duration: 10,
          },
          0,
        )
        .to(
          ".transition-overlay",
          { width: "100%", duration: 3, ease: "power1.inOut" },
          "-=3",
        )
        .to(
          ".transition-overlay",
          {
            duration: 3,
            ease: "power1.out",
            z: -50,
          },
          "+=5",
        );
    });

    mm.add("(max-width: 767px)", () => {
      gsap.fromTo(
        ".zoom-text",
        { scale: 0.88, opacity: 0.4 },
        {
          scale: 1,
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".zoom-transition",
            start: "top 80%",
            end: "bottom center",
            scrub: true,
          },
        },
      );

      gsap.fromTo(
        ".transition-overlay",
        { clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" },
        {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          ease: "circ.inOut",
          scrollTrigger: {
            trigger: ".zoom-transition",
            start: "top 65%",
            end: "bottom center",
            scrub: true,
          },
        },
      );
    });

    return () => {
      firstMsgSplit.revert();
      secondMsgSplit.revert();
      paragraphSplit.revert();
      mm.revert();
    };
  }, []);

  return (
    <>
      <section
        id="small-chops"
        className="Feature2 relative flex w-full flex-col items-center overflow-hidden bg-neutral-900 pb-24 md:pb-[40vh]"
      >
        <div className="message-content relative z-20 mt-12 flex min-h-[52vh] w-full items-center justify-center overflow-hidden px-4 text-milk md:mt-20 md:min-h-[60vh] md:px-6">
          <div className="relative mx-auto flex w-full max-2xl:max-w-7xl items-center justify-center py-14 md:py-20">
            <div className="h-full w-full">
              <div className="msg-wrapper flex flex-col items-center justify-center gap-10 text-[2.2rem] font-bold uppercase leading-[1] tracking-[-0.08em] md:gap-24 md:text-8xl 2xl:text-[8.5rem]">
                <h1 className="first-message max-w-[14rem] text-center text-[#f3f4f610] md:max-w-2xl 2xl:max-w-4xl">
                  Baked for sweet moments,
                </h1>
                <div
                  style={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
                  className="msg-text-scroll absolute z-10 -translate-y-2 rotate-[3deg] border-[.5vw] border-[#111318] text-[2rem] md:-translate-y-5 md:text-8xl 2xl:translate-y-5 2xl:text-[8.5rem] -mt-30 2xl:-mt-50"
                >
                  <div className="bg-[#c68c53] px-3 pb-2 text-white md:px-5 md:pb-5">
                    <h2 className="font-head leading-none">
                      packed for celebration.
                    </h2>
                  </div>
                </div>
                <h1 className="second-message max-w-[16rem] text-center text-[#f3f4f610] md:max-w-4xl 2xl:max-w-7xl pt-20 2xl:pt-30">
                  Because every table deserves something beautiful and
                  delicious.
                </h1>
              </div>

              <div className="mt-10 flex justify-center overflow-hidden md:mt-20">
                <div className="flex max-w-md justify-center px-2 md:px-10">
                  <p className="text-center text-sm uppercase text-white/80 md:text-lg">
                    Thoughtfully baked, beautifully packed, and ready for
                    birthdays, office gifting, surprise hampers, and every
                    joyful gathering.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="div-sections mt-12 flex flex-col-reverse items-center gap-8 p-4 md:mt-20 md:flex-wrap md:flex-row md:gap-0 md:p-6">
          <p className="scroll-color-text flex-1 text-center text-2xl font-bold uppercase text-white md:mr-10 md:text-left md:text-3xl">
            Frosted foil cakes, perfect buttercream finishes, milky doughnuts,
            and layered parfaits are made to stand out at birthdays, thank-you
            gifts, and surprise deliveries.
          </p>
          <div className="flex-1 flex justify-center">
            <img
              src="/imgs/treat-6.png"
              alt=""
              className="float-img scroll-speed-1 w-[280px] md:w-[550px]"
            />
          </div>
        </div>

        <div
          id="pastries"
          className="div-sections flex flex-col items-center gap-8 p-4 md:flex-wrap md:flex-row md:gap-0 md:p-6"
        >
          <div className="flex-1 flex justify-center">
            <img
              src="/imgs/treat-5.png"
              alt=""
              className="float-img scroll-speed-1.5 w-[280px] md:w-[550px]"
            />
          </div>
          <p className="scroll-color-text flex-1 text-center text-2xl font-bold uppercase text-white md:mr-10 md:text-left md:text-3xl">
            Small chops, yellow fries, chicken pies, and mini bites are prepared
            for guests who want variety, warmth, and that just-served feeling in
            every box.
          </p>
        </div>

        <div
          id="gift-sets"
          className="div-sections flex flex-col-reverse items-center gap-8 p-4 md:flex-wrap md:flex-row md:gap-0 md:p-6"
        >
          <p className="scroll-color-text flex-1 text-center text-2xl font-bold uppercase text-white md:mr-10 md:text-left md:text-3xl">
            Souvenirs, hampers, corporate gifts, birthday packages, and
            Valentine gift sets are styled to feel thoughtful, festive, and
            ready to impress from first glance.
          </p>
          <div className="flex-1 flex justify-center">
            <img
              src="/imgs/treat-1.png"
              alt=""
              className="float-img scroll-speed-2 w-[320px] md:w-[750px]"
            />
          </div>
        </div>
      </section>

      <section className="zoom-transition relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-neutral-900 px-4 text-white md:h-screen md:min-h-0">
        <h1 className="zoom-text text-center font-head text-5xl uppercase md:text-8xl">
          Wrapped in warmth
        </h1>
        <div className="transition-overlay absolute left-[50%] top-0 z-50 flex h-full w-[72%] -translate-x-[50%] items-center justify-center bg-white px-4 md:w-[10%] md:-scale-5">
          <h1 className="text-center font-head text-3xl text-black uppercase rotate-180 md:text-5xl">
            Cillia Treats
          </h1>
        </div>
      </section>
      <Feature3 />
    </>
  );
}
