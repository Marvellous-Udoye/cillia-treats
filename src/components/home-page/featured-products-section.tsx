import {
  galleryItems,
  homePageAccent,
  products,
  showcaseDetails,
} from "../../data/home-page-data";
import { FeaturedProductPair } from "./featured-product-pair";

export function FeaturedProductsSection() {
  const firstPair = products.slice(0, 2);
  const secondPair = products.slice(2, 4);
  const cards = products.slice(4, 6);

  return (
    <section
      id="featured-products"
      className="relative z-10 rounded-3xl bg-[#fffdfa] pb-10 text-[#1f1713]"
    >
      <div className="border-b border-black/10 px-5 py-10 md:px-10">
        <h2 className="font-brand uppercase font-semibold text-[12vw] leading-none md:text-6xl">
          Catalouge
        </h2>
      </div>

      {firstPair.length === 2 ? (
        <FeaturedProductPair
          accent={homePageAccent}
          left={firstPair[0]}
          leftTags={showcaseDetails[0]}
          right={firstPair[1]}
          rightTags={showcaseDetails[1]}
        />
      ) : null}

      {secondPair.length === 2 ? (
        <FeaturedProductPair
          accent={homePageAccent}
          left={secondPair[0]}
          leftTags={galleryItems.slice(0, 3).map((item) => item.label)}
          right={secondPair[1]}
          rightTags={galleryItems.slice(1, 4).map((item) => item.label)}
        />
      ) : null}

      <div className="ochi-reveal grid gap-4 px-5 py-12 md:grid-cols-2 md:px-10">
        <div className="relative min-h-[46vh] rounded-xl bg-[#8d1125] p-6 md:min-h-[55vh]">
          <div className="flex h-full items-center justify-center">
            <h3 className="font-brand text-[17vw] uppercase leading-none text-[#fffdfa] md:text-[7vw]">
              Cilla Treats
            </h3>
          </div>
          <p className="absolute bottom-5 left-5 rounded-full border-2 border-[#fffdfa] px-4 py-2 font-brand text-[#fffdfa]">
            Celebration Cakes
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {cards.map((card) => (
            <article
              className="relative min-h-[46vh] overflow-hidden rounded-xl bg-[#181312] md:min-h-[55vh]"
              key={card.name}
            >
              <img
                src={card.image}
                alt={card.name}
                className="h-full w-full object-cover opacity-55"
              />
              <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                <h3 className="font-brand text-[13vw] uppercase leading-none text-white md:text-[4vw]">
                  {card.name}
                </h3>
              </div>
              <p className="absolute bottom-5 left-5 rounded-full border-2 border-white px-4 py-2 font-brand text-sm uppercase text-white">
                {card.price}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
