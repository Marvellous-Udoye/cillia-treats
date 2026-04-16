import {
  homePageAccent,
  products,
  showcaseDetails,
} from "../../data/home-page-data";
import { FeaturedProductPair } from "./featured-product-pair";

export function FeaturedProductsSection() {
  const productPairs = Array.from(
    { length: Math.ceil(products.length / 2) },
    (_, index) => products.slice(index * 2, index * 2 + 2),
  );

  const getProductTags = (name: string) => {
    const lowerName = name.toLowerCase();

    if (lowerName.includes("cupcake")) {
      return ["Cupcakes", "Giftable bites", "Buttercream"];
    }

    if (lowerName.includes("gift") || lowerName.includes("hamper")) {
      return ["Gift sets", "Beautifully packed", "Corporate ready"];
    }

    if (
      lowerName.includes("chops") ||
      lowerName.includes("pie") ||
      lowerName.includes("fries") ||
      lowerName.includes("bites")
    ) {
      return ["Small chops", "Party platters", "Event-ready"];
    }

    if (lowerName.includes("banana")) {
      return ["Banana bread", "Tea-time loaf", "Soft crumb"];
    }

    if (lowerName.includes("parfait")) {
      return ["Parfait", "Layered dessert", "Cold cup"];
    }

    if (lowerName.includes("doughnut")) {
      return ["Doughnuts", "Milky finish", "Soft batch"];
    }

    return ["Celebration cakes", "Buttercream", "Custom finish"];
  };

  const getPairAnchor = (pair: typeof productPairs[number], index: number) => {
    const pairNames = pair.map((product) => product.name.toLowerCase()).join(" ");

    if (index === 0) return "cakes";
    if (pairNames.includes("gift")) return "gift-sets";
    if (
      pairNames.includes("chops") ||
      pairNames.includes("pie") ||
      pairNames.includes("fries") ||
      pairNames.includes("bites")
    ) {
      return "small-chops";
    }
    if (
      pairNames.includes("banana") ||
      pairNames.includes("parfait") ||
      pairNames.includes("doughnut")
    ) {
      return undefined;
    }

    if (pairNames.includes("pastry") || pairNames.includes("pastries")) {
      return "pastries";
    }

    return undefined;
  };

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

      {productPairs.map((pair, index) =>
        pair.length === 2 ? (
          <div id={getPairAnchor(pair, index)} key={`${pair[0].name}-${pair[1].name}`}>
            <FeaturedProductPair
              accent={homePageAccent}
              left={pair[0]}
              leftTags={index === 0 ? showcaseDetails[0] : getProductTags(pair[0].name)}
              right={pair[1]}
              rightTags={index === 0 ? showcaseDetails[1] : getProductTags(pair[1].name)}
            />
          </div>
        ) : null,
      )}

      <div className="ochi-reveal grid gap-4 px-5 py-12 md:grid-cols-2 md:px-10">
        <div className="relative min-h-[46vh] rounded-xl bg-[#8d1125] p-6 md:min-h-[55vh]">
          <div className="flex h-full items-center justify-center">
            <h3 className="font-brand text-[17vw] uppercase leading-none text-[#fffdfa] md:text-[7vw]">
              Cilla Treats
            </h3>
          </div>
          <p className="absolute bottom-5 left-5 rounded-full border-2 border-[#fffdfa] px-4 py-2 font-brand text-[#fffdfa]">
            Cakes, pastries, small chops, hampers, and gift sets
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {products.slice(4, 6).map((card) => (
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
