import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { type CatalogPageData } from "../data/catalog-pages";

gsap.registerPlugin(ScrollTrigger);

type CatalogPageShellProps = {
  page: CatalogPageData;
};

export function CatalogPageShell({ page }: CatalogPageShellProps) {
  const pageRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const q = gsap.utils.selector(pageRef);
      const mm = gsap.matchMedia();

      gsap.fromTo(
        q(".catalog-hero-reveal"),
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
        },
      );

      gsap.fromTo(
        q(".catalog-showcase-card"),
        { opacity: 0, y: 64 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.14,
          ease: "power3.out",
          scrollTrigger: {
            trigger: q(".catalog-showcases")[0],
            start: "top 78%",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.fromTo(
        q(".catalog-product-card"),
        { opacity: 0, y: 40, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: q(".catalog-grid")[0],
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.utils.toArray<HTMLElement>(q(".catalog-parallax")).forEach((item) => {
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

      mm.add("(min-width: 900px)", () => {
        const listItems = q(".catalog-list-item") as HTMLElement[];
        const slides = q(".catalog-slide") as HTMLElement[];
        const fill = q(".catalog-fill")[0] as HTMLElement | undefined;

        if (!listItems.length || !slides.length || !fill) {
          return;
        }

        gsap.set(fill, {
          scaleY: 1 / listItems.length,
          transformOrigin: "top left",
        });

        gsap.set(listItems[0], { color: page.accent });
        gsap.set(slides[0], { autoAlpha: 1 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: q(".catalog-pin-section")[0],
            start: "top top",
            end: `+=${listItems.length * 60}%`,
            pin: true,
            scrub: true,
          },
        });

        listItems.forEach((item, i) => {
          const previous = listItems[i - 1];
          if (!previous) {
            return;
          }

          tl.set(item, { color: page.accent }, 0.5 * i)
            .to(
              slides[i],
              {
                autoAlpha: 1,
                duration: 0.2,
              },
              "<",
            )
            .set(previous, { color: "#f5f1e8" }, "<")
            .to(
              slides[i - 1],
              {
                autoAlpha: 0,
                duration: 0.2,
              },
              "<",
            );
        });

        tl.to(
          fill,
          {
            scaleY: 1,
            transformOrigin: "top left",
            ease: "none",
            duration: tl.duration(),
          },
          0,
        ).to({}, {});
      });

      return () => mm.revert();
    },
    { scope: pageRef },
  );

  return (
    <main
      ref={pageRef}
      className="catalog-page overflow-hidden bg-[#f8f3eb] text-[#1f1713]"
    >
      <section className="relative min-h-screen overflow-hidden px-4 pb-20 pt-28 md:px-8 md:pt-36">
        <div className="absolute inset-x-0 top-0 h-[32rem] bg-gradient-to-b from-[#f3e4de] via-[#f8f3eb] to-transparent" />
        <div className="relative mx-auto grid max-w-7xl gap-12 md:grid-cols-[1.05fr_0.95fr] md:items-center">
          <div className="space-y-6">
            <p
              className="catalog-hero-reveal text-sm font-semibold uppercase tracking-[0.3em]"
              style={{ color: page.accent }}
            >
              {page.eyebrow}
            </p>
            <h1 className="catalog-hero-reveal font-head text-5xl leading-[0.92] md:text-8xl">
              {page.title}
            </h1>
            <p className="catalog-hero-reveal max-w-xl text-base leading-8 text-[#4d4139] md:text-lg">
              {page.intro}
            </p>
            <div className="catalog-hero-reveal flex flex-wrap gap-3">
              <span className="rounded-full border border-black/10 bg-white/60 px-5 py-3 text-sm uppercase tracking-[0.14em]">
                {page.heroLabel}
              </span>
              <span className="rounded-full border border-black/10 bg-white/60 px-5 py-3 text-sm uppercase tracking-[0.14em]">
                {page.heroNote}
              </span>
            </div>
          </div>

          <div className="catalog-hero-reveal relative min-h-[32rem]">
            <div
              className="absolute -left-3 top-8 rounded-[2rem] px-4 py-3 text-sm uppercase tracking-[0.14em] text-white md:-left-8"
              style={{ backgroundColor: page.accent }}
            >
              {page.galleryTitle}
            </div>
            <div className="absolute left-0 top-20 w-[38%] rounded-[2rem] bg-white p-4 shadow-[0_24px_60px_rgba(0,0,0,0.08)]">
              <p className="text-xs uppercase tracking-[0.25em] text-[#7c6a61]">
                Signature
              </p>
              <p className="mt-2 text-xl font-semibold leading-tight">
                {page.products[0].name}
              </p>
            </div>
            <img
              src={page.heroImage}
              alt={page.heroImageAlt}
              className="catalog-parallax absolute right-0 top-8 w-[78%] rounded-[3rem] object-cover shadow-[0_40px_90px_rgba(0,0,0,0.16)]"
            />
            <div className="absolute bottom-0 right-10 max-w-[17rem] rounded-[2rem] bg-[#181312] px-5 py-5 text-white shadow-[0_24px_70px_rgba(0,0,0,0.18)]">
              <p className="text-xs uppercase tracking-[0.25em] text-white/60">
                Curated Note
              </p>
              <p className="mt-3 text-sm leading-6 text-white/85">
                {page.showcases[0].copy}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="catalog-pin-section relative border-y border-black/10 bg-[#181312] px-4 py-16 text-[#f5f1e8] md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/45">
                Pinned Gallery
              </p>
              <h2 className="mt-3 font-head text-4xl md:text-6xl">
                {page.galleryTitle}
              </h2>
            </div>
            <p className="hidden max-w-md text-right text-sm leading-6 text-white/60 md:block">
              Browse the category as a premium story reel first, then continue
              into the denser product catalogue below.
            </p>
          </div>

          <div className="catalog-pin-layout relative flex flex-col gap-10 md:min-h-[80vh] md:flex-row">
            <div className="relative md:w-[34%] md:pr-8">
              <ul className="catalog-list space-y-4 text-2xl font-semibold md:text-[2rem]">
                {page.galleryItems.map((item) => (
                  <li
                    key={item.label}
                    className="catalog-list-item transition-colors duration-300"
                  >
                    {item.label}
                  </li>
                ))}
              </ul>
              <div className="catalog-fill absolute left-[-10px] top-0 hidden h-full w-[2px] bg-white md:block" />
            </div>

            <div className="relative min-h-[24rem] flex-1 md:min-h-[36rem]">
              {page.galleryItems.map((item, index) => (
                <div
                  key={`${item.label}-${index}`}
                  className="catalog-slide relative mb-6 grid items-center gap-6 opacity-100 last:mb-0 md:absolute md:inset-0 md:mb-0 md:grid-cols-[0.88fr_1.12fr] md:opacity-0 md:invisible"
                >
                  <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
                    <p
                      className="text-xs uppercase tracking-[0.3em]"
                      style={{ color: page.accent }}
                    >
                      {item.label}
                    </p>
                    <p className="mt-4 max-w-sm text-base leading-7 text-white/78">
                      {item.caption}
                    </p>
                  </div>
                  <div className="flex justify-end">
                    <img
                      src={item.image}
                      alt={item.label}
                      className="catalog-parallax w-full max-w-[28rem] rounded-[2.5rem] object-cover shadow-[0_34px_80px_rgba(0,0,0,0.28)]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="catalog-showcases mx-auto grid max-w-7xl gap-6 px-4 py-18 md:px-8 md:py-24">
        {page.showcases.map((showcase, index) => (
          <article
            key={showcase.title}
            className={`catalog-showcase-card grid gap-8 overflow-hidden rounded-[2.4rem] border border-black/6 bg-white/70 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.06)] backdrop-blur md:grid-cols-2 md:p-8 ${
              index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div className="space-y-4">
              <p
                className="text-xs uppercase tracking-[0.3em]"
                style={{ color: page.accent }}
              >
                Showcase {index + 1}
              </p>
              <h3 className="font-head text-3xl leading-tight md:text-5xl">
                {showcase.title}
              </h3>
              <p className="max-w-xl text-base leading-7 text-[#4d4139]">
                {showcase.copy}
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                {showcase.details.map((detail) => (
                  <span
                    key={detail}
                    className="rounded-full border border-black/10 px-4 py-2 text-xs uppercase tracking-[0.2em]"
                  >
                    {detail}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img
                src={showcase.image}
                alt={showcase.title}
                className="catalog-parallax w-full max-w-[28rem] rounded-[2rem] object-cover"
              />
            </div>
          </article>
        ))}
      </section>

      <section className="catalog-grid bg-[#fffdfa] px-4 py-18 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p
                className="text-xs uppercase tracking-[0.3em]"
                style={{ color: page.accent }}
              >
                Full Catalogue
              </p>
              <h2 className="mt-3 font-head text-4xl md:text-6xl">
                Browse the complete edit
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-[#6b5e57]">
              A heavier product block that keeps the page useful as a catalogue
              while staying visually aligned with the editorial sections above.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {page.products.map((product) => (
              <article
                key={`${page.slug}-${product.name}`}
                className="catalog-product-card overflow-hidden rounded-[2rem] border border-black/6 bg-white p-4 shadow-[0_20px_55px_rgba(0,0,0,0.06)]"
              >
                <div className="overflow-hidden rounded-[1.5rem] bg-[#f4ece5]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="catalog-parallax h-[21rem] w-full object-cover"
                  />
                </div>
                <div className="space-y-3 px-2 pb-2 pt-5">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-semibold">{product.name}</h3>
                    <span
                      className="shrink-0 rounded-full px-3 py-1 text-xs uppercase tracking-[0.18em] text-white"
                      style={{ backgroundColor: page.accent }}
                    >
                      {product.price}
                    </span>
                  </div>
                  <p className="text-sm leading-6 text-[#675952]">
                    {product.note}
                  </p>
                  <button className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em]">
                    View details <ArrowRight size={16} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
