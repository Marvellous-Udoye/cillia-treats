import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export type HeaderAnimationController = {
  closeMenu: () => void;
  openMenu: () => void;
  revert: () => void;
};

export function createHeaderAnimations(
  scope: HTMLElement,
): HeaderAnimationController {
  const ctx = gsap.context(() => {
    const nav = scope.querySelector<HTMLElement>("#nav");
    const wordmark = scope.querySelector<HTMLElement>(".wordmark");
    const hiddenNavItems =
      scope.querySelectorAll<HTMLElement>(".nav-part-2 .none");
    const overlayNavLinks =
      scope.querySelectorAll<HTMLElement>(".overlay-nav-link");

    const detachOverlayNavHover = Array.from(overlayNavLinks).map((link) => {
      const label = link.querySelector<HTMLElement>(".overlay-nav-label");
      const arrow = link.querySelector<HTMLElement>(".overlay-nav-arrow");
      if (!label || !arrow) return () => {};

      gsap.set(arrow, {
        width: 0,
        opacity: 0,
      });

      const onEnter = () => {
        gsap.to(label, {
          x: -14,
          duration: 0.28,
          ease: "power3.out",
          overwrite: "auto",
        });
        gsap.to(arrow, {
          width: "1.35em",
          opacity: 1,
          duration: 0.28,
          ease: "power3.out",
          overwrite: "auto",
        });
      };

      const onLeave = () => {
        gsap.to(label, {
          x: 0,
          duration: 0.24,
          ease: "power3.out",
          overwrite: "auto",
        });
        gsap.to(arrow, {
          width: 0,
          opacity: 0,
          duration: 0.24,
          ease: "power3.out",
          overwrite: "auto",
        });
      };

      link.addEventListener("mouseenter", onEnter);
      link.addEventListener("mouseleave", onLeave);

      return () => {
        link.removeEventListener("mouseenter", onEnter);
        link.removeEventListener("mouseleave", onLeave);
      };
    });

    if (wordmark && nav) {
      gsap.to(wordmark, {
        yPercent: -140,
        opacity: 0,
        duration: 0.3,
        scrollTrigger: {
          trigger: nav,
          start: "top top",
          end: "+=120",
          scrub: 2,
        },
      });
    }

    if (hiddenNavItems.length && nav) {
      gsap.to(hiddenNavItems, {
        yPercent: -220,
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: nav,
          start: "top top",
          end: "+=120",
          scrub: 2,
        },
      });
    }

    return () => {
      detachOverlayNavHover.forEach((detach) => detach());
    };
  }, scope);

  const openMenu = () => {
    const nav = scope.querySelector<HTMLElement>("#nav");
    const wordmark = scope.querySelector<HTMLElement>(".wordmark");
    const navItems = scope.querySelectorAll<HTMLElement>(".nav-part-2 h4");
    const navHeadings = scope.querySelectorAll<HTMLElement>(".nav-part-3 h1");

    if (!nav || !wordmark) return;

    gsap.to(nav, {
      height: "100vh",
      backgroundColor: "#111318",
      duration: 0.45,
      ease: "power2.inOut",
      overwrite: "auto",
    });
    gsap.to(wordmark, {
      color: "#fff",
      duration: 0.25,
      overwrite: "auto",
    });
    gsap.to(navItems, {
      color: "#fff",
      duration: 0.25,
      overwrite: "auto",
    });
    gsap.fromTo(
      navHeadings,
      { x: 240, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.55,
        ease: "power3.out",
        overwrite: "auto",
      },
    );
  };

  const closeMenu = () => {
    const nav = scope.querySelector<HTMLElement>("#nav");
    const wordmark = scope.querySelector<HTMLElement>(".wordmark");
    const navItems = scope.querySelectorAll<HTMLElement>(".nav-part-2 h4");

    if (!nav || !wordmark) return;

    gsap.to(nav, {
      height: "108px",
      backgroundColor: "transparent",
      duration: 0.35,
      ease: "power2.inOut",
      overwrite: "auto",
    });
    gsap.to(wordmark, {
      color: "#000",
      duration: 0.25,
      overwrite: "auto",
    });
    gsap.to(navItems, {
      color: "#000",
      duration: 0.25,
      overwrite: "auto",
    });
  };

  return {
    closeMenu,
    openMenu,
    revert: () => ctx.revert(),
  };
}
