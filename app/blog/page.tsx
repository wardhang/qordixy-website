import Link from "next/link";
import type { Metadata } from "next";
import { blogPosts } from "@/lib/blog-data";
import { SITE_URL } from "@/lib/site";

const sortedPosts = [...blogPosts].sort((a, b) =>
  b.publishedAt.localeCompare(a.publishedAt)
);

function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export const metadata: Metadata = {
  title: "Insights — AI, Blockchain & Smart Contracts",
  description:
    "Original articles on AI development, agentic systems, smart contract utility, contract types, and DeFi security—written by the QORDIXY team for builders and decision-makers.",
  keywords: [
    "AI blog",
    "smart contracts explained",
    "blockchain insights",
    "agentic AI",
    "DeFi security",
    "QORDIXY",
  ],
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    title: "Insights — AI, Blockchain & Smart Contracts | QORDIXY",
    description:
      "Technical insights on AI engineering, smart contracts, and secure on-chain systems.",
    url: `${SITE_URL}/blog`,
    type: "website",
    siteName: "QORDIXY",
  },
  twitter: {
    card: "summary_large_image",
    title: "Insights — AI, Blockchain & Smart Contracts | QORDIXY",
    description:
      "Technical insights on AI engineering, smart contracts, and secure on-chain systems.",
  },
};

const blogListJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "QORDIXY Insights",
  description:
    "Articles on AI development, smart contracts, and decentralized systems.",
  url: `${SITE_URL}/blog`,
  publisher: {
    "@type": "Organization",
    name: "QORDIXY",
    url: SITE_URL,
  },
  blogPost: sortedPosts.map((p) => ({
    "@type": "BlogPosting",
    headline: p.title,
    description: p.metaDescription,
    url: `${SITE_URL}/blog/${p.slug}`,
    datePublished: p.publishedAt,
    dateModified: p.updatedAt,
    image: `${SITE_URL}${p.bannerSrc}`,
  })),
};

export default function BlogIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListJsonLd) }}
      />
      <div className="relative bg-[#0A1F44] overflow-hidden">
        <div
          className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-50"
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <nav className="text-sm text-white/50 mb-6" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-[#00DDEB] transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-[#00DDEB] font-medium">Blog</li>
            </ol>
          </nav>
          <p className="font-heading text-xs font-semibold uppercase tracking-widest text-[#00DDEB] mb-3">
            Insights
          </p>
          <h1 className="font-heading font-black text-white text-3xl sm:text-4xl md:text-5xl max-w-3xl leading-tight mb-4">
            AI, blockchain, and how we build
          </h1>
          <p className="text-white/60 text-base sm:text-lg max-w-2xl leading-relaxed">
            Practical, SEO-friendly guides on modern AI delivery, smart contract
            patterns, and on-chain security—no fluff, no recycled press releases.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {sortedPosts.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col rounded-2xl border border-[#0A1F44]/10 bg-white shadow-[0_4px_24px_rgba(10,31,68,0.06)] overflow-hidden hover:border-[#00DDEB]/40 hover:shadow-[0_8px_32px_rgba(0,221,235,0.12)] transition-all duration-300"
            >
              <Link
                href={`/blog/${post.slug}`}
                className="block aspect-[16/10] overflow-hidden bg-[#0A1F44]/5 relative"
              >
                <img
                  src={post.thumbnailSrc}
                  alt={post.thumbnailAlt}
                  width={800}
                  height={500}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  loading="lazy"
                />
              </Link>
              <div className="flex flex-col flex-1 p-6 sm:p-7">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#8a9ab5] font-medium mb-3">
                  <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                  <span aria-hidden="true">·</span>
                  <span>{post.readTimeMinutes} min read</span>
                </div>
                <h2 className="font-heading font-bold text-[#0A1F44] text-lg sm:text-xl leading-snug mb-3 group-hover:text-[#00b8c4] transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-[#8a9ab5] text-sm leading-relaxed flex-1 line-clamp-3 mb-5">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 font-heading text-sm font-semibold uppercase tracking-wider text-[#00DDEB] hover:text-[#0A1F44] transition-colors mt-auto"
                >
                  Read more
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
