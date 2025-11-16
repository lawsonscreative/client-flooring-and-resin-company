import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Previous Work | Portfolio of Flooring Projects',
  description: 'View our portfolio of domestic and commercial flooring projects across Kent. Carpet, vinyl, laminate, and stunning resin installations in schools, care homes, and hospitality venues in Ashford and throughout the South East.',
};

export default function PreviousWorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
