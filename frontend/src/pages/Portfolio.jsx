import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { projectsData, portfolioStats, techStackCategories } from '../data/projectsData';
import CaseStudyModal from '../components/CaseStudyModal';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = useMemo(() => {
    const unique = ['All', ...Array.from(new Set(projectsData.map(p => p.category)))];
    return unique;
  }, []);

  const filteredProjects = useMemo(() => {
    return projectsData.filter(project => {
      const matchesFilter = activeFilter === 'All' || project.category.toLowerCase() === activeFilter.toLowerCase();
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesFilter;

      const matchesQuery = 
        project.title.toLowerCase().includes(query) ||
        project.client.toLowerCase().includes(query) ||
        project.summary.toLowerCase().includes(query) ||
        project.tags.some(tag => tag.toLowerCase().includes(query));

      return matchesFilter && matchesQuery;
    });
  }, [activeFilter, searchQuery]);

  return (
    <div className="pt-20 sm:pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 md:px-gutter py-10 sm:py-16 md:py-20 max-w-container-max mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold uppercase tracking-widest mb-4 sm:mb-6">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse shrink-0"></span>
          <span>Engineering Portfolio &amp; Case Studies</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-4 sm:mb-6 tracking-tight leading-tight">
          Systems Engineered for <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary">
            Scale, Speed &amp; Security
          </span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-on-surface-variant max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed">
          From institutional financial engines to multi-region cloud meshes and generative AI workflows, explore how Zantry Tech architects high-stakes digital software for industry leaders.
        </p>

        {/* Portfolio Stats Banner */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto p-4 sm:p-6 glass-card rounded-2xl border border-outline-variant/30 shadow-md sm:shadow-lg">
          {portfolioStats.map((stat, idx) => (
            <div key={idx} className="text-center px-1 sm:px-2 py-1">
              <div className="text-xl sm:text-3xl md:text-4xl font-extrabold text-primary mb-0.5 sm:mb-1">
                {stat.value}
              </div>
              <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="max-w-container-max mx-auto px-4 sm:px-6 md:px-gutter mb-8 sm:mb-12">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 sm:gap-6 pb-6 border-b border-outline-variant/20">
          {/* Touch-Scrollable Category Filter Pills */}
          <div className="overflow-x-auto no-scrollbar py-1 -mx-4 px-4 sm:mx-0 sm:px-0">
            <div className="flex items-center gap-1.5 sm:gap-2 whitespace-nowrap">
              {categories.map(category => {
                const count = category === 'All' 
                  ? projectsData.length 
                  : projectsData.filter(p => p.category === category).length;
                const isActive = activeFilter === category;

                return (
                  <button
                    key={category}
                    onClick={() => setActiveFilter(category)}
                    className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 active:scale-95 ${
                      isActive 
                        ? 'bg-primary text-on-primary shadow-sm' 
                        : 'bg-surface-container text-on-surface-variant hover:text-primary hover:bg-surface-container-high'
                    }`}
                  >
                    <span>{category}</span>
                    <span className={`text-[10px] sm:text-xs px-1.5 py-0.2 rounded-full ${
                      isActive ? 'bg-on-primary/20 text-on-primary' : 'bg-surface text-on-surface-variant'
                    }`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72 shrink-0">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-base sm:text-lg">
              search
            </span>
            <input
              type="text"
              placeholder="Search tech, stack, or client..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 sm:pl-10 pr-8 sm:pr-9 py-2 bg-surface-container rounded-full text-xs sm:text-sm outline-none border border-outline-variant/20 focus:border-primary focus:ring-1 focus:ring-primary transition-all text-on-surface"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary p-1"
                aria-label="Clear search"
              >
                <span className="material-symbols-outlined text-xs sm:text-sm">close</span>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-container-max mx-auto px-4 sm:px-6 md:px-gutter pb-16 sm:pb-20">
        {filteredProjects.length === 0 ? (
          <div className="text-center py-12 sm:py-16 glass-card rounded-2xl max-w-lg mx-auto px-4">
            <span className="material-symbols-outlined text-4xl sm:text-5xl text-on-surface-variant mb-3">folder_off</span>
            <h3 className="text-lg sm:text-xl font-bold text-primary mb-2">No projects found</h3>
            <p className="text-xs sm:text-sm text-on-surface-variant mb-5">
              No matching projects for "{searchQuery}". Try a different keyword or category.
            </p>
            <button
              onClick={() => { setActiveFilter('All'); setSearchQuery(''); }}
              className="px-5 py-2 bg-primary text-on-primary rounded-full text-xs sm:text-sm font-semibold hover:opacity-90"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group glass-card rounded-2xl overflow-hidden border border-outline-variant/30 hover:border-primary/40 hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer active:scale-[0.99]"
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Image & Overlay */}
                <div className="relative aspect-[16/10] overflow-hidden bg-surface-container">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80';
                    }}
                  />
                  <div className="absolute top-3 left-3 flex gap-1.5">
                    <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-surface/90 backdrop-blur-md text-primary shadow-sm">
                      {project.category}
                    </span>
                    <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold bg-surface/90 backdrop-blur-md text-on-surface-variant shadow-sm">
                      {project.year}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-lg">
                      <span className="material-symbols-outlined text-sm sm:text-base">open_in_new</span>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-7 md:p-8 flex flex-col flex-grow">
                  <div className="text-[11px] font-bold uppercase tracking-widest text-secondary mb-1">
                    Client: {project.client}
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-on-surface-variant mb-5 line-clamp-2 leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Key Metrics Highlight */}
                  <div className="grid grid-cols-3 gap-1.5 sm:gap-2 p-2.5 sm:p-3 rounded-xl bg-surface-container-low mb-5 border border-outline-variant/10">
                    {project.metrics.map((m, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-sm sm:text-base md:text-lg font-extrabold text-primary">
                          {m.value}
                        </div>
                        <div className="text-[10px] sm:text-[11px] font-medium text-on-surface-variant truncate">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-5 mt-auto">
                    {project.tags.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md text-[11px] sm:text-xs font-medium bg-surface-container text-on-surface-variant border border-outline-variant/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-2 py-0.5 rounded-md text-[11px] sm:text-xs font-medium text-secondary">
                        +{project.tags.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Action Link */}
                  <div className="pt-3.5 border-t border-outline-variant/20 flex items-center justify-between">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-primary group-hover:underline"
                    >
                      View Deep Dive Case Study
                      <span className="material-symbols-outlined text-sm sm:text-base group-hover:translate-x-1 transition-transform">
                        arrow_forward
                      </span>
                    </button>
                    <span className="text-[11px] text-on-surface-variant font-medium">
                      {project.timeline}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Tech Stack & Core Competencies Section */}
      <section className="bg-surface-container-low py-12 sm:py-20 border-y border-outline-variant/20">
        <div className="max-w-container-max mx-auto px-4 sm:px-6 md:px-gutter">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary mb-1.5 block">
              Architectural Mastery
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary mb-3">
              Enterprise Engineering Matrix
            </h2>
            <p className="text-xs sm:text-sm text-on-surface-variant">
              We leverage an battle-tested modern stack tuned for performance, observability, and long-term maintainability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {techStackCategories.map((group, idx) => (
              <div key={idx} className="glass-card p-5 sm:p-6 rounded-2xl border border-outline-variant/20">
                <h3 className="text-sm sm:text-base font-bold text-primary mb-3 sm:mb-4 pb-2 border-b border-outline-variant/20 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary shrink-0"></span>
                  {group.category}
                </h3>
                <ul className="space-y-2">
                  {group.technologies.map((tech, tIdx) => (
                    <li key={tIdx} className="flex items-center gap-2 text-xs sm:text-sm text-on-surface">
                      <span className="material-symbols-outlined text-primary text-xs">check</span>
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-primary text-on-primary py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-container-max mx-auto text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-on-primary/10 text-on-primary text-xs font-bold uppercase tracking-widest mb-4">
            Ready To Launch
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 max-w-2xl mx-auto leading-tight">
            Have a mission-critical system to build or modernize?
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-on-primary/80 max-w-xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            Partner with senior engineers who understand enterprise scalability, precision ergonomics, and business ROI.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full sm:w-auto">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-block bg-on-primary text-primary px-8 py-3.5 rounded-full font-bold text-xs sm:text-sm hover:opacity-90 transition-all shadow-lg active:scale-95 text-center"
            >
              Schedule Architecture Consultation
            </Link>
            <Link
              to="/services"
              className="w-full sm:w-auto inline-block border border-on-primary/40 text-on-primary px-8 py-3.5 rounded-full font-semibold text-xs sm:text-sm hover:bg-on-primary hover:text-primary transition-all active:scale-95 text-center"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Case Study Detail Modal */}
      {selectedProject && (
        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
