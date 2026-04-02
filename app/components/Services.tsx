const services = [
  {
    id: "ai",
    title: "Artificial Intelligence",
    tagline: "Intelligent Systems at Scale",
    description:
      "Custom AI models, machine learning pipelines, NLP engines, computer vision, predictive analytics, and generative AI solutions tailored to your industry needs.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    tags: ["LLMs", "Computer Vision", "NLP", "Predictive AI"],
  },
  {
    id: "agentic",
    title: "Agentic AI Systems",
    tagline: "Autonomous Decision Intelligence",
    description:
      "Multi-agent orchestration, autonomous workflow automation, AI agents that reason, plan, and execute complex multi-step tasks without human intervention.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    tags: ["Multi-Agent", "AutoGPT", "LangGraph", "CrewAI"],
  },
  {
    id: "blockchain",
    title: "Blockchain & Smart Contracts",
    tagline: "Trustless. Immutable. Automated.",
    description:
      "Solidity smart contract development, auditing, DeFi protocols, token standards (ERC-20/721/1155), cross-chain bridges, and Layer 2 integrations.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    tags: ["Solidity", "Ethereum", "Polygon", "Solana"],
  },
  {
    id: "dapp",
    title: "DApp Development",
    tagline: "Decentralized Applications Built Right",
    description:
      "Full-stack decentralized application development — from wallet integrations and Web3 frontends to on-chain logic, IPFS storage, and DAO governance systems.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    tags: ["Web3.js", "Ethers.js", "Hardhat", "IPFS"],
  },
  {
    id: "web",
    title: "Website Design & Development",
    tagline: "Digital Presence. Perfected.",
    description:
      "High-performance websites and web apps with pixel-perfect design, SEO optimization, CMS integration, e-commerce, and exceptional user experience across all devices.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    tags: ["Next.js", "React", "Figma", "Webflow"],
  },
  {
    id: "mobile",
    title: "Mobile App Development",
    tagline: "Native Power. Cross-Platform Speed.",
    description:
      "iOS and Android applications built with React Native and Flutter — delivering smooth, high-performance experiences with offline support and real-time capabilities.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    tags: ["React Native", "Flutter", "iOS", "Android"],
  },
  {
    id: "custom",
    title: "Custom Software Development",
    tagline: "Built Exactly For You",
    description:
      "Bespoke software solutions architected for your specific business workflows — from microservices and APIs to enterprise integrations and cloud-native platforms.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    tags: ["Microservices", "APIs", "Cloud", "DevOps"],
  },
  {
    id: "erp-crm",
    title: "ERP & CRM Development",
    tagline: "Operations. Unified.",
    description:
      "Custom ERP and CRM platforms that centralize your operations — inventory, finance, HR, customer lifecycle, sales pipelines, and reporting in one intelligent system.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    tags: ["Odoo", "Custom ERP", "Salesforce", "Zoho"],
  },
];

export default function Services() {
  return (
    <section id="services" aria-label="Our Services" className="relative py-20 sm:py-28 bg-white overflow-hidden">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #00DDEB40, transparent)" }}
        aria-hidden="true"
      />
      <div
        className="absolute -top-40 -right-40 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,221,235,0.06) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#00DDEB]/30 bg-[#00DDEB]/5 px-4 py-1.5 mb-5 sm:mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00DDEB]" aria-hidden="true" />
            <span className="font-heading text-xs font-semibold uppercase tracking-widest text-[#00DDEB]">
              What We Build
            </span>
          </div>
          <h2 className="font-heading font-black text-[#0A1F44] text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-5 sm:mb-6">
            Our Services
          </h2>
          <p className="text-[#8a9ab5] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            From intelligent AI systems to enterprise platforms — we deliver end-to-end technology solutions that move your business forward.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {services.map((service) => (
            <article
              key={service.id}
              className="service-card gradient-border group bg-[#0A1F44] rounded-2xl p-6 sm:p-8 cursor-pointer"
              aria-label={service.title}
            >
              <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-xl bg-[#00DDEB]/10 border border-[#00DDEB]/20 flex items-center justify-center text-[#00DDEB] group-hover:bg-[#00DDEB]/20 transition-colors mb-5 sm:mb-6">
                {service.icon}
              </div>
              <h3 className="font-heading font-bold text-white text-lg sm:text-xl mb-1">
                {service.title}
              </h3>
              <p className="font-heading text-[#00DDEB] text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                {service.tagline}
              </p>
              <p className="text-white/50 text-sm leading-relaxed mb-5 sm:mb-6">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-heading text-xs font-medium text-[#00DDEB]/70 bg-[#00DDEB]/8 border border-[#00DDEB]/15 rounded-full px-2.5 sm:px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-14">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 font-heading font-semibold text-sm uppercase tracking-wider text-[#0A1F44] hover:text-[#00DDEB] transition-colors duration-200"
          >
            Discuss your project
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
