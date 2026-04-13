export type BlogSection =
  | { kind: "h2"; text: string }
  | { kind: "p"; text: string }
  | { kind: "ul"; items: string[] };

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  metaDescription: string;
  keywords: string[];
  publishedAt: string;
  updatedAt: string;
  readTimeMinutes: number;
  thumbnailSrc: string;
  bannerSrc: string;
  thumbnailAlt: string;
  bannerAlt: string;
  sections: BlogSection[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "ai-development-trends-2025",
    title: "AI Development in 2025: What Teams Are Actually Shipping",
    excerpt:
      "Model efficiency, evaluation-first workflows, and agentic systems are reshaping how product teams plan, build, and govern AI. Here is a grounded look at what is moving from experiment to production.",
    metaDescription:
      "Explore 2025 AI development trends: smaller specialized models, stronger evaluation, RAG maturity, and agentic automation—written for engineering and product leaders.",
    keywords: [
      "AI development 2025",
      "LLM production",
      "RAG architecture",
      "AI evaluation",
      "agentic AI",
      "machine learning engineering",
    ],
    publishedAt: "2025-11-12",
    updatedAt: "2026-01-08",
    readTimeMinutes: 9,
    thumbnailSrc: "/blog/thumbnails/ai-development-trends-2025.svg",
    bannerSrc: "/blog/banners/ai-development-trends-2025.svg",
    thumbnailAlt: "Abstract neural network motif on deep blue—AI development article",
    bannerAlt: "Wide banner: AI development trends and production ML for 2025",
    sections: [
      {
        kind: "p",
        text: "Artificial intelligence stopped being a single headline about “bigger models” and became a portfolio of choices: latency budgets, data rights, evaluation suites, and how much autonomy you grant software in production. Teams that win in 2025 are not chasing novelty—they are aligning models to measurable outcomes and tightening the loop between training data, prompts, tools, and user feedback.",
      },
      {
        kind: "h2",
        text: "From raw scale to right-sized models",
      },
      {
        kind: "p",
        text: "Many organizations now combine a compact domain-tuned model with selective calls to a larger general model. The goal is predictable cost per request, faster iteration, and clearer failure modes. Fine-tuning, low-rank adaptation, and distilled student models appear in customer support, document triage, and code assistance pipelines where milliseconds and euros both matter.",
      },
      {
        kind: "p",
        text: "Engineering practice follows: versioned prompts, pinned model endpoints, regression tests on golden datasets, and canary releases for prompt or weight changes. Treating prompts like configuration—and models like dependencies—reduces the “it worked yesterday” risk that plagued early LLM rollouts.",
      },
      {
        kind: "h2",
        text: "Retrieval and context engineering",
      },
      {
        kind: "p",
        text: "Retrieval-augmented generation is no longer a demo trick. Mature pipelines chunk sources carefully, deduplicate overlapping text, attach citations, and monitor drift when underlying documents change. Strong RAG is as much about information architecture and access control as it is about embeddings.",
      },
      {
        kind: "ul",
        items: [
          "Hybrid search (dense + keyword) for precision on named entities and SKUs.",
          "Re-ranking steps to trim context windows without losing the best passages.",
          "Clear policies for PII, confidential clauses, and regional data residency.",
        ],
      },
      {
        kind: "h2",
        text: "Agentic workflows with guardrails",
      },
      {
        kind: "p",
        text: "Autonomous agents that plan, call tools, and retry steps are entering operations where human oversight remains mandatory: finance approvals, infrastructure changes, and regulated workflows. The pattern that works is narrow scope, explicit tool allowlists, structured logs, and kill switches—not open-ended autonomy on day one.",
      },
      {
        kind: "p",
        text: "If you are planning an AI roadmap, prioritize evaluation harnesses and observability before expanding model capability. When you can measure quality, cost, and safety on every release, you earn the right to ship faster—and that is the real trend behind AI development in 2025.",
      },
    ],
  },
  {
    slug: "smart-contract-utility-modern-business",
    title: "Smart Contracts: Real Utility Beyond the Buzzword",
    excerpt:
      "Distributed programs on a blockchain can automate trust, reduce reconciliation, and unlock new business models—when the problem genuinely benefits from tamper-evident execution and shared state.",
    metaDescription:
      "Learn how smart contracts create business value: automation, transparency, settlement, and composability—with practical examples and when not to use on-chain logic.",
    keywords: [
      "smart contract utility",
      "blockchain for business",
      "automated agreements",
      "digital settlement",
      "Web3 enterprise",
    ],
    publishedAt: "2025-10-28",
    updatedAt: "2026-01-08",
    readTimeMinutes: 8,
    thumbnailSrc: "/blog/thumbnails/smart-contract-utility-modern-business.svg",
    bannerSrc: "/blog/banners/smart-contract-utility-modern-business.svg",
    thumbnailAlt: "Geometric chain blocks on cyan grid—smart contract utility article",
    bannerAlt: "Wide banner: smart contracts and business utility beyond hype",
    sections: [
      {
        kind: "p",
        text: "A smart contract is executable logic stored on a blockchain: when predefined conditions are met, the network enforces the outcome without a single company unilaterally rewriting the rules. That property—credible commitment in software—is useful when counterparties do not fully trust one another yet still want to cooperate at scale.",
      },
      {
        kind: "h2",
        text: "Where smart contracts earn their keep",
      },
      {
        kind: "p",
        text: "Settlement and clearing are natural fits. Tokenized representations of assets, combined with on-chain rules for transfer, can reduce manual reconciliation between siloed databases. Loyalty points, escrow releases, and milestone-based payouts map cleanly to if-then logic with transparent audit trails.",
      },
      {
        kind: "p",
        text: "Supply-chain provenance is another durable use case. Hashes of inspection certificates or IoT readings anchored on-chain do not replace off-chain systems, but they create a tamper-evident timeline partners can verify. The contract layer coordinates who may update what and under which circumstances.",
      },
      {
        kind: "h2",
        text: "Transparency without leaking strategy",
      },
      {
        kind: "p",
        text: "Public blockchains expose bytecode and transaction history. Sensitive commercial terms often stay off-chain; the contract stores commitments, access control, and settlement rails while legal prose lives in traditional agreements. Privacy techniques—commitment schemes, selective disclosure, or permissioned networks—enter the picture when confidentiality is non-negotiable.",
      },
      {
        kind: "ul",
        items: [
          "Use on-chain logic when multiple parties need the same source of truth for execution.",
          "Prefer off-chain compute when data volume, latency, or secrecy dominates.",
          "Design upgrade and pause mechanisms deliberately; immutability is a feature until it is a bug.",
        ],
      },
      {
        kind: "h2",
        text: "When a database might be enough",
      },
      {
        kind: "p",
        text: "If a trusted operator already exists, users tolerate moderate counterparty risk, and throughput requirements are extreme, a well-audited centralized system may be simpler and cheaper. Smart contracts shine when trust minimization, composability with other protocols, or open participation is core to the product—not when blockchain is merely fashionable.",
      },
    ],
  },
  {
    slug: "types-of-smart-contracts-guide",
    title: "Types of Smart Contracts: A Clear Field Guide for Builders",
    excerpt:
      "Token standards, DAOs, escrow, NFT logic, and DeFi primitives each solve different coordination problems. Here is how to recognize the major categories and pick the right pattern.",
    metaDescription:
      "Overview of smart contract types: fungible tokens, NFTs, DAO governance, escrow, DeFi primitives, and identity—helping teams choose the right on-chain pattern.",
    keywords: [
      "types of smart contracts",
      "ERC-20 vs ERC-721",
      "DAO smart contract",
      "DeFi contract patterns",
      "NFT smart contract",
      "Solidity patterns",
    ],
    publishedAt: "2025-11-04",
    updatedAt: "2026-01-08",
    readTimeMinutes: 10,
    thumbnailSrc: "/blog/thumbnails/types-of-smart-contracts-guide.svg",
    bannerSrc: "/blog/banners/types-of-smart-contracts-guide.svg",
    thumbnailAlt: "Layered document and token icons—types of smart contracts guide",
    bannerAlt: "Wide banner: guide to different smart contract categories",
    sections: [
      {
        kind: "p",
        text: "“Smart contract” describes a delivery mechanism, not one monolithic design. In practice, builders combine a handful of archetypes—asset ledgers, access control modules, governance registries, and financial primitives—to ship marketplaces, treasuries, games, and enterprise workflows. Recognizing the category helps you reuse audited patterns and communicate clearly with legal and security reviewers.",
      },
      {
        kind: "h2",
        text: "Fungible token contracts",
      },
      {
        kind: "p",
        text: "Fungible token standards (for example ERC-20 on Ethereum-compatible chains) implement a shared ledger of balances: mint, burn, transfer, and allowances. They power stablecoins, reward points, governance votes weighted by stake, and cross-protocol collateral. The contract’s risk surface is concentrated in mint authority, upgradeability, and any hooks that call external contracts during transfers.",
      },
      {
        kind: "h2",
        text: "Non-fungible and semi-fungible contracts",
      },
      {
        kind: "p",
        text: "NFT standards (such as ERC-721 and ERC-1155) bind unique or batched token IDs to metadata URIs, royalty configurations, or in-game attributes. Semi-fungible IDs can represent a class of items with a finite supply—tickets, tiered passes, or loot tables—while still benefiting from the same wallet and marketplace infrastructure.",
      },
      {
        kind: "h2",
        text: "Governance and DAO contracts",
      },
      {
        kind: "p",
        text: "Decentralized autonomous organizations typically separate token accounting, proposal creation, voting tallies, and timelocked execution. Multisignature modules often sit beside on-chain voting to handle emergencies. The type system here is procedural: who may propose, how quorum is calculated, and how long the community has to react before code changes go live.",
      },
      {
        kind: "h2",
        text: "Escrow, vesting, and payment streaming",
      },
      {
        kind: "p",
        text: "Time-locked releases, milestone escrow, and streaming payments encode business rhythm on-chain. These contracts intersect heavily with compliance: who can claw back, what happens when a party disputes delivery, and how oracles supply external facts. Simplicity and formal verification matter because bugs directly move money.",
      },
      {
        kind: "h2",
        text: "DeFi primitives",
      },
      {
        kind: "ul",
        items: [
          "Automated market makers and liquidity pools for price discovery.",
          "Lending protocols with collateralization ratios and liquidation auctions.",
          "Derivatives and structured products that compose multiple contracts.",
        ],
      },
      {
        kind: "p",
        text: "Choosing a type starts from the coordination problem: who needs to agree, what must be immutable, and what data must be public. Combine types deliberately—governance token plus treasury vault plus NFT access gate—and document invariants so auditors and users share the same mental model.",
      },
    ],
  },
  {
    slug: "agentic-ai-software-delivery",
    title: "Agentic AI and the Next Phase of Software Delivery",
    excerpt:
      "Autonomous agents that use tools, memory, and planning loops are changing how we design APIs, observability, and human-in-the-loop review—without replacing disciplined engineering.",
    metaDescription:
      "How agentic AI affects software delivery: tool APIs, memory, planning, safety, and observability for teams building autonomous assistants and workflows.",
    keywords: [
      "agentic AI",
      "AI agents software",
      "LLM tool use",
      "autonomous workflows",
      "AI observability",
    ],
    publishedAt: "2025-12-02",
    updatedAt: "2026-01-08",
    readTimeMinutes: 8,
    thumbnailSrc: "/blog/thumbnails/agentic-ai-software-delivery.svg",
    bannerSrc: "/blog/banners/agentic-ai-software-delivery.svg",
    thumbnailAlt: "Connected nodes and workflow arrows—agentic AI delivery article",
    bannerAlt: "Wide banner: agentic AI and software delivery practices",
    sections: [
      {
        kind: "p",
        text: "Agentic AI describes systems that pursue goals over multiple steps: they read state, choose actions, invoke tools, and revise plans when results differ from expectations. Unlike a single-shot completion, an agent run resembles a micro-workflow with branching. That shift pushes teams to treat prompts, tools, and memory as a product surface—not a one-off integration.",
      },
      {
        kind: "h2",
        text: "Designing tools agents can rely on",
      },
      {
        kind: "p",
        text: "Stable tool schemas beat clever prose. Functions with explicit inputs, idempotent behavior where possible, and structured errors help models recover from mistakes. Rate limits, authentication, and per-tenant scoping belong in the tool layer so the agent cannot accidentally amplify privilege.",
      },
      {
        kind: "h2",
        text: "Memory: useful, bounded, and auditable",
      },
      {
        kind: "p",
        text: "Long-running agents need scratchpads, retrieval over prior runs, and policies for what may persist. Storing raw customer data in vector memory without retention rules invites compliance debt. Partition memory by workspace, encrypt at rest, and expose to users what the agent “remembers” and how to delete it.",
      },
      {
        kind: "h2",
        text: "Observability and human oversight",
      },
      {
        kind: "ul",
        items: [
          "Trace each step: model call, tool invocation, latency, and token cost.",
          "Define escalation paths when confidence drops or policies trigger.",
          "Ship with shadow mode or approval queues before full autonomy.",
        ],
      },
      {
        kind: "p",
        text: "Agentic patterns complement—not replace—solid architecture, testing, and code review. The teams that integrate them cleanly will ship faster on repetitive workflows while keeping humans accountable for exceptions, ethics, and final judgment calls.",
      },
    ],
  },
  {
    slug: "defi-smart-contract-security-patterns",
    title: "DeFi Smart Contracts: Security Patterns Builders Should Know",
    excerpt:
      "Reentrancy guards, oracle design, access control, and economic incentives each address different failure modes. This overview connects common vulnerabilities to practical mitigation habits.",
    metaDescription:
      "DeFi smart contract security: reentrancy, oracles, access control, upgrades, and economic audits—essential patterns for safer on-chain financial logic.",
    keywords: [
      "DeFi security",
      "smart contract audit",
      "reentrancy",
      "oracle risk",
      "Solidity security",
    ],
    publishedAt: "2025-11-20",
    updatedAt: "2026-01-08",
    readTimeMinutes: 9,
    thumbnailSrc: "/blog/thumbnails/defi-smart-contract-security-patterns.svg",
    bannerSrc: "/blog/banners/defi-smart-contract-security-patterns.svg",
    thumbnailAlt: "Shield and chain motif—DeFi smart contract security article",
    bannerAlt: "Wide banner: DeFi smart contract security patterns",
    sections: [
      {
        kind: "p",
        text: "Decentralized finance protocols move real value through composable contracts. A flaw in one module can drain liquidity or corrupt pricing across an entire ecosystem. Security is therefore a stack: language-level discipline, architectural separation, economic stress testing, and continuous monitoring—not a single audit checkbox.",
      },
      {
        kind: "h2",
        text: "Reentrancy and state updates",
      },
      {
        kind: "p",
        text: "External calls before state finalization created historic losses. Modern patterns use checks-effects-interactions, reentrancy guards, and pull-over-push payments where users withdraw rather than contracts pushing ether in arbitrary depth. Even token callbacks can reenter; treat every external call as hostile.",
      },
      {
        kind: "h2",
        text: "Oracles and price manipulation",
      },
      {
        kind: "p",
        text: "On-chain prices from thin pools are easy to move for a single block. Time-weighted averages, multi-source oracles, and circuit breakers reduce—but do not eliminate—manipulation risk. Design liquidation and collateral modules assuming adversarial markets during volatility.",
      },
      {
        kind: "h2",
        text: "Access control and upgrades",
      },
      {
        kind: "p",
        text: "Role-based permissions should be minimal and documented: pausers, guardians, and upgrade keys need timelocks and multisig governance where appropriate. Transparent proxy patterns and immutable cores with peripheral modules trade flexibility against attack surface; there is no universal best answer, only explicit tradeoffs.",
      },
      {
        kind: "h2",
        text: "Economic and composability audits",
      },
      {
        kind: "ul",
        items: [
          "Model token incentives: inflation, fees, and governance capture scenarios.",
          "Stress-test composability with flash loans and sandwich-style attacks in simulation.",
          "Maintain bug bounties and incident runbooks after launch.",
        ],
      },
      {
        kind: "p",
        text: "Strong DeFi engineering pairs formal reviews with red teaming and live monitoring. Treat every deployment as a long-lived system that adversaries probe daily—and design accordingly.",
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}
