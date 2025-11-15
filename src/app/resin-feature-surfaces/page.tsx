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
      {/* Hero - Stunning Gradient */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-purple-700">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-blue-500/10 to-purple-400/20"></div>

        <div className="relative z-10 container mx-auto px-6 py-24 text-center">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Where creativity meets performance
            </h1>
            <p className="text-xl md:text-2xl text-blue-50 mb-12 max-w-3xl mx-auto leading-relaxed">
              Unique resin surfaces that transform spaces into works of art. From floors to feature walls, each installation is a masterpiece.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                Request a Quote
              </Link>
              <Link
                href="/previous-work"
                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
              >
                View Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is Resin */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                More than just flooring
              </h2>
              <p className="text-xl text-gray-600">
                Resin creates seamless, stunning surfaces with unlimited creative possibilities
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p className="text-lg leading-relaxed">
                Resin flooring and surfaces offer a unique combination of stunning aesthetics and exceptional performance. Unlike traditional flooring materials, resin creates seamless, durable finishes that can be customized to match any vision.
              </p>
              <p className="text-lg leading-relaxed">
                These versatile surfaces aren&apos;t limited to floors—they can transform worktops, countertops, walls, and even decorative items into conversation pieces. The possibilities are truly endless.
              </p>
              <p className="text-lg leading-relaxed">
                With unlimited colour and design options, you can incorporate custom patterns, embedded objects, or even integrate artwork directly into the surface. Each installation is completely unique, hygienic, easy to clean, and built to last for years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              From floors to feature pieces
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Resin transforms any surface into a work of art
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {/* Flooring */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 text-center hover:-translate-y-1">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/30">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Flooring</h3>
              <p className="text-gray-600 leading-relaxed">
                Seamless, durable floors for commercial and domestic spaces. High-traffic ready.
              </p>
            </div>

            {/* Worktops */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 text-center hover:-translate-y-1">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/30">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Worktops & Countertops</h3>
              <p className="text-gray-600 leading-relaxed">
                Heat-resistant, easy-clean surfaces for kitchens, bars, and commercial spaces.
              </p>
            </div>

            {/* Feature Walls */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 text-center hover:-translate-y-1">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/30">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Feature Walls</h3>
              <p className="text-gray-600 leading-relaxed">
                Bold, artistic wall installations that become the focal point of any room.
              </p>
            </div>

            {/* Decorative Items */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 text-center hover:-translate-y-1">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/30">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Decorative Items</h3>
              <p className="text-gray-600 leading-relaxed">
                Chopping boards, doorsteps, ornamental pieces—small artworks with big impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Artistic Edge */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Art integrated into surfaces
              </h2>
              <p className="text-xl text-gray-600">
                Where technical precision meets artistic vision
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mb-12">
              <p className="text-lg leading-relaxed">
                What sets our resin work apart is our ability to incorporate bespoke designs and artwork directly into the surface. We can create custom colours, intricate patterns, and even embed objects to create truly one-of-a-kind installations.
              </p>
              <p className="text-lg leading-relaxed">
                Each project is a collaboration between technical precision and artistic vision. The result is not just a functional surface, but a piece of art you can walk on, work on, or display.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-600 p-8 rounded-xl shadow-lg">
              <p className="text-gray-900 font-bold text-lg mb-3">A Showcase Example:</p>
              <p className="text-gray-700 text-lg leading-relaxed">
                One of our proudest showcases is <strong>Phoenix Passage 2012</strong> by Canadian artist Greg Deda, currently on display at the Chelsea Art Gallery—a stunning example of how art and flooring can merge to inspire and impress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Resin */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why choose resin?
            </h2>
            <p className="text-xl text-gray-600">
              Unmatched durability meets unlimited creativity
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <svg className="w-7 h-7 text-blue-600 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Completely bespoke and unique</h3>
                <p className="text-gray-600">No two installations are the same. Your vision becomes reality.</p>
              </div>
            </div>

            <div className="flex items-start bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <svg className="w-7 h-7 text-blue-600 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Extremely durable</h3>
                <p className="text-gray-600">Built to withstand heavy use and maintain beauty for years.</p>
              </div>
            </div>

            <div className="flex items-start bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <svg className="w-7 h-7 text-blue-600 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Hygienic and easy to clean</h3>
                <p className="text-gray-600">Seamless surface means no grout lines or gaps for dirt.</p>
              </div>
            </div>

            <div className="flex items-start bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <svg className="w-7 h-7 text-blue-600 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Seamless finish</h3>
                <p className="text-gray-600">Creates a continuous, smooth surface across any area.</p>
              </div>
            </div>

            <div className="flex items-start bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <svg className="w-7 h-7 text-blue-600 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">High-traffic ready</h3>
                <p className="text-gray-600">Perfect for commercial spaces, kitchens, and busy households.</p>
              </div>
            </div>

            <div className="flex items-start bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <svg className="w-7 h-7 text-blue-600 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Unlimited design possibilities</h3>
                <p className="text-gray-600">Any colour, pattern, or artistic vision you can imagine.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resin Gallery */}
      {resinProjects.length > 0 && (
        <section className="py-20 md:py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Resin installations we&apos;ve created
              </h2>
              <p className="text-xl text-gray-600">
                Every project tells a unique story
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {resinProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>

            <p className="text-center text-gray-600 mt-12 text-lg">
              More examples available in our{' '}
              <Link href="/previous-work" className="text-blue-600 hover:text-blue-700 font-semibold underline">
                Previous Work gallery
              </Link>
            </p>
          </div>
        </section>
      )}

      {/* Who It's For */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Perfect for
            </h2>
            <p className="text-xl text-gray-600">
              Anyone who values creativity and craftsmanship
            </p>
          </div>

          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <svg className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-lg text-gray-700 font-medium">Homeowners wanting a unique kitchen or bathroom</span>
            </div>

            <div className="flex items-center bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <svg className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-lg text-gray-700 font-medium">Businesses needing a standout showroom or reception</span>
            </div>

            <div className="flex items-center bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <svg className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-lg text-gray-700 font-medium">Hospitality venues creating memorable spaces</span>
            </div>

            <div className="flex items-center bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <svg className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-lg text-gray-700 font-medium">Creative professionals seeking unique workspaces</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-purple-700 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to create something extraordinary?
            </h2>
            <p className="text-xl md:text-2xl mb-12 text-blue-50 leading-relaxed">
              Let&apos;s discuss your ideas and bring your vision to life with custom resin surfaces.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                Request a Quote
              </Link>
              <a
                href={`tel:${company.contact.phone.replace(/\s/g, '')}`}
                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
              >
                Call: {company.contact.phoneDisplay}
              </a>
            </div>

            <p className="text-blue-100 text-lg">
              Or{' '}
              <a
                href={`https://wa.me/${company.contact.whatsapp.replace(/\+/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white font-semibold transition-colors"
              >
                message us on WhatsApp
              </a>
              {' '}to discuss your project
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
