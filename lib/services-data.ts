export type ServiceSection =
  | { kind: "h2"; text: string }
  | { kind: "p"; text: string }
  | { kind: "ul"; items: string[] };

export interface ServicePage {
  slug: string;
  title: string;
  tagline: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  publishedAt: string;
  updatedAt: string;
  thumbnailSrc: string;
  bannerSrc: string;
  thumbnailAlt: string;
  bannerAlt: string;
  sections: ServiceSection[];
  deliverables: string[];
  tech: string[];
}

export const services: ServicePage[] = [
  {
    slug: "ai-development",
    title: "AI Development",
    tagline: "Production-grade AI systems that ship measurable outcomes",
    excerpt:
      "We build end-to-end AI products—data pipelines, model training, RAG, evaluation, and deployment—optimized for reliability, latency, and cost.",
    metaTitle: "AI Development Services — LLMs, RAG, MLOps | QORDIXY",
    metaDescription:
      "AI development services for businesses: LLM applications, RAG knowledge assistants, model evaluation, MLOps deployment, and secure data pipelines. Built for production.",
    keywords: [
      "AI development services",
      "LLM application development",
      "RAG architecture",
      "MLOps",
      "model evaluation",
      "machine learning engineering",
    ],
    publishedAt: "2025-10-01",
    updatedAt: "2026-01-08",
    thumbnailSrc: "/services/thumbnails/ai-development.svg",
    bannerSrc: "/services/banners/ai-development.svg",
    thumbnailAlt: "AI development icon on navy background",
    bannerAlt: "Banner: AI development services with cyan grid and nodes",
    deliverables: [
      "LLM feature design (use-cases, constraints, success metrics)",
      "RAG pipeline (indexing, hybrid search, re-ranking, citations)",
      "Evaluation harness (golden sets, regression tests, dashboards)",
      "MLOps deployment (CI/CD, monitoring, rollback, cost controls)",
      "Security and governance (PII redaction, access control, audit logs)",
    ],
    tech: ["Python", "TypeScript", "LangChain", "Vector DBs", "Docker", "Kubernetes"],
    sections: [
      {
        kind: "p",
        text: "Modern AI is not “a model”—it is a system. The teams that win in AI treat data quality, evaluation, and operational safety as first-class engineering concerns. At QORDIXY, we build AI features that perform under real user traffic, not just in a demo notebook.",
      },
      { kind: "h2", text: "What we build" },
      {
        kind: "ul",
        items: [
          "RAG assistants over internal documents with citations and access controls",
          "Domain-specific copilots for support, sales, ops, and engineering workflows",
          "Prediction and ranking systems with monitoring for drift and bias",
          "Multimodal pipelines (text + vision) for inspection, compliance, and search",
        ],
      },
      { kind: "h2", text: "How we make it production-ready" },
      {
        kind: "p",
        text: "We start with measurable success criteria and build an evaluation suite before scaling scope. That keeps quality stable as prompts, tools, or models evolve. We then add observability—latency, token/cost budgets, failure classification, and user feedback loops—so each release is an improvement you can prove.",
      },
    ],
  },
  {
    slug: "agentic-ai-systems",
    title: "Agentic AI Systems",
    tagline: "Autonomous workflows with clear guardrails and audit trails",
    excerpt:
      "We design agentic systems that plan, call tools, and safely execute multi-step tasks—built with deterministic APIs, approvals, and observability.",
    metaTitle: "Agentic AI Systems — Autonomous Workflows | QORDIXY",
    metaDescription:
      "Build reliable agentic AI systems: tool-using agents, multi-step automation, approvals, memory policies, and observability. Ship autonomous workflows safely.",
    keywords: [
      "agentic AI",
      "AI agents",
      "workflow automation",
      "tool calling",
      "human in the loop",
      "AI observability",
    ],
    publishedAt: "2025-10-06",
    updatedAt: "2026-01-08",
    thumbnailSrc: "/services/thumbnails/agentic-ai.svg",
    bannerSrc: "/services/banners/agentic-ai.svg",
    thumbnailAlt: "Agentic AI workflow icon on navy",
    bannerAlt: "Banner: agentic AI systems with connected nodes and arrows",
    deliverables: [
      "Tool API layer (schemas, idempotency, structured errors)",
      "Agent orchestration (planning loops, retries, branching)",
      "Human-in-the-loop approvals and escalation rules",
      "Memory and retention policy implementation",
      "Tracing and observability dashboards (steps, costs, outcomes)",
    ],
    tech: ["TypeScript", "Python", "LangGraph", "Queue systems", "PostgreSQL", "Redis"],
    sections: [
      {
        kind: "p",
        text: "Agentic AI turns “one response” into an execution flow. That is powerful—and risky—unless you design the system around safe tool usage, bounded permissions, and clear stop conditions. We build agents that act like reliable operators, not unpredictable chatbots.",
      },
      { kind: "h2", text: "Best-fit use cases" },
      {
        kind: "ul",
        items: [
          "Ticket triage and routing with confidence-based escalation",
          "Document-to-workflow automation (forms, extraction, validation)",
          "Ops runbooks that propose changes and require approval to execute",
          "Lead enrichment and CRM updates with rate limits and audit logs",
        ],
      },
      { kind: "h2", text: "Guardrails that matter" },
      {
        kind: "p",
        text: "We implement tool allowlists, per-tenant scoping, step-by-step tracing, and kill switches. When automation touches money, infrastructure, or regulated data, we add approval queues and policy checks so humans stay accountable for final decisions.",
      },
    ],
  },
  {
    slug: "blockchain-smart-contracts",
    title: "Blockchain & Smart Contracts",
    tagline: "Secure on-chain logic, audits, and composable protocol design",
    excerpt:
      "From Solidity engineering to audits and protocol architecture, we ship smart contracts designed for safety, upgradability, and clear operational control.",
    metaTitle: "Smart Contract Development & Audits | QORDIXY",
    metaDescription:
      "Smart contract development services: Solidity engineering, protocol design, auditing support, token standards (ERC-20/721/1155), and secure upgrade patterns.",
    keywords: [
      "smart contract development",
      "Solidity developers",
      "smart contract audit",
      "ERC-20",
      "ERC-721",
      "DeFi protocol",
    ],
    publishedAt: "2025-10-09",
    updatedAt: "2026-01-08",
    thumbnailSrc: "/services/thumbnails/smart-contracts.svg",
    bannerSrc: "/services/banners/smart-contracts.svg",
    thumbnailAlt: "Smart contracts icon on navy",
    bannerAlt: "Banner: smart contracts and blockchain with chain geometry",
    deliverables: [
      "Solidity contract implementation with test coverage",
      "Threat modeling and mitigation plan (reentrancy, oracles, access control)",
      "Upgrade strategy (proxies, timelocks, multisig governance)",
      "Deployment scripts and monitoring hooks",
      "Audit-ready documentation and invariants",
    ],
    tech: ["Solidity", "Foundry", "Hardhat", "Ethers.js", "OpenZeppelin", "The Graph"],
    sections: [
      {
        kind: "p",
        text: "Smart contracts are financial software. A small logic error can become an irreversible loss. We engineer contracts with explicit invariants, extensive tests, and operational controls so the protocol behaves predictably as it grows.",
      },
      { kind: "h2", text: "What we deliver" },
      {
        kind: "ul",
        items: [
          "Token contracts (fungible, NFT, semi-fungible) with clear mint authority",
          "DeFi components (vaults, pools, staking, vesting, streaming payments)",
          "Access control and admin tooling designed for transparency",
          "Oracle-safe designs with circuit breakers for volatility events",
        ],
      },
      { kind: "h2", text: "Security-first engineering" },
      {
        kind: "p",
        text: "We combine static analysis, fuzzing, simulation tests, and manual review. For protocols exposed to adversarial markets, we also evaluate economic attack surfaces like oracle manipulation, sandwich attacks, and governance capture.",
      },
    ],
  },
  {
    slug: "dapp-development",
    title: "DApp Development",
    tagline: "Wallet-ready Web3 apps with strong UX and robust indexing",
    excerpt:
      "We build decentralized applications end-to-end: wallet integrations, on-chain contracts, indexing, and frontends that feel as smooth as Web2.",
    metaTitle: "DApp Development — Web3 Frontend & Wallet Integration | QORDIXY",
    metaDescription:
      "DApp development services: Web3 frontend engineering, wallet integrations, on-chain contract wiring, indexing, and scalable infrastructure for decentralized apps.",
    keywords: [
      "DApp development",
      "Web3 frontend",
      "wallet integration",
      "ethers.js",
      "The Graph indexing",
      "IPFS",
    ],
    publishedAt: "2025-10-12",
    updatedAt: "2026-01-08",
    thumbnailSrc: "/services/thumbnails/dapp.svg",
    bannerSrc: "/services/banners/dapp.svg",
    thumbnailAlt: "DApp development icon on navy",
    bannerAlt: "Banner: decentralized app development with globe and nodes",
    deliverables: [
      "Wallet connection flows and session management",
      "Transaction UX (simulation, gas estimation, retry patterns)",
      "Indexing strategy (subgraphs, event processing, caching)",
      "Backend services for off-chain data and permissions",
      "Analytics, monitoring, and error tracking for Web3 edge cases",
    ],
    tech: ["Next.js", "TypeScript", "Ethers.js", "WalletConnect", "The Graph", "IPFS"],
    sections: [
      {
        kind: "p",
        text: "A great DApp is equal parts smart contract correctness and user experience. We focus on reliable transaction flows, clear state updates, and indexing that stays consistent even when chain reorgs happen.",
      },
      { kind: "h2", text: "DApp features we implement" },
      {
        kind: "ul",
        items: [
          "Wallet onboarding (EVM, multi-chain, WalletConnect)",
          "NFT and token experiences (mint, claim, marketplace, staking)",
          "DAO dashboards (proposals, votes, treasury visibility)",
          "Hybrid apps where off-chain permissions complement on-chain rules",
        ],
      },
      { kind: "h2", text: "Scaling the product" },
      {
        kind: "p",
        text: "We pair indexing with caching and resilient event processing so your UI stays fast. When needed, we add server-side verification, rate limiting, and bot mitigation for public mint events and high-traffic launches.",
      },
    ],
  },
  {
    slug: "web-design-development",
    title: "Website Design & Development",
    tagline: "High-performance, SEO-friendly websites that convert",
    excerpt:
      "We design and build fast websites and web apps—optimized for Core Web Vitals, accessibility, and search—while keeping a premium brand experience.",
    metaTitle: "Website Design & Development — SEO & Performance | QORDIXY",
    metaDescription:
      "Website design and development services: modern UI/UX, Next.js builds, SEO foundations, accessibility, and performance optimization for Core Web Vitals.",
    keywords: [
      "website development",
      "web design agency",
      "Next.js website",
      "technical SEO",
      "Core Web Vitals",
      "accessibility",
    ],
    publishedAt: "2025-10-15",
    updatedAt: "2026-01-08",
    thumbnailSrc: "/services/thumbnails/web.svg",
    bannerSrc: "/services/banners/web.svg",
    thumbnailAlt: "Web development icon on navy",
    bannerAlt: "Banner: website design and development with code brackets",
    deliverables: [
      "Information architecture and SEO-friendly page structure",
      "Design system and responsive UI components",
      "Performance optimization (LCP/CLS/INP)",
      "Analytics instrumentation and event tracking",
      "Content strategy support for keyword clusters and internal linking",
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "SEO tooling", "Vercel"],
    sections: [
      {
        kind: "p",
        text: "SEO is not a plugin—it is a system of content, structure, and performance. We build websites that load fast, communicate relevance clearly, and guide visitors to action with frictionless UX.",
      },
      { kind: "h2", text: "Built for search and conversion" },
      {
        kind: "ul",
        items: [
          "Semantic HTML + accessibility (better UX and crawlability)",
          "Metadata, Open Graph, and structured data where it helps",
          "Internal linking and content hubs for topic authority",
          "Performance budgets for images, scripts, and animations",
        ],
      },
      { kind: "h2", text: "What you get" },
      {
        kind: "p",
        text: "A modern site that feels premium while staying lightweight. The result is stronger rankings over time and a clearer conversion path—from landing page to qualified enquiry.",
      },
    ],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    tagline: "Reliable mobile apps with smooth UX and scalable architecture",
    excerpt:
      "We ship iOS and Android apps with React Native or Flutter—built for performance, offline support, and clean integration with your backend systems.",
    metaTitle: "Mobile App Development — React Native & Flutter | QORDIXY",
    metaDescription:
      "Mobile app development for iOS and Android: React Native or Flutter builds, API integration, offline-first UX, analytics, and release automation.",
    keywords: [
      "mobile app development",
      "React Native development",
      "Flutter development",
      "iOS Android apps",
      "offline first",
      "mobile CI CD",
    ],
    publishedAt: "2025-10-18",
    updatedAt: "2026-01-08",
    thumbnailSrc: "/services/thumbnails/mobile.svg",
    bannerSrc: "/services/banners/mobile.svg",
    thumbnailAlt: "Mobile app development icon on navy",
    bannerAlt: "Banner: mobile app development with device outline and cyan glow",
    deliverables: [
      "App architecture (state, navigation, offline cache strategy)",
      "API integration and secure authentication flows",
      "Analytics, crash reporting, and performance monitoring",
      "Store release automation (build pipelines, versioning)",
      "QA plan and device matrix coverage",
    ],
    tech: ["React Native", "Flutter", "TypeScript", "Swift/Kotlin bridges", "Firebase", "CI/CD"],
    sections: [
      {
        kind: "p",
        text: "Mobile is unforgiving: users judge you in seconds. We build apps that start quickly, behave consistently, and handle poor connectivity gracefully—while keeping the codebase maintainable for years.",
      },
      { kind: "h2", text: "Cross-platform, without compromise" },
      {
        kind: "ul",
        items: [
          "React Native for fast iteration and rich ecosystem",
          "Flutter for consistent UI and predictable rendering",
          "Native module integration when performance demands it",
          "Offline-first workflows for field operations and travel use cases",
        ],
      },
      { kind: "h2", text: "Operational readiness" },
      {
        kind: "p",
        text: "We include crash analytics, logging, and release automation so your team can ship updates confidently. Great mobile products are sustained by reliable delivery pipelines—not just a good initial build.",
      },
    ],
  },
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    tagline: "Bespoke platforms designed around your workflows",
    excerpt:
      "We design, build, and modernize software systems—from APIs and microservices to full platforms—prioritizing reliability, security, and scale.",
    metaTitle: "Custom Software Development — APIs, Platforms, Cloud | QORDIXY",
    metaDescription:
      "Custom software development services: system design, backend APIs, microservices, integrations, cloud deployment, and performance engineering for scalable products.",
    keywords: [
      "custom software development",
      "backend API development",
      "microservices",
      "cloud architecture",
      "system design",
      "DevOps",
    ],
    publishedAt: "2025-10-22",
    updatedAt: "2026-01-08",
    thumbnailSrc: "/services/thumbnails/custom-software.svg",
    bannerSrc: "/services/banners/custom-software.svg",
    thumbnailAlt: "Custom software icon on navy",
    bannerAlt: "Banner: custom software development with terminals and nodes",
    deliverables: [
      "System architecture and data model design",
      "Backend APIs (REST/GraphQL) and integration services",
      "Performance and reliability hardening",
      "DevOps automation (build, deploy, observability)",
      "Security baseline (authz, secrets, logging, rate limits)",
    ],
    tech: ["Node.js", "TypeScript", "PostgreSQL", "Redis", "AWS", "Docker"],
    sections: [
      {
        kind: "p",
        text: "When off-the-shelf tools don’t fit, custom software becomes a competitive edge. We build systems that mirror your business logic precisely—so operations run faster, data stays consistent, and teams spend less time on manual coordination.",
      },
      { kind: "h2", text: "Common builds" },
      {
        kind: "ul",
        items: [
          "Customer portals, dashboards, and internal admin systems",
          "Event-driven backends and workflow engines",
          "Integration layers between SaaS tools and legacy systems",
          "Modernization of monoliths into modular services",
        ],
      },
      { kind: "h2", text: "Quality you can feel" },
      {
        kind: "p",
        text: "We prioritize clear interfaces, predictable deployments, and strong monitoring. That turns software from a maintenance burden into infrastructure your team can trust.",
      },
    ],
  },
  {
    slug: "erp-crm-development",
    title: "ERP & CRM Development",
    tagline: "Unified operations with tailored workflows and reporting",
    excerpt:
      "We build and customize ERP/CRM systems to centralize inventory, finance, HR, and customer lifecycle workflows—integrated with your existing tools.",
    metaTitle: "ERP & CRM Development — Custom Platforms & Integrations | QORDIXY",
    metaDescription:
      "ERP and CRM development services: custom workflows, integrations, data migration, role-based access, and reporting dashboards for unified operations.",
    keywords: [
      "ERP development",
      "CRM development",
      "business automation",
      "Odoo customization",
      "Salesforce integration",
      "data migration",
    ],
    publishedAt: "2025-10-26",
    updatedAt: "2026-01-08",
    thumbnailSrc: "/services/thumbnails/erp-crm.svg",
    bannerSrc: "/services/banners/erp-crm.svg",
    thumbnailAlt: "ERP CRM icon on navy",
    bannerAlt: "Banner: ERP and CRM development with chart grid and cyan accents",
    deliverables: [
      "Workflow mapping and requirements to role-based permissions",
      "Custom modules and integrations with existing systems",
      "Data migration strategy and validation checks",
      "Dashboards and reporting with KPI definitions",
      "Training, documentation, and iterative rollout plan",
    ],
    tech: ["Odoo", "Salesforce", "Zoho", "PostgreSQL", "APIs", "SSO"],
    sections: [
      {
        kind: "p",
        text: "ERP and CRM projects fail when teams try to bend operations into generic software. We start from your workflows—how your business actually runs—and build the system around that reality, including integrations and reporting that reduce manual work.",
      },
      { kind: "h2", text: "What we unify" },
      {
        kind: "ul",
        items: [
          "Sales pipelines, customer lifecycle, and support handoffs",
          "Inventory, purchasing, and fulfillment visibility",
          "Finance and invoicing flows with auditability",
          "Executive dashboards aligned to KPIs your team trusts",
        ],
      },
      { kind: "h2", text: "Rollout without disruption" },
      {
        kind: "p",
        text: "We plan phased migrations, validate data integrity, and ship training-ready releases. The outcome is operational clarity—one system of record and fewer surprises across departments.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServicePage | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}

