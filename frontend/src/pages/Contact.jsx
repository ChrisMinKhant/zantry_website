import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    budget: '$25k - $50k',
    timeline: 'Within 3 months',
    service: 'Enterprise Software Dev',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const budgetOptions = ['< $25k', '$25k - $50k', '$50k - $100k', '$100k+'];
  const timelineOptions = ['Immediately', 'Within 1 month', 'Within 3 months', 'Flexible'];
  const servicesOptions = [
    'Enterprise Software Dev',
    'Cloud Architecture & DevOps',
    'AI / Machine Learning Integration',
    'High-Performance Web App',
    'Mobile Application (iOS/Android)',
    'Technical Due Diligence & Audit'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-20 sm:pt-24 pb-16 sm:pb-20 min-h-screen">
      <div className="max-w-container-max mx-auto px-4 sm:px-6 md:px-gutter">
        {/* Header */}
        <div className="mb-10 sm:mb-14 text-center md:text-left max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold uppercase tracking-widest mb-3.5">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            Direct Engineering Access
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-primary mb-3 sm:mb-4 tracking-tight leading-tight">
            Let’s Build Something Exceptional Together
          </h1>
          <p className="text-on-surface-variant text-xs sm:text-base md:text-lg leading-relaxed">
            Whether you need a dedicated engineering team, a cloud infrastructure overhaul, or an AI workflow built from scratch, our architects are ready to collaborate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-start">
          {/* Left Column: Direct Info & Booking */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            <div className="glass-card p-5 sm:p-8 rounded-2xl border border-outline-variant/30 shadow-lg space-y-5 sm:space-y-6">
              <h3 className="text-base sm:text-lg font-bold text-primary border-b border-outline-variant/20 pb-3">
                Communication Channels
              </h3>

              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary text-on-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-xl">mail</span>
                </div>
                <div>
                  <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-secondary">General &amp; Technical Inquiries</div>
                  <a className="text-sm sm:text-base font-bold text-primary hover:underline block mt-0.5" href="mailto:hello@zantry.tech">
                    hello@zantry.tech
                  </a>
                  <p className="text-[11px] sm:text-xs text-on-surface-variant mt-1">Directly reviewed by senior partners within 4 hours.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary text-on-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-xl">call</span>
                </div>
                <div>
                  <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-secondary">Direct Telephone</div>
                  <a className="text-sm sm:text-base font-bold text-primary hover:underline block mt-0.5" href="tel:+15551234567">
                    +1 (555) 123-4567
                  </a>
                  <p className="text-[11px] sm:text-xs text-on-surface-variant mt-1">Monday – Friday, 9:00 AM – 6:00 PM EST.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary text-on-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-xl">location_on</span>
                </div>
                <div>
                  <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-secondary">Engineering Headquarters</div>
                  <p className="text-sm sm:text-base font-bold text-primary mt-0.5">1200 Innovation Drive, Suite 400</p>
                  <p className="text-[11px] sm:text-xs text-on-surface-variant">Austin, TX 78701, USA</p>
                </div>
              </div>
            </div>

            {/* Quick Guarantees */}
            <div className="p-4 sm:p-6 rounded-2xl bg-surface-container-low border border-outline-variant/20 space-y-2.5 text-[11px] sm:text-xs text-on-surface-variant">
              <div className="flex items-center gap-2 font-bold text-primary text-xs sm:text-sm">
                <span className="material-symbols-outlined text-green-600 text-base">verified</span>
                Our Client Commitments
              </div>
              <p>• Mutual Non-Disclosure Agreement (NDA) executed before project review.</p>
              <p>• Dedicated Lead Architect assigned to every client account.</p>
              <p>• Clean, fully-documented code with 100% client intellectual property ownership.</p>
            </div>
          </div>

          {/* Right Column: Interactive Proposal Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-5 sm:p-8 md:p-10 rounded-2xl border border-outline-variant/30 shadow-xl">
              {submitted ? (
                <div className="py-10 sm:py-12 text-center space-y-3 sm:space-y-4">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-100 text-green-700 rounded-full flex items-center justify-center mx-auto">
                    <span className="material-symbols-outlined text-3xl sm:text-4xl">check</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-primary">Inquiry Successfully Received!</h3>
                  <p className="text-xs sm:text-sm text-on-surface-variant max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-bold text-primary">{formData.name}</span>. A principal architect will review your brief for <span className="font-bold text-primary">{formData.service}</span> and reach out at <span className="font-bold text-primary">{formData.email}</span> within 4 business hours.
                  </p>
                  <div className="pt-4 sm:pt-6">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-full bg-primary text-on-primary text-xs sm:text-sm font-bold hover:opacity-90 transition-all"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-primary mb-1">Project Specification &amp; Inquiry</h3>
                    <p className="text-[11px] sm:text-xs text-on-surface-variant">Fill out the brief below and we'll prepare a custom architectural estimate.</p>
                  </div>

                  {/* Primary Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold uppercase tracking-wider text-primary">Your Name *</label>
                      <input
                        required
                        type="text"
                        placeholder="Elena Rostova"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-xs sm:text-sm bg-surface-container-lowest"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold uppercase tracking-wider text-primary">Business Email *</label>
                      <input
                        required
                        type="email"
                        placeholder="elena@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-xs sm:text-sm bg-surface-container-lowest"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold uppercase tracking-wider text-primary">Company / Organization</label>
                      <input
                        type="text"
                        placeholder="Titan Logistics"
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-xs sm:text-sm bg-surface-container-lowest"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold uppercase tracking-wider text-primary">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-xs sm:text-sm bg-surface-container-lowest"
                      />
                    </div>
                  </div>

                  {/* Primary Service Selection */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-primary">Primary Service Needed</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-xs sm:text-sm bg-surface-container-lowest"
                    >
                      {servicesOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  {/* Estimated Budget Selector */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-primary">Target Budget</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {budgetOptions.map((b) => (
                        <button
                          type="button"
                          key={b}
                          onClick={() => setFormData({...formData, budget: b})}
                          className={`py-2 px-2.5 rounded-xl text-xs font-semibold border transition-all text-center active:scale-95 ${
                            formData.budget === b
                              ? 'bg-primary text-on-primary border-primary shadow-sm'
                              : 'bg-surface-container-lowest border-outline-variant/30 text-on-surface-variant hover:border-primary'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Target Timeline Selector */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-primary">Desired Timeline</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {timelineOptions.map((t) => (
                        <button
                          type="button"
                          key={t}
                          onClick={() => setFormData({...formData, timeline: t})}
                          className={`py-2 px-2.5 rounded-xl text-xs font-semibold border transition-all text-center active:scale-95 ${
                            formData.timeline === t
                              ? 'bg-primary text-on-primary border-primary shadow-sm'
                              : 'bg-surface-container-lowest border-outline-variant/30 text-on-surface-variant hover:border-primary'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-primary">Project Overview &amp; Goals *</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Outline your target features, current technical challenges, or upcoming deadlines..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-xs sm:text-sm bg-surface-container-lowest resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-on-primary py-3.5 sm:py-4 rounded-xl font-bold text-xs sm:text-sm hover:shadow-xl transition-all active:scale-98 shadow-md shadow-primary/20"
                  >
                    Submit Project Inquiry &amp; Request Consultation
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
