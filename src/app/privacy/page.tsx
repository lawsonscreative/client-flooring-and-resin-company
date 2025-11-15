import { Metadata } from 'next';
import { company } from '@/content/company';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `Privacy policy for ${company.name.trading}. How we collect, use, and protect your personal information.`,
};

export default function Privacy() {
  return (
    <main id="main-content">
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="mb-8">Privacy Policy</h1>

            <div className="prose prose-lg max-w-none text-neutral-700">
              <p className="text-sm text-neutral-600 mb-8">
                Last updated: November 2024
              </p>

              <h2>1. Introduction</h2>
              <p>
                {company.name.legal} (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you use our website or services.
              </p>

              <h2>2. Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <ul>
                <li><strong>Contact Information:</strong> Name, phone number, email address, and location details you provide through our contact form or direct communication.</li>
                <li><strong>Project Information:</strong> Details about your flooring project, property type, and service requirements.</li>
                <li><strong>Usage Data:</strong> Information about how you use our website, including pages visited and time spent on the site.</li>
              </ul>

              <h2>3. How We Use Your Information</h2>
              <p>We use your information to:</p>
              <ul>
                <li>Respond to your enquiries and provide quotes</li>
                <li>Deliver our flooring services</li>
                <li>Communicate with you about your project</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2>4. Data Sharing and Disclosure</h2>
              <p>
                We do not sell your personal information to third parties. We may share your information with:
              </p>
              <ul>
                <li>Service providers who assist in delivering our services (e.g., subcontractors)</li>
                <li>Professional advisors (accountants, lawyers) when necessary</li>
                <li>Law enforcement or regulatory bodies when required by law</li>
              </ul>

              <h2>5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>

              <h2>6. Your Rights</h2>
              <p>Under UK GDPR, you have the right to:</p>
              <ul>
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Request restriction of processing</li>
                <li>Data portability</li>
              </ul>

              <h2>7. Data Retention</h2>
              <p>
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce agreements.
              </p>

              <h2>8. Cookies</h2>
              <p>
                Our website may use cookies to enhance user experience. Please see our <a href="/cookies" className="text-primary-600 hover:text-primary-700 underline">Cookie Policy</a> for more information.
              </p>

              <h2>9. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites (such as our social media profiles). We are not responsible for the privacy practices of these external sites.
              </p>

              <h2>10. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
              </p>

              <h2>11. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or wish to exercise your data rights, please contact us:
              </p>
              <ul>
                <li><strong>Phone:</strong> <a href={`tel:${company.contact.phone.replace(/\s/g, '')}`} className="text-primary-600 hover:text-primary-700">{company.contact.phoneDisplay}</a></li>
                <li><strong>Address:</strong> {company.address.street}, {company.address.city}, {company.address.county}, {company.address.postcode}</li>
              </ul>

              <div className="bg-neutral-50 border-l-4 border-primary-600 p-6 rounded mt-8">
                <p className="font-semibold mb-2">Company Details:</p>
                <p className="text-sm">
                  {company.name.legal}<br />
                  Registered in {company.address.country}<br />
                  Incorporated: {company.registration.incorporated}<br />
                  Registered Office: {company.address.street}, {company.address.city}, {company.address.county}, {company.address.postcode}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
