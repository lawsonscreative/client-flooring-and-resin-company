import { company } from '@/content/company';

export default function StructuredData() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://www.theflooringandresincompany.co.uk/#organization',
    name: company.name.legal,
    alternateName: company.name.trading,
    description: 'Family-run flooring and resin specialists with over 50 years of experience. Professional carpet, vinyl, laminate, and resin installations across Kent and the South East.',
    image: 'https://www.theflooringandresincompany.co.uk/images/1.jpg',
    logo: 'https://www.theflooringandresincompany.co.uk/images/1.jpg',
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.address.street,
      addressLocality: company.address.city,
      addressRegion: company.address.county,
      postalCode: company.address.postcode,
      addressCountry: 'GB',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 51.1481,
      longitude: 0.8730,
    },
    telephone: company.contact.phone,
    email: 'info@theflooringandresincompany.co.uk',
    areaServed: [
      {
        '@type': 'City',
        name: 'Ashford',
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: 'Kent',
        },
      },
      {
        '@type': 'City',
        name: 'Maidstone',
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: 'Kent',
        },
      },
      {
        '@type': 'City',
        name: 'Canterbury',
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: 'Kent',
        },
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
    foundingDate: '2021-03-19',
    founder: {
      '@type': 'Person',
      name: company.registration.director,
    },
    url: 'https://www.theflooringandresincompany.co.uk',
    sameAs: [
      company.social.facebook,
      company.social.tiktok,
      company.social.linkedin,
    ],
    priceRange: '££',
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
      name: 'Flooring and Resin Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Carpet Installation',
            description: 'Professional carpet and carpet tile installation for domestic and commercial properties',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Vinyl Flooring',
            description: 'LVT, sheet vinyl, and cap-and-cove installations',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Laminate & Wood Flooring',
            description: 'Engineered wood and laminate flooring installation',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Resin Flooring & Feature Surfaces',
            description: 'Bespoke resin installations for floors, worktops, walls, and decorative pieces',
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
    />
  );
}
