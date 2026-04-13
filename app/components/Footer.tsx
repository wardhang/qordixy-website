import Logo from "./Logo";

const serviceLinks = [
  "AI Development",
  "Agentic AI Systems",
  "Blockchain & Smart Contracts",
  "DApp Development",
  "Web Development",
  "Mobile App Development",
  "Custom Software",
  "ERP & CRM Solutions",
];

const companyLinks = [
  { label: "About Us",       href: "/#about" },
  { label: "Why Choose Us",  href: "/#why-us" },
  { label: "Tech Stack",     href: "/#tech-stack" },
  { label: "Blogs",          href: "/blog" },
  { label: "Contact",        href: "/#contact" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/qordixy",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "https://twitter.com/qordixy",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/qordixy",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#060f22] border-t border-white/10" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 mb-10 sm:mb-12">

          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-5 sm:mb-6">
              <Logo variant="light" size="md" />
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-5 sm:mb-6 max-w-xs">
              Engineering the future with AI, blockchain, and precision software. We transform complex challenges into scalable digital solutions.
            </p>
            <nav aria-label="Social media links">
              <ul className="flex gap-3 sm:gap-4">
                {socialLinks.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      aria-label={s.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/40 hover:text-[#00DDEB] hover:border-[#00DDEB] transition-all duration-200"
                    >
                      {s.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-heading font-semibold text-white text-sm uppercase tracking-widest mb-5 sm:mb-6">
              Services
            </h3>
            <ul className="space-y-2.5 sm:space-y-3">
              <li>
                <a
                  href="/blog"
                  className="text-white/50 text-sm hover:text-[#00DDEB] transition-colors duration-200"
                >
                  Blogs &amp; insights
                </a>
              </li>
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a
                    href="/#services"
                    className="text-white/50 text-sm hover:text-[#00DDEB] transition-colors duration-200"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-heading font-semibold text-white text-sm uppercase tracking-widest mb-5 sm:mb-6">
              Company
            </h3>
            <ul className="space-y-2.5 sm:space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/50 text-sm hover:text-[#00DDEB] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-heading font-semibold text-white text-sm uppercase tracking-widest mb-5 sm:mb-6">
              Get In Touch
            </h3>
            <address className="not-italic space-y-4">
              <a
                href="mailto:hello@qordixy.com"
                className="flex items-center gap-3 text-white/50 text-sm hover:text-[#00DDEB] transition-colors duration-200"
              >
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                hello@qordixy.com
              </a>
              <p className="flex items-start gap-3 text-white/50 text-sm">
                <svg className="w-4 h-4 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Global — Remote-First
              </p>
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 font-heading text-xs font-semibold uppercase tracking-wider text-[#00DDEB] border border-[#00DDEB]/30 rounded-full px-4 py-2 hover:bg-[#00DDEB]/10 transition-all duration-200"
              >
                Start a Project
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-white/30 text-xs text-center sm:text-left">
            © {currentYear} QORDIXY. All rights reserved.
          </p>
          <nav aria-label="Legal links">
            <ul className="flex gap-4 sm:gap-6">
              <li><a href="#" className="text-white/30 text-xs hover:text-white/60 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-white/30 text-xs hover:text-white/60 transition-colors">Terms of Service</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
