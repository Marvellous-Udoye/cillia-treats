export type NavItem = {
  label: string;
  to: string;
};

export const primaryNavItems: NavItem[] = [
  { to: "/#celebration-cakes", label: "Cakes" },
  { to: "/#featured-products", label: "Small Chops" },
  { to: "/#ready-order", label: "Gift Set" },
  { to: "/#ready-order", label: "Order" },
];

export const overlayNavItems: NavItem[] = [
  { to: "/", label: "Home" },
  { to: "/#celebration-cakes", label: "Cakes" },
  { to: "/#featured-products", label: "Small Chops" },
  { to: "/#ready-order", label: "Gift Set" },
  { to: "/#ready-order", label: "Order" },
];
