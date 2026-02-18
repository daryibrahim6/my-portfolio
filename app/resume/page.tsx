"use client";

import Container from "@/components/Container";
import ButtonLink from "@/components/ButtonLink";
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
          <div className="max-w-xl mb-12">
            <div className="label mb-3">{t.resume.label[lang]}</div>
            <h1 className="text-5xl font-bold tracking-[-0.02em] mb-4" style={{ color: "var(--white)" }}>
              {t.resume.title[lang]}
            </h1>
            <p className="text-[16px] leading-7" style={{ color: "var(--text-2)" }}>{t.resume.desc[lang]}</p>
          </div>

          <div className="grid lg:grid-cols-[1fr_280px] gap-8 items-start">
            <div className="space-y-5">
              {/* Summary */}
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

              {/* Education */}
              <div className="card p-6">
                <div className="label mb-5">{t.resume.education[lang]}</div>
                <div className="pl-4" style={{ borderLeft: "2px solid var(--border-hi)" }}>
                  <div className="font-semibold text-[16px] mb-1" style={{ color: "var(--white)" }}>{edu.school}</div>
                  <div className="text-[14px] mb-1 mono" style={{ color: "var(--text-2)" }}>{edu.degree[lang]}</div>
                  <div className="label mb-2">{edu.period}</div>
                  <p className="text-[14px] leading-6" style={{ color: "var(--text-2)" }}>{edu.note[lang]}</p>
                </div>
              </div>

              {/* Highlights */}
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
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              <div className="card p-6">
                <div className="label mb-4">{t.resume.download[lang]}</div>
                <p className="text-[14px] leading-6 mb-5" style={{ color: "var(--text-2)" }}>
                  {t.resume.dl_note[lang]} <code className="code-tag">/public/resume.pdf</code>
                </p>
                <div className="flex flex-col gap-2">
                  <ButtonLink href="/resume.pdf" external variant="primary">{t.resume.dl_btn[lang]}</ButtonLink>
                  <ButtonLink href="/projects" variant="secondary">{t.resume.view_proj[lang]}</ButtonLink>
                  <ButtonLink href={`mailto:${profile.email}`} external variant="ghost">{t.resume.email_me[lang]}</ButtonLink>
                </div>
              </div>
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
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}