import { Project } from '@/content/projects';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const categoryLabels: Record<Project['category'], string> = {
    domestic: 'Domestic',
    commercial: 'Commercial',
    'care-home': 'Care Home',
    school: 'School',
    hospitality: 'Hospitality',
  };

  const serviceLabels: Record<Project['serviceType'], string> = {
    carpet: 'Carpet',
    vinyl: 'Vinyl',
    laminate: 'Laminate',
    resin: 'Resin',
  };

  // Generate descriptive alt text for the image
  const getAltText = () => {
    const service = serviceLabels[project.serviceType].toLowerCase();
    const category = categoryLabels[project.category].toLowerCase();
    return `${project.title} - professional ${service} installation for ${category} property in Kent`;
  };

  // Generate query parameter for CTA link
  const getContactLink = () => {
    const projectType = project.serviceType;
    return `/contact?project=${projectType}-${project.category}`;
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-brand-pink hover:-translate-y-1 h-full flex flex-col overflow-hidden">
      {/* Project image */}
      <div className="relative h-64 bg-gradient-to-br from-pink-50 to-gray-50 overflow-hidden">
        {project.image && (
          <Image
            src={project.image}
            alt={getAltText()}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
            loading="lazy"
          />
        )}
      </div>

      <div className="p-6 flex-grow flex flex-col">
        <div className="flex gap-2 mb-3">
          <span className="inline-block px-3 py-1 bg-pink-100 text-brand-pink text-xs font-semibold rounded-full">
            {categoryLabels[project.category]}
          </span>
          <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
            project.serviceType === 'resin'
              ? 'bg-gradient-to-r from-pink-100 to-purple-100 text-purple-700'
              : 'bg-gray-100 text-gray-700'
          }`}>
            {serviceLabels[project.serviceType]}
          </span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
        <p className="text-gray-700 mb-4 flex-grow leading-relaxed">{project.description}</p>

        {project.testimonial && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-600 italic">&ldquo;{project.testimonial}&rdquo;</p>
          </div>
        )}

        {/* CTA Button */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <Link
            href={getContactLink()}
            className="inline-flex items-center text-brand-pink hover:text-brand-pink-dark font-semibold transition-colors group"
          >
            Interested in similar work? Request a quote
            <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
