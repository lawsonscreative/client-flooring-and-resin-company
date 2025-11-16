import Link from 'next/link';
import { company } from '@/content/company';
import { services } from '@/content/services';
import { testimonials } from '@/content/testimonials';
import { clients } from '@/content/clients';
import { projects } from '@/content/projects';
import TestimonialCard from '@/components/TestimonialCard';
import ProjectCard from '@/components/ProjectCard';

export default function Home() {
  const featuredProjects = projects.filter(p => p.featured).slice(0, 3);
  const featuredTestimonials = testimonials.slice(0, 3);
  const commercialClients = clients.filter(c => c.category === 'commercial' || c.category === 'hospitality').slice(0, 4);
  const educationClients = clients.filter(c => c.category === 'education').slice(0, 4);

  return (
    <main id="main-content">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">
              Crafted through generations. Designed for today.
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-50">
              Family-run flooring and resin specialists with over 50 years&apos; experience. From homes to hospitals, we create surfaces that inspire.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/contact" className="btn bg-white text-primary-700 hover:bg-primary-50">
                Request a quote
              </Link>
              <Link href="/previous-work" className="btn bg-primary-500 hover:bg-primary-600 text-white">
                View our work
              </Link>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{company.experience.years} Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>Public Liability Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span>Family Run</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">From traditional flooring to artistic resin surfaces</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              We offer a comprehensive range of flooring solutions for both domestic and commercial projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className={`card p-6 text-center ${service.featured ? 'ring-2 ring-accent-500 shadow-xl' : ''}`}
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-neutral-900">{service.name}</h3>
                <p className="text-neutral-700 mb-4">{service.shortDescription}</p>
                <Link
                  href={service.featured ? '/resin-feature-surfaces' : '/services'}
                  className="text-primary-600 hover:text-primary-700 font-semibold inline-flex items-center group"
                >
                  Learn more
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Quality, creativity and care in every project</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">50+ years flooring expertise</h3>
              <p className="text-neutral-700">Decades of experience via founder George Spittle, bringing unmatched knowledge to every project.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Family-run, personal service</h3>
              <p className="text-neutral-700">Katie brings an approachable, caring touch to customer service. You&apos;re not just a number.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Domestic to large-scale commercial</h3>
              <p className="text-neutral-700">From single rooms to schools and care homes. Same care and quality regardless of project size.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Creative resin & artistic installations</h3>
              <p className="text-neutral-700">Unique resin surfaces that blend art with function. Transform spaces into conversation starters.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Flexible on materials</h3>
              <p className="text-neutral-700">We can supply all materials or fit your own. Honest advice on what works best for your space.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Public Liability Insurance</h3>
              <p className="text-neutral-700">Fully insured for your peace of mind on every domestic and commercial project.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Trusted across homes, schools, care facilities and businesses</h2>
            <p className="text-neutral-600">Just a few of the clients we&apos;ve worked with across Kent and the South East</p>
          </div>

          <div className="space-y-8">
            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
              {commercialClients.map((client) => (
                <div key={client.name} className="px-4 py-2 text-neutral-600 font-medium">
                  {client.name}
                </div>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
              {educationClients.map((client) => (
                <div key={client.name} className="px-4 py-2 text-neutral-600 font-medium">
                  {client.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resin Work */}
      <section className="section-padding bg-gradient-to-br from-accent-600 to-accent-700 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6">Where art meets function</h2>
            <p className="text-lg md:text-xl mb-8 text-accent-50">
              Our resin services create unique, durable finishes for floors, worktops, walls, and decorative pieces. Each installation is a work of art with unlimited design possibilities—incorporating custom colours, patterns, and even embedded artwork.
            </p>
            <p className="text-accent-100 mb-8">
              One of our proudest showcases is <strong>Phoenix Passage 2012</strong> by Canadian artist Greg Deda, currently on display at the Chelsea Art Gallery—a stunning example of how art and flooring can merge to inspire and impress.
            </p>
            <Link href="/resin-feature-surfaces" className="btn bg-white text-accent-700 hover:bg-accent-50">
              Discover our resin services
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Recent work we&apos;re proud of</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="text-center">
            <Link href="/previous-work" className="btn btn-primary">
              See all our work
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">What our clients say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-700 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Ready to transform your space?</h2>
            <p className="text-lg md:text-xl mb-8 text-primary-50">
              From a single room to a complete commercial fit-out, we&apos;re here to help. Get in touch for a no-obligation chat about your project.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn bg-white text-primary-700 hover:bg-primary-50">
                Request a quote
              </Link>
              <a href={`tel:${company.contact.phone.replace(/\s/g, '')}`} className="btn bg-primary-600 hover:bg-primary-500 text-white">
                Call us now: {company.contact.phoneDisplay}
              </a>
              <a
                href={`https://wa.me/${company.contact.whatsapp.replace(/\+/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-green-600 hover:bg-green-700 text-white"
              >
                Message on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
