const steps = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description:
      "We start with deep discovery — understanding your business objectives, technical constraints, and success metrics. This produces a precise project blueprint.",
  },
  {
    step: "02",
    title: "Architecture & Design",
    description:
      "Our engineers design the system architecture and our designers craft the user experience. Every decision is documented and reviewed before a single line of code is written.",
  },
  {
    step: "03",
    title: "Agile Development",
    description:
      "Two-week sprint cycles with working software delivered each iteration. Daily progress visibility, regular demos, and continuous integration keep delivery on track.",
  },
  {
    step: "04",
    title: "Testing & Hardening",
    description:
      "Rigorous QA automation, security penetration testing, smart contract audits, and performance load testing before any deployment to production.",
  },
  {
    step: "05",
    title: "Launch & Scale",
    description:
      "Zero-downtime deployments, monitoring dashboards, and post-launch optimization. We scale with your growth and continue iterating on your product roadmap.",
  },
];

export default function Process() {
  return (
    <section aria-label="Our Development Process" className="relative py-20 sm:py-28 bg-white overflow-hidden">
      <div
        className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,221,235,0.06) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#00DDEB]/40 bg-[#00DDEB]/5 px-4 py-1.5 mb-5 sm:mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00DDEB]" aria-hidden="true" />
            <span className="font-heading text-xs font-semibold uppercase tracking-widest text-[#0A1F44]">
              How We Work
            </span>
          </div>
          <h2 className="font-heading font-black text-[#0A1F44] text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-5 sm:mb-6">
            Our Process
          </h2>
          <p className="text-[#8a9ab5] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            A proven methodology that minimises risk and maximises the velocity of value delivery — from first brief to live system.
          </p>
        </div>

        {/* Steps — vertical on mobile, horizontal on desktop */}
        <ol className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
          {/* Desktop connector line */}
          <div className="hidden lg:block absolute top-[1.75rem] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[#d0d9e8] to-transparent" aria-hidden="true" />

          {steps.map((step, idx) => (
            <li key={step.step} className="relative flex flex-col lg:items-center lg:text-center group">
              {/* Mobile connector */}
              {idx < steps.length - 1 && (
                <div className="lg:hidden absolute left-[1.625rem] top-14 bottom-0 w-px bg-[#d0d9e8]" aria-hidden="true" />
              )}

              <div className="flex lg:flex-col lg:items-center gap-4 lg:gap-0">
                {/* Step circle */}
                <div className="relative w-14 h-14 shrink-0 rounded-full border-2 border-[#d0d9e8] group-hover:border-[#00DDEB] bg-white group-hover:bg-[#00DDEB]/5 flex items-center justify-center transition-all duration-300 z-10 shadow-sm lg:mb-6">
                  <span className="font-heading font-black text-sm text-[#0A1F44] group-hover:text-[#00DDEB] transition-colors">
                    {step.step}
                  </span>
                </div>

                {/* Text */}
                <div className="pb-6 lg:pb-0">
                  <h3 className="font-heading font-bold text-[#0A1F44] text-sm mb-2 uppercase tracking-wide">
                    {step.title}
                  </h3>
                  <p className="text-[#8a9ab5] text-xs sm:text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
