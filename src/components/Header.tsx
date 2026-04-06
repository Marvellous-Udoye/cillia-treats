import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { LogIn } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
  const soniqueRef = useRef<HTMLParagraphElement | null>(null);
  const isHeroDark = true;

  useGSAP(() => {
    const element = soniqueRef.current;

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
      }
    );

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
      }
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
      }
    );
  }, []);

  return (
    <div
      className={`p-3 w-full flex items-center justify-center transition-colors duration-500 backdrop-blur-2xl ${
        isHeroDark ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      <div className="relative flex-1/4 w-full">
        <span className="font-head sq text-2xl ms-20">SQ</span>
        <p
          ref={soniqueRef}
          className={`font-bold uppercase -z-10 top-20 absolute text-[8.5em] pointer-events-none whitespace-nowrap ${
            isHeroDark ? "text-black" : "text-white"
          }`}
        >
          Cillia Treats 
        </p>
      </div>

      <div className="flex w-full flex-2/4 gap-10 text-sm justify-center items-center">
        <a href="/">Brand</a>
        <a href="/">Products</a>
        <a href="/">About</a>
        <a href="/">Support</a>
        <a href="/">Blogs</a>
      </div>

      <div className="flex-1/4 w-full flex justify-center items-center">
        <button
          className={`py-3 flex items-center justify-center gap-2 px-10 text-sm border rounded-md transition-colors duration-500 ${
            isHeroDark
              ? "border-black text-black"
              : "border-white text-white"
          }`}
        >
          <LogIn size={18} />
          Login
        </button>
      </div>
    </div>
  );
}
