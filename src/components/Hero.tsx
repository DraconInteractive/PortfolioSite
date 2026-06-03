"use client";

import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const, delay },
});

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #111110 1px, transparent 1px), linear-gradient(to bottom, #111110 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 text-center">
        <motion.p
          {...fadeUp(0.1)}
          className="text-[#ff5c00] text-sm font-mono tracking-widest uppercase mb-6"
        >
          Game Dev → Software Engineer
        </motion.p>

        <motion.div {...fadeUp(0.2)}>
          <h1
            className="font-[family-name:var(--font-space-grotesk)] font-bold leading-none tracking-tight mb-8"
            style={{ fontSize: "clamp(3rem, 10vw, 8rem)" }}
          >
            <span className="block text-[#111110]">PETER</span>
            <span
              className="block"
              style={{
                WebkitTextStroke: "2px #ff5c00",
                color: "transparent",
              }}
            >
              CAREY
            </span>
          </h1>
        </motion.div>

        <motion.p
          {...fadeUp(0.35)}
          className="text-[#7a7872] text-lg max-w-xl mx-auto mb-10 leading-relaxed"
        >
          I turn complex systems into production software — runtime platforms, simulation environments, ML integrations, and the infrastructure that holds them together.
        </motion.p>

        <motion.div {...fadeUp(0.5)} className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-[#ff5c00] text-white font-semibold text-sm rounded hover:bg-[#e05200] transition-colors"
          >
            See My Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-[#e0dcd4] text-[#111110] text-sm rounded hover:border-[#ff5c00] hover:text-[#ff5c00] transition-all"
          >
            Get In Touch
          </a>
          <a
            href="/assets/PeterCarey_Resume_030626_lf1.pdf"
            download
            className="px-6 py-3 border border-[#e0dcd4] text-[#111110] text-sm rounded hover:border-[#ff5c00] hover:text-[#ff5c00] transition-all"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline-block mr-1.5 -mt-0.5"
            >
              <path d="M7 1v7M4.5 5.5L7 8l2.5-2.5" />
              <path d="M1 10v2.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V10" />
            </svg>
            Resume
          </a>
        </motion.div>

        <motion.div
          {...fadeUp(0.7)}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-1 text-[#7a7872]">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <span className="w-px h-10 bg-gradient-to-b from-[#7a7872] to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
