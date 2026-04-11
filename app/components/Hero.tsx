"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scrollToNextSection = () => {
    const el = document.getElementById("services");
    if (!el) return;

    const prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    el.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animFrame: number;
    // Fewer particles on mobile for performance
    const isMobile = window.innerWidth < 768;
    const count = isMobile ? 30 : 60;

    const particles: {
      x: number; y: number; vx: number; vy: number; size: number; opacity: number;
    }[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize, { passive: true });

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 221, 235, ${p.opacity})`;
        ctx.fill();
      });

      // Connecting lines — skip on mobile for performance
      if (!isMobile) {
        particles.forEach((a, i) => {
          particles.slice(i + 1).forEach((b) => {
            const dist = Math.hypot(a.x - b.x, a.y - b.y);
            if (dist < 120) {
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.strokeStyle = `rgba(0, 221, 235, ${0.08 * (1 - dist / 120)})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          });
        });
      }
      animFrame = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section
      aria-label="Hero"
      className="relative min-h-screen bg-[#0A1F44] flex flex-col items-center justify-center overflow-hidden"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none" aria-hidden="true" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(0,221,235,0.07) 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      {/* Decorative hex */}
      <div className="absolute right-[-10%] top-[10%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] opacity-5 pointer-events-none hidden sm:block" aria-hidden="true">
        <svg viewBox="0 0 400 400" fill="none">
          <polygon points="200,20 360,110 360,290 200,380 40,290 40,110" stroke="#00DDEB" strokeWidth="2" />
          <polygon points="200,60 330,130 330,270 200,340 70,270 70,130" stroke="#00DDEB" strokeWidth="1" />
          <polygon points="200,100 300,155 300,245 200,300 100,245 100,155" stroke="#00DDEB" strokeWidth="1.5" />
        </svg>
      </div>

      <div id="main-content" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[#00DDEB]/30 bg-[#00DDEB]/5 px-3 sm:px-4 py-1.5 mb-6 sm:mb-8">
          <span className="w-2 h-2 rounded-full bg-[#00DDEB] animate-pulse" aria-hidden="true" />
          <span className="font-heading text-xs font-semibold uppercase tracking-widest text-[#00DDEB]">
            Next-Generation Technology Partner
          </span>
        </div>

        {/* H1 — primary SEO keyword heading */}
        <h1 className="font-heading font-black text-white leading-tight mb-5 sm:mb-6">
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            Engineering the
          </span>
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mt-1 sm:mt-2">
            Future with{" "}
            <span className="text-[#00DDEB] cyan-text-glow">AI</span>
            {" "}&{" "}
            <span className="text-[#00DDEB] cyan-text-glow">Blockchain</span>
          </span>
        </h1>

        <p className="mt-4 sm:mt-6 text-white/60 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light px-2">
          QORDIXY delivers precision-engineered AI systems, autonomous agents, blockchain solutions, and full-stack digital products — built to scale your business in the intelligence era.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          <a
            href="#services"
            className="group font-heading font-semibold text-sm uppercase tracking-wider px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#00DDEB] text-[#0A1F44] hover:bg-white transition-all duration-300 shadow-[0_0_30px_rgba(0,221,235,0.3)] hover:shadow-[0_0_40px_rgba(0,221,235,0.5)] flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            Explore Services
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#contact"
            className="font-heading font-semibold text-sm uppercase tracking-wider px-7 sm:px-8 py-3.5 sm:py-4 rounded-full border border-white/30 text-white hover:border-[#00DDEB] hover:text-[#00DDEB] transition-all duration-300 w-full sm:w-auto justify-center text-center"
          >
            Book a Consultation
          </a>
        </div>

        {/* Stats */}
        <div className="mt-14 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {[
            { number: "50+", label: "Projects Delivered" },
            { number: "8+",  label: "Service Domains" },
            { number: "99%", label: "Client Satisfaction" },
            { number: "24/7", label: "Support & Uptime" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-[#00DDEB]">
                {stat.number}
              </div>
              <div className="text-white/40 text-xs uppercase tracking-wider mt-1 font-heading">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        type="button"
        onClick={scrollToNextSection}
        aria-label="Scroll to services section"
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00DDEB] focus-visible:ring-offset-4 focus-visible:ring-offset-[#0A1F44]"
      >
        <span className="text-white/30 text-xs uppercase tracking-widest font-heading hidden sm:block">Scroll</span>
        <svg className="w-5 h-5 text-[#00DDEB]/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </section>
  );
}
