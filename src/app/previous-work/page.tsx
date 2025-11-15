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
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-blue-500/10 to-blue-400/20"></div>

        <div className="relative z-10 container mx-auto px-6 py-24 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Projects we&apos;re proud of
            </h1>
            <p className="text-xl md:text-2xl text-blue-50 max-w-3xl mx-auto leading-relaxed">
              A selection of our work across domestic and commercial spaces
            </p>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="bg-white border-b border-gray-200 sticky top-20 z-40 shadow-md">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                filter === 'all'
                  ? 'bg-blue-600 text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('domestic')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                filter === 'domestic'
                  ? 'bg-blue-600 text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
              }`}
            >
              Domestic
            </button>
            <button
              onClick={() => setFilter('commercial')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                filter === 'commercial'
                  ? 'bg-blue-600 text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
              }`}
            >
              Commercial
            </button>
            <button
              onClick={() => setFilter('care-home')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                filter === 'care-home'
                  ? 'bg-blue-600 text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
              }`}
            >
              Care Homes
            </button>
            <button
              onClick={() => setFilter('school')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                filter === 'school'
                  ? 'bg-blue-600 text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
              }`}
            >
              Schools
            </button>
            <button
              onClick={() => setFilter('hospitality')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                filter === 'hospitality'
                  ? 'bg-blue-600 text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
              }`}
            >
              Hospitality
            </button>
            <button
              onClick={() => setFilter('resin')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                filter === 'resin'
                  ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg scale-105'
                  : 'bg-purple-100 text-purple-700 hover:bg-purple-200 hover:scale-105'
              }`}
            >
              Resin
            </button>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Closing Note */}
      <section className="relative py-20 md:py-24 bg-gradient-to-br from-blue-600 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-blue-500/10 to-blue-400/20"></div>

        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl md:text-2xl text-blue-50 mb-10 leading-relaxed">
              We&apos;re continually adding more of our work to this page. If you&apos;d like to see examples similar to your project, just mention it when you get in touch.
            </p>
            <Link href="/contact" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105">
              Discuss your project
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
