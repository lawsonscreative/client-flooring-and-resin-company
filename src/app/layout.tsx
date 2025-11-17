import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileStickyContactBar from '@/components/MobileStickyContactBar';
import StructuredData from '@/components/StructuredData';
import { company } from '@/content/company';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: `${company.name.trading} | Flooring & Resin Specialists in Ashford, Kent`,
    template: `%s | ${company.name.trading}`,
  },
  description: 'Family-run flooring and resin specialists based in Ashford, Kent. 50+ years\' experience installing carpet, vinyl, laminate, wood and bespoke resin surfaces for homes, care settings and commercial spaces. Get a free, no-obligation quote.',
  keywords: ['flooring', 'resin flooring', 'carpet installation', 'vinyl flooring', 'Kent flooring', 'Ashford', 'commercial flooring', 'domestic flooring'],
  authors: [{ name: company.name.legal }],
  creator: company.name.legal,
  publisher: company.name.legal,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: company.name.trading,
    title: `${company.name.trading} | Flooring & Resin Specialists in Ashford, Kent`,
    description: 'Family-run flooring and resin specialists based in Ashford, Kent. 50+ years\' experience installing carpet, vinyl, laminate, wood and bespoke resin surfaces for homes, care settings and commercial spaces.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <MobileStickyContactBar />
      </body>
    </html>
  );
}
