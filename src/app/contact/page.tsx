import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { company } from '@/content/company';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact The Flooring and Resin Company | Request a Flooring or Resin Quote',
  description: 'Get a free, no-obligation quote for your flooring or resin project. Family-run service, same-day responses, 50+ years\' experience in Kent.',
};

export default function Contact() {
  return (
    <main id="main-content">
      {/* Hero */}
      <section className="relative py-12 flex items-center justify-center overflow-hidden bg-gradient-to-br from-brand-purple via-brand-pink to-brand-purple">
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl font-bold text-white mb-3 md:mb-4 leading-tight">
              Ready to discuss your flooring or resin project?
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-4 md:mb-6 max-w-3xl mx-auto leading-relaxed">
              We usually reply the same working day, and always within one business day. For urgent jobs, please call us.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-6 md:mb-8">
              <a
                href={`tel:${company.contact.phone.replace(/\s/g, '')}`}
                className="group inline-flex items-center justify-center bg-gradient-to-r from-brand-pink to-brand-purple text-white px-8 py-3 rounded-lg text-lg font-semibold hover:from-brand-pink-dark hover:to-brand-purple transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                Call {company.contact.phoneDisplay}
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
              <a
                href={`https://wa.me/${company.contact.whatsapp.replace(/\+/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white/20 transition-all duration-200 border-2 border-white/30 hover:border-white/50"
              >
                WhatsApp us
              </a>
            </div>

            {/* Trust Signals */}
            <div className="mt-6 md:mt-8 flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-12 text-white text-sm md:text-base">
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-semibold">50+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="font-semibold">Fully Insured</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="font-semibold">Family Run</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Speak to us directly
            </h2>
            <p className="text-xl text-gray-600">
              Choose the method that works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Call Us */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 text-center hover:-translate-y-1 border border-gray-100 hover:border-brand-pink">
              <div className="w-20 h-20 bg-gradient-to-br from-brand-pink to-brand-purple rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-brand-pink/30 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Call us</h3>
              <a
                href={`tel:${company.contact.phone.replace(/\s/g, '')}`}
                className="text-xl font-bold text-brand-pink hover:text-brand-pink-dark block mb-3 transition-colors"
              >
                {company.contact.phoneDisplay}
              </a>
              <p className="text-gray-600">Available during business hours</p>
            </div>

            {/* Email */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 text-center hover:-translate-y-1 border border-gray-100 hover:border-brand-pink">
              <div className="w-20 h-20 bg-gradient-to-br from-brand-pink to-brand-purple rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-brand-pink/30 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Email us</h3>
              <a
                href={`mailto:${company.contact.email}`}
                className="text-lg font-bold text-brand-pink hover:text-brand-pink-dark block mb-3 transition-colors break-all"
              >
                {company.contact.email}
              </a>
              <p className="text-gray-600">We&apos;ll respond within 24 hours</p>
            </div>

            {/* WhatsApp */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 text-center hover:-translate-y-1 border border-gray-100 hover:border-brand-pink">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 border-2 border-green-600">
                <svg className="w-10 h-10 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">WhatsApp</h3>
              <a
                href={`https://wa.me/${company.contact.whatsapp.replace(/\+/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-bold text-brand-pink hover:text-brand-pink-dark block mb-3 transition-colors"
              >
                Message us on WhatsApp
              </a>
              <p className="text-gray-600">Quick responses with photos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Contact and Quote Request Form
              </h2>
              <p className="text-xl text-gray-600 mb-4">
                Fill in the form below and we&apos;ll get back to you as soon as possible
              </p>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We&apos;ll never share your details with third parties, and we don&apos;t do hard-sell. It&apos;s just a conversation about what you need.
              </p>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* What happens next */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
              What happens next
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-pink to-brand-purple rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-lg shadow-brand-pink/30">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Review & clarify</h3>
                <p className="text-gray-600 leading-relaxed">
                  We&apos;ll review your message and, if needed, give you a quick call for any clarifications.
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-pink to-brand-purple rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-lg shadow-brand-pink/30">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Site visit</h3>
                <p className="text-gray-600 leading-relaxed">
                  We&apos;ll arrange a convenient time to visit (for quotes that need a site survey).
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-pink to-brand-purple rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-lg shadow-brand-pink/30">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Your quote</h3>
                <p className="text-gray-600 leading-relaxed">
                  You&apos;ll receive a clear, itemised quote – no obligation and no hard sell.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Where we work
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Based in Ashford, Kent, we primarily serve clients across Kent and the South East. For larger commercial projects, we&apos;re happy to travel further afield across the UK. Get in touch to discuss.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Footer - Blue gradient matching homepage */}
      <section className="relative py-12 bg-gradient-to-br from-brand-pink to-brand-purple text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-pink/20 via-brand-purple/10 to-brand-pink/20"></div>

        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to get started?
            </h2>
            <p className="text-xl md:text-2xl text-pink-50 mb-10 leading-relaxed">
              Call us now on {company.contact.phoneDisplay} or send us a message using the form above
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`tel:${company.contact.phone.replace(/\s/g, '')}`}
                className="inline-flex items-center justify-center bg-white text-brand-pink px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                Call {company.contact.phoneDisplay}
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
              <Link
                href="/previous-work"
                className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/20 transition-all duration-200 border border-white/20 hover:border-white/40"
              >
                View our work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
