import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Process() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.timeline-step').forEach(el => {
      el.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-10');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      num: '01',
      icon: 'search',
      title: 'Discovery & System Audit',
      description: 'We begin with deep immersion into your domain and current architecture. Our senior engineers conduct stakeholder interviews and technical audits to discover bottlenecks, security liabilities, and high-impact objectives.',
      badges: ['Architecture Audit', 'Threat Modeling', 'Domain Mapping'],
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80'
    },
    {
      num: '02',
      icon: 'architecture',
      title: 'System Architecture & UX Design',
      description: 'Engineering excellence begins with architectural blueprinting. We specify database schemas, API contracts, caching tiers, and interactive wireframes that align user delight with technical scalability.',
      badges: ['Schema Normalization', 'API Contract (OpenAPI)', 'High-Fidelity UI'],
      image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80'
    },
    {
      num: '03',
      icon: 'code',
      title: 'Agile Implementation & Testing',
      description: 'Our engineers write clean, typed, and unit-tested code in bi-weekly sprints. Every pull request undergoes peer review, automated security scanning, and continuous integration benchmarking.',
      badges: ['100% Typed Code', 'Automated CI/CD', 'Weekly Demo Builds'],
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80'
    },
    {
      num: '04',
      icon: 'rocket_launch',
      title: 'Zero-Downtime Launch & SRE',
      description: 'Deployment is the beginning of the operational lifecycle. We perform blue-green zero-downtime cutovers, configure distributed Prometheus/Grafana telemetry, and provide ongoing reliability assurance.',
      badges: ['Blue-Green Deploy', 'Distributed Tracing', '24/7 SLA Guarantee'],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="pt-20 sm:pt-24 min-h-screen">
      {/* Hero Section */}
      <header className="py-10 sm:py-16 md:py-20 px-4 sm:px-6 md:px-gutter max-w-container-max mx-auto text-center">
        <span className="inline-block px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold uppercase tracking-widest mb-3.5 sm:mb-4">
          Our Methodology
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-4 sm:mb-6 tracking-tight leading-tight">
          Systematic Delivery Lifecycle
        </h1>
        <p className="text-xs sm:text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          At Zantry Tech, engineering rigor meets strategic transparency. We translate complex commercial requirements into high-performance software through a battle-tested four-phase lifecycle.
        </p>
      </header>

      {/* Process Steps */}
      <main className="max-w-container-max mx-auto px-4 sm:px-6 md:px-gutter pb-16 sm:pb-24 relative">
        <div className="space-y-10 sm:space-y-16">
          {steps.map((step, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <div 
                key={step.num}
                className={`timeline-step flex flex-col ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-6 sm:gap-8 md:gap-12`}
              >
                {/* Text Card */}
                <div className="w-full md:w-1/2">
                  <div className="glass-card p-5 sm:p-8 rounded-2xl border border-outline-variant/30 hover:border-primary/40 transition-all">
                    <div className="flex items-center gap-3 mb-3 sm:mb-4">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-primary text-on-primary flex items-center justify-center font-bold text-xs sm:text-sm shrink-0">
                        {step.num}
                      </div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed mb-5 sm:mb-6">
                      {step.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {step.badges.map((b, bIdx) => (
                        <span key={bIdx} className="bg-surface-container px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold text-secondary border border-outline-variant/20">
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Visual Preview */}
                <div className="w-full md:w-1/2">
                  <div className="rounded-2xl overflow-hidden shadow-lg sm:shadow-xl aspect-[16/10] bg-surface-container border border-outline-variant/20">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      {/* Rigor Section */}
      <section className="bg-surface-container-low py-12 sm:py-20 px-4 sm:px-6 md:px-gutter border-t border-outline-variant/20">
        <div className="max-w-container-max mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-secondary mb-1.5 block">Standard Commitments</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary mb-8 sm:mb-12">
            Engineering Rigour As Standard
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
            <div className="glass-card p-6 sm:p-8 rounded-2xl text-left border border-outline-variant/20">
              <div className="w-11 h-11 sm:w-12 sm:h-12 bg-primary text-on-primary flex items-center justify-center rounded-xl mb-4">
                <span className="material-symbols-outlined text-xl sm:text-2xl">security</span>
              </div>
              <h4 className="text-base sm:text-lg font-bold text-primary mb-1.5">Zero-Trust Security</h4>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                Encrypted at rest and in flight. We implement role-based access control, cryptographic signing, and automatic dependency security checks.
              </p>
            </div>

            <div className="glass-card p-6 sm:p-8 rounded-2xl text-left border border-outline-variant/20">
              <div className="w-11 h-11 sm:w-12 sm:h-12 bg-primary text-on-primary flex items-center justify-center rounded-xl mb-4">
                <span className="material-symbols-outlined text-xl sm:text-2xl">speed</span>
              </div>
              <h4 className="text-base sm:text-lg font-bold text-primary mb-1.5">Sub-Second SLA</h4>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                Every API endpoint is profiled for p99 response times below 150ms. High throughput is validated using simulated distributed load generators.
              </p>
            </div>

            <div className="glass-card p-6 sm:p-8 rounded-2xl text-left border border-outline-variant/20">
              <div className="w-11 h-11 sm:w-12 sm:h-12 bg-primary text-on-primary flex items-center justify-center rounded-xl mb-4">
                <span className="material-symbols-outlined text-xl sm:text-2xl">verified</span>
              </div>
              <h4 className="text-base sm:text-lg font-bold text-primary mb-1.5">99.99% Reliability</h4>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                Multi-region failover and self-healing worker pools ensure business continuity even during major cloud provider zone disruptions.
              </p>
            </div>
          </div>

          <div className="mt-8 sm:mt-14">
            <Link
              to="/contact"
              className="inline-block px-8 py-3.5 rounded-full bg-primary text-on-primary font-bold text-xs sm:text-sm hover:shadow-xl transition-all shadow-md shadow-primary/20 w-full sm:w-auto text-center"
            >
              Discuss Your Project With Our Architects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
