import Link from "next/link";
import Badge from "./Badge";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="block group h-full">
      <div className="project-card h-full flex flex-col p-6">
        {/* Top row */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div
            className="text-[11px] font-medium tracking-wide uppercase"
            style={{ color: "var(--text-3)", fontFamily: "var(--font-mono)" }}
          >
            {project.subtitle}
          </div>
          {project.status && (
            <Badge tone={project.statusTone}>{project.status}</Badge>
          )}
        </div>

        {/* Title */}
        <h3
          className="text-[18px] font-semibold mb-3 group-hover:text-[var(--white)] transition-colors"
          style={{ color: "var(--text)", letterSpacing: "-0.01em" }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          className="text-[13px] leading-6 flex-1 mb-5"
          style={{ color: "var(--text-2)" }}
        >
          {project.description}
        </p>

        {/* Stack */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.stack.slice(0, 5).map((s) => (
            <span key={s} className="skill-pill">{s}</span>
          ))}
          {project.stack.length > 5 && (
            <span className="skill-pill">+{project.stack.length - 5}</span>
          )}
        </div>

        {/* Footer */}
        <div
          className="flex items-center justify-between text-[12px] pt-4"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <span style={{ color: "var(--text-3)", fontFamily: "var(--font-mono)" }}>
            {project.highlights.length} highlights
          </span>
          <span
            className="transition-colors group-hover:text-[var(--white)]"
            style={{ color: "var(--text-2)" }}
          >
            View case study →
          </span>
        </div>
      </div>
    </Link>
  );
}