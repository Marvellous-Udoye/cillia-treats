import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";
import { CategoryMarqueeSection } from "./home-page/category-marquee-section";
import { FeaturedProductsSection } from "./home-page/featured-products-section";
import { MessageSection } from "./home-page/message-section";
import { OrderGuideSection } from "./home-page/order-guide-section";
import { ReadyOrderSection } from "./home-page/ready-order-section";
import { VisualFeatureSection } from "./home-page/visual-feature-section";

gsap.registerPlugin(ScrollTrigger, SplitText);

export function HomePageContent() {
  const pageRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const q = gsap.utils.selector(pageRef);

      gsap.to(q(".ochi-marquee-track"), {
        xPercent: -50,
        duration: 26,
        ease: "none",
        repeat: -1,
      });

      const messageContent = q(".message-content")[0];
      if (messageContent) {
        const firstMsgSplit = SplitText.create(q(".first-message"), {
          type: "words",
        });
        const secondMsgSplit = SplitText.create(q(".second-message"), {
          type: "words",
        });
        const paragraphSplit = SplitText.create(q(".message-content p"), {
          type: "words, lines",
          linesClass: "paragraph-line",
        });

        gsap.to(firstMsgSplit.words, {
          color: "#f3f4f6",
          ease: "power1.in",
          stagger: 1,
          scrollTrigger: {
            trigger: messageContent,
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
            trigger: q(".second-message")[0],
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        });

        gsap.to(q(".msg-text-scroll"), {
          duration: 1,
          clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0% 100%)",
          ease: "circ.inOut",
          scrollTrigger: {
            trigger: q(".msg-text-scroll")[0],
            start: "top 60%",
            toggleActions: "play none none reverse",
          },
        });

        gsap.from(paragraphSplit.lines, {
          yPercent: 320,
          rotate: 3,
          ease: "power1.inOut",
          duration: 1,
          stagger: 0.1,
          scrollTrigger: {
            trigger: q(".message-content p")[0],
            start: "top center",
            end: "bottom center",
            toggleActions: "play none none reverse",
          },
        });
      }

      const orderItems = q(".order-guide-list-item");
      const mobileOrderItems = q(".order-guide-mobile-item");
      const orderSection = q(".order-guide-section")[0];
      const orderFill = q(".order-guide-fill")[0];
      const orderImage = q(".order-guide-image")[0];

      const mm = gsap.matchMedia();

      if (orderSection) {
        mm.add("(min-width: 900px)", () => {
          if (!orderItems.length || !orderFill) return;

          gsap.set(orderItems, {
            autoAlpha: 0,
            yPercent: 115,
            rotateX: -18,
            transformOrigin: "50% 50%",
          });
          gsap.set(orderItems[0], {
            autoAlpha: 1,
            yPercent: 0,
            rotateX: 0,
          });
          gsap.set(orderFill, {
            scaleY: 1 / orderItems.length,
            transformOrigin: "top center",
          });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: orderSection,
              start: "top top",
              end: `+=${orderItems.length * 72}%`,
              pin: true,
              scrub: true,
            },
          });

          orderItems.forEach((item, index) => {
            if (index === 0) return;

            const slotTime = index * 0.55;

            tl.to(
              orderItems[index - 1],
              {
                autoAlpha: 0,
                yPercent: -115,
                rotateX: 18,
                duration: 0.42,
                ease: "power2.inOut",
              },
              slotTime,
            )
              .fromTo(
                item,
                {
                  autoAlpha: 0,
                  yPercent: 115,
                  rotateX: -18,
                },
                {
                  autoAlpha: 1,
                  yPercent: 0,
                  rotateX: 0,
                  duration: 0.42,
                  ease: "power2.inOut",
                },
                slotTime,
              )
              .to(
                item,
                {
                  yPercent: -3,
                  duration: 0.14,
                  ease: "power1.out",
                },
                slotTime + 0.42,
              )
              .to(
                item,
                {
                  yPercent: 0,
                  duration: 0.14,
                  ease: "power1.inOut",
                },
                slotTime + 0.56,
              );

            if (orderImage) {
              tl.to(
                orderImage,
                {
                  scale: 1 + index * 0.025,
                  yPercent: -index * 3,
                  duration: 0.35,
                  ease: "power2.out",
                },
                "<",
              );
            }
          });

          tl.to(
            orderFill,
            {
              scaleY: 1,
              transformOrigin: "top center",
              ease: "none",
              duration: tl.duration(),
            },
            0,
          );
        });

        mm.add("(max-width: 899px)", () => {
          if (!mobileOrderItems.length) return;

          gsap.set(mobileOrderItems, {
            opacity: 0.28,
            y: 30,
            color: "#8a7a72",
          });

          mobileOrderItems.forEach((item) => {
            gsap.to(item, {
              opacity: 1,
              y: 0,
              color: "#1f1713",
              ease: "none",
              scrollTrigger: {
                trigger: item,
                start: "top 78%",
                end: "center 48%",
                scrub: true,
              },
            });

            gsap.to(item, {
              opacity: 0.28,
              y: -18,
              color: "#8a7a72",
              ease: "none",
              scrollTrigger: {
                trigger: item,
                start: "center 42%",
                end: "bottom 18%",
                scrub: true,
              },
            });
          });
        });
      }

      gsap.utils.toArray<HTMLElement>(q(".ochi-reveal")).forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 58 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 82%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>(q(".ochi-parallax")).forEach((item) => {
        gsap.to(item, {
          yPercent: -8,
          ease: "none",
          scrollTrigger: {
            trigger: item,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      });
    },
    { scope: pageRef },
  );

  return (
    <main
      ref={pageRef}
      className="home-page-flow overflow-hidden bg-[#f8f3eb] text-[#1f1713] font-ochi-body"
    >
      <CategoryMarqueeSection />
      <MessageSection />
      <OrderGuideSection />
      <VisualFeatureSection />
      <FeaturedProductsSection />
      <ReadyOrderSection />
    </main>
  );
}
