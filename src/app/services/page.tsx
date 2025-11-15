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
      <section className="bg-gradient-to-br from-primary-700 to-primary-800 text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-4">Professional flooring solutions for every space</h1>
            <p className="text-xl text-primary-50">
              From traditional carpet and vinyl to innovative resin surfaces, we cover it all.
            </p>
          </div>
        </div>
      </section>

      {/* Carpet */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-5xl">🏠</div>
              <h2>Carpet</h2>
            </div>

            <div className="prose prose-lg max-w-none text-neutral-700 space-y-4 mb-6">
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

            <div className="bg-neutral-50 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-bold mb-3">Best for:</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Care homes and assisted living facilities
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Hospitality environments (hotels, clubs, restaurants)
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Offices and commercial spaces
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Domestic homes and bedrooms
                </li>
              </ul>
            </div>

            <p className="text-neutral-600">
              Interested in carpet? <Link href="/contact" className="text-primary-600 hover:text-primary-700 font-semibold underline">Get in touch</Link>
            </p>
          </div>
        </div>
      </section>

      {/* Vinyl */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-5xl">✨</div>
              <h2>Vinyl</h2>
            </div>

            <div className="prose prose-lg max-w-none text-neutral-700 space-y-4 mb-6">
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

            <div className="bg-white rounded-lg p-6 mb-6">
              <h3 className="text-lg font-bold mb-3">Best for:</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Hospitals and healthcare facilities
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Kitchens and wet rooms
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Schools and educational facilities
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  High-traffic commercial areas
                </li>
              </ul>
            </div>

            <p className="text-neutral-600">
              Interested in vinyl? <Link href="/contact" className="text-primary-600 hover:text-primary-700 font-semibold underline">Get in touch</Link>
            </p>
          </div>
        </div>
      </section>

      {/* Laminate / Engineered Wood */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-5xl">🌳</div>
              <h2>Laminate / Engineered Wood</h2>
            </div>

            <div className="prose prose-lg max-w-none text-neutral-700 space-y-4 mb-6">
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

            <div className="bg-neutral-50 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-bold mb-3">Best for:</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Living rooms and open-plan spaces
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Hallways and staircases
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Commercial offices and showrooms
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Properties where natural aesthetics are valued
                </li>
              </ul>
            </div>

            <p className="text-neutral-600">
              Interested in laminate or engineered wood? <Link href="/contact" className="text-primary-600 hover:text-primary-700 font-semibold underline">Get in touch</Link>
            </p>
          </div>
        </div>
      </section>

      {/* Resin Flooring & Surfaces */}
      <section className="section-padding bg-gradient-to-br from-accent-600 to-accent-700 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-5xl">🎨</div>
              <h2>Resin Flooring & Surfaces</h2>
            </div>

            <div className="prose prose-lg max-w-none text-accent-50 space-y-4 mb-6">
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

            <div className="bg-accent-800 bg-opacity-50 rounded-lg p-6 mb-6">
              <p className="text-accent-100 font-medium mb-2">Our proudest showcase:</p>
              <p className="text-white">
                <strong>Phoenix Passage 2012</strong> by Canadian artist Greg Deda, currently on display at the Chelsea Art Gallery—a stunning example of how art and flooring can merge to inspire and impress.
              </p>
            </div>

            <Link href="/resin-feature-surfaces" className="btn bg-white text-accent-700 hover:bg-accent-50 inline-block">
              Discover our resin services
            </Link>
          </div>
        </div>
      </section>

      {/* Commercial vs Domestic */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <h2 className="text-center mb-12">We work with everyone</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-8">
            <div className="card p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary-700">Domestic</h3>
              <p className="text-neutral-700 mb-4">
                From single rooms to whole-house refurbishments, we treat every domestic project with care and respect. We understand that we&apos;re working in your home, and we make every effort to minimize disruption while delivering exceptional results.
              </p>
              <ul className="space-y-2 text-neutral-700">
                <li>• Homes and apartments</li>
                <li>• Extensions and renovations</li>
                <li>• New builds</li>
              </ul>
            </div>

            <div className="card p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary-700">Commercial</h3>
              <p className="text-neutral-700 mb-4">
                We have extensive experience with large-scale commercial projects across education, healthcare, hospitality, and corporate sectors. Professional service, clear communication, and on-time delivery are guaranteed.
              </p>
              <ul className="space-y-2 text-neutral-700">
                <li>• Offices and workplaces</li>
                <li>• Schools and care homes</li>
                <li>• Hospitality and healthcare</li>
              </ul>
            </div>
          </div>

          <p className="text-center text-lg text-neutral-700">
            No matter the project size, you receive the same level of expertise, quality, and attention to detail.
          </p>
        </div>
      </section>

      {/* Materials */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Supply or fit - whatever works for you</h2>
            <p className="text-lg text-neutral-700 mb-4">
              We can supply all the materials you need, or we&apos;re happy to fit materials you&apos;ve sourced yourself. Either way, we provide honest, expert advice on the best options for your space, budget, and requirements.
            </p>
            <p className="text-neutral-600">
              Our goal is to help you make informed decisions and achieve the perfect result.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-700 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Not sure which service you need?</h2>
            <p className="text-lg md:text-xl mb-8 text-primary-50">
              We&apos;re happy to advise. Get in touch and we&apos;ll help you find the perfect flooring solution for your project.
            </p>
            <Link href="/contact" className="btn bg-white text-primary-700 hover:bg-primary-50">
              Request a quote
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
