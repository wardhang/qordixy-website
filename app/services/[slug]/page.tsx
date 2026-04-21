import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services, getServiceBySlug, getAllServiceSlugs } from "@/lib/services-data";
import { SITE_URL } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  const url = `${SITE_URL}/services/${service.slug}`;
  const ogImage = `${SITE_URL}${service.bannerSrc}`;

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url,
      type: "website",
      siteName: "QORDIXY",
      images: [{ url: ogImage, width: 1600, height: 420, alt: service.bannerAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
      images: [ogImage],
    },
  };
}

function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const url = `${SITE_URL}/services/${service.slug}`;

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription,
    url,
    provider: { "@type": "Organization", name: "QORDIXY", url: SITE_URL },
    areaServed: "Worldwide",
    serviceType: service.title,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
      { "@type": "ListItem", position: 3, name: service.title, item: url },
    ],
  };

  const related = services
    .filter((s) => s.slug !== service.slug)
    .sort((a, b) => a.title.localeCompare(b.title))
    .slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <header className="relative w-full overflow-hidden bg-[#060f22]">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none z-0" aria-hidden="true" />

        <figure className="relative z-[1] w-full max-w-[1600px] mx-auto aspect-[1600/420] min-h-[120px]">
          <img
            src={service.bannerSrc}
            alt={service.bannerAlt}
            width={1600}
            height={420}
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-center"
            fetchPriority="high"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#060f22] via-[#060f22]/20 to-transparent pointer-events-none"
            aria-hidden="true"
          />
        </figure>

        <div className="relative z-[2] max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-6 sm:pt-8">
          <nav className="text-sm text-white/60 mb-6" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-[#00DDEB] transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/services" className="hover:text-[#00DDEB] transition-colors">
                  Services
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-[#00DDEB] font-medium line-clamp-1">{service.title}</li>
            </ol>
          </nav>

          <p className="font-heading text-xs font-semibold uppercase tracking-widest text-[#00DDEB] mb-3">
            Updated {formatDate(service.updatedAt)}
          </p>
          <h1 className="font-heading font-black text-white text-3xl sm:text-4xl md:text-5xl leading-tight mb-3">
            {service.title}
          </h1>
          <p className="text-white/70 text-base sm:text-lg leading-relaxed border-l-4 border-[#00DDEB] pl-4">
            {service.excerpt}
          </p>
        </div>
      </header>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="rounded-2xl border border-[#00DDEB]/20 bg-[#112347] px-6 sm:px-8 py-8 sm:py-10 shadow-[0_4px_32px_rgba(0,0,0,0.2)]">
          <div className="space-y-5 text-white/80 text-base sm:text-lg leading-relaxed">
            {service.sections.map((section, idx) => {
              if (section.kind === "h2") {
                return (
                  <h2 key={idx} className="font-heading font-bold text-white text-xl sm:text-2xl pt-4">
                    {section.text}
                  </h2>
                );
              }
              if (section.kind === "p") {
                return (
                  <p key={idx} className="text-white/80">
                    {section.text}
                  </p>
                );
              }
              return (
                <ul
                  key={idx}
                  className="list-disc pl-6 space-y-2 marker:text-[#00DDEB] text-white/80"
                >
                  {section.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              );
            })}
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-xl border border-white/10 bg-[#0A1F44]/50 p-5">
              <h3 className="font-heading font-bold text-white text-sm uppercase tracking-widest mb-3">
                Deliverables
              </h3>
              <ul className="space-y-2 text-white/70 text-sm">
                {service.deliverables.map((d) => (
                  <li key={d} className="flex gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#00DDEB] shrink-0" aria-hidden="true" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-white/10 bg-[#0A1F44]/50 p-5">
              <h3 className="font-heading font-bold text-white text-sm uppercase tracking-widest mb-3">
                Tech we use
              </h3>
              <div className="flex flex-wrap gap-2">
                {service.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-heading font-semibold uppercase tracking-wider text-[#00DDEB]/85 bg-[#00DDEB]/10 border border-[#00DDEB]/20 rounded-full px-3 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 font-heading text-xs font-semibold uppercase tracking-wider text-[#0A1F44] bg-[#00DDEB] px-4 py-2 rounded-full hover:bg-white transition-colors"
                >
                  Request a quote
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <aside className="border-t border-[#00DDEB]/15 bg-[#060f22] py-14 sm:py-16" aria-label="Related services">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading font-bold text-white text-xl sm:text-2xl mb-8">
              Explore more services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group flex gap-4 rounded-xl bg-[#112347] p-4 border border-[#00DDEB]/15 hover:border-[#00DDEB]/45 transition-colors"
                >
                  <img
                    src={s.thumbnailSrc}
                    alt=""
                    width={120}
                    height={75}
                    className="w-24 h-16 sm:w-28 sm:h-[4.5rem] object-cover rounded-lg shrink-0"
                    loading="lazy"
                  />
                  <div className="min-w-0">
                    <p className="font-heading font-semibold text-white text-sm leading-snug group-hover:text-[#00DDEB] transition-colors line-clamp-2">
                      {s.title}
                    </p>
                    <p className="text-xs text-white/45 mt-1 line-clamp-1">{s.tagline}</p>
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

