import { Outlet, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logoImg from '../assets/logo.png';

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setNewsletterSubscribed(false), 4000);
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Process', path: '/process' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/' || location.pathname === '';
    return location.pathname.startsWith(path);
  };

  return (
    <div className="bg-surface text-on-surface font-body-md overflow-x-hidden min-h-screen flex flex-col selection:bg-primary selection:text-on-primary">
      {/* TopNavBar */}
      <header className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-xl border-b border-outline-variant/20 h-16 sm:h-20 transition-all">
        <nav className="flex justify-between items-center max-w-[1280px] mx-auto px-4 sm:px-6 md:px-margin-desktop h-full relative">
          <Link to="/" className="flex items-center gap-2.5 sm:gap-3 z-50 group" onClick={() => setIsMobileMenuOpen(false)}>
            <img 
              src={logoImg} 
              alt="Zantry Tech" 
              className="h-8 w-8 sm:h-10 sm:w-10 object-contain group-hover:scale-105 transition-transform" 
            />
            <div className="flex flex-col">
              <span className="font-headline-md text-base sm:text-xl font-bold text-primary tracking-tight leading-none">
                Zantry Tech
              </span>
              <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest text-secondary mt-0.5">
                Engineering Lab
              </span>
            </div>
          </Link>
          
          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <li key={link.name}>
                  <Link 
                    className={`font-label-md text-sm font-semibold transition-all duration-200 relative py-1 ${
                      active 
                        ? 'text-primary' 
                        : 'text-secondary hover:text-primary'
                    }`}
                    to={link.path}
                  >
                    {link.name}
                    {active && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"></span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden lg:flex items-center gap-4">
            <Link 
              to="/contact" 
              className="bg-primary text-on-primary px-6 py-2.5 rounded-full font-label-md text-sm font-bold hover:shadow-lg hover:opacity-90 active:scale-95 transition-all shadow-primary/20 shadow-md"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            className="lg:hidden z-50 flex items-center justify-center w-10 h-10 text-primary hover:bg-surface-container-high active:bg-surface-container-highest rounded-full transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay with Touch Scrolling */}
      <div 
        className={`fixed inset-0 bg-surface/98 backdrop-blur-2xl z-40 transition-all duration-300 flex flex-col lg:hidden overflow-y-auto px-6 pt-20 pb-10 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center my-auto w-full max-w-sm mx-auto space-y-6">
          <ul className="flex flex-col items-center gap-2.5 w-full">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <li key={link.name} className="w-full text-center">
                  <Link 
                    onClick={toggleMobileMenu} 
                    className={`block py-3 px-5 rounded-2xl text-lg font-bold transition-all active:scale-98 ${
                      active 
                        ? 'bg-primary text-on-primary shadow-md shadow-primary/20' 
                        : 'text-on-surface-variant hover:text-primary hover:bg-surface-container active:bg-surface-container-high'
                    }`}
                    to={link.path}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link 
            onClick={toggleMobileMenu} 
            to="/contact" 
            className="w-full text-center bg-primary text-on-primary py-3.5 px-8 rounded-full text-base font-bold hover:opacity-90 active:scale-95 transition-all shadow-xl shadow-primary/20"
          >
            Book Consultation
          </Link>
        </div>
      </div>

      <main className="flex-grow pt-16 sm:pt-20">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-low border-t border-outline-variant/20 w-full mt-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 max-w-[1280px] mx-auto px-4 sm:px-6 md:px-margin-desktop py-12 sm:py-16">
          {/* Col 1: Brand Info */}
          <div className="space-y-4 sm:col-span-2">
            <div className="flex items-center gap-3">
              <img 
                src={logoImg} 
                alt="Zantry Tech" 
                className="h-8 w-8 object-contain" 
              />
              <span className="font-headline-sm text-lg font-bold text-primary">Zantry Tech</span>
            </div>
            <p className="font-body-md text-on-surface-variant max-w-sm text-xs sm:text-sm leading-relaxed">
              Engineering excellence for modern enterprises. We design, architect, and deploy high-performance software systems that scale effortlessly.
            </p>
            <div className="flex gap-3 text-on-surface-variant">
              <a href="https://github.com/phyopaingsoe95" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors" title="GitHub">
                <span className="material-symbols-outlined text-lg">code</span>
              </a>
              <Link to="/contact" className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors" title="Email Us">
                <span className="material-symbols-outlined text-lg">mail</span>
              </Link>
              <Link to="/contact" className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors" title="Office">
                <span className="material-symbols-outlined text-lg">location_on</span>
              </Link>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs font-bold text-primary uppercase tracking-widest mb-3 sm:mb-4">Navigation</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-on-surface-variant">
              <li><Link className="hover:text-primary transition-colors py-0.5 inline-block" to="/">Home</Link></li>
              <li><Link className="hover:text-primary transition-colors py-0.5 inline-block" to="/portfolio">Portfolio &amp; Case Studies</Link></li>
              <li><Link className="hover:text-primary transition-colors py-0.5 inline-block" to="/solutions">Solutions Matrix</Link></li>
              <li><Link className="hover:text-primary transition-colors py-0.5 inline-block" to="/about">About Us</Link></li>
              <li><Link className="hover:text-primary transition-colors py-0.5 inline-block" to="/process">Process Lifecycle</Link></li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="text-xs font-bold text-primary uppercase tracking-widest mb-3 sm:mb-4">Capabilities</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-on-surface-variant">
              <li><Link className="hover:text-primary transition-colors py-0.5 inline-block" to="/services">Custom Software</Link></li>
              <li><Link className="hover:text-primary transition-colors py-0.5 inline-block" to="/services">Cloud &amp; DevOps</Link></li>
              <li><Link className="hover:text-primary transition-colors py-0.5 inline-block" to="/services">AI &amp; Machine Learning</Link></li>
              <li><Link className="hover:text-primary transition-colors py-0.5 inline-block" to="/services">Mobile Engineering</Link></li>
              <li><Link className="hover:text-primary transition-colors py-0.5 inline-block" to="/services">Security &amp; Auditing</Link></li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div className="space-y-3 sm:col-span-2 lg:col-span-1">
            <h4 className="text-xs font-bold text-primary uppercase tracking-widest mb-2 sm:mb-4">Tech Insights</h4>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Subscribe to our engineering memo for quarterly architectural benchmarks and case studies.
            </p>
            {newsletterSubscribed ? (
              <div className="p-3 bg-green-100 text-green-800 rounded-xl text-xs font-semibold">
                ✓ Thank you for subscribing!
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="relative">
                <input 
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full bg-surface-container-high border border-outline-variant/30 rounded-full px-4 py-2.5 pr-10 text-xs focus:ring-1 focus:ring-primary outline-none" 
                  placeholder="name@company.com" 
                  type="email"
                  required
                />
                <button 
                  type="submit"
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 w-7 h-7 bg-primary text-on-primary rounded-full flex items-center justify-center hover:opacity-90 active:scale-95"
                  aria-label="Subscribe"
                >
                  <span className="material-symbols-outlined text-xs">arrow_forward</span>
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-margin-desktop py-6 border-t border-outline-variant/20 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-on-surface-variant text-center sm:text-left">
          <p>© {new Date().getFullYear()} Zantry Tech. Engineering Excellence.</p>
          <div className="flex gap-6">
            <Link className="hover:text-primary transition-colors py-1" to="/privacy-policy">Privacy Policy</Link>
            <Link className="hover:text-primary transition-colors py-1" to="/terms-of-service">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
