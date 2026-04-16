import { galleryItems } from "../../data/home-page-data";
import { Eyes } from "./eyes";

export function VisualFeatureSection() {
  return (
    <section className="ochi-reveal relative h-screen overflow-hidden">
      <img
        src={galleryItems[0].image}
        alt={galleryItems[0].label}
        className="h-full w-full object-cover opacity-70"
      />
      <Eyes />
    </section>
  );
}
