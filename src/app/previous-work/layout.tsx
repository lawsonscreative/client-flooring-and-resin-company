import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Previous Work | Portfolio of Flooring Projects | The Flooring and Resin Company',
  description: 'See our recent flooring and resin installations across homes, care homes, schools and commercial spaces in Kent and the South East.',
};

export default function PreviousWorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
