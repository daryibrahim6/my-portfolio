"use client";

import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import ProjectCard from "@/components/ProjectCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/data/translations";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  const { lang } = useLanguage();
  return (
    <main>
      <section className="section">
        <Container>
          <FadeIn>
          <div className="label mb-3">{t.projects.page_label[lang]}</div>
          <h1 className="text-5xl font-bold tracking-[-0.02em] mb-4" style={{ color: "var(--white)" }}>
            {t.projects.page_title[lang]}
          </h1>
          <p className="text-[16px] leading-7 mb-12 max-w-lg" style={{ color: "var(--text-2)" }}>
            {t.projects.page_desc[lang]}
          </p>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((p, i) => (
              <FadeIn key={p.slug} delay={i * 70}><ProjectCard project={p} /></FadeIn>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}