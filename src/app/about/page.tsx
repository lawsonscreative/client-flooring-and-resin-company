import Link from 'next/link';
import { Metadata } from 'next';
import { company } from '@/content/company';
import { testimonials } from '@/content/testimonials';
import TestimonialCard from '@/components/TestimonialCard';

export const metadata: Metadata = {
  title: 'About Us | Family Flooring Business | 50+ Years Experience',
  description: 'Family-run flooring business with over 50 years of experience. Founded by George Spittle, serving Kent and the South East with quality, reliability, and personal service.',
};

export default function About() {
  const aboutTestimonials = testimonials.slice(0, 4);

  return (
    <main id="main-content">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-800 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Crafted through generations. Designed for today.</h1>
            <p className="text-xl text-primary-50">
              The Flooring and Resin Company is a proud family-run business with over 50 years of experience in the flooring industry. Built on generations of craftsmanship and care, we deliver quality, reliability, and a personal touch to every project.
            </p>
          </div>
        </div>
      </section>

      {/* The Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-8 text-center">From experience comes excellence</h2>

            <div className="prose prose-lg max-w-none text-neutral-700 space-y-4">
              <p>
                Our story begins with George Spittle, who brings over 50 years of flooring expertise to every project. Having worked across the industry for decades, George has seen it all—from traditional carpet installations to cutting-edge resin surfaces.
              </p>
              <p>
                In 2021, George founded The Flooring and Resin Company to combine his extensive experience with a fresh, modern approach to flooring services. What sets us apart is not just technical skill, but the genuine care we bring to every client and project.
              </p>
              <p>
                Katie Spittle plays a key role in the business, bringing an approachable, personal touch to customer service. Clients frequently mention how responsive, honest, and helpful Katie is throughout the entire process—from initial enquiry to project completion.
              </p>
              <p>
                As a family business, we understand the importance of trust, respect, and reliability. Whether we&apos;re working in your home or managing a large commercial installation, you can count on professional service delivered with genuine care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* From Homes to Hospitals */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <h2 className="mb-8 text-center">Versatile expertise across sectors</h2>

          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-lg text-neutral-700">
              While our roots are in domestic flooring, we&apos;ve grown to serve a diverse range of sectors. Our versatility means we understand the unique requirements of each environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Domestic Homes</h3>
              <p className="text-neutral-600 text-sm">Single rooms to whole-house installations</p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Care Homes</h3>
              <p className="text-neutral-600 text-sm">Comfort, safety, and easy maintenance</p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Schools</h3>
              <p className="text-neutral-600 text-sm">Durable, child-friendly installations</p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Hospitality</h3>
              <p className="text-neutral-600 text-sm">Restaurants, clubs, and leisure venues</p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Commercial Offices</h3>
              <p className="text-neutral-600 text-sm">Professional, low-maintenance solutions</p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.871 4A17.926 17.926 0 003 12c0 2.874.673 5.59 1.871 8m14.13 0a17.926 17.926 0 001.87-8c0-2.874-.673-5.59-1.87-8M9 9h1.246a1 1 0 01.961.725l1.586 5.55a1 1 0 00.961.725H15m1-7h-.08a2 2 0 00-1.519.698L9.6 15.302A2 2 0 018.08 16H8" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Healthcare</h3>
              <p className="text-neutral-600 text-sm">Hygienic, high-performance flooring</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="mb-12 text-center">What sets us apart</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-accent-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">{company.experience.years} years&apos; flooring experience</h3>
              <p className="text-neutral-700">Decades of knowledge and expertise brought to every project by founder George Spittle.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-accent-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Family-run with genuine personal service</h3>
              <p className="text-neutral-700">You&apos;re not just a number. Katie and George provide responsive, caring support throughout.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-accent-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Comfortable with both small and large projects</h3>
              <p className="text-neutral-700">From single domestic rooms to large-scale commercial installations—same care, same quality.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-accent-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Flexible on materials</h3>
              <p className="text-neutral-700">We can supply everything or fit your own materials. Honest advice on what works best.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-accent-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Public Liability Insurance</h3>
              <p className="text-neutral-700">Fully insured for complete peace of mind on every project.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-accent-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Unique combination of precision and creativity</h3>
              <p className="text-neutral-700">Technical flooring expertise meets artistic resin work—a rare and valuable blend.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <h2 className="mb-12 text-center">In our clients&apos; words</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {aboutTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-700 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Let&apos;s talk about your project</h2>
            <p className="text-lg md:text-xl mb-8 text-primary-50">
              Whether you&apos;re planning a single room refresh or a complete commercial refit, we&apos;d love to hear from you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn bg-white text-primary-700 hover:bg-primary-50">
                Request a quote
              </Link>
              <a href={`tel:${company.contact.phone.replace(/\s/g, '')}`} className="btn bg-primary-600 hover:bg-primary-500 text-white">
                Call: {company.contact.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
