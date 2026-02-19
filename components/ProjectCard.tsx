"use client";

import Link from "next/link";
import Image from "next/image";
import Badge from "./Badge";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/data/translations";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const { lang } = useLanguage();
  const [imgError, setImgError] = useState(false);

  return (
    <Link href={`/projects/${project.slug}`} className="block group h-full">
      <div className="project-card h-full flex flex-col overflow-hidden">
        {/* Image / Placeholder */}
        <div className="project-img-wrap">
          {project.image && !imgError ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="project-img-placeholder">
              <span>{project.title[0]}</span>
            </div>
          )}
          {project.status && (
            <div className="absolute top-3 right-3">
              <Badge tone={project.statusTone}>{project.status[lang]}</Badge>
            </div>
          )}
        </div>

        {/* Body */}
        <div className="p-5 flex flex-col flex-1">
          <div
            className="text-[11px] font-medium tracking-wide uppercase mb-2"
            style={{ color: "var(--text-3)", fontFamily: "var(--font-mono)" }}
          >
            {project.subtitle[lang]}
          </div>

          <h3
            className="text-[17px] font-semibold mb-3 group-hover:text-[var(--white)] transition-colors leading-snug"
            style={{ color: "var(--text)", letterSpacing: "-0.01em" }}
          >
            {project.title}
          </h3>

          <p
            className="text-[14px] leading-6 flex-1 mb-4"
            style={{ color: "var(--text-2)" }}
          >
            {project.description[lang]}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.stack.slice(0, 5).map((s) => (
              <span key={s} className="skill-pill">{s}</span>
            ))}
            {project.stack.length > 5 && (
              <span className="skill-pill">+{project.stack.length - 5}</span>
            )}
          </div>

          <div
            className="flex items-center justify-between text-[12px] pt-4"
            style={{ borderTop: "1px solid var(--border)" }}
          >
            <span style={{ color: "var(--text-3)", fontFamily: "var(--font-mono)" }}>
              {project.period}
            </span>
            <span
              className="transition-colors group-hover:text-[var(--white)]"
              style={{ color: "var(--text-2)" }}
            >
              {t.projects.view_case[lang]}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}