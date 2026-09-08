import { Link } from 'react-router-dom';

export default function Solutions() {
  const solutions = [
    {
      title: 'Enterprise Cloud Migration & Microservices',
      category: 'Cloud & DevOps',
      icon: 'cloud_done',
      tagline: 'Eliminate legacy single points of failure with auto-healing multi-region topologies.',
      description: 'We decompose monolithic systems into independent, resilient microservices containerized with Docker and orchestrated via Kubernetes. Includes zero-downtime database migration strategies and automated CI/CD.',
      deliverables: [
        'Multi-region active-active cluster deployment',
        'Infrastructure-as-Code (Terraform / OpenTofu)',
        'ArgoCD GitOps continuous deployment pipeline',
        'Distributed Prometheus & Grafana telemetry'
      ],
      caseStudyLink: '/portfolio'
    },
    {
      title: 'Algorithmic Fintech & High-Frequency Streaming',
      category: 'Fintech',
      icon: 'show_chart',
      tagline: 'Sub-millisecond data feeds and institutional-grade transaction processing.',
      description: 'Purpose-built for trading platforms, neo-banks, and digital asset exchanges. We combine WebSocket pipelining, worker-thread calculation, and memory caching to ensure zero UI freezes during peak volatility.',
      deliverables: [
        'Low-latency WebSocket streaming gateways',
        'In-memory stateful order book matching engines',
        'Automated Monte Carlo risk stress testing',
        'PCI-DSS & SOC2 compliance architectural hardening'
      ],
      caseStudyLink: '/portfolio'
    },
    {
      title: 'Generative AI & Enterprise Vector Pipelines',
      category: 'AI & Data Intelligence',
      icon: 'psychology',
      tagline: 'Private, privacy-first AI agent workflows with strict citation traceability.',
      description: 'Transform internal unstructured documents, contracts, and customer queries into actionable automated intelligence. We deploy self-hosted or private cloud LLM agents with verifiable source attribution.',
      deliverables: [
        'Zero-data-leakage vector database indexing (pgvector / Qdrant)',
        'Multi-step agent verification with human-in-the-loop oversight',
        'Semantic retrieval-augmented generation (RAG)',
        'Structured JSON output validation and automated reporting'
      ],
      caseStudyLink: '/portfolio'
    },
    {
      title: 'Headless Global Commerce & Omnichannel UX',
      category: 'E-Commerce',
      icon: 'shopping_bag',
      tagline: 'Sub-second page transitions and unified physical-digital inventory.',
      description: 'Modern headless commerce architectures that decouple presentation from transactional backends, yielding 40%+ improvements in mobile conversion rates and sub-second Largest Contentful Paint.',
      deliverables: [
        'Edge-rendered dynamic product catalogs',
        'Real-time multi-warehouse inventory reconciliation',
        'One-click localized multi-currency checkout',
        'Interactive 3D WebGL product visualization'
      ],
      caseStudyLink: '/portfolio'
    },
    {
      title: 'High-Security Mobile & Edge Systems',
      category: 'Mobile & Security',
      icon: 'smartphone',
      tagline: 'Cross-platform native applications bound to device Secure Enclaves.',
      description: 'From digital asset custody to field IoT management, our mobile apps leverage biometric hardware authentication, offline-first SQLite synchronization, and native Rust or C++ performance cores.',
      deliverables: [
        'Biometric Secure Enclave hardware key binding',
        'Offline-first synchronization with cryptographic state verification',
        'Optimized cross-platform React Native / Flutter engines',
        'Automated App Store & Google Play release pipelines'
      ],
      caseStudyLink: '/portfolio'
    },
    {
      title: 'Technical Due Diligence & Architecture Audits',
      category: 'Auditing & Consulting',
      icon: 'verified',
      tagline: 'Deep inspection of code health, scalability bottlenecks, and security posture.',
      description: 'Ideal for venture capital investors, private equity firms, or founders preparing for institutional funding rounds. We uncover hidden technical debt, single points of failure, and compliance vulnerabilities.',
      deliverables: [
        'Full static code analysis and dependency audit',
        'Database query profiling and bottleneck identification',
        'Cloud expenditure optimization roadmap (-30% to -50%)',
        'Executive readiness report for M&A or Series A/B rounds'
      ],
      caseStudyLink: '/portfolio'
    }
  ];

  return (
    <div className="pt-20 sm:pt-24 pb-16 sm:pb-20 min-h-screen">
      <div className="max-w-container-max mx-auto px-4 sm:px-6 md:px-gutter">
        {/* Header */}
        <section className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold uppercase tracking-widest mb-3.5 sm:mb-4">
            Solutions Matrix
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-4 sm:mb-6 tracking-tight leading-tight">
            Specialized Engineering Frameworks
          </h1>
          <p className="text-xs sm:text-base md:text-lg text-on-surface-variant leading-relaxed">
            We don’t just write code; we deliver battle-tested architectural solutions designed to address complex operational and commercial challenges for tech businesses.
          </p>
        </section>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 mb-12 sm:mb-20">
          {solutions.map((sol, idx) => (
            <div
              key={idx}
              className="glass-card p-5 sm:p-8 rounded-2xl border border-outline-variant/30 hover:border-primary/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary text-on-primary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-xl sm:text-2xl">{sol.icon}</span>
                  </div>
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-surface-container px-2.5 sm:px-3 py-1 rounded-full text-secondary">
                    {sol.category}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-primary mb-1.5">
                  {sol.title}
                </h3>
                <p className="text-xs font-semibold text-secondary mb-3">
                  {sol.tagline}
                </p>
                <p className="text-xs sm:text-sm text-on-surface-variant mb-6 leading-relaxed">
                  {sol.description}
                </p>

                <div className="mb-6">
                  <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-primary mb-2.5">
                    Core Engineering Deliverables:
                  </div>
                  <ul className="space-y-1.5 sm:space-y-2">
                    {sol.deliverables.map((del, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2 text-xs text-on-surface leading-relaxed">
                        <span className="material-symbols-outlined text-primary text-sm mt-0.5 shrink-0">check_circle</span>
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-outline-variant/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <Link
                  to={sol.caseStudyLink}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
                >
                  View Related Case Studies
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
                <Link
                  to="/contact"
                  className="w-full sm:w-auto text-center text-xs font-semibold px-4 py-2 rounded-full bg-primary text-on-primary hover:opacity-90 transition-all"
                >
                  Request Blueprint
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Consultation Callout */}
        <div className="glass-card p-6 sm:p-10 md:p-12 rounded-2xl sm:rounded-3xl border border-outline-variant/30 text-center max-w-3xl mx-auto shadow-lg">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-2 sm:mb-3">
            Need a Custom Architecture Blueprint?
          </h2>
          <p className="text-xs sm:text-sm text-on-surface-variant max-w-xl mx-auto mb-5 sm:mb-6 leading-relaxed">
            Our principal engineers conduct 45-minute discovery sessions to review your current tech stack, identify bottlenecks, and formulate an actionable implementation plan.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3.5 rounded-full bg-primary text-on-primary font-bold text-xs sm:text-sm hover:shadow-xl transition-all shadow-md shadow-primary/20 w-full sm:w-auto text-center"
          >
            Book Free Architecture Discovery Call
          </Link>
        </div>
      </div>
    </div>
  );
}
