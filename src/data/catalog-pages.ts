export type CatalogGalleryItem = {
  caption: string;
  image: string;
  label: string;
};

export type CatalogShowcase = {
  details: string[];
  image: string;
  title: string;
  copy: string;
};

export type CatalogProduct = {
  image: string;
  name: string;
  note: string;
  price: string;
};

export type CatalogPageData = {
  slug: "cakes" | "pastries" | "gift-sets";
  eyebrow: string;
  title: string;
  intro: string;
  accent: string;
  heroImage: string;
  heroImageAlt: string;
  heroLabel: string;
  heroNote: string;
  galleryTitle: string;
  galleryItems: CatalogGalleryItem[];
  showcases: CatalogShowcase[];
  products: CatalogProduct[];
};

export const catalogPages: Record<CatalogPageData["slug"], CatalogPageData> = {
  cakes: {
    slug: "cakes",
    eyebrow: "Celebration Cakes",
    title: "Cakes designed to own the table.",
    intro:
      "Buttercream finishes, foil wraps, soft layers, and party-ready details arranged like a premium bakery catalogue.",
    accent: "#b5162f",
    heroImage: "/imgs/treat-7.png",
    heroImageAlt: "Celebration cake showcase",
    heroLabel: "Frosted foil, buttercream, custom moments.",
    heroNote: "Birthday centrepieces, thank-you cakes, soft luxury layers.",
    galleryTitle: "Cake stories",
    galleryItems: [
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
    ],
    showcases: [
      {
        title: "Birthday-ready presentation",
        copy:
          "The cake page should feel like a premium celebration edit, pairing close crop imagery with short emotional copy and product-first details.",
        image: "/imgs/hero-bg.png",
        details: ["Buttercream layering", "Foil-wrap finishing", "Custom inscriptions"],
      },
      {
        title: "Soft luxury, not generic bakery",
        copy:
          "Use editorial spacing, warm neutrals, deep red accents, and controlled GSAP reveals so the page reads as curated rather than templated.",
        image: "/imgs/treat-7.png",
        details: ["Giftable scale", "Event styling", "Premium catalogue feel"],
      },
    ],
    products: [
      { image: "/imgs/treat-6.png", name: "Frosted Foil Cake", note: "6-inch one layer", price: "From N18,000" },
      { image: "/imgs/treat-7.png", name: "Buttercream Cake", note: "Celebration finish", price: "From N22,000" },
      { image: "/imgs/hero-bg.png", name: "Mini Cake Box", note: "Soft gifting edit", price: "From N12,000" },
      { image: "/imgs/treat-1.png", name: "Statement Party Cake", note: "Large table centrepiece", price: "From N35,000" },
      { image: "/imgs/treat-6.png", name: "Custom Message Cake", note: "Personalized lettering", price: "From N20,000" },
      { image: "/imgs/treat-7.png", name: "Layered Butter Cake", note: "Elegant rich crumb", price: "From N24,000" },
    ],
  },
  pastries: {
    slug: "pastries",
    eyebrow: "Pastries & Small Bites",
    title: "Pastries arranged for craving and display.",
    intro:
      "A faster, lighter catalogue rhythm built around doughnuts, banana bread, parfaits, fries, and mini bites that still feels premium.",
    accent: "#c68c53",
    heroImage: "/imgs/treat-5.png",
    heroImageAlt: "Pastries and bites showcase",
    heroLabel: "Mini bites, soft textures, quick indulgence.",
    heroNote: "Warm boxes, dessert cups, pastry trays, all curated to browse beautifully.",
    galleryTitle: "Pastry rhythm",
    galleryItems: [
      {
        label: "Doughnuts",
        caption: "Milky doughnuts and glazed details arranged like a premium snack edit.",
        image: "/imgs/treat-5.png",
      },
      {
        label: "Parfaits",
        caption: "Layered dessert cups that bring colour, height, and texture to the catalogue flow.",
        image: "/imgs/treat-6.png",
      },
      {
        label: "Banana Bread",
        caption: "Comforting pastry pieces treated with cleaner styling and stronger visual framing.",
        image: "/imgs/treat-7.png",
      },
      {
        label: "Chicken Pies",
        caption: "Warm savoury pieces presented with the same premium display language as the sweets.",
        image: "/imgs/hero-bg.png",
      },
    ],
    showcases: [
      {
        title: "Built for variety",
        copy:
          "This page should feel more rhythmic than the cakes page, mixing quick product reveals with a dense catalogue section that rewards scrolling.",
        image: "/imgs/treat-5.png",
        details: ["Dessert cups", "Mini banana bread", "Doughnut selection"],
      },
      {
        title: "Warm bite energy",
        copy:
          "Use stronger repetition, tighter product groupings, and a slightly faster pinned gallery pace while preserving the same premium motion discipline.",
        image: "/imgs/treat-6.png",
        details: ["Fast browsing", "Soft editorial motion", "Rich texture emphasis"],
      },
    ],
    products: [
      { image: "/imgs/treat-5.png", name: "Milky Doughnuts", note: "Soft glazed batch", price: "From N6,500" },
      { image: "/imgs/treat-6.png", name: "Layered Parfait", note: "Cold dessert cup", price: "From N5,000" },
      { image: "/imgs/treat-7.png", name: "Mini Banana Bread", note: "Tea-time loaf", price: "From N7,500" },
      { image: "/imgs/hero-bg.png", name: "Chicken Pie Box", note: "Warm savoury bites", price: "From N9,000" },
      { image: "/imgs/treat-5.png", name: "Yellow Fries Tray", note: "Crisp event side", price: "From N8,500" },
      { image: "/imgs/treat-6.png", name: "Dessert Duo Set", note: "Parfait and pastry pairing", price: "From N10,500" },
    ],
  },
  "gift-sets": {
    slug: "gift-sets",
    eyebrow: "Gift Sets & Hampers",
    title: "Gift sets styled to impress before the first bite.",
    intro:
      "A more curated catalogue language focused on packaging, festive layering, and presentational value for birthdays, corporate gifting, and celebrations.",
    accent: "#8d1125",
    heroImage: "/imgs/treat-1.png",
    heroImageAlt: "Gift hamper and treats showcase",
    heroLabel: "Hampers, souvenirs, and gifting edits with premium presentation.",
    heroNote: "Curated bundles designed for first-glance impact and thoughtful delivery.",
    galleryTitle: "Gift edit",
    galleryItems: [
      {
        label: "Souvenirs",
        caption: "Compact edible takeaways treated like styled keepsakes for events and gatherings.",
        image: "/imgs/treat-1.png",
      },
      {
        label: "Birthday Sets",
        caption: "Gift bundles designed to feel festive, layered, and emotionally generous.",
        image: "/imgs/treat-7.png",
      },
      {
        label: "Corporate Hampers",
        caption: "Presentation-led sets built to feel polished enough for teams, clients, and office gifting.",
        image: "/imgs/treat-6.png",
      },
      {
        label: "Valentine Gifts",
        caption: "Warm, romantic packaging moments arranged with more softness and reveal-driven motion.",
        image: "/imgs/treat-5.png",
      },
    ],
    showcases: [
      {
        title: "Presentation is part of the product",
        copy:
          "This page should feel the most curated of the three, with packaging, layering, and reveal moments carrying as much weight as the food itself.",
        image: "/imgs/treat-1.png",
        details: ["Corporate hampers", "Souvenir bundles", "Birthday gift packs"],
      },
      {
        title: "Gift-led motion direction",
        copy:
          "Use slightly more dramatic pinned transitions and stronger panel reveals here so the page feels like opening a premium hamper.",
        image: "/imgs/treat-7.png",
        details: ["Reveal moments", "Packaging emphasis", "Premium gifting tone"],
      },
    ],
    products: [
      { image: "/imgs/treat-1.png", name: "Signature Gift Set", note: "Curated bakery bundle", price: "From N20,000" },
      { image: "/imgs/treat-7.png", name: "Birthday Bundle", note: "Cake and extras", price: "From N28,000" },
      { image: "/imgs/treat-6.png", name: "Corporate Hamper", note: "Client-ready presentation", price: "From N35,000" },
      { image: "/imgs/treat-5.png", name: "Valentine Treat Box", note: "Soft romantic edit", price: "From N18,500" },
      { image: "/imgs/treat-1.png", name: "Souvenir Pack", note: "Event giveaway set", price: "From N12,000" },
      { image: "/imgs/treat-7.png", name: "Premium Hamper", note: "Layered celebration box", price: "From N42,000" },
    ],
  },
};
