"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="py-32 max-w-6xl mx-auto px-6">
      <div className="flex items-end justify-between mb-16">
        <div>
          <p className="text-[#ff5c00] text-xs font-mono tracking-widest uppercase mb-2">
            Work
          </p>
          <h2 className="font-[family-name:var(--font-space-grotesk)] font-bold text-5xl text-[#111110]">
            Projects
          </h2>
        </div>
        <a
          href="https://github.com/DraconInteractive"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-[#7a7872] hover:text-[#111110] transition-colors"
        >
          View all on GitHub →
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#e0dcd4]">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
          <Link
            href={`/projects/${project.id}`}
            className="group block bg-[#fafaf7] p-8 hover:bg-[#f0ede6] transition-colors h-full"
          >
            <div className="flex items-start justify-between mb-4">
              <span className="text-[#e0dcd4] font-mono text-xs">
                0{i + 1}
              </span>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#7a7872] hover:text-[#ff5c00] transition-colors text-sm"
                >
                  ↗
                </a>
              )}
            </div>

            <h3 className="font-[family-name:var(--font-space-grotesk)] font-semibold text-xl text-[#111110] mb-1 group-hover:text-[#ff5c00] transition-colors">
              {project.title}
            </h3>
            <p className="text-[#ff5c00] text-xs font-mono mb-3">{project.company}</p>
            <p className="text-[#7a7872] text-sm leading-relaxed mb-6">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-0.5 border border-[#e0dcd4] text-[#7a7872] rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
