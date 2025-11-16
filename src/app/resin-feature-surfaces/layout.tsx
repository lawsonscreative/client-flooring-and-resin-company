import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resin Flooring & Feature Surfaces | Bespoke Installations',
  description: 'Bespoke resin flooring and feature surfaces in Kent. Seamless, durable, artistic resin for kitchens, bathrooms, worktops, and walls. Custom colours and patterns across Ashford and the South East.',
};

export default function ResinLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
