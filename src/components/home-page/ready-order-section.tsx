import { Circle } from "lucide-react";
import { Link } from "react-router-dom";
import { homePageSoftSurface } from "../../data/home-page-data";

export function ReadyOrderSection() {
  return (
    <section
      id="ready-order"
      className="ochi-reveal relative min-h-[130vh] rounded-3xl text-[#1f1713]"
      style={{ backgroundColor: homePageSoftSurface }}
    >
      <div className="relative flex min-h-[80vh] flex-col items-center justify-center px-5 pt-20 text-center">
        <h2 className="font-head text-[21vw] font-medium uppercase leading-[0.75] md:text-[12vw]">
          Ready
          <br />
          to place
          <br />
          your order?
        </h2>
      </div>

      <div className="flex flex-col items-center gap-5 pb-20">
        <Link
          to="/#ready-order"
          className="inline-flex items-center gap-5 rounded-full border border-[#b5162f] bg-[#b5162f] px-6 py-4 font-brand text-sm uppercase text-white"
        >
          Place your order <Circle size={12} fill="currentColor" />
        </Link>
        <p className="font-brand">OR</p>
        <Link
          to="#featured-products"
          className="inline-flex items-center gap-5 rounded-full border border-[#b5162f] px-6 py-4 font-brand text-sm uppercase text-[#b5162f]"
        >
          Browse catalouge <Circle size={12} fill="currentColor" />
        </Link>
      </div>
    </section>
  );
}
