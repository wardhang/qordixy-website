import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  blogPosts,
  getPostBySlug,
  getAllSlugs,
} from "@/lib/blog-data";
import { SITE_URL } from "@/lib/site";
import BlogArticleBody from "../../components/BlogArticleBody";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const url = `${SITE_URL}/blog/${post.slug}`;
  const ogImage = `${SITE_URL}${post.bannerSrc}`;

  return {
    title: post.title,
    description: post.metaDescription,
    keywords: post.keywords,
    authors: [{ name: "QORDIXY", url: SITE_URL }],
    alternates: { canonical: url },
    openGraph: {
      title: `${post.title} | QORDIXY`,
      description: post.metaDescription,
      url,
      type: "article",
      publishedTime: `${post.publishedAt}T12:00:00Z`,
      modifiedTime: `${post.updatedAt}T12:00:00Z`,
      siteName: "QORDIXY",
      images: [
        {
          url: ogImage,
          width: 1600,
          height: 420,
          alt: post.bannerAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | QORDIXY`,
      description: post.metaDescription,
      images: [ogImage],
    },
    robots: { index: true, follow: true },
  };
}

function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const url = `${SITE_URL}/blog/${post.slug}`;
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    image: [`${SITE_URL}${post.bannerSrc}`],
    datePublished: `${post.publishedAt}T12:00:00Z`,
    dateModified: `${post.updatedAt}T12:00:00Z`,
    author: {
      "@type": "Organization",
      name: "QORDIXY",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "QORDIXY",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.svg`,
      },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    keywords: post.keywords.join(", "),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${SITE_URL}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: url,
      },
    ],
  };

  const related = blogPosts
    .filter((p) => p.slug !== post.slug)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <header className="relative w-full overflow-hidden bg-[#060f22]">
        <div
          className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"
          aria-hidden="true"
        />
        <figure className="relative w-full max-h-[min(52vh,520px)]">
          <img
            src={post.bannerSrc}
            alt={post.bannerAlt}
            width={1600}
            height={420}
            className="w-full h-auto object-cover max-h-[min(52vh,520px)] object-center"
            fetchPriority="high"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#060f22]/90 via-transparent to-transparent pointer-events-none"
            aria-hidden="true"
          />
        </figure>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 -mt-16 sm:-mt-20">
          <nav className="text-sm text-white/60 mb-6" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-[#00DDEB] transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/blog" className="hover:text-[#00DDEB] transition-colors">
                  Blog
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-[#00DDEB] font-medium line-clamp-1">{post.title}</li>
            </ol>
          </nav>
          <p className="font-heading text-xs font-semibold uppercase tracking-widest text-[#00DDEB] mb-3">
            {formatDate(post.publishedAt)}
            {post.updatedAt !== post.publishedAt && (
              <span className="text-white/40 font-normal normal-case tracking-normal">
                {" "}
                · Updated {formatDate(post.updatedAt)}
              </span>
            )}
          </p>
          <h1 className="font-heading font-black text-white text-3xl sm:text-4xl md:text-5xl leading-tight mb-4">
            {post.title}
          </h1>
          <p className="text-white/70 text-base sm:text-lg leading-relaxed border-l-4 border-[#00DDEB] pl-4">
            {post.excerpt}
          </p>
          <p className="mt-4 text-white/40 text-sm">
            {post.readTimeMinutes} min read ·{" "}
            <span className="text-white/50">{post.keywords.slice(0, 4).join(" · ")}</span>
          </p>
        </div>
      </header>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 pb-20">
        <BlogArticleBody sections={post.sections} />
      </article>

      {related.length > 0 && (
        <aside
          className="border-t border-[#0A1F44]/10 bg-[#f4f6f9] py-14 sm:py-16"
          aria-label="Related articles"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading font-bold text-[#0A1F44] text-xl sm:text-2xl mb-8">
              More insights
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group flex gap-4 rounded-xl bg-white p-4 border border-[#0A1F44]/08 hover:border-[#00DDEB]/35 transition-colors shadow-sm"
                >
                  <img
                    src={p.thumbnailSrc}
                    alt=""
                    width={120}
                    height={75}
                    className="w-24 h-16 sm:w-28 sm:h-[4.5rem] object-cover rounded-lg shrink-0"
                    loading="lazy"
                  />
                  <div className="min-w-0">
                    <p className="font-heading font-semibold text-[#0A1F44] text-sm leading-snug group-hover:text-[#00b8c4] transition-colors line-clamp-2">
                      {p.title}
                    </p>
                    <p className="text-xs text-[#8a9ab5] mt-1">{p.readTimeMinutes} min read</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      )}
    </>
  );
}
