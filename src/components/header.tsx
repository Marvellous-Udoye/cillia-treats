import { useGSAP } from "@gsap/react";
import { ArrowUpRight, Menu, MessageCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { createHeaderAnimations } from "../animation";
import { overlayNavItems, primaryNavItems } from "../data/storefront-data";
import { SiteContainer } from "./ui/site-container";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scopeRef = useRef<HTMLElement | null>(null);
  const animationRef = useRef<ReturnType<typeof createHeaderAnimations> | null>(
    null,
  );

  useGSAP(
    () => {
      if (!scopeRef.current) return;

      animationRef.current = createHeaderAnimations(scopeRef.current);

      return () => {
        animationRef.current?.revert();
        animationRef.current = null;
      };
    },
    { scope: scopeRef },
  );

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    if (isMenuOpen) {
      animationRef.current?.openMenu();
    } else {
      animationRef.current?.closeMenu();
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <nav
      ref={scopeRef}
      id="nav"
      className={`fixed inset-x-0 top-0 z-[120] overflow-hidden border-none backdrop-blur-sm transition-[height,background-color,backdrop-filter] duration-500 ${
        isMenuOpen ? "h-screen bg-[#111318]" : "h-16 sm:h-24"
      }`}
    >
      <SiteContainer className="flex items-start justify-between px-[2vw] pt-[1.5vw] max-[500px]:p-[4vw]">
        <div className="nav-part-1 flex flex-col gap-[15px] max-[1000px]:gap-[30px]">
          <Link
            to="/"
            className={`wordmark flex flex-col font-brand text-[2rem] font-bold uppercase leading-[0.9] tracking-[-0.08em] transition-colors duration-300 max-[500px]:text-[1.5rem] ${
              isMenuOpen ? "text-white" : "text-black"
            }`}
          >
            <span>CILLA</span>
            <span>TREATS</span>
          </Link>
        </div>

        <div className="nav-part-2 mt-4 flex items-start gap-[70px] max-[600px]:gap-[24px] max-[500px]:mt-2 max-[500px]:items-center max-[500px]:gap-[18px]">
          {primaryNavItems.map((item) => (
            <h4
              className={`none cursor-pointer uppercase font-semibold font-brand transition-colors duration-300 max-[1000px]:hidden ${
                isMenuOpen ? "text-white" : "text-black"
              }`}
              key={item.to}
            >
              <Link to={item.to}>{item.label}</Link>
            </h4>
          ))}

          <h4
            id="menu-expand"
            className={`cursor-pointer flex items-center justify-center text-[20px] transition-colors duration-300 ${
              isMenuOpen ? "hidden" : "text-black"
            }`}
          >
            <button
              type="button"
              aria-label="Open menu"
              className="border-0 bg-transparent cursor-pointer font-bold font-brand p-0 text-inherit"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu size={20} strokeWidth={2.2} />
            </button>
          </h4>

          <h4
            id="close"
            className={`cursor-pointer text-white ${isMenuOpen ? "" : "hidden"}`}
          >
            <button
              type="button"
              aria-label="Close menu"
              className="border-0 font-brand font-bold cursor-pointer bg-transparent p-0 text-inherit"
              onClick={() => setIsMenuOpen(false)}
            >
              X
            </button>
          </h4>

          <h4
            id="message"
            className={`cursor-pointer text-[20px] transition-colors duration-300 ${
              isMenuOpen ? "text-white" : "text-black"
            }`}
          >
            <Link to="/gift-sets" aria-label="Message Cilla Treats">
              <MessageCircle size={18} strokeWidth={2.2} />
            </Link>
          </h4>
        </div>
      </SiteContainer>

      <SiteContainer
        id="sub-container"
        className={`absolute inset-x-0 top-[108px] z-[140] min-h-[calc(100vh-108px)] justify-end bg-[#111318] pt-10 leading-[50px] transition-all duration-500 ${
          isMenuOpen
            ? "visible flex opacity-100"
            : "invisible flex opacity-0 pointer-events-none"
        }`}
      >
        <div className="nav-part-4" />
        <div className="nav-part-5" />
        <div className="nav-part-3 pt-0 leading-[50px] max-[1000px]:leading-[40px] space-y-4">
          {overlayNavItems.map((item) => (
            <h1
              className={`cursor-pointer text-end text-[2rem] font-extrabold uppercase leading-[1] text-white transition-all duration-500 sm:text-[50px] sm:leading-[50px] max-[1000px]:leading-[40px] ${
                isMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              key={item.to}
              style={{
                transitionDelay: isMenuOpen
                  ? `${90 + overlayNavItems.indexOf(item) * 70}ms`
                  : "0ms",
              }}
            >
              <Link
                to={item.to}
                className="overlay-nav-link inline-flex items-center justify-end gap-0"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="overlay-nav-label inline-block">
                  {item.label}
                </span>
                <span className="overlay-nav-arrow inline-flex w-0 overflow-hidden opacity-0">
                  <ArrowUpRight size={28} strokeWidth={2.2} />
                </span>
              </Link>
            </h1>
          ))}
        </div>
      </SiteContainer>
    </nav>
  );
}
