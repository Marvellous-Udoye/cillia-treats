import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Feature() {
  const features = [
    {
      title: "Freshly Made Goodness",
      desc: "From frosted foil cakes and parfaits to doughnuts and mini banana bread, every order is prepared to feel homemade, indulgent, and worth sharing.",
    },
    {
      title: "Celebration Ready Platters",
      desc: "Small chops, yellow fries, chicken pies, and party treats are packed for birthdays, office events, and intimate gatherings with generous, crowd-pleasing portions.",
    },
    // {
    //   title: "Beautifully Gifted",
    //   desc: "Souvenirs, hampers, corporate gifts, and Valentine packages are styled to look thoughtful before the first bite is even taken.",
    // },
  ];

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.fromTo(
      ".feature-title-text",
      {
        left: -200,
        opacity: 0,
      },
      {
        left: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".feature-title-text",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    );

    gsap.fromTo(
      ".headphone-frame",
      {
        right: -300,
        opacity: 0,
        duration: 2,
      },
      {
        right: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".headphone-frame",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    );

    gsap.to(".quality-bg", {
      backgroundPosition: "200% 50%",
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.fromTo(
      ".feature-card",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".feature-card-container",
          start: "top 80%",
          end: "bottom+=1200 bottom",
          toggleActions: "play none none reverse",
        },
      },
    );
  }, []);

  return (
    <div className="flex min-h-screen w-full flex-col items-center overflow-hidden bg-black px-4 py-20 md:h-[100dvh] md:flex-row md:justify-center md:px-10">
      <div id="cakes" className="flex h-full max-w-2xl w-full mx-auto flex-1/2 flex-col items-center">
          <p className="feature-title-text relative font-bold text-4xl text-white md:text-6xl">
            Made to stand out on
            <span className="text-lime-400"> every </span>
            table
          </p>
        <div className="feature-card-container mt-8 flex w-full max-w-2xl flex-col gap-4 md:mt-10">
          {features.map((item, index) => (
            <div
              className="feature-card rounded-[1.75rem] border border-white/10 bg-white/5 p-6 text-white shadow-[0_18px_50px_rgba(0,0,0,0.18)] backdrop-blur"
              key={index}
            >
              <div className="flex items-center gap-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-lime-400 bg-lime-400/10 text-lime-300">
                  {index + 1}
                </span>
                <p className="feature-card-title font-bold text-xl">{item.title}</p>
              </div>
              <p className="feature-card-description mt-3 pl-16 text-neutral-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 flex w-full flex-1/2 items-center justify-center md:mt-0">
        <img src="/imgs/treat-7.png" alt="headphone-image" className="max-w-[90vh] relative headphone-frame" />
      </div>
    </div>
  );
}
