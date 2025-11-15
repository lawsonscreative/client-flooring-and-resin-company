import { Testimonial } from '@/content/testimonials';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="card p-6 h-full flex flex-col">
      {testimonial.rating && (
        <div className="flex mb-4" aria-label={`${testimonial.rating} out of 5 stars`}>
          {[...Array(testimonial.rating)].map((_, i) => (
            <svg
              key={i}
              className="w-5 h-5 text-accent-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      )}
      <blockquote className="flex-grow">
        <p className="text-neutral-700 italic mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
      </blockquote>
      <div className="mt-4 pt-4 border-t border-neutral-200">
        <p className="font-semibold text-neutral-900">{testimonial.author}</p>
        <p className="text-sm text-neutral-600">{testimonial.role}</p>
      </div>
    </div>
  );
}
