export type NavItem = {
  label: string;
  to: string;
};

export const primaryNavItems: NavItem[] = [
  { to: "/cakes", label: "Cakes" },
  { to: "/pastries", label: "Pastries" },
  { to: "/gift-sets", label: "Gift Sets" },
  { to: "/", label: "Orders" },
];

export const overlayNavItems: NavItem[] = [
  { to: "/", label: "Home" },
  { to: "/cakes", label: "Cakes" },
  { to: "/pastries", label: "Pastries" },
  { to: "/gift-sets", label: "Gift Sets" },
  { to: "/", label: "Orders" },
];
