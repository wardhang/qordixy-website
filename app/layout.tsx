import type { Metadata, Viewport } from "next";
import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

const BASE_URL = "https://qordixy.com";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)",  color: "#0A1F44" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "QORDIXY — AI, Blockchain & Digital Transformation",
    template: "%s | QORDIXY",
  },
  description:
    "QORDIXY is a next-generation technology company delivering AI solutions, agentic AI systems, blockchain smart contracts, DApp development, web & mobile applications, custom software, ERP, and CRM platforms.",
  keywords: [
    "AI development company",
    "agentic AI systems",
    "blockchain smart contract development",
    "DApp development",
    "web development agency",
    "mobile app development",
    "custom software development",
    "ERP development",
    "CRM development",
    "machine learning solutions",
    "LangChain development",
    "Solidity smart contracts",
    "Next.js development",
    "React Native apps",
    "digital transformation",
    "QORDIXY",
  ],
  authors: [{ name: "QORDIXY", url: BASE_URL }],
  creator: "QORDIXY",
  publisher: "QORDIXY",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "QORDIXY",
    title: "QORDIXY — AI, Blockchain & Digital Transformation",
    description:
      "Next-generation technology solutions across AI, agentic systems, blockchain, and full-stack digital products. Built for scale.",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 280,
        alt: "QORDIXY — AI, Blockchain & Digital Transformation",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@qordixy",
    creator: "@qordixy",
    title: "QORDIXY — AI, Blockchain & Digital Transformation",
    description:
      "Next-generation technology solutions across AI, agentic systems, blockchain, and full-stack digital products.",
    images: ["/logo.png"],
  },

  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    apple: "/icon.png",
    shortcut: "/icon.png",
  },

  alternates: {
    canonical: BASE_URL,
  },

  category: "technology",
};

// JSON-LD structured data
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "QORDIXY",
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  description:
    "QORDIXY is a next-generation technology company delivering AI, blockchain, and full-stack digital solutions.",
  contactPoint: {
    "@type": "ContactPoint",
    email: "hello@qordixy.com",
    contactType: "customer service",
    availableLanguage: "English",
  },
  sameAs: [
    "https://linkedin.com/company/qordixy",
    "https://twitter.com/qordixy",
    "https://github.com/qordixy",
  ],
  knowsAbout: [
    "Artificial Intelligence",
    "Agentic AI",
    "Blockchain",
    "Smart Contracts",
    "Decentralized Applications",
    "Web Development",
    "Mobile App Development",
    "Custom Software Development",
    "ERP Systems",
    "CRM Systems",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "QORDIXY",
  url: BASE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: `${BASE_URL}/?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "QORDIXY Services",
  description: "Technology services offered by QORDIXY",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Artificial Intelligence Development" },
    { "@type": "ListItem", position: 2, name: "Agentic AI Systems" },
    { "@type": "ListItem", position: 3, name: "Blockchain & Smart Contract Development" },
    { "@type": "ListItem", position: 4, name: "DApp Development" },
    { "@type": "ListItem", position: 5, name: "Website Design & Development" },
    { "@type": "ListItem", position: 6, name: "Mobile App Development" },
    { "@type": "ListItem", position: 7, name: "Custom Software Development" },
    { "@type": "ListItem", position: 8, name: "ERP & CRM Development" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${roboto.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {/* Skip to main content — accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#00DDEB] focus:text-[#0A1F44] focus:font-heading focus:font-semibold focus:rounded-lg focus:text-sm"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
