import { company } from '@/content/company';

export default function StructuredData() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: company.name.legal,
    alternateName: company.name.trading,
    description: 'Family-run flooring and resin specialists with over 50 years of experience',
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.address.street,
      addressLocality: company.address.city,
      addressRegion: company.address.county,
      postalCode: company.address.postcode,
      addressCountry: 'GB',
    },
    telephone: company.contact.phone,
    areaServed: ['Kent', 'South East England'],
    foundingDate: '2021-03-19',
    url: typeof window !== 'undefined' ? window.location.origin : '',
    sameAs: [
      company.social.facebook,
      company.social.tiktok,
      company.social.linkedin,
    ],
    priceRange: '££',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
    />
  );
}
