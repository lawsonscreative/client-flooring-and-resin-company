import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Previous Work | Flooring & Resin Projects in Kent | The Flooring and Resin Company',
  description: 'View our portfolio of flooring and resin installations across Kent. Care homes, schools, commercial spaces and domestic properties. See our work, read client testimonials.',
};

export default function PreviousWorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
