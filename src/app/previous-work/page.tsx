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
      <section className="relative py-12 flex items-center justify-center overflow-hidden bg-gradient-to-br from-brand-purple via-brand-pink to-brand-purple">
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 md:mb-4 leading-tight">
              Projects we&apos;re proud of
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-4 md:mb-6 max-w-3xl mx-auto leading-relaxed">
              A selection of our work across domestic and commercial spaces
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-6 md:mb-8">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center bg-gradient-to-r from-brand-pink to-brand-purple text-white px-8 py-3 rounded-lg text-lg font-semibold hover:from-brand-pink-dark hover:to-brand-purple transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                Get a free, no-obligation quote
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white/20 transition-all duration-200 border-2 border-white/30 hover:border-white/50"
              >
                Our Services
              </Link>
            </div>

            {/* Trust Signals */}
            <div className="mt-6 md:mt-8 flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-12 text-white text-sm md:text-base">
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-semibold">50+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="font-semibold">Fully Insured</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="font-semibold">Family Run</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Buttons - Blue gradient styling */}
      <section className="bg-white border-b border-gray-200 sticky top-20 z-40 shadow-md">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center mb-4">
            <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2">Filter projects by type</p>
            <p className="text-sm text-gray-500" aria-live="polite" aria-atomic="true">
              Showing <span className="font-bold text-brand-pink">{filteredProjects.length}</span> {filteredProjects.length === 1 ? 'project' : 'projects'}
            </p>
          </div>
          <div className="flex md:flex-wrap md:justify-center gap-3 overflow-x-auto scrollbar-hide px-4 md:px-0 -mx-4 md:mx-0 snap-x snap-mandatory" role="group" aria-label="Filter projects by type">
            <button
              onClick={() => setFilter('all')}
              aria-pressed={filter === 'all'}
              className={`flex-shrink-0 snap-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-pink-light focus:ring-offset-2 ${
                filter === 'all'
                  ? 'bg-gradient-to-r from-brand-pink to-brand-purple text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('domestic')}
              aria-pressed={filter === 'domestic'}
              className={`flex-shrink-0 snap-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-pink-light focus:ring-offset-2 ${
                filter === 'domestic'
                  ? 'bg-gradient-to-r from-brand-pink to-brand-purple text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
              }`}
            >
              Domestic
            </button>
            <button
              onClick={() => setFilter('commercial')}
              aria-pressed={filter === 'commercial'}
              className={`flex-shrink-0 snap-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-pink-light focus:ring-offset-2 ${
                filter === 'commercial'
                  ? 'bg-gradient-to-r from-brand-pink to-brand-purple text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
              }`}
            >
              Commercial
            </button>
            <button
              onClick={() => setFilter('care-home')}
              aria-pressed={filter === 'care-home'}
              className={`flex-shrink-0 snap-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-pink-light focus:ring-offset-2 ${
                filter === 'care-home'
                  ? 'bg-gradient-to-r from-brand-pink to-brand-purple text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
              }`}
            >
              Care Homes
            </button>
            <button
              onClick={() => setFilter('school')}
              aria-pressed={filter === 'school'}
              className={`flex-shrink-0 snap-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-pink-light focus:ring-offset-2 ${
                filter === 'school'
                  ? 'bg-gradient-to-r from-brand-pink to-brand-purple text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
              }`}
            >
              Schools
            </button>
            <button
              onClick={() => setFilter('hospitality')}
              aria-pressed={filter === 'hospitality'}
              className={`flex-shrink-0 snap-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-pink-light focus:ring-offset-2 ${
                filter === 'hospitality'
                  ? 'bg-gradient-to-r from-brand-pink to-brand-purple text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
              }`}
            >
              Hospitality
            </button>
            <button
              onClick={() => setFilter('resin')}
              aria-pressed={filter === 'resin'}
              className={`flex-shrink-0 snap-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 ${
                filter === 'resin'
                  ? 'bg-gradient-to-r from-brand-pink via-brand-purple to-brand-purple text-white shadow-lg scale-105'
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
      <section className="relative py-12 bg-gradient-to-br from-brand-pink to-brand-purple text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-pink/20 via-brand-purple/10 to-brand-pink/20"></div>

        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to transform your space?
            </h2>
            <p className="text-xl md:text-2xl text-pink-50 mb-10 leading-relaxed">
              We&apos;re continually adding more of our work to this page. If you&apos;d like to see examples similar to your project, just mention it when you get in touch.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-brand-pink px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105"
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
