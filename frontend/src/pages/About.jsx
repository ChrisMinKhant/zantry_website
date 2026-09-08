import { Link } from 'react-router-dom';

export default function About() {
  const leadership = [
    {
      name: 'Alexander Ross',
      role: 'Principal Systems Architect & Founder',
      bio: 'Former Staff Engineer at Tier-1 tech firms. 14+ years designing distributed systems handling tens of billions in financial transactions.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Dr. Elena Rostova',
      role: 'Head of AI & Machine Intelligence',
      bio: 'PhD in Computer Science (Neural Systems). Specialist in privacy-preserving LLM architectures and vector-accelerated enterprise search.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Marcus Vance',
      role: 'Head of Cloud & SRE Infrastructure',
      bio: 'Kubernetes contributor and multi-cloud resilience expert. Architected zero-downtime migrations for Fortune 500 platforms.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80'
    }
  ];

  const milestones = [
    { year: '2021', title: 'Studio Inception', desc: 'Founded with a focus on high-concurrency microservices and fintech backends.' },
    { year: '2022', title: 'Enterprise Expansion', desc: 'Delivered multi-region cloud migrations for high-traffic European and US fintechs.' },
    { year: '2023', title: 'Zero-Downtime Benchmark', desc: 'Achieved 99.999% production availability across 30+ client microservices.' },
    { year: '2024', title: 'AI Engineering Lab', desc: 'Launched internal AI & vector retrieval practice for enterprise compliance automation.' },
    { year: '2025+', title: 'Global Operations', desc: 'Over $250M in client valuation impact and 45+ enterprise production systems active.' },
  ];

  return (
    <div className="pt-20 sm:pt-24 pb-16 sm:pb-20 min-h-screen">
      <div className="max-w-container-max mx-auto px-4 sm:px-6 md:px-gutter">
        {/* Hero Section */}
        <section className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
          <span className="inline-block px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold uppercase tracking-widest mb-3.5 sm:mb-4">
            About Zantry Tech
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-4 sm:mb-6 tracking-tight leading-tight">
            Engineering Precision for High-Stakes Software
          </h1>
          <p className="text-xs sm:text-base md:text-lg text-on-surface-variant leading-relaxed">
            Zantry Tech was founded with a singular conviction: modern businesses cannot afford fragile code, sluggish user interfaces, or runaway cloud costs. We engineer digital products with the craftsmanship and rigor of mission-critical systems.
          </p>
        </section>

        {/* Core Principles */}
        <section className="mb-16 sm:mb-24">
          <div className="text-center max-w-xl mx-auto mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-2">Our Engineering Principles</h2>
            <p className="text-xs sm:text-sm text-on-surface-variant">The core tenets that guide every line of code we write.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-outline-variant/30">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-primary text-on-primary flex items-center justify-center mb-5">
                <span className="material-symbols-outlined text-xl sm:text-2xl">speed</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-primary mb-2">Sub-Second Default</h3>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                Latency is the silent killer of user engagement. We obsess over milliseconds, optimizing database indices, edge caches, and runtime execution.
              </p>
            </div>

            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-outline-variant/30">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-primary text-on-primary flex items-center justify-center mb-5">
                <span className="material-symbols-outlined text-xl sm:text-2xl">verified_user</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-primary mb-2">Zero-Trust Security</h3>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                Security is never an afterthought or a patch. From hardware-bound biometric authentication to strict CORS and encrypted pipelines, we build impenetrable systems.
              </p>
            </div>

            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-outline-variant/30 sm:col-span-2 md:col-span-1">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-primary text-on-primary flex items-center justify-center mb-5">
                <span className="material-symbols-outlined text-xl sm:text-2xl">architecture</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-primary mb-2">Architectural Longevity</h3>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                We reject brittle hype and transient fads. We select modular, typed, and well-supported technologies that deliver ROI for years without complete rewrites.
              </p>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="mb-16 sm:mb-24">
          <div className="text-center max-w-xl mx-auto mb-8 sm:mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary mb-1.5 block">Technical Leadership</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-2">Meet the Architects</h2>
            <p className="text-xs sm:text-sm text-on-surface-variant">Senior practitioners directly involved in every strategic engineering project.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {leadership.map((leader, idx) => (
              <div key={idx} className="glass-card rounded-2xl overflow-hidden border border-outline-variant/30 flex flex-col">
                <div className="aspect-[4/3] overflow-hidden bg-surface-container">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 sm:p-6 flex flex-col flex-grow">
                  <h3 className="text-base sm:text-lg font-bold text-primary">{leader.name}</h3>
                  <div className="text-[11px] sm:text-xs font-semibold text-secondary mb-2.5">{leader.role}</div>
                  <p className="text-xs text-on-surface-variant leading-relaxed">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Milestones / Journey */}
        <section className="mb-16 sm:mb-20">
          <div className="text-center max-w-xl mx-auto mb-8 sm:mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary mb-1.5 block">Milestones</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-2">Our Trajectory</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-3.5 sm:space-y-5">
            {milestones.map((m, idx) => (
              <div key={idx} className="glass-card p-4 sm:p-6 rounded-xl border border-outline-variant/20 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                <div className="px-3 py-1.5 rounded-lg bg-primary text-on-primary font-bold text-xs sm:text-sm shrink-0">
                  {m.year}
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-primary">{m.title}</h4>
                  <p className="text-xs text-on-surface-variant mt-0.5 leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary text-on-primary rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-14 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3">Want to Build with Zantry Tech?</h2>
          <p className="text-xs sm:text-sm md:text-base opacity-80 max-w-xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            Let’s discuss your technical challenges and determine how our engineering team can accelerate your development velocity.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3.5 rounded-full bg-on-primary text-primary font-bold text-xs sm:text-sm hover:opacity-90 transition-all shadow-lg w-full sm:w-auto"
          >
            Start a Conversation
          </Link>
        </section>
      </div>
    </div>
  );
}
