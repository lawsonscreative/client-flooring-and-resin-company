export interface Service {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  icon: string;
  featured?: boolean;
}

export const services: Service[] = [
  {
    id: 'carpet',
    name: 'Carpet',
    slug: 'carpet',
    shortDescription: 'Contract carpets and carpet tiles with commercial-grade durability, perfect for care homes, hospitality, and domestic spaces.',
    icon: '🏠',
  },
  {
    id: 'vinyl',
    name: 'Vinyl',
    slug: 'vinyl',
    shortDescription: 'Loose-lay LVT, sheet vinyl, and cap-and-cove installations. Hygienic, easy to clean, ideal for healthcare and wet rooms.',
    icon: '✨',
  },
  {
    id: 'laminate',
    name: 'Laminate / Engineered Wood',
    slug: 'laminate-wood',
    shortDescription: 'Engineered wood flooring and solid wood laminate combining durability with natural aesthetic appeal.',
    icon: '🌳',
  },
  {
    id: 'resin',
    name: 'Resin Flooring & Surfaces',
    slug: 'resin-feature-surfaces',
    shortDescription: 'Unique, durable resin finishes for floors, worktops, walls, and decorative pieces. Where creativity meets performance.',
    icon: '🎨',
    featured: true,
  },
];
