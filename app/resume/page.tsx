"use client";

import Container from "@/components/Container";
import ButtonLink from "@/components/ButtonLink";
import TechIcon from "@/components/TechIcon";
import FadeIn from "@/components/FadeIn";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/data/translations";
import { profile } from "@/data/profile";

export default function ResumePage() {
  const { lang } = useLanguage();
  const edu = profile.resume.education;

  return (
    <main>
      <section className="section">
        <Container>
          <FadeIn>
            <div className="max-w-xl mb-12">
              <div className="label mb-3">{t.resume.label[lang]}</div>
              <h1 className="text-5xl font-bold tracking-[-0.02em] mb-4" style={{ color: "var(--white)" }}>
                {t.resume.title[lang]}
              </h1>
              <p className="text-[16px] leading-7" style={{ color: "var(--text-2)" }}>
                {t.resume.desc[lang]}
              </p>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-[1fr_280px] gap-8 items-start">
            <div className="space-y-5">

              {/* Summary */}
              <FadeIn delay={80}>
                <div className="card p-6">
                  <div className="label mb-5">{t.resume.summary[lang]}</div>
                  <ul className="space-y-3">
                    {profile.resume.summary[lang].map((s, i) => (
                      <li key={i} className="flex items-start gap-3 text-[15px] leading-7" style={{ color: "var(--text-2)" }}>
                        <span className="flex-shrink-0 mono text-[10px] mt-1.5" style={{ color: "var(--text-3)" }}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>

              {/* Education */}
              <FadeIn delay={140}>
                <div className="card p-6">
                  <div className="label mb-5">{t.resume.education[lang]}</div>
                  <div className="pl-4" style={{ borderLeft: "2px solid var(--border-hi)" }}>
                    <div className="font-semibold text-[17px] mb-1" style={{ color: "var(--white)" }}>{edu.school}</div>
                    <div className="text-[14px] mb-2 mono" style={{ color: "var(--text-2)" }}>{edu.degree[lang]}</div>
                    <div className="label mb-3">{edu.period}</div>
                    <p className="text-[15px] leading-7" style={{ color: "var(--text-2)" }}>{edu.note[lang]}</p>
                  </div>
                </div>
              </FadeIn>

              {/* Tech Stack — grouped tags, ganti skill bars */}
              <FadeIn delay={200}>
                <div className="card p-6">
                  <div className="label mb-6">{t.resume.tech_stack[lang]}</div>

                  <div className="space-y-5">
                    {/* Primary */}
                    <div>
                      <div className="label mb-3" style={{ color: "var(--text-2)" }}>
                        {t.skills.primary[lang]}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {profile.techGroups.primary.map((s) => (
                          <span key={s} className="skill-pill skill-pill-primary">
                            <TechIcon name={s} size={14} />
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Secondary */}
                    <div>
                      <div className="label mb-3" style={{ color: "var(--text-2)" }}>
                        {t.skills.secondary[lang]}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {profile.techGroups.secondary.map((s) => (
                          <span key={s} className="skill-pill">
                            <TechIcon name={s} size={14} />
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Learning */}
                    <div>
                      <div className="label mb-3" style={{ color: "var(--text-2)" }}>
                        {t.skills.learning[lang]}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {profile.techGroups.learning.map((s) => (
                          <span key={s} className="skill-pill skill-pill-dim">
                            <TechIcon name={s} size={14} />
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="text-[12px] mono mt-5" style={{ color: "var(--text-4)" }}>
                    {lang === "en"
                      ? "Grouped by daily use — not by arbitrary percentages."
                      : "Dikelompokkan berdasarkan penggunaan harian — bukan persentase arbitrary."}
                  </p>
                </div>
              </FadeIn>

              {/* Highlights */}
              <FadeIn delay={260}>
                <div className="card p-6">
                  <div className="label mb-5">{t.resume.highlights[lang]}</div>
                  <ul className="space-y-3">
                    {profile.resume.highlights[lang].map((h, i) => (
                      <li key={i} className="flex items-start gap-3 text-[15px] leading-7" style={{ color: "var(--text-2)" }}>
                        <span style={{ color: "var(--text-3)", marginTop: 4, flexShrink: 0 }}>—</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              <FadeIn delay={100}>
                <div className="card p-6">
                  <div className="label mb-4">{t.resume.download[lang]}</div>
                  <p className="text-[15px] leading-7 mb-6" style={{ color: "var(--text-2)" }}>
                    {t.resume.dl_note[lang]}
                  </p>
                  <div className="flex flex-col gap-2">
                    <ButtonLink href="/resume.pdf" external variant="primary">{t.resume.dl_btn[lang]}</ButtonLink>
                    <ButtonLink href="/projects" variant="secondary">{t.resume.view_proj[lang]}</ButtonLink>
                    <ButtonLink href={`mailto:${profile.email}`} external variant="ghost">{t.resume.email_me[lang]}</ButtonLink>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={180}>
                <div className="card p-6">
                  <div className="label mb-4">{t.resume.links[lang]}</div>
                  <div className="space-y-1">
                    {profile.links.github && (
                      <a href={profile.links.github} target="_blank" rel="noreferrer"
                        className="navlink" style={{ display: "flex", justifyContent: "space-between", paddingLeft: 0 }}>
                        <span>GitHub</span><span style={{ color: "var(--text-3)" }}>↗</span>
                      </a>
                    )}
                    {profile.links.linkedin && (
                      <a href={profile.links.linkedin} target="_blank" rel="noreferrer"
                        className="navlink" style={{ display: "flex", justifyContent: "space-between", paddingLeft: 0 }}>
                        <span>LinkedIn</span><span style={{ color: "var(--text-3)" }}>↗</span>
                      </a>
                    )}
                    {profile.links.instagram && (
                      <a href={profile.links.instagram} target="_blank" rel="noreferrer"
                        className="navlink" style={{ display: "flex", justifyContent: "space-between", paddingLeft: 0 }}>
                        <span>Instagram</span><span style={{ color: "var(--text-3)" }}>↗</span>
                      </a>
                    )}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}