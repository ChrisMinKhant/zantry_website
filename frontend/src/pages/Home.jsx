import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import CaseStudyModal from '../components/CaseStudyModal';

export default function Home() {
  const [homeFilter, setHomeFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const homeCategories = ['All', 'Fintech', 'E-commerce', 'Cloud', 'Enterprise'];

  const displayedProjects = useMemo(() => {
    return projectsData
      .filter(project => homeFilter === 'All' || project.category.toLowerCase() === homeFilter.toLowerCase())
      .slice(0, 3);
  }, [homeFilter]);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setContactSubmitted(true);
    e.target.reset();
    setTimeout(() => {
      setContactSubmitted(false);
    }, 5000);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden py-10 sm:py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Hero POS Ad Mockup Card - Image 1st */}
          <div className="relative order-1 lg:order-1">
            <Link to="/portfolio" className="block group">
              <div className="glass-card p-3 sm:p-5 rounded-2xl sm:rounded-3xl relative z-10 border border-primary/20 shadow-xl sm:shadow-2xl hover:shadow-primary/20 transition-all duration-300 bg-gradient-to-b from-white to-surface">
                {/* Window Header */}
                <div className="flex items-center justify-between pb-3 border-b border-outline-variant/20 mb-3">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400"></span>
                    <span className="text-[10px] sm:text-xs font-bold text-primary ml-1">Zantry POS Pro</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[9px] sm:text-[11px] font-bold bg-primary text-white shadow-sm">
                    Featured POS Ad
                  </span>
                </div>

                {/* POS Ad Image */}
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-900 shadow-md">
                  <img
                    src="/images/zantry-pos-ad-clean.jpg"
                    alt="Zantry POS Commercial Advertisement - Simplify Your Business"
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent flex items-end justify-between gap-2">
                    <div className="text-white text-left">
                      <p className="text-[11px] sm:text-xs font-bold leading-tight">Simplify Your Business</p>
                      <p className="text-[10px] text-white/80 hidden sm:block">Starting from 200,000 MMK · Multi-Device Ready</p>
                    </div>
                    <span className="bg-white text-primary text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-full group-hover:bg-primary group-hover:text-white transition-colors flex items-center gap-1 shadow shrink-0">
                      Explore Plans <span className="material-symbols-outlined text-xs">arrow_forward</span>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Text & Buttons Next */}
          <div className="z-10 text-left order-2 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-xs mb-5">
              <span>Pioneering Digital Solutions &amp; POS Systems</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-5 leading-[1.15] tracking-tight">
              Building Smart Software for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary">
                Modern Businesses
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-on-surface-variant mb-8 max-w-xl leading-relaxed">
              Empowering enterprises with scalable cloud architecture, sub-second data pipelines, intuitive user experiences, and rigorous engineering precision.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <Link
                to="/portfolio"
                className="w-full sm:w-auto text-center bg-primary text-on-primary px-8 py-3.5 sm:py-4 rounded-full font-label-md text-sm sm:text-base font-bold hover:shadow-xl transition-all active:scale-95 shadow-md shadow-primary/20 flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-base">point_of_sale</span> Explore Zantry POS
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto text-center bg-surface/80 backdrop-blur-sm border border-outline-variant/40 px-8 py-3.5 sm:py-4 rounded-full font-label-md text-sm sm:text-base font-bold hover:bg-surface transition-all active:scale-95 text-primary"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 3 Biggest Daily Headaches Solved Section */}
      <section className="py-12 sm:py-16 bg-surface border-b border-outline-variant/20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-margin-desktop">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="inline-block bg-primary/10 text-primary px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
              Operational Solutions
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary mb-3">
              3 Daily Store Headaches Zantry POS Solves
            </h2>
            <p className="text-xs sm:text-sm text-on-surface-variant">
              Say goodbye to unexplained stock loss, end-of-day drawer mismatches, and slow handwritten voucher queues.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Problem 1 */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-outline-variant/30 hover:border-amber-500/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-2xl">inventory_2</span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 block mb-1">Inventory Protection</span>
                <h3 className="text-lg font-bold text-primary mb-2">Stopping Stock Leakage</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed mb-4">
                  Every transaction automatically deducts inventory. Real-time audit logs eliminate unexplained shrinkage, theft, and expired goods.
                </p>
              </div>
              <div className="pt-3 border-t border-outline-variant/20 flex items-center gap-1.5 text-xs font-semibold text-primary">
                <span className="material-symbols-outlined text-sm text-emerald-600">check_circle</span>
                <span>Live deduction &amp; audit trails</span>
              </div>
            </div>

            {/* Problem 2 */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-outline-variant/30 hover:border-emerald-500/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-2xl">account_balance_wallet</span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 block mb-1">Cash Reconciliation</span>
                <h3 className="text-lg font-bold text-primary mb-2">Fixing Daily Cash Count Errors</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed mb-4">
                  Eliminate drawer mismatches. Automated shift cash-in and cash-out logs ensure physical cash always matches digital reports.
                </p>
              </div>
              <div className="pt-3 border-t border-outline-variant/20 flex items-center gap-1.5 text-xs font-semibold text-primary">
                <span className="material-symbols-outlined text-sm text-emerald-600">check_circle</span>
                <span>Shift opening/closing balance accuracy</span>
              </div>
            </div>

            {/* Problem 3 */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-outline-variant/30 hover:border-blue-500/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-2xl">receipt_long</span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 block mb-1">Fast Checkout</span>
                <h3 className="text-lg font-bold text-primary mb-2">Replacing Slow Handwritten Vouchers</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed mb-4">
                  Replace slow paper pads with sub-second digital receipts. Connect Bluetooth or USB thermal printers for branded customer receipts in seconds.
                </p>
              </div>
              <div className="pt-3 border-t border-outline-variant/20 flex items-center gap-1.5 text-xs font-semibold text-primary">
                <span className="material-symbols-outlined text-sm text-emerald-600">check_circle</span>
                <span>Instant thermal &amp; digital vouchers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-20 bg-surface" id="services">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-margin-desktop">
          <div className="text-center mb-10 sm:mb-16 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary mb-2 block">
              Core Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary mb-3 sm:mb-4">
              Comprehensive Tech Solutions
            </h2>
            <p className="text-sm sm:text-base text-on-surface-variant">
              End-to-end engineering services tailored to your specific business model and traffic scale.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
            {/* Card 1 */}
            <div className="glass-card p-6 sm:p-8 rounded-2xl group hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 border border-outline-variant/20 flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 sm:w-12 sm:h-12 bg-primary/5 rounded-xl flex items-center justify-center mb-5 text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                  <span className="material-symbols-outlined text-xl sm:text-2xl">code</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-primary">Custom Software Dev</h3>
                <p className="text-xs sm:text-sm text-on-surface-variant mb-4 leading-relaxed">
                  Bespoke enterprise applications built with modern architectures, clean codebases, and maintainable systems.
                </p>
              </div>
              <Link to="/services" className="inline-flex items-center gap-1 text-xs font-bold text-primary group-hover:underline pt-2">
                Explore Software Dev <span className="material-symbols-outlined text-xs">arrow_forward</span>
              </Link>
            </div>

            {/* Card 2 */}
            <div className="glass-card p-6 sm:p-8 rounded-2xl group hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 border border-outline-variant/20 flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 sm:w-12 sm:h-12 bg-primary/5 rounded-xl flex items-center justify-center mb-5 text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                  <span className="material-symbols-outlined text-xl sm:text-2xl">cloud_sync</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-primary">Cloud &amp; DevOps</h3>
                <p className="text-xs sm:text-sm text-on-surface-variant mb-4 leading-relaxed">
                  Zero-trust Kubernetes clusters, automated CI/CD pipelines, and multi-cloud resilience with significant cost optimization.
                </p>
              </div>
              <Link to="/services" className="inline-flex items-center gap-1 text-xs font-bold text-primary group-hover:underline pt-2">
                Explore Cloud <span className="material-symbols-outlined text-xs">arrow_forward</span>
              </Link>
            </div>

            {/* Card 3 */}
            <div className="glass-card p-6 sm:p-8 rounded-2xl group hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 border border-outline-variant/20 flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 sm:w-12 sm:h-12 bg-primary/5 rounded-xl flex items-center justify-center mb-5 text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                  <span className="material-symbols-outlined text-xl sm:text-2xl">neurology</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-primary">AI &amp; Intelligent Systems</h3>
                <p className="text-xs sm:text-sm text-on-surface-variant mb-4 leading-relaxed">
                  Custom LLM workflows, predictive machine learning models, and privacy-preserving data extraction engines.
                </p>
              </div>
              <Link to="/services" className="inline-flex items-center gap-1 text-xs font-bold text-primary group-hover:underline pt-2">
                Explore AI <span className="material-symbols-outlined text-xs">arrow_forward</span>
              </Link>
            </div>

            {/* Card 4 */}
            <div className="glass-card p-6 sm:p-8 rounded-2xl group hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 border border-outline-variant/20 flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 sm:w-12 sm:h-12 bg-primary/5 rounded-xl flex items-center justify-center mb-5 text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                  <span className="material-symbols-outlined text-xl sm:text-2xl">devices</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-primary">High-Conversion Web Apps</h3>
                <p className="text-xs sm:text-sm text-on-surface-variant mb-4 leading-relaxed">
                  Fast, responsive web applications engineered for sub-second loading, high SEO rankings, and maximum conversion rates.
                </p>
              </div>
              <Link to="/services" className="inline-flex items-center gap-1 text-xs font-bold text-primary group-hover:underline pt-2">
                Explore Web Apps <span className="material-symbols-outlined text-xs">arrow_forward</span>
              </Link>
            </div>

            {/* Card 5 */}
            <div className="glass-card p-6 sm:p-8 rounded-2xl group hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 border border-outline-variant/20 flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 sm:w-12 sm:h-12 bg-primary/5 rounded-xl flex items-center justify-center mb-5 text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                  <span className="material-symbols-outlined text-xl sm:text-2xl">stay_current_portrait</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-primary">Mobile &amp; Edge Systems</h3>
                <p className="text-xs sm:text-sm text-on-surface-variant mb-4 leading-relaxed">
                  Cross-platform iOS and Android applications with biometric authentication, offline synchronization, and native performance.
                </p>
              </div>
              <Link to="/services" className="inline-flex items-center gap-1 text-xs font-bold text-primary group-hover:underline pt-2">
                Explore Mobile <span className="material-symbols-outlined text-xs">arrow_forward</span>
              </Link>
            </div>

            {/* Card 6 */}
            <div className="glass-card p-6 sm:p-8 rounded-2xl group hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 border border-outline-variant/20 flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 sm:w-12 sm:h-12 bg-primary/5 rounded-xl flex items-center justify-center mb-5 text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                  <span className="material-symbols-outlined text-xl sm:text-2xl">security</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-primary">Security &amp; Architecture Audit</h3>
                <p className="text-xs sm:text-sm text-on-surface-variant mb-4 leading-relaxed">
                  Comprehensive code audits, penetration testing readiness, SOC2/HIPAA compliance preparation, and vulnerability remediation.
                </p>
              </div>
              <Link to="/services" className="inline-flex items-center gap-1 text-xs font-bold text-primary group-hover:underline pt-2">
                Explore Audits <span className="material-symbols-outlined text-xs">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-20 bg-surface-container-low border-y border-outline-variant/10">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="glass-card p-3 sm:p-4 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl">
              <img
                alt="Engineering Team Collaboration"
                className="rounded-xl sm:rounded-2xl w-full object-cover aspect-[4/3]"
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
              />
            </div>
            <div className="mt-4 p-4 rounded-xl glass-card border border-outline-variant/30 shadow-md sm:absolute sm:-bottom-6 sm:-right-6 sm:max-w-xs sm:mt-0">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-2xl sm:text-3xl text-primary">verified</span>
                <div>
                  <div className="font-bold text-xs sm:text-sm text-primary">100% On-Time Delivery</div>
                  <div className="text-[11px] text-on-surface-variant">Milestone-based transparency</div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-6 sm:space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-secondary mb-2 block">
                The Zantry Advantage
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary mb-3 sm:mb-4">
                Why Industry Leaders Partner With Us
              </h2>
              <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                We combine deep architectural mastery with rapid commercial delivery so your engineering investment generates sustained enterprise value.
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex gap-3.5 sm:gap-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary text-on-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-lg sm:text-xl">account_tree</span>
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-primary mb-1">Scalable Architecture by Design</h4>
                  <p className="text-on-surface-variant text-xs sm:text-sm leading-relaxed">
                    Engineered from day one to scale horizontally across multi-regions without expensive refactoring.
                  </p>
                </div>
              </div>

              <div className="flex gap-3.5 sm:gap-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary text-on-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-lg sm:text-xl">bolt</span>
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-primary mb-1">Sub-Second Performance SLA</h4>
                  <p className="text-on-surface-variant text-xs sm:text-sm leading-relaxed">
                    Micro-benchmarked code and aggressive caching deliver ultra-low latency experiences for end users.
                  </p>
                </div>
              </div>

              <div className="flex gap-3.5 sm:gap-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary text-on-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-lg sm:text-xl">lock</span>
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-primary mb-1">Institutional-Grade Security</h4>
                  <p className="text-on-surface-variant text-xs sm:text-sm leading-relaxed">
                    Built-in cryptographic protocols, zero-trust network policies, and rigorous automated pen testing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Portfolio Section with Dynamic Filter */}
      <section className="py-12 sm:py-20 bg-surface" id="portfolio">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-margin-desktop">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-12 gap-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-secondary mb-1.5 block">
                Selected Work
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary mb-2">
                Featured Portfolio
              </h2>
              <p className="text-xs sm:text-sm text-on-surface-variant">
                Proven business outcomes delivered for high-growth tech ventures.
              </p>
            </div>

            {/* Mobile Touch-Scrollable Filter Buttons */}
            <div className="w-full md:w-auto overflow-x-auto no-scrollbar pb-1">
              <div className="inline-flex gap-1.5 bg-surface-container-high p-1 rounded-full whitespace-nowrap">
                {homeCategories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setHomeFilter(cat)}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${homeFilter === cat
                        ? 'bg-primary text-on-primary shadow-sm'
                        : 'text-on-surface-variant hover:text-primary hover:bg-surface-container-highest'
                      }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {displayedProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group glass-card rounded-2xl overflow-hidden border border-outline-variant/30 hover:border-primary/50 hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer active:scale-[0.99]"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-surface-container">
                  <img
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={project.image}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80';
                    }}
                  />
                  <div className="absolute top-3 left-3 bg-surface/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-primary">
                    {project.category}
                  </div>
                </div>

                <div className="p-5 sm:p-6 flex flex-col flex-grow">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-secondary mb-1">
                    {project.client}
                  </span>
                  <h4 className="text-lg sm:text-xl font-bold text-primary mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-on-surface-variant mb-4 line-clamp-2 leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Primary metric highlight */}
                  <div className="p-3 bg-surface-container rounded-xl mb-4 flex items-center justify-between text-xs">
                    <span className="text-on-surface-variant font-medium">Impact Result:</span>
                    <span className="font-extrabold text-primary">{project.metrics[0].value} ({project.metrics[0].label})</span>
                  </div>

                  <div className="mt-auto pt-3 border-t border-outline-variant/20 flex items-center justify-between text-xs font-bold text-primary">
                    <span>Explore Case Study</span>
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 sm:mt-12 text-center">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full border-2 border-primary text-primary font-bold text-xs sm:text-sm hover:bg-primary hover:text-on-primary transition-all active:scale-95 w-full sm:w-auto justify-center"
            >
              Browse All Portfolio Projects
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Lifecycle */}
      <section className="py-12 sm:py-20 bg-surface-container" id="process">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-margin-desktop">
          <div className="text-center mb-10 sm:mb-16 max-w-xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary mb-2 block">
              Execution Methodology
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary mb-3 sm:mb-4">
              Our Engineering Lifecycle
            </h2>
            <p className="text-xs sm:text-sm text-on-surface-variant">
              Systematic, milestone-driven sprints designed to maximize velocity and mitigate technical risk.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="glass-card p-5 sm:p-6 rounded-2xl border border-outline-variant/20">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold mb-4 text-sm">
                1
              </div>
              <h4 className="text-base sm:text-lg font-bold text-primary mb-1.5">Discovery &amp; Audit</h4>
              <p className="text-on-surface-variant text-xs sm:text-sm leading-relaxed">
                Requirement architecture, stakeholder goals, security audits, and data flow modeling.
              </p>
            </div>

            <div className="glass-card p-5 sm:p-6 rounded-2xl border border-outline-variant/20">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold mb-4 text-sm">
                2
              </div>
              <h4 className="text-base sm:text-lg font-bold text-primary mb-1.5">System Design</h4>
              <p className="text-on-surface-variant text-xs sm:text-sm leading-relaxed">
                Interactive UX prototypes, database normalization, API contracts, and infrastructure blueprints.
              </p>
            </div>

            <div className="glass-card p-5 sm:p-6 rounded-2xl border border-outline-variant/20">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold mb-4 text-sm">
                3
              </div>
              <h4 className="text-base sm:text-lg font-bold text-primary mb-1.5">Agile Sprints</h4>
              <p className="text-on-surface-variant text-xs sm:text-sm leading-relaxed">
                Clean, typed codebases, automated test suites, bi-weekly demo builds, and continuous integration.
              </p>
            </div>

            <div className="glass-card p-5 sm:p-6 rounded-2xl border border-outline-variant/20">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold mb-4 text-sm">
                4
              </div>
              <h4 className="text-base sm:text-lg font-bold text-primary mb-1.5">Production &amp; SRE</h4>
              <p className="text-on-surface-variant text-xs sm:text-sm leading-relaxed">
                Zero-downtime deployment, distributed telemetry, SLA monitoring, and 24/7 reliability support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
        <section className="py-12 sm:py-20 bg-slate-50" id="contact">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-margin-desktop">
                <div className="rounded-2xl border border-slate-200 overflow-hidden grid grid-cols-1 lg:grid-cols-2 bg-white shadow-sm">
                  <div className="p-6 sm:p-10 md:p-14 bg-primary text-on-primary flex flex-col justify-between">
                    <div>
                        <span className="inline-block px-3 py-1 rounded-md bg-white/10 text-white text-xs font-medium mb-4">
                          Direct Contact
                        </span>
                          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                            Get in Touch with Zantry Tech
                          </h2>
                            <p className="text-xs sm:text-sm md:text-base mb-8 text-slate-200 leading-relaxed">
                              Whether you need a turnkey POS setup for your retail store or custom software engineering, our team is ready to help.
                            </p>

                            <div className="space-y-4 sm:space-y-6">
                              <div className="flex items-center gap-3.5">
                                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                                    <span className="material-symbols-outlined text-white text-lg">mail</span>
                                  </div>
                                  <div>
                                    <div className="text-[10px] sm:text-xs text-slate-300">Email Inquiry</div>
                                    <a href="mailto:zantrytech@gmail.com" className="font-bold text-xs sm:text-sm hover:underline">zantrytech@gmail.com</a>
                                  </div>
                                </div>

                                <div className="flex items-center gap-3.5">
                                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                                      <span className="material-symbols-outlined text-white text-lg">call</span>
                                    </div>
                                    <div>
                                      <div className="text-[10px] sm:text-xs text-slate-300">Hotlines</div>
                                      <div className="flex flex-wrap gap-x-2">
                                        <a href="tel:09660227671" className="font-bold text-xs sm:text-sm hover:underline">09660227671</a>,
                                        <a href="tel:09790383481" className="font-bold text-xs sm:text-sm hover:underline">09790383481</a>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="flex items-center gap-3.5">
                                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                                        <span className="material-symbols-outlined text-white text-lg">location_on</span>
                                      </div>
                                      <div>
                                        <div className="text-[10px] sm:text-xs text-slate-300">Headquarters</div>
                                        <div className="font-bold text-xs sm:text-sm">Yangon, Myanmar (Nationwide Support)</div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                  <div className="pt-6 mt-6 sm:pt-8 sm:mt-8 border-t border-white/10 text-xs text-slate-300">
                                    Direct response within 4 business hours • 7 days a week support
                                  </div>
                                </div>

                                <div className="p-6 sm:p-10 md:p-16 bg-surface">
                                  {contactSubmitted ? (
                                    <div className="p-6 sm:p-8 rounded-2xl bg-green-50 border border-green-200 text-center space-y-3 my-auto">
                                      <span className="material-symbols-outlined text-4xl sm:text-5xl text-green-600">check_circle</span>
                                      <h3 className="text-xl sm:text-2xl font-bold text-green-900">Message Received!</h3>
                                      <p className="text-xs sm:text-sm text-green-700 leading-relaxed">
                                        Thank you for contacting Zantry Tech. One of our senior solutions architects will reach out to you within 4 business hours.
                                      </p>
                                    </div>
                                  ) : (
                                    <form className="space-y-4 sm:space-y-5" onSubmit={handleContactSubmit}>
                                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="space-y-1.5">
                                          <label className="text-[11px] font-bold uppercase tracking-wider text-primary">Full Name *</label>
                                          <input
                                            name="name"
                                            required
                                            className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl border border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none text-xs sm:text-sm bg-surface-container-lowest"
                                            placeholder="Sarah Jenkins"
                                            type="text"
                                          />
                                        </div>
                                        <div className="space-y-1.5">
                                          <label className="text-[11px] font-bold uppercase tracking-wider text-primary">Work Email *</label>
                                          <input
                                            name="email"
                                            required
                                            className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl border border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none text-xs sm:text-sm bg-surface-container-lowest"
                                            placeholder="sarah@company.com"
                                            type="email"
                                          />
                                        </div>
                                      </div>

                                      <div className="space-y-1.5">
                                        <label className="text-[11px] font-bold uppercase tracking-wider text-primary">Project Type</label>
                                        <select
                                          name="subject"
                                          className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl border border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none text-xs sm:text-sm bg-surface-container-lowest"
                                        >
                                          <option>Enterprise Web / SaaS Platform</option>
                                          <option>Cloud Infrastructure &amp; DevOps</option>
                                          <option>AI / Machine Learning Integration</option>
                                          <option>Fintech / High-Security Mobile App</option>
                                          <option>Architecture Review / Code Audit</option>
                                        </select>
                                      </div>

                                      <div className="space-y-1.5">
                                        <label className="text-[11px] font-bold uppercase tracking-wider text-primary">Project Brief *</label>
                                        <textarea
                                          name="message"
                                          required
                                          className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl border border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none resize-none text-xs sm:text-sm bg-surface-container-lowest"
                                          placeholder="Tell us about your requirements, timeline, and current tech stack..."
                                          rows={4}
                                        ></textarea>
                                      </div>

                                      <button
                                        type="submit"
                                        className="w-full bg-primary text-on-primary py-3.5 sm:py-4 rounded-xl font-bold text-xs sm:text-sm hover:shadow-xl transition-all active:scale-98 shadow-md shadow-primary/20"
                                      >
                                        Send Architecture Inquiry
                                      </button>
                                    </form>
                                  )}
                                </div>
                              </div>
                            </div>
                          </section>

                          {/* Case Study Detail Modal if triggered */}
                          {selectedProject && (
                            <CaseStudyModal
                              project={selectedProject}
                              onClose={() => setSelectedProject(null)}
                            />
                          )}
                        </>
                        );
}
