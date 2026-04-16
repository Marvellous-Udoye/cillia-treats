export type NavItem = {
  label: string;
  to: string;
};

export const primaryNavItems: NavItem[] = [
  { to: "/#cakes", label: "Cakes" },
  { to: "/#small-chops", label: "Small Chops" },
  { to: "/#gift-sets", label: "Gift Sets" },
  { to: "/#pastries", label: "Pastries" },
];

export const overlayNavItems: NavItem[] = [
  { to: "/", label: "Home" },
  { to: "/#cakes", label: "Cakes" },
  { to: "/#small-chops", label: "Small Chops" },
  { to: "/#gift-sets", label: "Gift Set" },
  { to: "/#pastries", label: "Pastries" },
];
