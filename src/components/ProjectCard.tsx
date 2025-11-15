import { Project } from '@/content/projects';
import Image from 'next/image';

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

  return (
    <div className="card h-full flex flex-col">
      {/* Placeholder for project image */}
      <div className="relative h-64 bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="text-center p-6">
            <p className="text-4xl mb-2">{serviceLabels[project.serviceType] === 'Resin' ? '🎨' : serviceLabels[project.serviceType] === 'Carpet' ? '🏠' : serviceLabels[project.serviceType] === 'Vinyl' ? '✨' : '🌳'}</p>
            <p className="text-sm text-neutral-600">Image coming soon</p>
          </div>
        )}
      </div>

      <div className="p-6 flex-grow flex flex-col">
        <div className="flex gap-2 mb-3">
          <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full">
            {categoryLabels[project.category]}
          </span>
          <span className="inline-block px-3 py-1 bg-accent-100 text-accent-700 text-xs font-semibold rounded-full">
            {serviceLabels[project.serviceType]}
          </span>
        </div>

        <h3 className="text-xl font-bold text-neutral-900 mb-3">{project.title}</h3>
        <p className="text-neutral-700 mb-4 flex-grow">{project.description}</p>

        {project.testimonial && (
          <div className="mt-4 pt-4 border-t border-neutral-200">
            <p className="text-sm text-neutral-600 italic">&ldquo;{project.testimonial}&rdquo;</p>
          </div>
        )}
      </div>
    </div>
  );
}
