"use client";

import { use } from "react";
import Container from "@/components/Container";
import ButtonLink from "@/components/ButtonLink";
import Badge from "@/components/Badge";
import TechIcon from "@/components/TechIcon";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/data/translations";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";

export default function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const { lang } = useLanguage();
  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  const hasDemo = !!project.links?.demo;
  const hasRepo = !!project.links?.repo;

  return (
    <main>
      <section className="section">
        <Container>
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-[13px] mb-10 mono" style={{ color: "var(--text-3)" }}>
            <a href="/projects" className="hover:text-[var(--text)] transition-colors">
              {t.projects.page_title[lang]}
            </a>
            <span>/</span>
            <span style={{ color: "var(--text-2)" }}>{project.title}</span>
          </nav>

          {/* Header */}
          <div className="max-w-2xl mb-12">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="label">{project.period}</span>
              <Badge tone={project.statusTone}>{project.status[lang]}</Badge>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-[-0.03em] mb-5" style={{ color: "var(--white)" }}>
              {project.title}
            </h1>
            <p className="text-[17px] leading-8" style={{ color: "var(--text-2)" }}>
              {project.description[lang]}
            </p>
          </div>

          {/* Hero image */}
          {project.image && (
            <div className="relative w-full rounded-xl overflow-hidden mb-12" style={{ aspectRatio: "16/8", background: "var(--surface2)", border: "1px solid var(--border)" }}>
              <Image src={project.image} alt={project.title} fill className="object-cover" sizes="100vw" />
            </div>
          )}

          {/* Meta row */}
          <div className="flex flex-wrap gap-8 mb-12 pb-12 text-[14px]" style={{ borderBottom: "1px solid var(--border)" }}>
            {[
              { label: t.projects.detail_role[lang],   value: project.role[lang] },
              { label: t.projects.detail_period[lang], value: project.period },
              { label: t.projects.detail_status[lang], value: project.status[lang] },
            ].map(({ label, value }) => (
              <div key={label}>
                <div className="label mb-1">{label}</div>
                <div style={{ color: "var(--text)" }}>{value}</div>
              </div>
            ))}
          </div>

          {/* Grid */}
          <div className="grid lg:grid-cols-[1fr_300px] gap-10 items-start">
            {/* Left */}
            <div>
              <div className="label mb-4">{t.projects.detail_overview[lang]}</div>
              {project.longDescription[lang].split("\n\n").map((para, i) => (
                <p key={i} className="text-[16px] leading-8 mb-5" style={{ color: "var(--text-2)" }}>{para}</p>
              ))}

              {/* Stack with icons */}
              <div className="mt-10 pt-8" style={{ borderTop: "1px solid var(--border)" }}>
                <div className="label mb-5">{t.projects.detail_stack[lang]}</div>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((s) => (
                    <span key={s} className="skill-pill">
                      <TechIcon name={s} size={14} />
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="mt-8 pt-8 flex flex-wrap gap-3" style={{ borderTop: "1px solid var(--border)" }}>
                {hasDemo && <ButtonLink href={project.links!.demo!} external variant="primary">{t.projects.detail_demo[lang]}</ButtonLink>}
                {hasRepo && <ButtonLink href={project.links!.repo!} external variant="secondary">{t.projects.detail_code[lang]}</ButtonLink>}
                {!hasDemo && !hasRepo && (
                  <span className="text-[13px] mono py-2" style={{ color: "var(--text-3)" }}>
                    {t.projects.detail_no_link[lang]}
                  </span>
                )}
                <ButtonLink href="/projects" variant="ghost">{t.projects.detail_back[lang]}</ButtonLink>
              </div>
            </div>

            {/* Right — highlights */}
            <div className="card p-6 lg:sticky lg:top-20">
              <div className="label mb-5">{t.projects.detail_hl[lang]}</div>
              <ul className="space-y-4">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3 text-[14px] leading-6" style={{ color: "var(--text-2)" }}>
                    <span className="flex-shrink-0 mono text-[10px] mt-1" style={{ color: "var(--text-3)" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {h[lang]}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom nav */}
          <div className="mt-16 pt-8 flex items-center justify-between" style={{ borderTop: "1px solid var(--border)" }}>
            <ButtonLink href="/projects" variant="ghost">{t.projects.detail_all[lang]}</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">{t.projects.detail_work[lang]}</ButtonLink>
          </div>
        </Container>
      </section>
    </main>
  );
}