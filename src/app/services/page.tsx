import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Flooring Services | Carpet, Vinyl, Laminate, Resin',
  description: 'Professional flooring solutions for every space. Carpet, vinyl, laminate, and innovative resin surfaces for domestic and commercial projects in Kent.',
};

export default function Services() {
  return (
    <main id="main-content">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-blue-500/10 to-blue-400/20"></div>

        <div className="relative z-10 container mx-auto px-6 py-24 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Professional flooring solutions for every space
            </h1>
            <p className="text-xl md:text-2xl text-blue-50 max-w-3xl mx-auto leading-relaxed">
              From traditional carpet and vinyl to innovative resin surfaces, we cover it all.
            </p>
          </div>
        </div>
      </section>

      {/* Carpet */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-3xl shadow-lg shadow-blue-500/30">
                🏠
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Carpet</h2>
            </div>

            <div className="space-y-6 text-lg text-gray-700 mb-8 leading-relaxed">
              <p>
                We specialize in contract carpets and carpet tiles designed for both commercial and domestic environments. Our carpet installations are built to last, offering comfort, warmth, and aesthetic appeal.
              </p>
              <p>
                With strong experience in care homes and hospitality environments, we understand the unique demands of high-traffic areas. We work with commercial-grade materials that maintain their appearance and performance even under heavy use.
              </p>
              <p>
                Whether you&apos;re refurbishing a residential property or outfitting a large commercial facility, we provide expert advice on the best carpet solution for your needs and budget.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 mb-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Best for:</h3>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-700">
                  <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Care homes and assisted living facilities
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Hospitality environments (hotels, clubs, restaurants)
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Offices and commercial spaces
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Domestic homes and bedrooms
                </li>
              </ul>
            </div>

            <p className="text-lg text-gray-600">
              Interested in carpet? <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center group">
                Get in touch
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Vinyl */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-3xl shadow-lg shadow-blue-500/30">
                ✨
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Vinyl</h2>
            </div>

            <div className="space-y-6 text-lg text-gray-700 mb-8 leading-relaxed">
              <p>
                Our vinyl flooring services include loose-lay LVT (luxury vinyl tiles), sheet vinyl, and specialized cap-and-cove installations ideal for healthcare, kitchens, and wet rooms.
              </p>
              <p>
                Vinyl flooring is the perfect choice when hygiene and easy cleaning are priorities. The seamless nature of sheet vinyl and the durability of LVT make them ideal for environments that demand both performance and cleanliness.
              </p>
              <p>
                We&apos;ve completed numerous vinyl projects in schools, hospitals, care homes, and domestic kitchens—delivering installations that look great and stand the test of time.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 mb-8 border border-gray-100 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Best for:</h3>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-700">
                  <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Hospitals and healthcare facilities
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Kitchens and wet rooms
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Schools and educational facilities
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  High-traffic commercial areas
                </li>
              </ul>
            </div>

            <p className="text-lg text-gray-600">
              Interested in vinyl? <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center group">
                Get in touch
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Laminate / Engineered Wood */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-3xl shadow-lg shadow-blue-500/30">
                🌳
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Laminate / Engineered Wood</h2>
            </div>

            <div className="space-y-6 text-lg text-gray-700 mb-8 leading-relaxed">
              <p>
                Our engineered wood flooring and solid wood laminate installations combine the natural beauty of wood with enhanced durability and stability.
              </p>
              <p>
                Engineered wood is an excellent choice for those who want the aesthetic appeal of real wood with improved resistance to moisture and temperature changes. It&apos;s perfect for both residential and commercial environments where appearance and longevity matter.
              </p>
              <p>
                We handle the entire installation process with precision, ensuring a flawless finish that enhances the character of any space.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 mb-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Best for:</h3>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-700">
                  <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Living rooms and open-plan spaces
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Hallways and staircases
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Commercial offices and showrooms
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Properties where natural aesthetics are valued
                </li>
              </ul>
            </div>

            <p className="text-lg text-gray-600">
              Interested in laminate or engineered wood? <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center group">
                Get in touch
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Resin Flooring & Surfaces */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-purple-700 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-3xl border border-white/30">
                🎨
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white">Resin Flooring & Surfaces</h2>
            </div>

            <div className="space-y-6 text-lg text-blue-50 mb-8 leading-relaxed">
              <p>
                Our resin services are where creativity truly meets performance. We create unique, durable finishes for floors, worktops, countertops, feature walls, and decorative pieces—each one completely bespoke.
              </p>
              <p>
                Resin installations offer unlimited design possibilities. Whether you want bold artistic patterns, custom colours, embedded objects, or integrated artwork, we can bring your vision to life.
              </p>
              <p>
                These seamless, hygienic surfaces are perfect for high-traffic areas, commercial showrooms, hospitality venues, and homeowners who want something truly special.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
              <p className="text-purple-100 font-semibold text-lg mb-3">Our proudest showcase:</p>
              <p className="text-white text-lg leading-relaxed">
                <strong>Phoenix Passage 2012</strong> by Canadian artist Greg Deda, currently on display at the Chelsea Art Gallery—a stunning example of how art and flooring can merge to inspire and impress.
              </p>
            </div>

            <Link href="/resin-feature-surfaces" className="inline-block bg-white text-purple-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105">
              Discover our resin services
            </Link>
          </div>
        </div>
      </section>

      {/* Commercial vs Domestic */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">We work with everyone</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 hover:-translate-y-1">
              <h3 className="text-3xl font-bold mb-6 text-blue-600">Domestic</h3>
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                From single rooms to whole-house refurbishments, we treat every domestic project with care and respect. We understand that we&apos;re working in your home, and we make every effort to minimize disruption while delivering exceptional results.
              </p>
              <ul className="space-y-3 text-gray-700 text-lg">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Homes and apartments
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Extensions and renovations
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  New builds
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 hover:-translate-y-1">
              <h3 className="text-3xl font-bold mb-6 text-blue-600">Commercial</h3>
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                We have extensive experience with large-scale commercial projects across education, healthcare, hospitality, and corporate sectors. Professional service, clear communication, and on-time delivery are guaranteed.
              </p>
              <ul className="space-y-3 text-gray-700 text-lg">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Offices and workplaces
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Schools and care homes
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Hospitality and healthcare
                </li>
              </ul>
            </div>
          </div>

          <p className="text-center text-xl text-gray-700 leading-relaxed">
            No matter the project size, you receive the same level of expertise, quality, and attention to detail.
          </p>
        </div>
      </section>

      {/* Materials */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Supply or fit - whatever works for you</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              We can supply all the materials you need, or we&apos;re happy to fit materials you&apos;ve sourced yourself. Either way, we provide honest, expert advice on the best options for your space, budget, and requirements.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our goal is to help you make informed decisions and achieve the perfect result.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-24 bg-gradient-to-br from-blue-600 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-blue-500/10 to-blue-400/20"></div>

        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Not sure which service you need?</h2>
            <p className="text-xl md:text-2xl mb-10 text-blue-50 leading-relaxed max-w-3xl mx-auto">
              We&apos;re happy to advise. Get in touch and we&apos;ll help you find the perfect flooring solution for your project.
            </p>
            <Link href="/contact" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105">
              Request a quote
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
