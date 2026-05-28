"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-32 border-t border-[#e0dcd4]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-[#ff5c00] text-xs font-mono tracking-widest uppercase mb-2">
            History
          </p>
          <h2 className="font-[family-name:var(--font-space-grotesk)] font-bold text-5xl text-[#111110]">
            Experience
          </h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-[180px] top-2 bottom-2 w-px bg-[#e0dcd4]" />

          <div className="space-y-0">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="relative grid grid-cols-1 md:grid-cols-[180px_1fr] pl-8 md:pl-0 pb-12 last:pb-0"
              >
                {/* Period */}
                <div className="hidden md:flex justify-end pr-10 pt-1">
                  <span className="text-sm text-[#7a7872] font-mono tabular-nums">
                    {exp.period}
                  </span>
                </div>

                {/* Dot */}
                <div
                  className="absolute left-[-5px] md:left-[175px] top-[6px] w-[11px] h-[11px] rounded-full border-2 border-[#ff5c00] bg-[#fafaf7]"
                />

                {/* Content */}
                <div className="md:pl-10">
                  <div className="flex items-baseline gap-3 mb-1 flex-wrap">
                    <h3 className="font-[family-name:var(--font-space-grotesk)] font-semibold text-xl text-[#111110]">
                      {exp.role}
                    </h3>
                    <span className="text-[#ff5c00] text-sm font-mono">
                      {exp.company}
                    </span>
                  </div>

                  {/* Mobile period */}
                  <p className="md:hidden text-xs text-[#7a7872] font-mono mb-2">
                    {exp.period}
                  </p>

                  <p className="text-[#7a7872] text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 border border-[#e0dcd4] text-[#7a7872] rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
