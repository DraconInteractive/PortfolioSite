"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    label: "Languages",
    skills: ["C#", "C++", "Rust", "TypeScript", "Python", "JavaScript"],
  },
  {
    label: "Engines & Frameworks",
    skills: ["Unity", "Unreal Engine", "React", "Electron", ".NET / WPF", "ASP.NET", "Node.js"],
  },
  {
    label: "AI & Machine Learning",
    skills: ["TensorFlow", "ML-Agents", "On-device Inference", "Hybrid ML + Utility AI", "Model Training Pipelines"],
  },
  {
    label: "Cloud & DevOps",
    skills: ["AWS", "Azure", "GitHub Actions", "Buildkite", "CI/CD", "Build Automation", "Artifact Pipelines"],
  },
  {
    label: "Data & Integration",
    skills: ["REST APIs", "GraphQL", "PostgreSQL", "JSON Serialization", "API Design", "Auth Integration"],
  },
  {
    label: "Hardware & Embedded",
    skills: ["ESP32", "Bluetooth", "Sensor Telemetry", "Embedded Firmware", "Device Protocol"],
  },
  {
    label: "Platforms",
    skills: ["VR / XR", "iOS", "Android", "WebGL", "PC", "Standalone VR"],
  },
];

export default function About() {
  return (
    <section id="about" className="py-32 border-t border-[#e0dcd4]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#ff5c00] text-xs font-mono tracking-widest uppercase mb-2">
              About
            </p>
            <h2 className="font-[family-name:var(--font-space-grotesk)] font-bold text-5xl text-[#111110] mb-8 leading-tight">
              Builder.<br />Creator.<br />Engineer.
            </h2>
            <div className="space-y-4 text-[#7a7872] leading-relaxed">
              <p>
                Ten years building interactive systems — from VR training platforms and AI-driven game runtimes
                to cross-engine asset pipelines and embedded hardware integrations. My background is in game
                development, but the work has always been about the systems underneath.
              </p>
              <p>
                A recurring theme across everything I&apos;ve built: translating abstract models — ML inference
                graphs, physical equipment schematics, procedural node systems — into robust, production-ready
                runtime software. I particularly enjoy foundational work where the architecture shapes how
                the technology evolves.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-xs font-mono tracking-widest uppercase text-[#7a7872] mb-6">
              Technologies
            </p>
            <div className="space-y-6">
              {skillGroups.slice(0, 3).map((group) => (
                <div key={group.label}>
                  <p className="text-[#111110] text-xs font-semibold uppercase tracking-wider mb-2">
                    {group.label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 border border-[#e0dcd4] text-sm text-[#111110] rounded hover:border-[#ff5c00] hover:text-[#ff5c00] transition-all cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Lower skill groups — full width */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-[#e0dcd4]"
        >
          {skillGroups.slice(3).map((group) => (
            <div key={group.label}>
              <p className="text-[#111110] text-xs font-semibold uppercase tracking-wider mb-3">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 border border-[#e0dcd4] text-sm text-[#111110] rounded hover:border-[#ff5c00] hover:text-[#ff5c00] transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
