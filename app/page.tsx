"use client";

import Container from "@/components/Container";
import ProjectCard from "@/components/ProjectCard";
import ButtonLink from "@/components/ButtonLink";
import TechIcon from "@/components/TechIcon";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/data/translations";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

export default function HomePage() {
  const { lang } = useLanguage();

  return (
    <main>
      {/* ── HERO ── */}
      <section className="hero-section">
        <Container>
          <div className="grid md:grid-cols-[1fr_320px] gap-14 items-start">
            {/* Left */}
            <div>
              <div className="avail-dot mb-8">
                {profile.about.availability[lang]}
              </div>

              <h1
                className="text-6xl md:text-7xl font-bold leading-[1.03] tracking-[-0.03em] mb-5"
                style={{ color: "var(--white)" }}
              >
                {profile.name}
              </h1>

              <div
                className="text-[16px] font-medium mb-6 mono"
                style={{ color: "var(--text-3)" }}
              >
                {profile.role} · {profile.location}
              </div>

              <p
                className="text-[18px] leading-[1.8] mb-10 max-w-[540px]"
                style={{ color: "var(--text-2)" }}
              >
                {profile.tagline[lang]}
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <ButtonLink href="#projects" variant="primary">
                  {t.hero.cta_projects[lang]}
                </ButtonLink>
                <ButtonLink href="/contact" variant="secondary">
                  {t.hero.cta_talk[lang]}
                </ButtonLink>
                <ButtonLink href="/resume" variant="ghost">
                  {t.hero.cta_resume[lang]}
                </ButtonLink>
              </div>

              <div className="flex flex-wrap gap-5 text-[14px]" style={{ color: "var(--text-3)" }}>
                {profile.links.github && (
                  <a href={profile.links.github} target="_blank" rel="noreferrer"
                    className="transition-colors hover:text-[var(--text)] mono">
                    GitHub ↗
                  </a>
                )}
                {profile.links.linkedin && (
                  <a href={profile.links.linkedin} target="_blank" rel="noreferrer"
                    className="transition-colors hover:text-[var(--text)] mono">
                    LinkedIn ↗
                  </a>
                )}
                {profile.links.instagram && (
                  <a href={profile.links.instagram} target="_blank" rel="noreferrer"
                    className="transition-colors hover:text-[var(--text)] mono">
                    Instagram ↗
                  </a>
                )}
                <a href={`mailto:${profile.email}`}
                  className="transition-colors hover:text-[var(--text)] mono">
                  {profile.email} ↗
                </a>
              </div>
            </div>

            {/* Right — About */}
            <div className="space-y-3">
              <div className="card p-6">
                <div className="label mb-4">{t.about.title[lang]}</div>
                <p className="text-[14px] leading-7 whitespace-pre-line" style={{ color: "var(--text-2)" }}>
                  {t.about.short[lang]}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { k: t.about.focus[lang],        v: profile.about.focus },
                  { k: t.about.interest[lang],      v: profile.about.interest },
                  { k: t.about.stack[lang],         v: profile.about.stack },
                  { k: t.about.projects_lbl[lang],  v: `${projects.length} ${t.about.total[lang]}` },
                ].map(({ k, v }) => (
                  <div key={k} className="card-flat p-4">
                    <div className="label mb-1">{k}</div>
                    <div className="text-[13px] font-medium" style={{ color: "var(--text)" }}>{v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="section scroll-mt-nav" style={{ borderBottom: "1px solid var(--border)" }}>
        <Container>
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="label mb-3">{t.projects.section_label[lang]}</div>
              <h2 className="text-4xl font-bold tracking-[-0.02em]" style={{ color: "var(--white)" }}>
                {t.projects.section_title[lang]}
              </h2>
            </div>
            <ButtonLink href="/projects" variant="ghost">{t.projects.view_all[lang]}</ButtonLink>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </Container>
      </section>

      {/* ── SKILLS ── */}
      <section className="section" style={{ borderBottom: "1px solid var(--border)" }}>
        <Container>
          <div className="label mb-3">{t.skills.label[lang]}</div>
          <h2 className="text-4xl font-bold tracking-[-0.02em] mb-12" style={{ color: "var(--white)" }}>
            {t.skills.title[lang]}
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {([
              { title: t.skills.frontend[lang], items: profile.skills.frontend },
              { title: t.skills.backend[lang],  items: profile.skills.backend },
              { title: t.skills.tools[lang],    items: profile.skills.tools },
              { title: t.skills.soft[lang],     items: profile.skills.soft },
            ] as const).map(({ title, items }) => (
              <div key={title}>
                <div className="label mb-5">{title}</div>
                <div className="space-y-2">
                  {items.map((s) => (
                    <div key={s} className="skill-pill w-full justify-start">
                      <TechIcon name={s} size={15} />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── CTA ── */}
      <section className="section">
        <Container>
          <div className="max-w-lg mx-auto text-center">
            <div className="label mb-4 flex justify-center">{t.cta.label[lang]}</div>
            <h2 className="text-4xl font-bold tracking-[-0.02em] mb-4" style={{ color: "var(--white)" }}>
              {t.cta.title[lang]}
            </h2>
            <p className="text-[16px] leading-8 mb-8" style={{ color: "var(--text-2)" }}>
              {t.cta.desc[lang]}
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <ButtonLink href="/contact" variant="primary">{t.cta.btn1[lang]}</ButtonLink>
              <ButtonLink href={`mailto:${profile.email}`} external variant="secondary">{t.cta.btn2[lang]}</ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}