import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
import { company } from '@/content/company';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: `${company.name.trading} | Ashford, Kent | 50+ Years Experience`,
    template: `%s | ${company.name.trading}`,
  },
  description: 'Family-run flooring and resin specialists with over 50 years of experience. From homes to hospitals, we create surfaces that inspire. Based in Ashford, serving Kent and the South East.',
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
    title: `${company.name.trading} | Ashford, Kent | 50+ Years Experience`,
    description: 'Family-run flooring and resin specialists with over 50 years of experience. From homes to hospitals, we create surfaces that inspire.',
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
      </body>
    </html>
  );
}
