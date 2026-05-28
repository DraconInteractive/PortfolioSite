"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-32 border-t border-[#e0dcd4]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="text-[#ff5c00] text-xs font-mono tracking-widest uppercase mb-2">
            Contact
          </p>
          <h2 className="font-[family-name:var(--font-space-grotesk)] font-bold text-5xl text-[#111110] mb-6 leading-tight">
            Let&apos;s work<br />together.
          </h2>
          <p className="text-[#7a7872] mb-10 leading-relaxed">
            Open to senior and lead roles in software engineering, real-time systems, simulation, and ML integration. Based in Australia, open to remote.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:petermarkcarey@gmail.com"
              className="px-6 py-3 bg-[#ff5c00] text-white font-semibold text-sm rounded hover:bg-[#e05200] transition-colors"
            >
              Send an Email
            </a>
            <a
              href="https://linkedin.com/in/pmcarey/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-[#e0dcd4] text-[#111110] text-sm rounded hover:border-[#ff5c00] hover:text-[#ff5c00] transition-all"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/DraconInteractive"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-[#e0dcd4] text-[#111110] text-sm rounded hover:border-[#ff5c00] hover:text-[#ff5c00] transition-all"
            >
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
