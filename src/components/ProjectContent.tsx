"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Project, ProjectMedia } from "@/lib/data";

function MediaItem({ item }: { item: ProjectMedia }) {
  if (item.type === "video") {
    return (
      <figure className="w-full">
        <video
          src={item.src}
          autoPlay
          muted
          loop
          playsInline
          className="w-full rounded-sm bg-[#111110]"
        />
        {item.caption && (
          <figcaption className="text-xs text-[#7a7872] font-mono mt-2">
            {item.caption}
          </figcaption>
        )}
      </figure>
    );
  }
  return (
    <figure className="w-full">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={item.src} alt={item.caption ?? ""} className="w-full rounded-sm" />
      {item.caption && (
        <figcaption className="text-xs text-[#7a7872] font-mono mt-2">
          {item.caption}
        </figcaption>
      )}
    </figure>
  );
}

type Props = {
  project: Project;
  prev: Project | null;
  next: Project | null;
};

export default function ProjectContent({ project, prev, next }: Props) {
  return (
    <>
      {/* Overview */}
      <section className="py-20 border-t border-[#e0dcd4]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16">
          <div className="flex flex-col gap-6">
            <p className="text-[#ff5c00] text-xs font-mono tracking-widest uppercase">
              Overview
            </p>
            {(project.repo || project.link) && (
              <div className="flex flex-col gap-2">
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm px-4 py-2 bg-[#ff5c00] text-white font-semibold rounded hover:bg-[#e05200] transition-colors text-center"
                  >
                    View Repo ↗
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm px-4 py-2 border border-[#e0dcd4] text-[#111110] rounded hover:border-[#ff5c00] hover:text-[#ff5c00] transition-all text-center"
                  >
                    Visit Site ↗
                  </a>
                )}
              </div>
            )}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-5 text-[#7a7872] leading-relaxed"
          >
            {project.overview.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Media */}
      {project.media && project.media.length > 0 && (
        <section className="py-20 border-t border-[#e0dcd4]">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[#ff5c00] text-xs font-mono tracking-widest uppercase mb-10">
              Media
            </p>
            <div className="space-y-4">
              {/* Primary — first item full width */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <MediaItem item={project.media[0]} />
              </motion.div>

              {/* Secondary — remaining items in a row */}
              {project.media.length > 1 && (
                <div className={`grid gap-4 ${project.media.length === 2 ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"}`}>
                  {project.media.slice(1).map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                      <MediaItem item={item} />
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Highlights */}
      <section className="py-20 border-t border-[#e0dcd4]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#ff5c00] text-xs font-mono tracking-widest uppercase mb-12">
            Key Contributions
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#e0dcd4]">
            {project.highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="bg-[#fafaf7] p-6 hover:bg-[#f0ede6] transition-colors"
              >
                <span className="block text-[#e0dcd4] font-mono text-xs mb-3">
                  0{i + 1}
                </span>
                <p className="text-[#111110] text-sm leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project navigation */}
      <section className="py-16 border-t border-[#e0dcd4]">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {prev ? (
            <Link
              href={`/projects/${prev.id}`}
              className="group flex flex-col gap-1"
            >
              <span className="text-xs text-[#7a7872] font-mono tracking-widest uppercase">
                ← Previous
              </span>
              <span className="font-[family-name:var(--font-space-grotesk)] font-semibold text-[#111110] group-hover:text-[#ff5c00] transition-colors">
                {prev.title}
              </span>
            </Link>
          ) : (
            <div />
          )}

          {next ? (
            <Link
              href={`/projects/${next.id}`}
              className="group flex flex-col gap-1 text-right"
            >
              <span className="text-xs text-[#7a7872] font-mono tracking-widest uppercase">
                Next →
              </span>
              <span className="font-[family-name:var(--font-space-grotesk)] font-semibold text-[#111110] group-hover:text-[#ff5c00] transition-colors">
                {next.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </section>
    </>
  );
}
