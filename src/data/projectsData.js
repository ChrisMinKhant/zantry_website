export const projectsData = [
  {
    id: 'nexgen-analytics',
    title: 'NexGen Quantitative Analytics',
    client: 'Apex Capital Partners',
    category: 'Fintech',
    categoryLabel: 'FINTECH / ALGORITHMIC DATA',
    tagline: 'Ultra low-latency market analytics and risk simulation engine.',
    summary: 'A mission-critical financial analytics suite processing 45,000+ ticks/sec with real-time portfolio stress testing and sub-millisecond charting for institutional quantitative traders.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    tags: ['React 19', 'TypeScript', 'WebSockets', 'Python FastAPI', 'TimescaleDB', 'Redis', 'Docker'],
    year: '2025',
    timeline: '5 months',
    featured: true,
    metrics: [
      { label: 'Latency', value: '< 18ms', change: '85% reduction' },
      { label: 'Daily Volume', value: '$140M+', change: 'Processed' },
      { label: 'System Uptime', value: '99.999%', change: 'High Availability' }
    ],
    challenge: 'The client’s legacy desktop terminal suffered from 2.4-second render delays during high market volatility, resulting in execution slippage and client dissatisfaction.',
    solution: 'Engineered a cloud-native WebSocket streaming pipeline utilizing Web Workers for off-thread calculation, canvas-based high-speed financial charting, and memory-cached risk matrix computations.',
    keyFeatures: [
      'Real-time Level-2 order book depth visualization with zero UI freezing',
      'Dynamic Monte Carlo risk simulation executed on serverless workers',
      'Configurable multi-monitor institutional workspace with state persistence',
      'Automated algorithmic order alert triggers with webhook integrations'
    ],
    testimonial: {
      quote: 'Zantry Tech transformed our trading desk speed. The sub-millisecond charts gave our quantitative managers an undeniable market edge.',
      author: 'Jonathan Reynolds',
      role: 'Head of Quantitative Trading, Apex Capital'
    }
  },
  {
    id: 'luxe-retail',
    title: 'Luxe Omnichannel Commerce Platform',
    client: 'Maison Aurum Global',
    category: 'E-commerce',
    categoryLabel: 'E-COMMERCE / HEADLESS UX',
    tagline: 'Next-generation luxury shopping platform with unified inventory.',
    summary: 'A headless digital flagship delivering sub-second page transitions, dynamic localized currencies, and AR product visualization for an international luxury retail brand.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    tags: ['React', 'Next.js', 'Node.js', 'GraphQL', 'PostgreSQL', 'Stripe Terminal', 'TailwindCSS'],
    year: '2025',
    timeline: '4 months',
    featured: true,
    metrics: [
      { label: 'Conversion Rate', value: '+42.8%', change: 'Post-launch' },
      { label: 'LCP Load Time', value: '0.62s', change: 'Global Average' },
      { label: 'Mobile Sales', value: '+68%', change: 'Year-over-Year' }
    ],
    challenge: 'The client faced cart abandonment rates above 72% caused by clunky monolith infrastructure, slow mobile load times, and unsynchronized physical vs digital store inventory.',
    solution: 'Designed and deployed a headless API-first commerce stack featuring edge-rendered product catalogs, instant optimistic checkout flows, and automated multi-warehouse inventory reconciliation.',
    keyFeatures: [
      'Edge-cached micro-frontend architecture with sub-second catalog navigation',
      'Interactive 3D product previews powered by WebGL',
      'One-click multi-currency biometric checkout with Stripe integration',
      'Real-time physical boutique inventory locator and VIP booking'
    ],
    testimonial: {
      quote: 'Our bounce rates plummeted instantly. Zantry Tech delivered the exact luxury aesthetic our brand commands with blistering technical performance.',
      author: 'Claire Vance',
      role: 'Global VP of E-Commerce, Maison Aurum'
    }
  },
  {
    id: 'scale-free-cloud',
    title: 'Scale-Free Cloud Mesh & DevOps Infrastructure',
    client: 'HyperScale Systems',
    category: 'Cloud',
    categoryLabel: 'CLOUD / INFRASTRUCTURE & SRE',
    tagline: 'Multi-region zero-trust Kubernetes topology with automated scaling.',
    summary: 'Architected and migrated an enterprise SaaS platform across 3 continents, achieving automated multi-region failover, 40% cost reduction, and continuous blue-green deployments.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    tags: ['Go', 'Terraform', 'Kubernetes', 'AWS EKS', 'Prometheus', 'Grafana', 'Envoy Proxy'],
    year: '2024',
    timeline: '6 months',
    featured: true,
    metrics: [
      { label: 'Cloud Cost', value: '-41.5%', change: 'Cost Savings' },
      { label: 'Failover Time', value: '< 2.4s', change: 'Zero Data Loss' },
      { label: 'Deploy Frequency', value: '25x/day', change: 'Automated CI/CD' }
    ],
    challenge: 'Rapid growth caused frequent unannounced outages, runaway cloud billing, and terrifying manual database failovers during peak traffic spikes.',
    solution: 'Architected an Infrastructure-as-Code Terraform blueprint with automated GitOps pipelines (ArgoCD), Envoy service mesh for traffic shaping, and self-healing multi-AZ cluster scaling.',
    keyFeatures: [
      'Multi-cluster Kubernetes mesh across US, EU, and APAC zones',
      'Automated blue-green deployments with zero-downtime database migrations',
      'Unified Prometheus & Grafana distributed telemetry with anomaly alerts',
      'Automated spot-instance orchestrator saving over $18,000 monthly'
    ],
    testimonial: {
      quote: 'We survived our biggest Black Friday traffic spike in company history with 0% dropped packets and flat cloud spend. Best architectural investment we ever made.',
      author: 'Marcus Vance',
      role: 'VP of Infrastructure, HyperScale'
    }
  },
  {
    id: 'cognitive-ops-ai',
    title: 'CognitiveOps Enterprise AI Pipeline',
    client: 'Synapse Global Health',
    category: 'Enterprise',
    categoryLabel: 'AI / MACHINE LEARNING & LLM',
    tagline: 'HIPAA-compliant generative AI agent workflow for medical audits.',
    summary: 'A private, zero-data-leakage AI agent pipeline designed to automate unstructured clinical record parsing, diagnostic coding, and compliance reporting at enterprise scale.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    tags: ['Python', 'PyTorch', 'LangChain', 'pgvector', 'FastAPI', 'React', 'Docker'],
    year: '2025',
    timeline: '3 months',
    featured: true,
    metrics: [
      { label: 'Audit Speed', value: '14x faster', change: 'Time Saved' },
      { label: 'Accuracy', value: '99.4%', change: 'Audit Precision' },
      { label: 'Cost per File', value: '-82%', change: 'Direct Savings' }
    ],
    challenge: 'Manual medical chart audits required over 45 minutes per record, creating severe backlog delays and tens of thousands in human auditing overhead.',
    solution: 'Constructed an on-premise, vector-embedded RAG retrieval architecture with multi-stage LLM verification that extracts clinical codes with strict citation traceability.',
    keyFeatures: [
      'Self-hosted privacy-preserving LLM pipeline with zero external telemetry',
      'Interactive audit workbench highlighting source document evidence',
      'Vector semantic search across 2.5M historical medical files',
      'Automated compliance reporting with human-in-the-loop review queues'
    ],
    testimonial: {
      quote: 'Zantry Tech built what two previous agencies claimed was impossible within our strict HIPAA security constraints.',
      author: 'Dr. Evelyn Morales',
      role: 'Chief Medical Officer, Synapse Health'
    }
  },
  {
    id: 'aether-pay-vault',
    title: 'Aether Pay & Cryptographic Asset Vault',
    client: 'Aether Financial Network',
    category: 'Fintech',
    categoryLabel: 'FINTECH / MOBILE & SECURITY',
    tagline: 'High-security biometric digital asset custody and cross-border settlement.',
    summary: 'A cross-platform mobile application and secure cryptographic key vault engineered for institutions, featuring multi-signature approval flows and real-time FX settlement.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
    tags: ['React Native', 'TypeScript', 'Rust', 'Node.js', 'AWS KMS', 'Biometrics', 'TailwindCSS'],
    year: '2024',
    timeline: '5 months',
    featured: false,
    metrics: [
      { label: 'App Rating', value: '4.9 ★', change: 'App Store' },
      { label: 'Custody Volume', value: '$85M+', change: 'Secured Assets' },
      { label: 'Security Audits', value: '100%', change: 'Zero Vulnerabilities' }
    ],
    challenge: 'Institutions demanded a mobile custody solution that met strict bank-grade key management protocols without cumbersome offline hardware tokens.',
    solution: 'Engineered a multi-party computation (MPC) key-splitting model in Rust with hardware-level biometric enclave encryption and zero-knowledge identity proofing.',
    keyFeatures: [
      'Secure Enclave & Biometric authentication with hardware key binding',
      'Instant cross-border multi-currency conversion with real-time FX rates',
      'Multi-signature governance approval workflows for corporate treasuries',
      'Offline-first architecture with cryptographically signed local state'
    ],
    testimonial: {
      quote: 'The security architecture is pristine. Our institutional partners passed third-party pen testing on the first attempt.',
      author: 'David Chen',
      role: 'Chief Security Officer, Aether Financial'
    }
  },
  {
    id: 'apex-logistics-twin',
    title: 'Apex IoT Telematics & Supply Chain Twin',
    client: 'Titan Logistics World',
    category: 'Enterprise',
    categoryLabel: 'ENTERPRISE / IOT & TELEMATICS',
    tagline: 'Real-time telemetry and 3D digital twin of 18,000 global freight assets.',
    summary: 'A high-throughput IoT ingest platform and interactive 3D map interface streaming sensor data from container ships, trucks, and cold-storage distribution hubs.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    tags: ['React', 'Three.js', 'Node.js', 'Apache Kafka', 'Cassandra', 'Mapbox GL', 'Web Workers'],
    year: '2025',
    timeline: '6 months',
    featured: false,
    metrics: [
      { label: 'Fuel Saved', value: '-19.2%', change: 'Route Optimization' },
      { label: 'Active Sensors', value: '18,500+', change: 'Live Ingestion' },
      { label: 'Cold-Chain Loss', value: '-94%', change: 'Spoilage Prevented' }
    ],
    challenge: 'Siloed telematics data caused severe delays in alerting operators to temperature fluctuations in perishable pharmaceutical and food freight.',
    solution: 'Constructed an Apache Kafka streaming event hub capable of ingesting 120,000 telemetry pings/min with automated geospatial route recalculation and 3D digital twin tracking.',
    keyFeatures: [
      'Interactive 3D digital twin rendering global fleet locations with WebGL',
      'Predictive route re-routing based on weather and port congestion indices',
      'Automated cold-chain threshold triggers sending instant SMS/Pager alerts',
      'Executive analytics dashboards displaying carbon emissions and efficiency'
    ],
    testimonial: {
      quote: 'We cut perishable cargo losses by over $3.2M in the first 6 months alone. The ROI of this platform exceeded all our expectations.',
      author: 'Elena Rostova',
      role: 'Director of Global Operations, Titan Logistics'
    }
  }
];

export const portfolioStats = [
  { label: 'Client Valuation Impact', value: '$250M+' },
  { label: 'Production Systems Built', value: '45+' },
  { label: 'Average Uptime Delivered', value: '99.99%' },
  { label: 'Repeat Enterprise Clients', value: '94%' }
];

export const techStackCategories = [
  {
    category: 'Frontend & Web',
    technologies: ['React 19', 'Next.js', 'TypeScript', 'Tailwind CSS', 'WebGL / Three.js', 'Vite']
  },
  {
    category: 'Backend & APIs',
    technologies: ['Node.js', 'Go (Golang)', 'Python / FastAPI', 'GraphQL', 'RESTful Microservices', 'Rust']
  },
  {
    category: 'Cloud & Infrastructure',
    technologies: ['AWS Cloud', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD Pipelines']
  },
  {
    category: 'Databases & Streaming',
    technologies: ['PostgreSQL', 'Redis', 'TimescaleDB', 'Apache Kafka', 'pgvector', 'MongoDB']
  }
];
