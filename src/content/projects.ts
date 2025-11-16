export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'domestic' | 'commercial' | 'care-home' | 'school' | 'hospitality';
  serviceType: 'carpet' | 'vinyl' | 'laminate' | 'resin';
  featured: boolean;
  image?: string;
  testimonial?: string;
}

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Custom Resin Kitchen Floor',
    description: "A stunning bespoke resin installation for a modern kitchen in Kent. The seamless, durable finish features custom colours and creates a sleek, contemporary look that's both beautiful and easy to maintain. The homeowners have received numerous compliments on this unique surface.",
    category: 'domestic',
    serviceType: 'resin',
    featured: true,
    image: '/images/6.jpg',
    testimonial: "The resin floor they installed in our kitchen is absolutely stunning - sleek, modern, and easy to clean. We've had so many compliments already!",
  },
  {
    id: 'project-2',
    title: 'Primary School Vinyl Flooring Installation',
    description: 'Large-scale vinyl flooring project across multiple classrooms and corridors at a Kent primary school. We installed durable, child-friendly LVT that can withstand heavy foot traffic while maintaining its appearance. The project was completed during school holidays to avoid disruption.',
    category: 'school',
    serviceType: 'vinyl',
    featured: true,
    image: '/images/7.jpg',
  },
  {
    id: 'project-3',
    title: 'Care Home Carpet Installation',
    description: 'Complete carpet refurbishment for a residential care facility, using contract-grade carpet throughout communal areas and resident rooms. The installation prioritized comfort, safety, and easy maintenance. Our team worked sensitively around residents and staff schedules.',
    category: 'care-home',
    serviceType: 'carpet',
    featured: true,
    image: '/images/8.jpg',
    testimonial: 'The installers were tidy, respectful, and worked around our schedule. The quality is top-notch, and the whole process was stress-free.',
  },
  {
    id: 'project-4',
    title: 'Hospitality Venue Resin Feature Surface',
    description: 'A creative resin surface installation for a restaurant and bar reception area. This artistic, bespoke design incorporates bold colours and patterns, creating a memorable first impression for guests. The durable finish handles high traffic while serving as a stunning focal point.',
    category: 'hospitality',
    serviceType: 'resin',
    featured: true,
    image: '/images/9.jpg',
    testimonial: 'The custom resin design is a true conversation starter. Their creativity and craftsmanship are unmatched.',
  },
  {
    id: 'project-5',
    title: 'Commercial Office Vinyl Upgrade',
    description: 'Professional vinyl flooring installation for a South East office space. We delivered a modern, low-maintenance floor that enhanced the workspace while minimizing disruption to business operations. The project was completed on schedule with excellent communication throughout.',
    category: 'commercial',
    serviceType: 'vinyl',
    featured: false,
    image: '/images/10.jpg',
    testimonial: 'George, Katie and the team handled our office flooring with precision and care. Scheduling was seamless, communication was clear, and the final result exceeded expectations.',
  },
  {
    id: 'project-6',
    title: 'Domestic Engineered Wood Installation',
    description: 'Beautiful engineered wood flooring installed in a family home across the ground floor. The high-quality finish brings warmth and character to the space, with expert installation ensuring perfect results. Our tidy, professional approach meant minimal disruption to the household.',
    category: 'domestic',
    serviceType: 'laminate',
    featured: false,
    image: '/images/11.jpg',
  },
];
