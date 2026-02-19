"use client";

import Link from "next/link";
import Image from "next/image";
import Badge from "./Badge";
import TechIcon from "./TechIcon";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/data/translations";
import type { Project } from "@/data/projects";

export default function FeaturedProjectCard({ project }: { project: Project }) {
  const { lang } = useLanguage();
  const [imgError, setImgError] = useState(false);

  return (
    <Link href={`/projects/${project.slug}`} className="block group">
      <div className="featured-card">
        <div className="grid md:grid-cols-[1.1fr_1fr] gap-0 min-h-[340px]">
          {/* Image side */}
          <div className="featured-img-wrap">
            {project.image && !imgError ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 55vw"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="featured-img-placeholder">
                <span>{project.title[0]}</span>
              </div>
            )}
            <div className="absolute top-4 left-4">
              <span className="featured-badge">★ Featured</span>
            </div>
            {project.status && (
              <div className="absolute top-4 right-4">
                <Badge tone={project.statusTone}>{project.status[lang]}</Badge>
              </div>
            )}
          </div>

          {/* Content side */}
          <div className="p-8 flex flex-col justify-between">
            <div>
              <div
                className="text-[11px] font-medium tracking-wide uppercase mb-3"
                style={{ color: "var(--text-3)", fontFamily: "var(--font-mono)" }}
              >
                {project.subtitle[lang]}
              </div>

              <h3
                className="text-[26px] font-bold tracking-[-0.02em] mb-4 group-hover:text-[var(--white)] transition-colors leading-tight"
                style={{ color: "var(--text)" }}
              >
                {project.title}
              </h3>

              {/* Problem statement — 1 kalimat konkret sebelum deskripsi teknis */}
              {project.problemStatement && (
                <div className="mb-4 pb-4" style={{ borderBottom: "1px solid var(--border)" }}>
                  <span className="label mr-2">{t.projects.problem_label[lang]}</span>
                  <p className="text-[14px] leading-7 mt-2 italic" style={{ color: "var(--text-2)" }}>
                    "{project.problemStatement[lang]}"
                  </p>
                </div>
              )}

              <p className="text-[15px] leading-7 mb-5" style={{ color: "var(--text-2)" }}>
                {project.description[lang]}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.stack.slice(0, 5).map((s) => (
                  <span key={s} className="skill-pill">
                    <TechIcon name={s} size={13} />
                    {s}
                  </span>
                ))}
                {project.stack.length > 5 && (
                  <span className="skill-pill">+{project.stack.length - 5}</span>
                )}
              </div>
            </div>

            <div
              className="flex items-center justify-between pt-5 mt-5"
              style={{ borderTop: "1px solid var(--border)" }}
            >
              <span className="label">{project.period}</span>
              <span
                className="text-[14px] font-medium transition-colors group-hover:text-[var(--white)]"
                style={{ color: "var(--text-2)" }}
              >
                {t.projects.view_case[lang]}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}