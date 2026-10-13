import React, { useState } from 'react';
import {
  FolderGit2,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
} from 'lucide-react';
import { GithubIcon } from '@/components/common/Icons';
import { projectsData } from '@/data/projectsData';
import type { ProjectCategory } from '@/types/project';

const filterList: ('All' | ProjectCategory)[] = [
  'All',
  'Networking',
  'Systems Administration',
  'Software Development',
];

const PROJECTS_PER_PAGE = 3;

export const ProjectsSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'All' | ProjectCategory>('All');
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Filter projects by active category
  const filteredProjects =
    selectedFilter === 'All'
      ? projectsData
      : projectsData.filter((p) => p.categories.includes(selectedFilter));

  const totalPages = Math.max(1, Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE));
  const currentProjects = filteredProjects.slice(
    (currentPage - 1) * PROJECTS_PER_PAGE,
    currentPage * PROJECTS_PER_PAGE
  );

  const handleFilterSelect = (filter: 'All' | ProjectCategory) => {
    setSelectedFilter(filter);
    setCurrentPage(1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <section
      id="projects"
      className="py-20 md:py-28 border-y border-slate-300/70 bg-[#e4ede7] relative transition-colors"
      data-navbar-theme="light"
    >
      <div className="w-full max-w-360 mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-slate-800 font-mono text-xs font-semibold uppercase tracking-wider">
              <FolderGit2 className="w-4 h-4 text-slate-800" />
              <span>Applied Systems &amp; Network Labs</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Featured Projects &amp; Labs
            </h2>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              Selected work demonstrating practical problem-solving across networking, infrastructure, and software.
            </p>
          </div>

          {/* Responsive Filter Ribbon: Horizontal Scroll on Mobile, Wrapped on Desktop (No numbers) */}
          <div className="relative w-full lg:w-auto self-start lg:self-end">
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth py-1.5 -mx-4 sm:mx-0 px-4 sm:px-0 lg:flex-wrap">
              {filterList.map((filter) => {
                const isSelected = selectedFilter === filter;

                return (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => handleFilterSelect(filter)}
                    className={`px-4 py-2 rounded-xl font-mono text-xs font-semibold whitespace-nowrap shrink-0 transition-all duration-200 cursor-pointer active:scale-97 select-none ${
                      isSelected
                        ? 'bg-slate-900 text-white shadow-xs ring-2 ring-slate-900/10'
                        : 'bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-950 border border-slate-300/80 shadow-2xs'
                    }`}
                  >
                    {filter}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* 3-Column Projects Grid with Fluid Staggered Animation */}
        <div
          key={`${selectedFilter}-page-${currentPage}`}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch"
        >
          {currentProjects.map((project, index) => (
            <article
              key={project.id}
              style={{ animationDelay: `${index * 80}ms` }}
              className="animate-card-in rounded-2xl bg-white border border-slate-200/90 hover:border-slate-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
            >
              {/* Card Upper: Preview Image & Content */}
              <div>
                {/* Preview Image Frame */}
                <div className="relative aspect-video w-full bg-slate-950 overflow-hidden border-b border-slate-100">
                  <img
                    src={project.image}
                    alt={project.previewLabel}
                    className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-3 left-3 font-mono text-[10px] text-white/95 bg-slate-950/80 backdrop-blur-xs px-2.5 py-1 rounded-md border border-white/15 font-semibold tracking-wide">
                    {project.previewLabel}
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 space-y-4">
                  {/* Category Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.categories.map((cat) => (
                      <span
                        key={cat}
                        className="font-mono text-[10px] uppercase font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>

                  {/* Title & Summary */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-extrabold text-slate-900 tracking-tight leading-snug group-hover:text-slate-800 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {project.summary}
                    </p>
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="space-y-1.5 pt-1">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-700 font-mono text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.extraTech && (
                        <span className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200/90 text-slate-600 font-mono text-xs font-semibold">
                          {project.extraTech}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Key Outcome / Workflow Box (Harmonious soft slate) */}
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/90 space-y-1">
                    <span className="text-[11px] font-mono font-medium text-slate-500 uppercase tracking-wide block">
                      Core Implementation &amp; Outcome
                    </span>
                    <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                      {project.outcome}
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Footer: GitHub Link */}
              <div className="px-6 sm:px-7 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-mono text-xs font-semibold transition-all active:scale-95 shadow-xs"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                </a>

              </div>
            </article>
          ))}
        </div>

        {/* Pagination Navigation Bar */}
        {totalPages > 1 && (
          <div className="mt-10 sm:mt-12 flex items-center justify-center gap-2">
            <button
              type="button"
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-slate-300 text-slate-700 font-mono text-xs font-semibold hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-2xs cursor-pointer active:scale-95"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            {/* Page Buttons */}
            <div className="flex items-center gap-1.5">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  type="button"
                  onClick={() => setCurrentPage(page)}
                  className={`w-9 h-9 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer flex items-center justify-center ${
                    currentPage === page
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 shadow-2xs'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-slate-300 text-slate-700 font-mono text-xs font-semibold hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-2xs cursor-pointer active:scale-95"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
