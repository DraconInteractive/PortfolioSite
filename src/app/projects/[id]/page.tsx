import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectContent from "@/components/ProjectContent";
import { projects } from "@/lib/data";

type Props = { params: Promise<{ id: string }> };

export async function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) return { title: "Not Found" };
  return {
    title: `${project.title} — Peter Carey`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { id } = await params;
  const index = projects.findIndex((p) => p.id === id);
  if (index === -1) notFound();

  const project = projects[index];
  const prev = projects[index - 1] ?? null;
  const next = projects[index + 1] ?? null;

  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section className="relative pt-40 pb-20 overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(to right, #111110 1px, transparent 1px), linear-gradient(to bottom, #111110 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
          <div className="relative z-10 max-w-6xl mx-auto px-6">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm text-[#7a7872] hover:text-[#111110] transition-colors mb-10"
            >
              ← Back to Projects
            </Link>

            <p className="text-[#ff5c00] text-xs font-mono tracking-widest uppercase mb-3">
              {project.company} · {project.period}
            </p>
            <h1
              className="font-[family-name:var(--font-space-grotesk)] font-bold leading-none tracking-tight text-[#111110] mb-8"
              style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}
            >
              {project.title}
            </h1>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 border border-[#e0dcd4] text-[#7a7872] rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        <ProjectContent project={project} prev={prev} next={next} />
      </main>
      <Footer />
    </>
  );
}
