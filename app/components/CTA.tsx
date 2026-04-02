export default function CTA() {
  return (
    <section aria-label="Call to Action" className="relative py-20 sm:py-24 bg-white overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(135deg, rgba(10,31,68,0.03) 0%, rgba(0,221,235,0.04) 100%)" }}
        aria-hidden="true"
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-6 sm:mb-8" aria-hidden="true">
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-transparent via-[#00DDEB] to-transparent" />
        </div>

        <h2 className="font-heading font-black text-[#0A1F44] text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-5 sm:mb-6">
          Ready to Build the{" "}
          <span className="text-[#00DDEB]">Future</span>?
        </h2>

        <p className="text-[#8a9ab5] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10 sm:mb-12">
          Every great product starts with a conversation. Tell us what you're building and we'll show you how QORDIXY can accelerate your vision from concept to reality.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          <a
            href="#contact"
            className="group font-heading font-semibold text-sm uppercase tracking-wider px-8 sm:px-10 py-4 rounded-full bg-[#0A1F44] text-white hover:bg-[#00DDEB] hover:text-[#0A1F44] transition-all duration-300 shadow-[0_8px_30px_rgba(10,31,68,0.15)] flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            Start a Project
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#services"
            className="font-heading font-semibold text-sm uppercase tracking-wider px-8 sm:px-10 py-4 rounded-full border border-[#d0d9e8] text-[#0A1F44] hover:border-[#0A1F44] transition-all duration-300 w-full sm:w-auto text-center"
          >
            View Services
          </a>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 sm:mt-16 flex flex-wrap justify-center gap-x-6 gap-y-3 sm:gap-8 items-center">
          {[
            "No lock-in contracts",
            "Free discovery call",
            "NDA on request",
            "Global delivery",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 text-[#8a9ab5] text-sm">
              <svg className="w-4 h-4 text-[#00DDEB] shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="font-heading font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
