"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { projects, type Project } from "@/lib/data";

const professional = projects.filter((p) => p.type === "professional");
const personal = projects.filter((p) => p.type === "personal");

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <Link
        href={`/projects/${project.id}`}
        className="group flex flex-col bg-[#fafaf7] p-8 hover:bg-[#f0ede6] transition-colors h-full"
      >
        <div className="flex items-start justify-between mb-4">
          <span className="text-[#e0dcd4] font-mono text-xs">
            0{index + 1}
          </span>
          {project.type === "personal" && (
            <span className="text-[#7a7872] text-xs font-mono border border-[#e0dcd4] px-2 py-0.5 rounded">
              Personal
            </span>
          )}
        </div>

        <div className="flex items-center gap-3 mb-1">
          {project.logo && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={project.logo}
              alt=""
              className="h-5 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity"
            />
          )}
          <h3 className="font-[family-name:var(--font-space-grotesk)] font-semibold text-xl text-[#111110] group-hover:text-[#ff5c00] transition-colors">
            {project.title}
          </h3>
        </div>
        <p className="text-[#ff5c00] text-xs font-mono mb-3">{project.company}</p>
        <p className="text-[#7a7872] text-sm leading-relaxed mb-6 flex-1">
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
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-32 max-w-6xl mx-auto px-6">
      {/* Header */}
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

      {/* Professional */}
      <div className="mb-6">
        <p className="text-xs font-mono tracking-widest uppercase text-[#7a7872] mb-4">
          Professional
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#e0dcd4]">
          {professional.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>

      {/* Personal */}
      <div className="mt-16">
        <p className="text-xs font-mono tracking-widest uppercase text-[#7a7872] mb-4">
          Personal
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#e0dcd4]">
          {personal.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
