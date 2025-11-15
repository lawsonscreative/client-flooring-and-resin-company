'use client';

import { useState } from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { projects, Project } from '@/content/projects';
import ProjectCard from '@/components/ProjectCard';

export default function PreviousWork() {
  const [filter, setFilter] = useState<string>('all');

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => {
        if (filter === 'resin') return p.serviceType === 'resin';
        return p.category === filter;
      });

  return (
    <main id="main-content">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-800 text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-4">Projects we&apos;re proud of</h1>
            <p className="text-xl text-primary-50">
              A selection of our work across domestic and commercial spaces
            </p>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="bg-white border-b border-neutral-200 sticky top-20 z-40">
        <div className="container-custom py-6">
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                filter === 'all'
                  ? 'bg-primary-600 text-white'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('domestic')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                filter === 'domestic'
                  ? 'bg-primary-600 text-white'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              Domestic
            </button>
            <button
              onClick={() => setFilter('commercial')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                filter === 'commercial'
                  ? 'bg-primary-600 text-white'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              Commercial
            </button>
            <button
              onClick={() => setFilter('care-home')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                filter === 'care-home'
                  ? 'bg-primary-600 text-white'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              Care Homes
            </button>
            <button
              onClick={() => setFilter('school')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                filter === 'school'
                  ? 'bg-primary-600 text-white'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              Schools
            </button>
            <button
              onClick={() => setFilter('hospitality')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                filter === 'hospitality'
                  ? 'bg-primary-600 text-white'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              Hospitality
            </button>
            <button
              onClick={() => setFilter('resin')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                filter === 'resin'
                  ? 'bg-accent-600 text-white'
                  : 'bg-accent-100 text-accent-700 hover:bg-accent-200'
              }`}
            >
              Resin
            </button>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-neutral-600">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Closing Note */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-neutral-700 mb-6">
              We&apos;re continually adding more of our work to this page. If you&apos;d like to see examples similar to your project, just mention it when you get in touch.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Discuss your project
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
