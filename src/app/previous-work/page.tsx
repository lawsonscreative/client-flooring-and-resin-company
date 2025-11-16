'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
      <section className="relative h-[75vh] md:h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />

        <div className="relative z-20 container mx-auto px-6 py-6 md:py-8 text-center">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 md:mb-4 leading-tight">
              Projects we&apos;re<br />proud of
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-12">
              A selection of our work across domestic and commercial spaces
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                Discuss your project
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/20 transition-all duration-200 border border-white/20 hover:border-white/40"
              >
                View our services
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Filter Buttons - Blue gradient styling */}
      <section className="bg-white border-b border-gray-200 sticky top-20 z-40 shadow-md">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                filter === 'all'
                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('domestic')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                filter === 'domestic'
                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
              }`}
            >
              Domestic
            </button>
            <button
              onClick={() => setFilter('commercial')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                filter === 'commercial'
                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
              }`}
            >
              Commercial
            </button>
            <button
              onClick={() => setFilter('care-home')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                filter === 'care-home'
                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
              }`}
            >
              Care Homes
            </button>
            <button
              onClick={() => setFilter('school')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                filter === 'school'
                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
              }`}
            >
              Schools
            </button>
            <button
              onClick={() => setFilter('hospitality')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                filter === 'hospitality'
                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
              }`}
            >
              Hospitality
            </button>
            <button
              onClick={() => setFilter('resin')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                filter === 'resin'
                  ? 'bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 text-white shadow-lg scale-105'
                  : 'bg-purple-100 text-purple-700 hover:bg-purple-200 hover:scale-105'
              }`}
            >
              Resin
            </button>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Footer - Blue gradient matching homepage */}
      <section className="relative py-12 bg-gradient-to-br from-blue-600 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-blue-500/10 to-blue-400/20"></div>

        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to transform your space?
            </h2>
            <p className="text-xl md:text-2xl text-blue-50 mb-10 leading-relaxed">
              We&apos;re continually adding more of our work to this page. If you&apos;d like to see examples similar to your project, just mention it when you get in touch.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Discuss your project
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
