export type HomeProduct = {
  image: string;
  name: string;
  note: string;
  price: string;
};

export const homePageAccent = "#b5162f";
export const homePageSoftSurface = "#fffdfa";
export const whatsappUrl = "https://wa.me/2340000000000";

export const marqueeText =
  "cakes, small chops, pastries, souvenirs, hampers, gift sets.";

export const messageSectionCopy = {
  first: "Baked for sweet moments,",
  highlight: "and celebrations.",
  second: "Because every table deserves something beautiful and delicious.",
  paragraph:
    "Thoughtfully baked, beautifully packed, and ready for birthdays, office gifting, surprise hampers, and every joyful gathering.",
};

export const orderSteps = [
  {
    title: "Browse the catalogue",
    copy: "Move through the featured cakes, pastries, small chops, hampers, and gift sets, then pick the items that fit your event or surprise.",
  },
  {
    title: "Message us on WhatsApp",
    copy: "Send your preferred items, delivery date, quantity, and any custom note so the order can be confirmed quickly.",
  },
  {
    title: "Confirm and receive",
    copy: "We confirm availability, package the order beautifully, and prepare it for pickup, delivery, gifting, or celebration tables.",
  },
];

export const galleryItems = [
  {
    label: "Foil Cakes",
    caption: "Compact celebration cakes finished for easy gifting and instant impact.",
    image: "/imgs/treat-6.png",
  },
  {
    label: "Buttercream",
    caption: "Smooth buttercream layers built to feel polished, feminine, and photo-ready.",
    image: "/imgs/treat-7.png",
  },
  {
    label: "Mini Cakes",
    caption: "Smaller-format cakes styled for personal surprises and softer table settings.",
    image: "/imgs/hero-bg.png",
  },
  {
    label: "Statement Cakes",
    caption: "Bigger celebration pieces arranged like the hero moment of the room.",
    image: "/imgs/treat-1.png",
  },
];

export const showcaseDetails = [
  ["Buttercream layering", "Foil-wrap finishing", "Custom inscriptions"],
  ["Giftable scale", "Event styling", "Premium catalogue feel"],
];

export const products: HomeProduct[] = [
  {
    image: "/imgs/treat-6.png",
    name: "Frosted Foil Cake",
    note: "6-inch one layer",
    price: "From N18,000",
  },
  {
    image: "/imgs/treat-7.png",
    name: "Buttercream Cake",
    note: "Celebration finish",
    price: "From N22,000",
  },
  {
    image: "/imgs/hero-bg.png",
    name: "Mini Cake Box",
    note: "Soft gifting edit",
    price: "From N12,000",
  },
  {
    image: "/imgs/treat-1.png",
    name: "Statement Party Cake",
    note: "Large table centrepiece",
    price: "From N35,000",
  },
  {
    image: "/imgs/treat-6.png",
    name: "Custom Message Cake",
    note: "Personalized lettering",
    price: "From N20,000",
  },
  {
    image: "/imgs/treat-7.png",
    name: "Layered Butter Cake",
    note: "Elegant rich crumb",
    price: "From N24,000",
  },
];
