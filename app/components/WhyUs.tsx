const reasons = [
  {
    number: "01",
    title: "Deep Domain Expertise",
    description:
      "Our engineers specialize where others generalize. Whether it's training production LLMs, writing gas-optimized smart contracts, or architecting multi-tenant ERP systems — we bring genuine depth to every engagement.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Full-Stack Ownership",
    description:
      "We own every layer of your stack — from infrastructure and backend logic to pixel-perfect UI. No context-switching between vendors. One team, full accountability, seamless delivery.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Agile & Transparent",
    description:
      "Two-week sprints, live dashboards, and daily standups when needed. You always know where your project stands, what was built last week, and what's shipping next.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Security & Compliance",
    description:
      "Smart contract audits, OWASP-compliant web apps, encrypted data pipelines, and role-based access controls. Security is never an afterthought — it's foundational architecture.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Scalable Architecture",
    description:
      "Every system is designed for growth. Cloud-native infrastructure, horizontal scaling patterns, and performance benchmarking mean your platform handles 10× traffic without rewrites.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Post-Launch Partnership",
    description:
      "We don't disappear after deployment. Ongoing monitoring, iterative feature development, and SLA-backed support plans keep your product healthy and evolving.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" aria-label="Why Choose QORDIXY" className="relative py-20 sm:py-28 bg-[#f4f6f9] overflow-hidden">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(10,31,68,0.2), transparent)" }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#00DDEB]/40 bg-[#00DDEB]/8 px-4 py-1.5 mb-5 sm:mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00DDEB]" aria-hidden="true" />
            <span className="font-heading text-xs font-semibold uppercase tracking-widest text-[#0A1F44]">
              Why QORDIXY
            </span>
          </div>
          <h2 className="font-heading font-black text-[#0A1F44] text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-5 sm:mb-6">
            The Difference is{" "}
            <span className="text-[#00DDEB]">in the Details</span>
          </h2>
          <p className="text-[#8a9ab5] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Our edge is not just technical — it is methodological. We combine elite engineering with structured delivery and long-term partnership thinking.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {reasons.map((reason) => (
            <article
              key={reason.number}
              className="group bg-white border border-[#d0d9e8] hover:border-[#00DDEB]/40 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-[0_8px_40px_rgba(0,221,235,0.1)]"
            >
              <div className="flex items-start gap-4 sm:gap-5 mb-4 sm:mb-5">
                <div className="w-11 sm:w-12 h-11 sm:h-12 rounded-xl bg-[#0A1F44] group-hover:bg-[#00DDEB]/10 group-hover:border group-hover:border-[#00DDEB]/30 flex items-center justify-center text-[#00DDEB] transition-all duration-300 shrink-0">
                  {reason.icon}
                </div>
                <span className="font-heading font-black text-3xl sm:text-4xl text-[#0A1F44]/8 group-hover:text-[#00DDEB]/15 transition-colors select-none leading-none pt-1" aria-hidden="true">
                  {reason.number}
                </span>
              </div>
              <h3 className="font-heading font-bold text-[#0A1F44] text-base sm:text-lg mb-2 sm:mb-3">
                {reason.title}
              </h3>
              <p className="text-[#8a9ab5] text-sm leading-relaxed">
                {reason.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
