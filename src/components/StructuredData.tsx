import { company } from '@/content/company';

export default function StructuredData() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://www.tfrco.co.uk',
    name: 'The Flooring and Resin Company',
    alternateName: 'TFRCO',
    description: 'Family-run flooring and resin specialists with over 50 years\' experience in Ashford, Kent. Professional installation for homes, care settings, schools and commercial spaces.',
    url: 'https://www.tfrco.co.uk',
    telephone: '+447974911629',
    email: 'info@tfrco.co.uk',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Henwood House',
      addressLocality: 'Ashford',
      addressRegion: 'Kent',
      postalCode: 'TN24 8DH',
      addressCountry: 'GB',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '51.1465',
      longitude: '0.8746',
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Ashford',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Kent',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'South East England',
      },
    ],
    priceRange: '££-£££',
    image: 'https://www.tfrco.co.uk/logo.png',
    logo: 'https://www.tfrco.co.uk/logo.png',
    foundingDate: '2021-03-19',
    founder: {
      '@type': 'Person',
      name: company.registration.director,
    },
    sameAs: [
      company.social.facebook,
      company.social.tiktok,
      company.social.linkedin,
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '16:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '15',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Flooring Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Carpet Flooring Installation',
            description: 'Contract carpets for care homes, hospitality, offices and domestic properties',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Vinyl Flooring Installation',
            description: 'LVT, sheet vinyl and cap-and-cove installations for healthcare, wet rooms and high-traffic areas',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Laminate & Wood Flooring',
            description: 'Engineered and solid wood laminate flooring for commercial and domestic spaces',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Resin & Feature Surfaces',
            description: 'Bespoke resin flooring, walls and worktops for kitchens, bathrooms and commercial spaces',
          },
        },
      ],
    },
  };

  // Separate Service schema
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Flooring Installation',
    provider: {
      '@type': 'LocalBusiness',
      name: 'The Flooring and Resin Company',
    },
    areaServed: {
      '@type': 'City',
      name: 'Ashford, Kent',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Flooring Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Carpet Flooring Installation',
            description: 'Contract carpets for care homes, hospitality, offices and domestic properties',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Vinyl Flooring Installation',
            description: 'LVT, sheet vinyl and cap-and-cove installations for healthcare, wet rooms and high-traffic areas',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Laminate & Wood Flooring',
            description: 'Engineered and solid wood laminate flooring for commercial and domestic spaces',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Resin & Feature Surfaces',
            description: 'Bespoke resin flooring, walls and worktops for kitchens, bathrooms and commercial spaces',
          },
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}
