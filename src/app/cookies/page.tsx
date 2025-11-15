import { Metadata } from 'next';
import { company } from '@/content/company';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: `Cookie policy for ${company.name.trading}. Information about how we use cookies on our website.`,
};

export default function Cookies() {
  return (
    <main id="main-content">
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="mb-8">Cookie Policy</h1>

            <div className="prose prose-lg max-w-none text-neutral-700">
              <p className="text-sm text-neutral-600 mb-8">
                Last updated: November 2024
              </p>

              <h2>1. What Are Cookies?</h2>
              <p>
                Cookies are small text files that are placed on your device (computer, smartphone, or tablet) when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
              </p>

              <h2>2. How We Use Cookies</h2>
              <p>
                Our website uses cookies to:
              </p>
              <ul>
                <li>Remember your preferences and settings</li>
                <li>Understand how you use our website</li>
                <li>Improve website functionality and user experience</li>
                <li>Analyze website traffic and performance</li>
              </ul>

              <h2>3. Types of Cookies We Use</h2>

              <h3>Essential Cookies</h3>
              <p>
                These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.
              </p>

              <h3>Performance Cookies</h3>
              <p>
                These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve how our website works.
              </p>

              <h3>Functionality Cookies</h3>
              <p>
                These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.
              </p>

              <h2>4. Third-Party Cookies</h2>
              <p>
                In addition to our own cookies, we may use third-party cookies for:
              </p>
              <ul>
                <li><strong>Analytics:</strong> To understand website usage patterns (e.g., Google Analytics, if implemented)</li>
                <li><strong>Social Media:</strong> If you interact with social media plugins on our site</li>
              </ul>

              <h2>5. How to Control Cookies</h2>
              <p>
                You can control and/or delete cookies as you wish. You can delete all cookies that are already on your device and you can set most browsers to prevent them from being placed.
              </p>

              <h3>Browser Settings</h3>
              <p>
                Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may impact your overall user experience.
              </p>

              <p>To manage cookies in your browser:</p>
              <ul>
                <li><strong>Google Chrome:</strong> Settings &gt; Privacy and security &gt; Cookies and other site data</li>
                <li><strong>Mozilla Firefox:</strong> Settings &gt; Privacy & Security &gt; Cookies and Site Data</li>
                <li><strong>Safari:</strong> Preferences &gt; Privacy &gt; Manage Website Data</li>
                <li><strong>Microsoft Edge:</strong> Settings &gt; Cookies and site permissions &gt; Cookies and site data</li>
              </ul>

              <h2>6. Do Not Track Signals</h2>
              <p>
                Some browsers include a &quot;Do Not Track&quot; feature. Our website does not currently respond to Do Not Track signals.
              </p>

              <h2>7. Changes to This Cookie Policy</h2>
              <p>
                We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our business operations. Any changes will be posted on this page.
              </p>

              <h2>8. More Information</h2>
              <p>
                For more information about cookies and how to manage them, visit:
              </p>
              <ul>
                <li><a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 underline">www.allaboutcookies.org</a></li>
                <li><a href="https://ico.org.uk/for-the-public/online/cookies/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 underline">ICO: Cookies</a></li>
              </ul>

              <h2>9. Contact Us</h2>
              <p>
                If you have any questions about our use of cookies, please contact us:
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
                  Incorporated: {company.registration.incorporated}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
