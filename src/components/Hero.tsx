"use client";

import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut", delay },
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

        <motion.div {...fadeUp(0.5)} className="flex items-center justify-center gap-4">
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
