import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Flooring Services | Carpet, Vinyl, Laminate & Wood | Ashford & Kent',
  description: 'Professional flooring installation services in Ashford and Kent. Contract carpet, hygienic vinyl, engineered wood and bespoke resin surfaces for homes, care homes and commercial spaces.',
};

export default function Services() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Do I need to move furniture before the flooring installation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We can help move light furniture as part of the installation. For larger items or if you prefer, you can arrange furniture removal beforehand. We\'ll discuss this during your consultation and provide guidance on what needs to be cleared.',
        },
      },
      {
        '@type': 'Question',
        name: 'What floor preparation is required before installation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We handle all necessary floor preparation, including removing existing flooring (if needed), levelling subfloors, and ensuring proper surface conditions. Any additional preparation work required will be discussed and quoted during the consultation phase.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does a typical flooring installation take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most residential rooms take 1-2 days. Larger homes or commercial spaces may take 3-5 days. Resin installations typically take 1-3 days depending on the area size. We\'ll provide a detailed timeline during the quotation process.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are you insured for commercial and domestic work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we carry full Public Liability Insurance for both domestic and commercial projects. This covers all our work and gives you complete peace of mind throughout the installation process.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you supply the flooring materials or do I need to source them?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We offer both options. We can supply and install materials (including helping you choose the right products), or we can fit materials you\'ve purchased yourself. Our quotes clearly separate supply and installation costs for complete transparency.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you work evenings and weekends to minimize disruption?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we offer flexible scheduling including evenings and weekends. This is particularly useful for commercial clients who need work completed outside business hours, or for busy households. We\'ll work around your schedule to minimize disruption.',
        },
      },
      {
        '@type': 'Question',
        name: 'What\'s included in the uplift and disposal of old flooring?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We can remove and dispose of your existing flooring as part of the service. This includes carpet, vinyl, laminate, and tiles. The cost for uplift and disposal will be clearly itemized in your quote, and we ensure all waste is disposed of responsibly.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main id="main-content">
      {/* Hero - EXACT COPY OF HOMEPAGE */}
      <section className="relative h-[75vh] md:h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />

        {/* Hero Content */}
        <div className="relative z-20 container mx-auto px-6 py-6 md:py-8 text-center">
          <div className="max-w-5xl mx-auto">
            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 md:mb-4 leading-tight">
              Professional flooring<br />
              for every space
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-4 md:mb-6 max-w-3xl mx-auto leading-relaxed">
              From traditional carpet and vinyl to innovative resin surfaces, we deliver solutions that transform spaces.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-6 md:mb-8">
              <Link
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                Request a Quote
              </Link>
              <Link
                href="/previous-work"
                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-200"
              >
                View Our Work
              </Link>
            </div>

            {/* Trust Signals */}
            <div className="mt-6 md:mt-8 flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-12 text-white text-sm md:text-base">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="font-bold text-sm md:text-base lg:text-lg">50+ Years</div>
                  <div className="text-xs md:text-sm text-gray-300">Experience</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="font-bold text-sm md:text-base lg:text-lg">Fully Insured</div>
                  <div className="text-xs md:text-sm text-gray-300">Public Liability</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="font-bold text-sm md:text-base lg:text-lg">Family Run</div>
                  <div className="text-xs md:text-sm text-gray-300">Personal Service</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Services Overview Section - SAME LAYOUT AS HOMEPAGE */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          {/* Intro Paragraph */}
          <div className="text-center mb-12">
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Choosing the right floor isn&apos;t just about how it looks. We help you balance durability, safety, hygiene and budget – then install it with minimal disruption. From contract carpet in care homes to slip-resistant vinyl in wet rooms and resin features in reception areas, we&apos;ll recommend what will genuinely work for your space.
            </p>
          </div>

          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our flooring services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Expert installations across carpet, vinyl, laminate, and resin surfaces
            </p>
          </div>

          {/* Service Cards Grid - SAME BLUE GRADIENT STYLE AS HOMEPAGE */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Carpet Card */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-blue-600 hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>

              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Carpet</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Contract carpets and carpet tiles with commercial-grade durability for care homes, hospitality, and domestic spaces.
              </p>
              <p className="text-sm font-semibold text-gray-500 mb-3">Best for:</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Care homes & hospitality
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Offices & commercial
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Domestic homes
                </li>
              </ul>
              <Link href="/contact?service=carpet" className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center group/link">
                Get a quote
                <svg className="w-5 h-5 ml-2 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Vinyl Card */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-blue-600 hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>

              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Vinyl</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                LVT, sheet vinyl, and cap-and-cove installations. Hygienic, easy to clean, ideal for healthcare and wet rooms.
              </p>
              <p className="text-sm font-semibold text-gray-500 mb-3">Best for:</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Healthcare facilities
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Kitchens & wet rooms
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Schools & high-traffic
                </li>
              </ul>
              <Link href="/contact?service=vinyl" className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center group/link">
                Get a quote
                <svg className="w-5 h-5 ml-2 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Laminate Card */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-blue-600 hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>

              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Laminate & Wood</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Engineered wood and solid wood laminate combining durability with natural aesthetic appeal.
              </p>
              <p className="text-sm font-semibold text-gray-500 mb-3">Best for:</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Living rooms & hallways
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Commercial showrooms
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Natural aesthetics
                </li>
              </ul>
              <Link href="/contact?service=laminate" className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center group/link">
                Get a quote
                <svg className="w-5 h-5 ml-2 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Resin & Feature Surfaces */}
            <div className="group bg-white border-2 border-gray-100 rounded-2xl shadow-lg hover:shadow-2xl hover:border-blue-200 transition-all duration-300 p-8 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Resin & Feature Surfaces</h3>
              <p className="text-sm font-semibold text-purple-600 mb-3">Best for: Kitchens, bathrooms, feature walls, hospitality venues, showrooms</p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Resin creates seamless, hygienic surfaces that combine art with function. Whether you want a subtle polished concrete effect or a bold metallic feature, we design and install bespoke resin floors, walls and worktops that make spaces memorable.
              </p>
              <p className="text-sm font-semibold text-gray-500 mb-3">Benefits:</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-purple-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Seamless and easy to clean
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-purple-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Customisable colours and finishes
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-purple-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Durable and chemical-resistant
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-purple-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Ideal for wet areas and high-hygiene environments
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-purple-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Can incorporate logos, artwork, or patterns
                </li>
              </ul>
              <Link href="/resin-feature-surfaces" className="text-purple-600 font-semibold hover:text-purple-700 inline-flex items-center group/link">
                Learn more about resin
                <svg className="w-5 h-5 ml-2 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* How our installations work */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How our installations work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {/* Step 1 */}
            <div className="bg-white border-2 border-gray-100 rounded-xl shadow-md hover:shadow-xl hover:border-blue-200 transition-all duration-300 p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-6 text-white text-2xl font-bold shadow-lg shadow-blue-500/30">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Survey & advice</h3>
              <p className="text-gray-600 leading-relaxed">
                We visit your property, assess the subfloor and discuss how the space is used.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white border-2 border-gray-100 rounded-xl shadow-md hover:shadow-xl hover:border-blue-200 transition-all duration-300 p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-6 text-white text-2xl font-bold shadow-lg shadow-blue-500/30">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Clear quote</h3>
              <p className="text-gray-600 leading-relaxed">
                You&apos;ll receive an itemised quote, so you can see exactly what&apos;s included.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white border-2 border-gray-100 rounded-xl shadow-md hover:shadow-xl hover:border-blue-200 transition-all duration-300 p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-6 text-white text-2xl font-bold shadow-lg shadow-blue-500/30">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Scheduled around you</h3>
              <p className="text-gray-600 leading-relaxed">
                For schools and care homes we often work evenings, weekends or holidays to minimise disruption.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white border-2 border-gray-100 rounded-xl shadow-md hover:shadow-xl hover:border-blue-200 transition-all duration-300 p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-6 text-white text-2xl font-bold shadow-lg shadow-blue-500/30">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Tidy, respectful fitters</h3>
              <p className="text-gray-600 leading-relaxed">
                We protect surrounding areas, keep noise to a minimum and clean up thoroughly when we&apos;re done.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section - SAME LAYOUT AS HOMEPAGE */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why choose our services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Professional installation, premium materials, and care in every project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Feature 1 */}
            <div className="bg-white border-2 border-gray-100 rounded-xl shadow-md hover:shadow-xl hover:border-blue-200 transition-all duration-300 p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">50+ years expertise</h3>
              <p className="text-gray-600 leading-relaxed">
                Decades of flooring experience via founder George Spittle, bringing unmatched knowledge to every project.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white border-2 border-gray-100 rounded-xl shadow-md hover:shadow-xl hover:border-blue-200 transition-all duration-300 p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality guaranteed</h3>
              <p className="text-gray-600 leading-relaxed">
                Premium materials and expert installation ensure your flooring looks great and lasts for years.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white border-2 border-gray-100 rounded-xl shadow-md hover:shadow-xl hover:border-blue-200 transition-all duration-300 p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Personal service</h3>
              <p className="text-gray-600 leading-relaxed">
                Katie brings an approachable, caring touch to every project. You&apos;re not just a number to us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens Next Process */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What happens next?
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Our simple, transparent process from first contact to finished floor
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-blue-600 hover:-translate-y-1">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mb-6 text-white text-2xl font-bold shadow-lg shadow-blue-500/30">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Get in Touch</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Call, WhatsApp, or use our contact form. Tell us about your project, and we&apos;ll arrange a convenient time to discuss.
                </p>
                <p className="text-sm text-blue-600 font-semibold">
                  Usually same day response
                </p>
              </div>
              {/* Connector Arrow - Hidden on mobile */}
              <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-blue-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-blue-600 hover:-translate-y-1">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mb-6 text-white text-2xl font-bold shadow-lg shadow-blue-500/30">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Free Consultation</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We visit your site to assess the space, discuss your requirements, and provide honest advice on the best solution.
                </p>
                <p className="text-sm text-blue-600 font-semibold">
                  No obligation, no pressure
                </p>
              </div>
              {/* Connector Arrow */}
              <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-blue-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-blue-600 hover:-translate-y-1">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mb-6 text-white text-2xl font-bold shadow-lg shadow-blue-500/30">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Detailed Quote</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We provide a clear, itemized quote with no hidden costs. We can supply materials or fit your own - whatever works best for you.
                </p>
                <p className="text-sm text-blue-600 font-semibold">
                  Transparent pricing
                </p>
              </div>
              {/* Connector Arrow */}
              <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-blue-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>

            {/* Step 4 */}
            <div>
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-xl p-8 text-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 text-white text-2xl font-bold border border-white/30">
                  4
                </div>
                <h3 className="text-xl font-bold mb-3">Expert Installation</h3>
                <p className="text-blue-50 leading-relaxed mb-4">
                  We arrive on time, work efficiently, and leave your space clean and ready to use. Quality installation, every time.
                </p>
                <p className="text-sm text-white font-semibold">
                  Professional finish guaranteed
                </p>
              </div>
            </div>
          </div>

          {/* Additional Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Fully Insured</h4>
                  <p className="text-sm text-gray-600">Public Liability Insurance on all projects</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Flexible Scheduling</h4>
                  <p className="text-sm text-gray-600">We work around your timetable, including weekends</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Clear Communication</h4>
                  <p className="text-sm text-gray-600">Regular updates throughout your project</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently asked questions
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {/* FAQ 1 */}
            <details className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-gray-900 flex justify-between items-center">
                <span>How much disruption will there be?</span>
                <svg className="w-5 h-5 text-blue-600 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                <p>Most flooring installations are completed in 1-3 days for domestic spaces. We protect surrounding areas, work cleanly and remove all waste. For care homes and schools, we can schedule work during quieter periods or out of hours to minimise impact on residents and students.</p>
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-gray-900 flex justify-between items-center">
                <span>Do you move furniture?</span>
                <svg className="w-5 h-5 text-blue-600 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                <p>We can move smaller furniture items as part of the installation. For larger or valuable items, we recommend arranging separate removal or we can work room by room if that helps.</p>
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-gray-900 flex justify-between items-center">
                <span>How long do installations usually take?</span>
                <svg className="w-5 h-5 text-blue-600 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                <p>Residential rooms: 1-2 days. Commercial spaces: 3-5 days depending on size. Resin installations: 2-3 days including curing time. We&apos;ll give you an accurate timeline when we quote.</p>
              </div>
            </details>

            {/* FAQ 4 */}
            <details className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-gray-900 flex justify-between items-center">
                <span>How do I care for my new floor?</span>
                <svg className="w-5 h-5 text-blue-600 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                <p>We provide care instructions for every installation. Most flooring needs simple regular vacuuming/mopping. Resin surfaces are especially low-maintenance – just mop with warm water and standard cleaning products.</p>
              </div>
            </details>

            {/* FAQ 5 */}
            <details className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-gray-900 flex justify-between items-center">
                <span>What guarantees do you offer?</span>
                <svg className="w-5 h-5 text-blue-600 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                <p>All our work is guaranteed. We&apos;re fully insured and use quality materials from trusted suppliers. If there&apos;s ever an issue with our workmanship, we&apos;ll put it right.</p>
              </div>
            </details>
          </div>

          {/* Still have questions CTA */}
          <div className="mt-12 text-center bg-white rounded-2xl shadow-lg p-8 max-w-3xl mx-auto border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Still have questions?</h3>
            <p className="text-gray-600 mb-6">
              We&apos;re happy to discuss your specific requirements. Get in touch and we&apos;ll provide all the answers you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200"
              >
                Contact us
              </Link>
              <a
                href="tel:07974911629"
                className="inline-flex items-center justify-center bg-white border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200"
              >
                Call: 07974 911629
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section - SAME AS HOMEPAGE */}
      <section className="py-12 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to transform your space?
            </h2>
            <p className="text-xl md:text-2xl mb-12 text-blue-50 leading-relaxed">
              From a single room to a complete commercial fit-out, we&apos;re here to help. Get in touch for a no-obligation chat about your flooring needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                Request a Quote
              </Link>
              <a
                href="tel:07974911629"
                className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Call: 07974 911629
              </a>
            </div>
          </div>
        </div>
      </section>
      </main>
    </>
  );
}
