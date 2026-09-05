/**
 * Zantry Tech Portfolio Data Object
 * Structured data strictly adhering to Content Specification Blueprint (Section 9)
 */

const portfolioContent = {
  metadata: {
    title: "Zantry Tech | Bespoke Engineering & System Architecture",
    description: "Bespoke engineering practice delivering tailored Software Development, Application Development, and System Development. Life is too short to be confused.",
    ogTitle: "Zantry Tech — Engineering Systems with Tactile Precision",
    ogDescription: "Tailored Software, Mobile/Web Applications, and Mission-Critical Systems commissioned directly by enterprise clients.",
    ogType: "website",
    contactEmail: "zantrytech@gmail.com",
    contactPhone: "+959790383481",
  },

  hero: {
    brandName: "ZANTRY TECH",
    tagline: "Technical Consultancy",
    motto: "Life is too short to be confused",
    headline: "Engineering Systems with Tactile Precision",
    subheadline: "Zantry Tech is a bespoke engineering practice delivering tailored Software Development, Application Development, and System Development. There is currently no in-house off-the-shelf product or SaaS system for user consumption — we build tailored software, applications, and mission-critical systems commissioned directly by our clients, engineered with rigorous clarity so life is never spent in confusion.",
    primaryCta: { label: "Book Consultation", target: "#contact" },
    secondaryCta: { label: "Explore Case Studies", target: "#work" },
    pillars: ["Software Development", "Application Development", "System Development"],
  },

  kpis: [
    { value: "99.99%", label: "Uptime SLA Achieved", ref: "SLA-01", description: "Multi-region active-active clusters across critical banking & health infrastructure." },
    { value: "12+", label: "Years Production Architecture", ref: "EXP-02", description: "Direct partner involvement in greenfield architecture and zero-loss migrations." },
    { value: "$85M+", label: "Transaction Volume Scaled", ref: "VOL-03", description: "Audited processing pipelines across decentralized and clearing protocols." },
    { value: "320ms", label: "Global Median Latency", ref: "LAT-04", description: "Deterministic edge compute response across North America, EU, and APAC." }
  ],

  clients: [
    { name: "Archetype", style: "font-serif text-ink-secondary" },
    { name: "MONOLITH", style: "font-mono-code font-bold tracking-widest text-ink-secondary" },
    { name: "Veloce Labs", style: "font-serif italic text-ink-secondary" },
    { name: "STRATUM.IO", style: "font-mono-code font-medium text-ink-secondary" },
    { name: "KineticData", style: "font-serif font-medium text-ink-secondary" },
    { name: "OVERLAND//", style: "font-mono-code text-ink-secondary" }
  ],

  caseStudies: [
    {
      id: "hyperion-cloud-core",
      badge: "Featured Deployment // Case 01",
      title: "Hyperion Cloud Core — Deterministic Ledger Pipeline",
      client: "Vertex Financial",
      vertical: "FinTech",
      status: "Production Active",
      challenge: "Legacy ledger bottlenecks were stalling transaction processing during peak market openings, struggling to sustain 40,000 req/sec with intolerable 1.4s tail-latency spikes and cascading lock contention.",
      solution: "Rebuilt the ingestion architecture with an event-driven Rust/Kafka pipeline utilizing lock-free concurrent queues, zero-copy serialization, and TimescaleDB analytical partitioning.",
      techStack: ["Rust", "Apache Kafka", "TimescaleDB", "Docker", "Terraform"],
      ref: "RFC-8812",
      metrics: [
        { label: "Latency Reduction", value: "-64%", highlight: true },
        { label: "Ledger Consistency", value: "99.999%", highlight: false },
        { label: "Throughput Peak", value: "112,000 req/s", highlight: false }
      ]
    },
    {
      id: "aetheria-sensor-fabric",
      badge: "Deployment // Case 02",
      title: "Aetheria Sensor Fabric — Edge Telemetry Engine",
      client: "Omnilogic Bio",
      vertical: "MedTech / IoT",
      status: "Production Active",
      challenge: "Edge telemetry data loss across remote medical clinic hardware during unstable WAN connectivity, causing audit compliance failures and data drift.",
      solution: "Engineered an offline-first synchronization engine powered by SQLite-Wasm and state-based CRDT reconciliation protocols for resilient, zero-loss telemetry backfill.",
      techStack: ["TypeScript", "WebAssembly", "SQLite-Wasm", "gRPC", "CRDT"],
      ref: "RFC-9041",
      metrics: [
        { label: "Telemetry Fidelity", value: "+99.4%", highlight: true },
        { label: "Conflict Collisions", value: "0", highlight: false },
        { label: "Active Edge Nodes", value: "14,200 devices", highlight: false }
      ]
    },
    {
      id: "kallisto-design-engine",
      badge: "Deployment // Case 03",
      title: "Kallisto Design Engine — Headless Token Compiler",
      client: "Forma Design Group",
      vertical: "Enterprise SaaS",
      challenge: "Severe design-to-production token drift and recurring visual regression across cross-platform mobile and web design systems.",
      solution: "Architected a headless design token compiler operating on AST syntax tree transformations with WebGL visual differential inspection engines.",
      techStack: ["Next.js", "WebGL", "Tailwind CSS", "AST Parser", "Node.js"],
      ref: "RFC-7734",
      metrics: [
        { label: "Release Velocity", value: "3.8x faster", highlight: true },
        { label: "Visual Regressions", value: "0", highlight: false },
        { label: "Compiled Components", value: "2,400+", highlight: false }
      ]
    }
  ],

  services: [
    {
      id: "pillar-01",
      code: "PILLAR-01",
      title: "Software Development",
      icon: "terminal",
      summary: "Bespoke back-end engines, transactional frameworks, high-reliability microservices, and specialized algorithmic code crafted explicitly around client domain logic. Built from scratch with zero bloat.",
      deliverables: [
        "Bespoke Algorithmic Pipelines",
        "High-Concurrency Rust & Go Cores",
        "Custom API & Protocol Engines",
        "Clean Invariant Codebases"
      ],
      tag: "Custom Core Software"
    },
    {
      id: "pillar-02",
      code: "PILLAR-02",
      title: "Application Development",
      icon: "devices",
      summary: "Commissioned mobile applications, responsive web clients, and executive portals. Designed with humanistic tactile aesthetics, sub-second latency, and intuitive interfaces that eliminate cognitive confusion.",
      deliverables: [
        "Bespoke Web & Mobile Clients",
        "E-Ink & Editorial Precision UI",
        "Offline-First Client State (CRDT)",
        "Frictionless User Workflows"
      ],
      tag: "Tailored Web & Mobile"
    },
    {
      id: "pillar-03",
      code: "PILLAR-03",
      title: "System Development",
      icon: "hub",
      summary: "End-to-end distributed infrastructure, failover state machines, multi-region data topologies, and mission-critical networks architected for enterprise client organizations.",
      deliverables: [
        "Distributed Architecture & Consensus",
        "Zero-Downtime Migration Design",
        "Edge Mesh & IoT Coordination",
        "Resilient Failover Topologies"
      ],
      tag: "Infrastructure & Networks"
    }
  ],

  process: [
    { step: "01", phase: "Phase Alpha", title: "Discovery & Vector Analysis", description: "Direct stakeholder interviews, telemetry profiling, constraint isolation, and mathematical modeling of throughput bottlenecks.", output: "Output: Vector Brief & SLA Target" },
    { step: "02", phase: "Phase Beta", title: "Architectural Blueprints", description: "Formal RFC documentation, data structure contracts, state diagrams, and proof-of-concept benchmarks validating feasibility.", output: "Output: RFC Specification Doc" },
    { step: "03", phase: "Phase Gamma", title: "Precision Engineering", description: "Test-driven development, modular implementation with strict invariant checks, continuous integration fuzzing, and benchmark reviews.", output: "Output: Audited Source Code" },
    { step: "04", phase: "Phase Delta", title: "Hardening & Deployment", description: "Chaos simulation, canary routing cutovers, telemetry dashboard instrumentation, and 30-day post-launch active surveillance.", output: "Output: Zero-Loss Production Handover" }
  ],

  testimonials: [
    {
      quote: "Zantry Tech rebuilt our core telemetry pipeline ahead of schedule. Latency dropped by half within hours of deployment. Their grasp of distributed systems is rare.",
      author: "Marcus Vance",
      title: "Chief Technology Officer",
      company: "Vertex Financial",
      period: "Q2 2024"
    },
    {
      quote: "The level of engineering rigor and aesthetic restraint they brought to our platform set a brand new benchmark for what enterprise design tools should feel like.",
      author: "Elena Rostova",
      title: "VP of Product",
      company: "Forma Design Group",
      period: "Q1 2024"
    }
  ],

  contact: {
    directEmail: "zantrytech@gmail.com",
    directPhones: ["+959790383481", "+959965157402"],
    displayPhone: "+95 9 790 383 481 / +95 9 965 157 402",
    operatingHubs: "Rangoon (UTC+6:30)",
    pgp: "PGP Fingerprint: 4E91 B701 C59A 3D24"
  }
};

if (typeof window !== "undefined") {
  window.portfolioContent = portfolioContent;
}
