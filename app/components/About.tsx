export default function About() {
  return (
    <section id="about" aria-label="About QORDIXY" className="relative py-20 sm:py-28 bg-[#0A1F44] overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-60" aria-hidden="true" />
      <div
        className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,221,235,0.08) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Text */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#00DDEB]/30 bg-[#00DDEB]/5 px-4 py-1.5 mb-6 sm:mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00DDEB]" aria-hidden="true" />
              <span className="font-heading text-xs font-semibold uppercase tracking-widest text-[#00DDEB]">
                Who We Are
              </span>
            </div>

            <h2 className="font-heading font-black text-white text-3xl sm:text-4xl md:text-5xl leading-tight mb-5 sm:mb-6">
              Built for the
              <span className="text-[#00DDEB]"> Intelligence </span>
              Era
            </h2>

            <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-5 sm:mb-6">
              QORDIXY is a next-generation technology company that sits at the intersection of artificial intelligence and decentralized systems. We partner with visionary founders, enterprises, and institutions to build digital infrastructure that is not just functional — but transformational.
            </p>

            <p className="text-white/50 text-sm sm:text-base leading-relaxed mb-8 sm:mb-10">
              From autonomous AI agents that replace entire workflows to blockchain protocols securing millions in assets, our engineering teams bring deep expertise, rigorous methodology, and a relentless focus on outcomes. Every solution we build is precision-crafted for performance, security, and scalability.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4" aria-label="Core values">
              {[
                { title: "Precision Engineering", desc: "Rigorous architecture and clean code at every layer." },
                { title: "Future-Proof Design",   desc: "Systems built to evolve with technology and market." },
                { title: "Security First",         desc: "Enterprise-grade security baked into every solution." },
                { title: "Transparent Delivery",   desc: "Clear timelines, milestones, and communication." },
              ].map((val) => (
                <li key={val.title} className="flex items-start gap-3">
                  <div className="w-5 h-5 mt-0.5 shrink-0 rounded-full bg-[#00DDEB]/15 border border-[#00DDEB]/30 flex items-center justify-center" aria-hidden="true">
                    <svg className="w-2.5 h-2.5 text-[#00DDEB]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-white text-sm">{val.title}</p>
                    <p className="text-white/40 text-xs mt-0.5">{val.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Visual card */}
          <div className="flex items-center justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="relative z-10 w-full max-w-xs sm:max-w-sm">
              <div className="gradient-border bg-[#112347] rounded-2xl p-6 sm:p-8 text-center">
                {/* Abstract icon */}
                <div className="flex justify-center mb-4" aria-hidden="true">
                  <img
                    src="/qordixy-icon.svg"
                    alt=""
                    width={96}
                    height={96}
                    className="block"
                  />
                </div>

                <h3 className="font-heading font-bold text-white text-xl mb-2">QORDIXY</h3>
                <p className="text-[#00DDEB] font-heading text-xs uppercase tracking-widest mb-6">
                  Digital &amp; Intelligence Corp.
                </p>

                <ul className="space-y-3 text-left">
                  {[
                    "AI & Machine Learning",
                    "Agentic Automation",
                    "Web3 & Blockchain",
                    "Full-Stack Development",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-white/50 text-sm">
                      <span className="w-1 h-1 rounded-full bg-[#00DDEB] shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Floating stat cards — hidden on very small screens to avoid overflow */}
              <div className="hidden sm:block absolute -top-4 -left-6 bg-[#0A1F44] border border-[#00DDEB]/20 rounded-xl px-4 py-3 shadow-xl" aria-hidden="true">
                <p className="font-heading font-black text-[#00DDEB] text-2xl">8+</p>
                <p className="text-white/40 text-xs font-heading uppercase tracking-wide">Domains</p>
              </div>
              <div className="hidden sm:block absolute -bottom-4 -right-6 bg-[#0A1F44] border border-[#00DDEB]/20 rounded-xl px-4 py-3 shadow-xl" aria-hidden="true">
                <p className="font-heading font-black text-[#00DDEB] text-2xl">50+</p>
                <p className="text-white/40 text-xs font-heading uppercase tracking-wide">Delivered</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
