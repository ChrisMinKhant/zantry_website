import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function CaseStudyModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-primary/75 backdrop-blur-md overflow-y-auto animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="relative bg-surface rounded-2xl sm:rounded-3xl shadow-2xl max-w-4xl w-full max-h-[92vh] sm:max-h-[90vh] overflow-y-auto border border-outline-variant/30 text-on-surface my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header with Close Button */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 bg-surface/95 backdrop-blur-md border-b border-outline-variant/20">
          <div className="flex items-center gap-2 sm:gap-3 overflow-hidden">
            <span className="px-2.5 py-0.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-secondary-container text-on-secondary-container rounded-full shrink-0">
              {project.category}
            </span>
            <span className="text-[11px] sm:text-xs text-on-surface-variant font-medium truncate">
              {project.year} • {project.timeline}
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-surface-container-high active:bg-surface-container-highest transition-colors text-primary shrink-0 ml-2"
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined text-2xl leading-none">close</span>
          </button>
        </div>

        {/* Hero Image & Title */}
        <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-surface-container overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent flex flex-col justify-end p-4 sm:p-6 md:p-8 text-on-primary">
            <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase opacity-80 mb-1">
              Client: {project.client}
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight mb-1.5 sm:mb-2">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm md:text-base opacity-90 max-w-2xl line-clamp-2 sm:line-clamp-none">
              {project.tagline}
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8">
          {/* Key Metrics Grid */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4">
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="glass-card p-3 sm:p-4 rounded-xl border border-outline-variant/30 text-center">
                <div className="text-lg sm:text-2xl md:text-3xl font-extrabold text-primary mb-0.5">
                  {metric.value}
                </div>
                <div className="text-[9px] sm:text-xs font-semibold uppercase tracking-wider text-on-surface-variant truncate">
                  {metric.label}
                </div>
                <div className="text-[9px] sm:text-xs text-secondary mt-0.5 font-medium hidden sm:block">
                  {metric.change}
                </div>
              </div>
            ))}
          </div>

          {/* Project Summary */}
          <div>
            <h3 className="text-base sm:text-lg font-bold text-primary mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-lg sm:text-xl">info</span>
              Executive Overview
            </h3>
            <p className="text-on-surface-variant text-xs sm:text-sm md:text-base leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Challenge & Solution 2-column */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="p-4 sm:p-5 rounded-xl bg-surface-container-low border border-outline-variant/20">
              <h4 className="text-xs sm:text-sm font-bold text-error flex items-center gap-1.5 mb-1.5">
                <span className="material-symbols-outlined text-base">warning</span>
                The Challenge
              </h4>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                {project.challenge}
              </p>
            </div>
            <div className="p-4 sm:p-5 rounded-xl bg-secondary-container/30 border border-secondary-fixed">
              <h4 className="text-xs sm:text-sm font-bold text-primary flex items-center gap-1.5 mb-1.5">
                <span className="material-symbols-outlined text-base">check_circle</span>
                Engineering Solution
              </h4>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Deliverables */}
          <div>
            <h3 className="text-base sm:text-lg font-bold text-primary mb-3 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-lg sm:text-xl">build</span>
              Key Deliverables &amp; Architectural Innovations
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
              {project.keyFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-surface-container-lowest border border-outline-variant/20">
                  <span className="material-symbols-outlined text-primary text-sm mt-0.5 shrink-0">task_alt</span>
                  <span className="text-xs sm:text-sm text-on-surface leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div>
            <h3 className="text-base sm:text-lg font-bold text-primary mb-3 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-lg sm:text-xl">terminal</span>
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {project.tags.map((tech, idx) => (
                <span 
                  key={idx}
                  className="px-2.5 py-1 rounded-md bg-surface-container text-xs font-medium text-primary border border-outline-variant/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          {project.testimonial && (
            <div className="p-4 sm:p-6 rounded-xl bg-surface-container-high border-l-4 border-primary">
              <p className="text-xs sm:text-sm md:text-base italic text-on-surface mb-3 leading-relaxed">
                "{project.testimonial.quote}"
              </p>
              <div className="text-xs sm:text-sm font-bold text-primary">
                {project.testimonial.author}
              </div>
              <div className="text-[10px] sm:text-xs text-on-surface-variant">
                {project.testimonial.role}
              </div>
            </div>
          )}

          {/* Action Footer */}
          <div className="pt-4 border-t border-outline-variant/20 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <p className="text-[11px] sm:text-xs text-on-surface-variant text-center sm:text-left">
              Need a similar scalable architecture for your business?
            </p>
            <div className="flex items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="w-1/2 sm:w-auto px-4 py-2.5 rounded-full border border-outline-variant text-on-surface text-xs sm:text-sm font-semibold hover:bg-surface-container transition-colors text-center"
              >
                Close
              </button>
              <Link
                to="/contact"
                onClick={onClose}
                className="w-1/2 sm:w-auto px-5 py-2.5 rounded-full bg-primary text-on-primary text-xs sm:text-sm font-bold hover:opacity-90 transition-all text-center shadow-md shadow-primary/20"
              >
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
