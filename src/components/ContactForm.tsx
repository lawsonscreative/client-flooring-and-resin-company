'use client';

import { useState, FormEvent } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    enquiryType: 'general',
    propertyType: '',
    location: '',
    areaToWork: '',
    servicesInterested: [] as string[],
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide a phone number';
    } else if (!/^[\d\s+()-]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please tell us about your project';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // For now, we'll simulate a submission
      // In production, this would post to a Vercel serverless function or form service
      await new Promise(resolve => setTimeout(resolve, 1000));

      console.log('Form data:', formData);

      setSubmitStatus('success');
      setFormData({
        name: '',
        phone: '',
        email: '',
        enquiryType: 'general',
        propertyType: '',
        location: '',
        areaToWork: '',
        servicesInterested: [],
        message: '',
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      servicesInterested: prev.servicesInterested.includes(service)
        ? prev.servicesInterested.filter(s => s !== service)
        : [...prev.servicesInterested, service],
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-neutral-700 mb-2">
          Name <span className="text-accent-600">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
            errors.name ? 'border-red-500' : 'border-neutral-300'
          }`}
          aria-invalid={errors.name ? 'true' : 'false'}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-sm text-red-600">
            {errors.name}
          </p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-neutral-700 mb-2">
          Phone <span className="text-accent-600">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
            errors.phone ? 'border-red-500' : 'border-neutral-300'
          }`}
          aria-invalid={errors.phone ? 'true' : 'false'}
          aria-describedby={errors.phone ? 'phone-error' : undefined}
        />
        {errors.phone && (
          <p id="phone-error" className="mt-1 text-sm text-red-600">
            {errors.phone}
          </p>
        )}
      </div>

      {/* Email (optional) */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-neutral-700 mb-2">
          Email <span className="text-neutral-500 text-xs">(optional but recommended)</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
      </div>

      {/* Property Type */}
      <div>
        <label htmlFor="propertyType" className="block text-sm font-semibold text-neutral-700 mb-2">
          Property Type
        </label>
        <select
          id="propertyType"
          name="propertyType"
          value={formData.propertyType}
          onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
        >
          <option value="">Select property type</option>
          <option value="home">Home</option>
          <option value="commercial">Commercial</option>
          <option value="school">School</option>
          <option value="care-home">Care home</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Project Location */}
      <div>
        <label htmlFor="location" className="block text-sm font-semibold text-neutral-700 mb-2">
          Project location (town/postcode)
        </label>
        <input
          type="text"
          id="location"
          name="location"
          placeholder="e.g. Ashford, TN24"
          value={formData.location}
          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
      </div>

      {/* Enquiry Type */}
      <div>
        <label htmlFor="enquiryType" className="block text-sm font-semibold text-neutral-700 mb-2">
          Enquiry Type <span className="text-accent-600">*</span>
        </label>
        <select
          id="enquiryType"
          name="enquiryType"
          value={formData.enquiryType}
          onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
        >
          <option value="general">General enquiry</option>
          <option value="quote">Request a quote</option>
        </select>
      </div>

      {/* Additional fields if requesting a quote */}
      {formData.enquiryType === 'quote' && (
        <>

          {/* Area to Work On */}
          <div>
            <label htmlFor="areaToWork" className="block text-sm font-semibold text-neutral-700 mb-2">
              Area to be worked on
            </label>
            <textarea
              id="areaToWork"
              name="areaToWork"
              rows={2}
              placeholder="e.g. Kitchen, 4m x 3m or Multiple classrooms, approx. 200m²"
              value={formData.areaToWork}
              onChange={(e) => setFormData({ ...formData, areaToWork: e.target.value })}
              className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>

          {/* Services Interested In */}
          <div>
            <fieldset>
              <legend className="block text-sm font-semibold text-neutral-700 mb-2">
                Services interested in
              </legend>
              <div className="space-y-2">
                {['Carpet', 'Vinyl/LVT', 'Laminate/Engineered Wood', 'Resin flooring', 'Resin feature surfaces', 'Not sure yet'].map((service) => (
                  <label key={service} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.servicesInterested.includes(service)}
                      onChange={() => handleServiceToggle(service)}
                      className="w-4 h-4 text-primary-600 border-neutral-300 rounded focus:ring-primary-500"
                    />
                    <span className="ml-2 text-neutral-700">{service}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          </div>
        </>
      )}

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-neutral-700 mb-2">
          Message <span className="text-accent-600">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Tell us about your project..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
            errors.message ? 'border-red-500' : 'border-neutral-300'
          }`}
          aria-invalid={errors.message ? 'true' : 'false'}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-sm text-red-600">
            {errors.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </div>

      {/* Success Message */}
      {submitStatus === 'success' && (
        <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 text-green-800" role="alert">
          <div className="flex items-start">
            <svg className="w-6 h-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p className="font-bold text-lg mb-1">Thank you! We&apos;ve received your message.</p>
              <p className="text-green-700">We&apos;ll reply within 24 hours (often much sooner). Check your phone and email for our response.</p>
            </div>
          </div>
        </div>
      )}

      {/* Error Message */}
      {submitStatus === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-800" role="alert">
          <p className="font-semibold">Sorry, something went wrong.</p>
          <p>Please try again or contact us directly.</p>
        </div>
      )}

      {/* Reassurance Text */}
      <div className="text-center space-y-2 pt-4 border-t border-gray-200">
        <p className="text-sm text-gray-600">
          <strong>We typically reply within 24 hours</strong> (often much sooner!)
        </p>
        <p className="text-sm text-gray-600">
          We&apos;ll never share your details. View our <a href="/privacy" className="text-blue-600 hover:text-blue-700 underline">Privacy Policy</a>
        </p>
        <p className="text-sm text-neutral-600">
          You can also send photos via WhatsApp or call us directly for an immediate response.
        </p>
      </div>
    </form>
  );
}
