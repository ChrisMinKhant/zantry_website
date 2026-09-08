import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Services() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-5');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => {
      el.classList.add('opacity-0', 'translate-y-5', 'transition-all', 'duration-700', 'ease-out');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="pt-20 sm:pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 md:px-gutter py-12 sm:py-20 max-w-container-max mx-auto text-center overflow-hidden">
        <div className="reveal">
          <span className="inline-block bg-secondary-container text-on-secondary-container px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 sm:mb-6">
            Capabilities &amp; Engineering Disciplines
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-4xl mx-auto mb-4 sm:mb-6 text-primary font-extrabold tracking-tight leading-tight">
            Precision Engineering for the Digital Frontier
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
            We blend rigorous software architecture with world-class user experience design to engineer scalable, resilient, and enterprise-grade software products.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 w-full sm:w-auto">
            <Link to="/contact" className="inline-block bg-primary text-on-primary px-8 py-3.5 rounded-full font-bold text-xs sm:text-sm shadow-lg hover:shadow-xl transition-all shadow-primary/20 text-center">
              Start Your Project
            </Link>
            <Link to="/portfolio" className="inline-block glass-card border border-outline-variant/40 px-8 py-3.5 rounded-full font-bold text-xs sm:text-sm text-primary hover:bg-surface-container transition-all text-center">
              View Portfolio &amp; Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Bento Grid Services */}
      <section className="px-4 sm:px-6 md:px-gutter pb-16 sm:pb-24 max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-8">
          {/* Custom Software */}
          <div className="md:col-span-7 glass-card rounded-2xl overflow-hidden border border-outline-variant/30 reveal flex flex-col justify-between">
            <div className="p-5 sm:p-8">
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary text-on-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-xl">code</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-primary">Custom Enterprise Software</h3>
              </div>
              <p className="text-xs sm:text-sm text-on-surface-variant mb-5 leading-relaxed">
                Bespoke enterprise applications architected for extreme concurrency, continuous availability, and minimal maintenance overhead.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 mb-6 sm:mb-8">
                <li className="flex items-center gap-2 text-xs font-semibold text-on-surface">
                  <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                  Microservices Architecture
                </li>
                <li className="flex items-center gap-2 text-xs font-semibold text-on-surface">
                  <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                  Real-time Data Streaming
                </li>
                <li className="flex items-center gap-2 text-xs font-semibold text-on-surface">
                  <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                  Legacy Stack Modernization
                </li>
                <li className="flex items-center gap-2 text-xs font-semibold text-on-surface">
                  <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                  API Gateways &amp; WebSockets
                </li>
              </ul>
              <Link to="/contact" className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:underline">
                Explore Capability <span className="material-symbols-outlined text-xs">arrow_forward</span>
              </Link>
            </div>
            <div className="h-44 sm:h-56 bg-surface-container overflow-hidden">
              <img
                alt="Code interface"
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80"
              />
            </div>
          </div>

          {/* UI/UX & Design Systems */}
          <div className="md:col-span-5 glass-card rounded-2xl overflow-hidden border border-outline-variant/30 reveal flex flex-col justify-between">
            <div className="h-44 sm:h-56 bg-surface-container overflow-hidden">
              <img
                alt="UI Design process"
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=80"
              />
            </div>
            <div className="p-5 sm:p-8">
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary text-on-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-xl">palette</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-primary">UI/UX Design Systems</h3>
              </div>
              <p className="text-xs sm:text-sm text-on-surface-variant mb-5 leading-relaxed">
                Crafting digital experiences that bridge complex technical capabilities and effortless human interaction with pixel-perfect design systems.
              </p>
              <Link to="/portfolio" className="inline-block text-center bg-primary text-on-primary w-full py-3 rounded-xl font-bold text-xs hover:opacity-90 transition-all">
                View Portfolio Case Studies
              </Link>
            </div>
          </div>

          {/* Cloud Infrastructure */}
          <div className="md:col-span-5 glass-card rounded-2xl overflow-hidden border border-outline-variant/30 reveal p-5 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary text-on-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-xl">cloud</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-primary">Cloud Infrastructure &amp; SRE</h3>
              </div>
              <p className="text-xs sm:text-sm text-on-surface-variant mb-5 leading-relaxed">
                Resilient, automated multi-region cloud topologies engineered for 99.999% availability and proactive security.
              </p>
              <div className="space-y-2.5 mb-6">
                <div className="flex justify-between items-center p-3 bg-surface-container rounded-xl text-xs font-semibold">
                  <span>Serverless &amp; Kubernetes Mesh</span>
                  <span className="material-symbols-outlined text-primary text-sm">bolt</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-surface-container rounded-xl text-xs font-semibold">
                  <span>GitOps CI/CD Automation</span>
                  <span className="material-symbols-outlined text-primary text-sm">settings_input_component</span>
                </div>
              </div>
            </div>
            <Link to="/contact" className="inline-block text-center border border-primary text-primary w-full py-3 rounded-xl font-bold text-xs hover:bg-primary/5 transition-colors">
              Schedule Infrastructure Audit
            </Link>
          </div>

          {/* Mobile Apps */}
          <div className="md:col-span-7 glass-card rounded-2xl overflow-hidden border border-outline-variant/30 reveal flex flex-col md:flex-row">
            <div className="md:w-1/2 p-5 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary text-on-primary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-xl">smartphone</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-primary">Mobile Applications</h3>
                </div>
                <p className="text-xs sm:text-sm text-on-surface-variant mb-5 leading-relaxed">
                  Native and cross-platform mobile solutions leveraging biometric secure enclaves, offline sync, and GPU hardware acceleration.
                </p>
              </div>
              <div>
                <div className="flex gap-2 mb-5">
                  <div className="bg-secondary-container p-2 rounded-lg text-on-secondary-container"><span className="material-symbols-outlined text-base">phone_iphone</span></div>
                  <div className="bg-secondary-container p-2 rounded-lg text-on-secondary-container"><span className="material-symbols-outlined text-base">tablet_mac</span></div>
                  <div className="bg-secondary-container p-2 rounded-lg text-on-secondary-container"><span className="material-symbols-outlined text-base">watch</span></div>
                </div>
                <Link to="/contact" className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline">
                  Explore Mobile Builds <span className="material-symbols-outlined text-xs">arrow_forward</span>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 bg-surface-container flex items-center justify-center overflow-hidden h-48 md:h-auto">
              <img
                alt="Mobile App UI"
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Ethos */}
      <section className="bg-surface-container-low py-12 sm:py-20 border-y border-outline-variant/20">
        <div className="px-4 sm:px-6 md:px-gutter max-w-container-max mx-auto text-center reveal">
          <span className="text-xs font-bold uppercase tracking-widest text-secondary mb-2 block">Standard of Execution</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary mb-8 sm:mb-12">Our Engineering Ethos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="text-left glass-card p-5 sm:p-6 rounded-2xl border border-outline-variant/20">
              <span className="text-primary font-display-lg opacity-20 block mb-1 text-2xl sm:text-3xl font-extrabold">01</span>
              <h4 className="text-base font-bold text-primary mb-1.5">Discovery</h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">Deep technical audit to align system architecture with commercial objectives.</p>
            </div>
            <div className="text-left glass-card p-5 sm:p-6 rounded-2xl border border-outline-variant/20">
              <span className="text-primary font-display-lg opacity-20 block mb-1 text-2xl sm:text-3xl font-extrabold">02</span>
              <h4 className="text-base font-bold text-primary mb-1.5">System Design</h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">Defining technology stacks, API contracts, and database schemas with surgical precision.</p>
            </div>
            <div className="text-left glass-card p-5 sm:p-6 rounded-2xl border border-outline-variant/20">
              <span className="text-primary font-display-lg opacity-20 block mb-1 text-2xl sm:text-3xl font-extrabold">03</span>
              <h4 className="text-base font-bold text-primary mb-1.5">Agile Sprints</h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">Continuous delivery sprints with automated test suites, type checking, and peer code reviews.</p>
            </div>
            <div className="text-left glass-card p-5 sm:p-6 rounded-2xl border border-outline-variant/20">
              <span className="text-primary font-display-lg opacity-20 block mb-1 text-2xl sm:text-3xl font-extrabold">04</span>
              <h4 className="text-base font-bold text-primary mb-1.5">Continuous SRE</h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">Proactive telemetry, automated zero-downtime deploys, and ongoing latency optimization.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-4 sm:px-6 md:px-gutter py-12 sm:py-20 max-w-container-max mx-auto reveal">
        <div className="bg-primary text-on-primary rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 shadow-2xl text-center md:text-left">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-2.5 leading-tight">Ready to build the frontier?</h2>
            <p className="text-xs sm:text-sm md:text-base text-on-primary/80 max-w-xl leading-relaxed">
              Connect directly with our engineering leadership to review your specifications and receive an architectural blueprint.
            </p>
          </div>
          <div className="w-full sm:w-auto shrink-0">
            <Link to="/contact" className="w-full sm:w-auto inline-block bg-white text-center text-primary px-8 py-3.5 rounded-full font-bold text-xs sm:text-sm hover:bg-white/90 transition-all shadow-lg">
              Schedule Architecture Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
