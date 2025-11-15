import Link from 'next/link';
import { Metadata } from 'next';
import { company } from '@/content/company';
import { projects } from '@/content/projects';
import ProjectCard from '@/components/ProjectCard';

export const metadata: Metadata = {
  title: 'Resin Flooring & Feature Surfaces | Artistic Installations',
  description: 'Unique resin surfaces that transform spaces into works of art. Floors, worktops, walls, and decorative pieces with unlimited design possibilities. Based in Kent.',
};

export default function ResinFeatureSurfaces() {
  const resinProjects = projects.filter(p => p.serviceType === 'resin');

  return (
    <main id="main-content">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-accent-600 via-accent-500 to-accent-700 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">Where creativity meets performance</h1>
            <p className="text-xl md:text-2xl text-accent-50">
              Unique resin surfaces that transform spaces into works of art
            </p>
          </div>
        </div>
      </section>

      {/* What is Resin */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-6 text-center">More than just flooring</h2>
            <div className="prose prose-lg max-w-none text-neutral-700 space-y-4">
              <p>
                Resin flooring and surfaces offer a unique combination of stunning aesthetics and exceptional performance. Unlike traditional flooring materials, resin creates seamless, durable finishes that can be customized to match any vision.
              </p>
              <p>
                These versatile surfaces aren&apos;t limited to floors—they can transform worktops, countertops, walls, and even decorative items into conversation pieces. The possibilities are truly endless.
              </p>
              <p>
                With unlimited colour and design options, you can incorporate custom patterns, embedded objects, or even integrate artwork directly into the surface. Each installation is completely unique, hygienic, easy to clean, and built to last for years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <h2 className="mb-12 text-center">From floors to feature pieces</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-accent-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Flooring</h3>
              <p className="text-neutral-700">Seamless, durable floors for commercial and domestic spaces. High-traffic ready.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-accent-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Worktops & Countertops</h3>
              <p className="text-neutral-700">Heat-resistant, easy-clean surfaces for kitchens, bars, and commercial spaces.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-accent-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Feature Walls</h3>
              <p className="text-neutral-700">Bold, artistic wall installations that become the focal point of any room.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-accent-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Decorative Items</h3>
              <p className="text-neutral-700">Chopping boards, doorsteps, ornamental pieces—small artworks with big impact.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Artistic Edge */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6 text-center">Art integrated into surfaces</h2>
            <div className="prose prose-lg max-w-none text-neutral-700 space-y-4 mb-8">
              <p>
                What sets our resin work apart is our ability to incorporate bespoke designs and artwork directly into the surface. We can create custom colours, intricate patterns, and even embed objects to create truly one-of-a-kind installations.
              </p>
              <p>
                Each project is a collaboration between technical precision and artistic vision. The result is not just a functional surface, but a piece of art you can walk on, work on, or display.
              </p>
            </div>

            <div className="bg-accent-50 border-l-4 border-accent-500 p-6 rounded">
              <p className="text-neutral-800 font-medium mb-2">A Showcase Example:</p>
              <p className="text-neutral-700">
                One of our proudest showcases is <strong>Phoenix Passage 2012</strong> by Canadian artist Greg Deda, currently on display at the Chelsea Art Gallery—a stunning example of how art and flooring can merge to inspire and impress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Resin */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <h2 className="mb-12 text-center">Why choose resin?</h2>

          <div className="max-w-3xl mx-auto">
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-accent-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg text-neutral-700"><strong>Completely bespoke and unique</strong> – No two installations are the same. Your vision becomes reality.</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-accent-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg text-neutral-700"><strong>Extremely durable</strong> – Built to withstand heavy use and maintain beauty for years.</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-accent-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg text-neutral-700"><strong>Hygienic and easy to clean</strong> – Seamless surface means no grout lines or gaps for dirt.</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-accent-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg text-neutral-700"><strong>Seamless finish</strong> – Creates a continuous, smooth surface across any area.</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-accent-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg text-neutral-700"><strong>Suitable for high-traffic areas</strong> – Perfect for commercial spaces, kitchens, and busy households.</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-accent-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg text-neutral-700"><strong>Unlimited design possibilities</strong> – Any colour, pattern, or artistic vision you can imagine.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Resin Gallery */}
      {resinProjects.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="mb-12 text-center">Resin installations we&apos;ve created</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resinProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>

            <p className="text-center text-neutral-600 mt-8">
              More examples available in our <Link href="/previous-work" className="text-primary-600 hover:text-primary-700 font-semibold underline">Previous Work gallery</Link>
            </p>
          </div>
        </section>
      )}

      {/* Who It's For */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <h2 className="mb-12 text-center">Perfect for:</h2>

          <div className="max-w-2xl mx-auto">
            <ul className="space-y-3 text-lg text-neutral-700">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-primary-600 mr-3" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Homeowners wanting a unique kitchen or bathroom
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-primary-600 mr-3" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Businesses needing a standout showroom or reception
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-primary-600 mr-3" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Hospitality venues creating memorable spaces
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-primary-600 mr-3" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Anyone who values creativity and craftsmanship
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-accent-700 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Ready to create something extraordinary?</h2>
            <p className="text-lg md:text-xl mb-8 text-accent-50">
              Let&apos;s discuss your ideas and bring your vision to life with custom resin surfaces.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link href="/contact" className="btn bg-white text-accent-700 hover:bg-accent-50">
                Request a quote
              </Link>
              <a href={`tel:${company.contact.phone.replace(/\s/g, '')}`} className="btn bg-accent-600 hover:bg-accent-500 text-white">
                Call us: {company.contact.phoneDisplay}
              </a>
            </div>

            <p className="text-accent-100">
              Or <a href={`https://wa.me/${company.contact.whatsapp.replace(/\+/g, '')}`} target="_blank" rel="noopener noreferrer" className="underline hover:text-white">message us on WhatsApp</a> to discuss your project
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
