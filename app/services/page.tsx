import Link from "next/link";
import type { Metadata } from "next";
import { services } from "@/lib/services-data";
import { SITE_URL } from "@/lib/site";

const sorted = [...services].sort((a, b) => a.title.localeCompare(b.title));

export const metadata: Metadata = {
  title: "Services — AI, Blockchain & Product Engineering",
  description:
    "Explore QORDIXY services: AI development, agentic AI systems, smart contracts, DApps, web and mobile apps, custom software, and ERP/CRM platforms.",
  keywords: [
    "AI development services",
    "smart contract development",
    "DApp development",
    "website development",
    "mobile app development",
    "custom software",
    "ERP CRM development",
    "QORDIXY",
  ],
  alternates: { canonical: `${SITE_URL}/services` },
  openGraph: {
    title: "Services — AI, Blockchain & Product Engineering | QORDIXY",
    description:
      "AI, agentic systems, blockchain, and full-stack delivery—engineered for speed, security, and scale.",
    url: `${SITE_URL}/services`,
    type: "website",
    siteName: "QORDIXY",
    images: [
      {
        url: `${SITE_URL}/logo.svg`,
        width: 1024,
        height: 280,
        alt: "QORDIXY",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services — AI, Blockchain & Product Engineering | QORDIXY",
    description:
      "AI, agentic systems, blockchain, and full-stack delivery—engineered for speed, security, and scale.",
  },
};

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "QORDIXY Services",
  itemListElement: sorted.map((s, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    name: s.title,
    url: `${SITE_URL}/services/${s.slug}`,
  })),
};

export default function ServicesIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />

      <div className="relative bg-[#0A1F44] overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-50" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <nav className="text-sm text-white/50 mb-6" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-[#00DDEB] transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-[#00DDEB] font-medium">Services</li>
            </ol>
          </nav>

          <p className="font-heading text-xs font-semibold uppercase tracking-widest text-[#00DDEB] mb-3">
            What we build
          </p>
          <h1 className="font-heading font-black text-white text-3xl sm:text-4xl md:text-5xl max-w-3xl leading-tight mb-4">
            Services engineered for scale
          </h1>
          <p className="text-white/60 text-base sm:text-lg max-w-2xl leading-relaxed">
            Choose a service to see how we deliver: scope, deliverables, security
            practices, and the systems we build to drive real outcomes.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {sorted.map((service) => (
            <article
              key={service.slug}
              className="group flex flex-col rounded-2xl border border-[#00DDEB]/20 bg-[#112347] shadow-[0_4px_24px_rgba(0,0,0,0.25)] overflow-hidden hover:border-[#00DDEB]/50 hover:shadow-[0_8px_32px_rgba(0,221,235,0.15)] transition-all duration-300"
            >
              <Link
                href={`/services/${service.slug}`}
                className="block aspect-[16/10] overflow-hidden bg-[#0A1F44]/20 relative"
              >
                <img
                  src={service.thumbnailSrc}
                  alt={service.thumbnailAlt}
                  width={800}
                  height={500}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  loading="lazy"
                />
              </Link>

              <div className="flex flex-col flex-1 p-6 sm:p-7">
                <h2 className="font-heading font-bold text-white text-lg sm:text-xl leading-snug mb-2 group-hover:text-[#00DDEB] transition-colors">
                  <Link href={`/services/${service.slug}`}>{service.title}</Link>
                </h2>
                <p className="text-[#00DDEB]/80 text-xs sm:text-sm font-heading font-semibold uppercase tracking-wider mb-3">
                  {service.tagline}
                </p>
                <p className="text-white/55 text-sm leading-relaxed flex-1 line-clamp-3 mb-5">
                  {service.excerpt}
                </p>

                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 font-heading text-sm font-semibold uppercase tracking-wider text-[#00DDEB] hover:text-white transition-colors mt-auto"
                >
                  View service
                  <svg
                    className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}

