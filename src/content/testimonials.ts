export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  rating?: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    quote: "Excellent service throughout. Katie was responsive, honest, and incredibly helpful when we had questions about materials and finishes. It's rare to find a company that genuinely cares about the customer experience.",
    author: 'Sarah M.',
    role: 'Domestic client',
    rating: 5,
  },
  {
    id: 'testimonial-2',
    quote: 'We wanted something bold and artistic for our showroom, and they delivered beyond imagination. The custom resin design is a true conversation starter. Their creativity and craftsmanship are unmatched.',
    author: 'James T.',
    role: 'Commercial client',
    rating: 5,
  },
  {
    id: 'testimonial-3',
    quote: "From start to finish, the team appointed by George was professional, punctual, and incredibly skilled. The resin floor they installed in our kitchen is absolutely stunning - sleek, modern, and easy to clean. We've had so many compliments already!",
    author: 'Emma & David L.',
    role: 'Domestic client',
    rating: 5,
  },
  {
    id: 'testimonial-4',
    quote: 'George, Katie and the team handled our office flooring with precision and care. Scheduling was seamless, communication was clear, and the final result exceeded expectations. Highly recommend for any commercial job.',
    author: 'Michael P.',
    role: 'Business manager',
    rating: 5,
  },
  {
    id: 'testimonial-5',
    quote: "We're thrilled with our new floors. The installers were tidy, respectful, and worked around our schedule. The quality is top-notch, and the whole process was stress-free.",
    author: 'Helen W.',
    role: 'Care home manager',
    rating: 5,
  },
];
