import { Circle } from "lucide-react";
import { useState } from "react";
import { type HomeProduct } from "../../data/home-page-data";

type FeaturedProductPairProps = {
  accent: string;
  left: HomeProduct;
  leftTags: string[];
  right: HomeProduct;
  rightTags: string[];
};

function HoverTitle({
  active,
  accent,
  text,
}: {
  active: boolean;
  accent: string;
  text: string;
}) {
  return (
    <h3
      className="pointer-events-none absolute left-1/2 top-1/2 z-20 flex max-w-[92vw] -translate-x-1/2 -translate-y-1/2 overflow-hidden text-center font-ochi-head text-[18vw] uppercase leading-none md:text-[7vw]"
      style={{ color: accent }}
    >
      {text.split("").map((letter, index) => (
        <span
          className="inline-block transition-transform duration-500"
          key={`${letter}-${index}`}
          style={{
            transform: active ? "translateY(0%)" : "translateY(100%)",
            transitionDelay: `${index * 28}ms`,
            transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
            whiteSpace: letter === " " ? "pre" : "normal",
          }}
        >
          {letter}
        </span>
      ))}
    </h3>
  );
}

export function FeaturedProductPair({
  accent,
  left,
  leftTags,
  right,
  rightTags,
}: FeaturedProductPairProps) {
  const [hovered, setHovered] = useState<"left" | "right" | null>(null);

  return (
    <div className="ochi-feature-pair">
      <div className="grid gap-5 px-5 pb-4 pt-6 font-brand text-sm uppercase text-[#1f1713] md:grid-cols-2 md:px-10">
        <p className="flex items-center gap-2">
          <Circle size={10} fill="currentColor" /> {left.name}
        </p>
        <p className="flex items-center gap-2">
          <Circle size={10} fill="currentColor" /> {right.name}
        </p>
      </div>

      <div className="relative grid gap-5 px-5 md:h-[80vh] md:grid-cols-2 md:px-10">
        <HoverTitle active={hovered === "left"} accent={accent} text={left.name} />
        <HoverTitle active={hovered === "right"} accent={accent} text={right.name} />

        <article
          className="group h-[58vh] cursor-pointer overflow-hidden rounded-xl bg-zinc-700 md:h-full"
          onMouseEnter={() => setHovered("left")}
          onMouseLeave={() => setHovered(null)}
        >
          <img
            src={left.image}
            alt={left.name}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </article>

        <article
          className="group h-[58vh] cursor-pointer overflow-hidden rounded-xl bg-zinc-700 md:h-full"
          onMouseEnter={() => setHovered("right")}
          onMouseLeave={() => setHovered(null)}
        >
          <img
            src={right.image}
            alt={right.name}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </article>
      </div>

      <div className="grid gap-5 px-5 py-5 md:grid-cols-2 md:px-10">
        {[leftTags, rightTags].map((tags, index) => (
          <div className="flex flex-wrap gap-3" key={index}>
            {tags.map((tag) => (
              <span
                className="rounded-full border border-[#b5162f]/35 px-3 py-1 font-brand text-xs uppercase text-[#1f1713]"
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
