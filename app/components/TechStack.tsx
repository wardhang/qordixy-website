const techCategories = [
  {
    category: "AI & ML",
    techs: ["Python", "TensorFlow", "PyTorch", "OpenAI API", "LangChain", "LangGraph", "Hugging Face", "CrewAI"],
  },
  {
    category: "Blockchain",
    techs: ["Solidity", "Ethereum", "Polygon", "Solana", "Hardhat", "Foundry", "OpenZeppelin", "IPFS"],
  },
  {
    category: "Frontend",
    techs: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "React Native", "Flutter", "Figma"],
  },
  {
    category: "Backend & Cloud",
    techs: ["Node.js", "FastAPI", "Django", "PostgreSQL", "MongoDB", "Redis", "AWS", "Docker"],
  },
];

export default function TechStack() {
  return (
    <section id="tech-stack" aria-label="Technology Stack" className="relative py-20 sm:py-28 bg-[#0A1F44] overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-50 pointer-events-none" aria-hidden="true" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,221,235,0.05) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#00DDEB]/30 bg-[#00DDEB]/5 px-4 py-1.5 mb-5 sm:mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00DDEB]" aria-hidden="true" />
            <span className="font-heading text-xs font-semibold uppercase tracking-widest text-[#00DDEB]">
              Our Arsenal
            </span>
          </div>
          <h2 className="font-heading font-black text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-5 sm:mb-6">
            Technology Stack
          </h2>
          <p className="text-white/50 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            We work with the most powerful and battle-tested tools across every domain of modern software development.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {techCategories.map((cat) => (
            <div key={cat.category} className="gradient-border bg-[#112347] rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-5 sm:mb-6">
                <div className="w-2 h-2 rounded-full bg-[#00DDEB]" aria-hidden="true" />
                <h3 className="font-heading font-bold text-[#00DDEB] text-sm uppercase tracking-widest">
                  {cat.category}
                </h3>
              </div>
              <ul className="flex flex-wrap gap-2 sm:gap-2.5" aria-label={`${cat.category} technologies`}>
                {cat.techs.map((tech) => (
                  <li key={tech}>
                    <span className="font-heading text-sm font-medium text-white/70 bg-white/5 border border-white/10 hover:border-[#00DDEB]/40 hover:text-[#00DDEB] hover:bg-[#00DDEB]/5 rounded-full px-3 sm:px-4 py-1.5 transition-all duration-200 cursor-default inline-block">
                      {tech}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-12 sm:mt-16 text-center text-white/30 text-sm font-heading uppercase tracking-widest">
          And many more tools tailored to your project requirements
        </p>
      </div>
    </section>
  );
}
