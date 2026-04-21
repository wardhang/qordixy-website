"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./Logo";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/#about" },
  { label: "Why Us", href: "/#why-us" },
  { label: "Tech Stack", href: "/#tech-stack" },
  { label: "Blogs", href: "/blog" },
  { label: "Contact", href: "/#contact" },
] as const;

export default function Navbar({ solid = false }: { solid?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = () => setMobileOpen(false);

  /** Blog layout passes `solid` so the bar stays navy (same as homepage scrolled). No usePathname—avoids import/runtime issues. */
  const solidBar = solid || scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solidBar
          ? "bg-[#0A1F44]/95 backdrop-blur-md shadow-[0_2px_24px_rgba(0,0,0,0.4)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          <Link href="/" aria-label="QORDIXY Home">
            <Logo variant="light" size="md" />
          </Link>

          <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
            {navLinks.map((link) =>
              link.href === "/blog" || link.href === "/services" ? (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-heading text-sm font-medium text-white/70 hover:text-[#00DDEB] transition-colors duration-200 uppercase tracking-wider"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-heading text-sm font-medium text-white/70 hover:text-[#00DDEB] transition-colors duration-200 uppercase tracking-wider"
                >
                  {link.label}
                </a>
              )
            )}
          </nav>

          <div className="hidden md:block">
            <a
              href="/#contact"
              className="font-heading text-sm font-semibold uppercase tracking-wider px-6 py-2.5 rounded-full border border-[#00DDEB] text-[#00DDEB] hover:bg-[#00DDEB] hover:text-[#0A1F44] transition-all duration-300"
            >
              Get Started
            </a>
          </div>

          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#0A1F44] border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) =>
            link.href === "/blog" || link.href === "/services" ? (
              <Link
                key={link.label}
                href={link.href}
                onClick={handleNavClick}
                className="font-heading text-sm font-medium text-white/70 hover:text-[#00DDEB] transition-colors uppercase tracking-wider py-2"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                onClick={handleNavClick}
                className="font-heading text-sm font-medium text-white/70 hover:text-[#00DDEB] transition-colors uppercase tracking-wider py-2"
              >
                {link.label}
              </a>
            )
          )}
          <a
            href="/#contact"
            onClick={handleNavClick}
            className="font-heading text-sm font-semibold uppercase tracking-wider px-6 py-2.5 rounded-full border border-[#00DDEB] text-[#00DDEB] text-center mt-2"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}
