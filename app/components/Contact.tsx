"use client";

import { useState } from "react";

const services = [
  "AI Development",
  "Agentic AI Systems",
  "Blockchain & Smart Contracts",
  "DApp Development",
  "Website Design & Development",
  "Mobile App Development",
  "Custom Software Development",
  "ERP & CRM Development",
  "Multiple Services",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);
  const [error, setError]         = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setError("");
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full bg-white/5 border border-white/10 focus:border-[#00DDEB]/50 focus:outline-none focus:ring-2 focus:ring-[#00DDEB]/20 rounded-xl px-4 py-3 text-white placeholder:text-white/20 text-sm transition-colors duration-200";

  const labelClass =
    "font-heading text-xs font-semibold uppercase tracking-wider text-white/40 block mb-2";

  return (
    <section id="contact" aria-label="Contact QORDIXY" className="relative py-20 sm:py-28 bg-[#0A1F44] overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" aria-hidden="true" />
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(circle at top right, rgba(0,221,235,0.08) 0%, transparent 60%)" }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left: Info */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#00DDEB]/30 bg-[#00DDEB]/5 px-4 py-1.5 mb-6 sm:mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00DDEB]" aria-hidden="true" />
              <span className="font-heading text-xs font-semibold uppercase tracking-widest text-[#00DDEB]">
                Let's Build Together
              </span>
            </div>
            <h2 className="font-heading font-black text-white text-3xl sm:text-4xl md:text-5xl leading-tight mb-5 sm:mb-6">
              Start Your
              <span className="text-[#00DDEB]"> Project</span>
            </h2>
            <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10">
              Whether you have a detailed brief or just an idea — we're here to help you figure out the best path forward. Reach out and let's build something extraordinary.
            </p>

            <address className="not-italic space-y-5 sm:space-y-6">
              {[
                {
                  label: "Email",
                  value: "hello@qordixy.com",
                  href: "mailto:hello@qordixy.com",
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                },
                {
                  label: "Response Time",
                  value: "Within 24 hours",
                  href: null,
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                },
                {
                  label: "Availability",
                  value: "Global — Remote-First",
                  href: null,
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  ),
                },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-11 sm:w-12 h-11 sm:h-12 rounded-xl bg-[#00DDEB]/10 border border-[#00DDEB]/20 flex items-center justify-center text-[#00DDEB] shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-heading text-xs font-semibold uppercase tracking-widest text-white/40 mb-0.5">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-white hover:text-[#00DDEB] transition-colors text-sm sm:text-base">{item.value}</a>
                    ) : (
                      <p className="text-white text-sm sm:text-base">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </address>
          </div>

          {/* Right: Form */}
          <div className="gradient-border bg-[#112347] rounded-2xl p-6 sm:p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 sm:py-16 text-center">
                <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-full bg-[#00DDEB]/15 border border-[#00DDEB]/30 flex items-center justify-center text-[#00DDEB] mb-5 sm:mb-6">
                  <svg className="w-7 sm:w-8 h-7 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-white text-xl sm:text-2xl mb-3">Message Received!</h3>
                <p className="text-white/50 text-sm leading-relaxed max-w-xs">
                  Thank you for reaching out. Our team will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setError(""); setForm({ name: "", email: "", company: "", service: "", message: "" }); }}
                  className="mt-6 font-heading text-xs font-semibold uppercase tracking-wider text-[#00DDEB] hover:text-white transition-colors focus:outline-none focus:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label htmlFor="name" className={labelClass}>Full Name <span aria-hidden="true">*</span></label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      autoComplete="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className={inputClass}
                      aria-required="true"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClass}>Email Address <span aria-hidden="true">*</span></label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      autoComplete="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className={inputClass}
                      aria-required="true"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className={labelClass}>Company / Organisation</label>
                  <input
                    id="company"
                    type="text"
                    name="company"
                    autoComplete="organization"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="service" className={labelClass}>Service Interested In</label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full bg-[#0A1F44] border border-white/10 focus:border-[#00DDEB]/50 focus:outline-none focus:ring-2 focus:ring-[#00DDEB]/20 rounded-xl px-4 py-3 text-white/70 text-sm transition-colors duration-200"
                  >
                    <option value="">Select a service…</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className={labelClass}>Project Details <span aria-hidden="true">*</span></label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project, goals, and timeline…"
                    className={`${inputClass} resize-none`}
                    aria-required="true"
                  />
                </div>

                {/* Error message */}
                {error && (
                  <p role="alert" className="text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  aria-busy={loading}
                  className="w-full font-heading font-semibold text-sm uppercase tracking-wider py-4 rounded-xl bg-[#00DDEB] text-[#0A1F44] hover:bg-white disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 shadow-[0_0_30px_rgba(0,221,235,0.2)] hover:shadow-[0_0_40px_rgba(0,221,235,0.4)] flex items-center justify-center gap-2 group focus:outline-none focus:ring-2 focus:ring-[#00DDEB] focus:ring-offset-2 focus:ring-offset-[#112347]"
                >
                  {loading ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
