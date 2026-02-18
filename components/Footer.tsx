"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/data/translations";
import { profile } from "@/data/profile";

export default function Footer() {
  const { lang } = useLanguage();
  const year = new Date().getFullYear();

  const pages = [
    { href: "/",         label: t.nav.home[lang] },
    { href: "/projects", label: t.nav.projects[lang] },
    { href: "/resume",   label: t.nav.resume[lang] },
    { href: "/contact",  label: t.nav.contact[lang] },
  ];

  const socials = [
    { label: "Email",     href: `mailto:${profile.email}` },
    profile.links.github    && { label: "GitHub",    href: profile.links.github,    ext: true },
    profile.links.linkedin  && { label: "LinkedIn",  href: profile.links.linkedin,  ext: true },
    profile.links.instagram && { label: "Instagram", href: profile.links.instagram, ext: true },
  ].filter(Boolean) as { label: string; href: string; ext?: boolean }[];

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <div>
            <div className="font-semibold text-[16px] mb-1" style={{ color: "var(--text)" }}>
              {profile.name}
            </div>
            <div className="text-[13px] mb-4 mono" style={{ color: "var(--text-3)" }}>
              {profile.role}
            </div>
            <p className="text-[13px] leading-6" style={{ color: "var(--text-2)" }}>
              {lang === "en"
                ? "Building interfaces that feel right, one feature at a time."
                : "Membangun antarmuka yang terasa tepat, satu fitur dalam satu waktu."}
            </p>
            <div className="mt-2 text-[12px]" style={{ color: "var(--text-3)" }}>
              📍 {profile.location}
            </div>
          </div>

          <div>
            <div className="label mb-4">{t.footer.pages[lang]}</div>
            <div className="space-y-2">
              {pages.map((p) => (
                <Link key={p.href} href={p.href}
                  className="block text-[14px] transition-colors hover:text-[var(--text)]"
                  style={{ color: "var(--text-2)" }}
                >
                  {p.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="label mb-4">{t.footer.connect[lang]}</div>
            <div className="space-y-2">
              {socials.map((s) => (
                <a key={s.label} href={s.href}
                  target={s.ext ? "_blank" : undefined}
                  rel={s.ext ? "noreferrer" : undefined}
                  className="block text-[14px] transition-colors hover:text-[var(--text)]"
                  style={{ color: "var(--text-2)" }}
                >
                  {s.label} ↗
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="divider my-8" />

        <div className="flex flex-wrap items-center justify-between gap-3 text-[12px]"
          style={{ color: "var(--text-3)", fontFamily: "var(--font-mono)" }}>
          <span>© {year} {profile.name}. All rights reserved.</span>
          <span>{t.footer.built[lang]}</span>
        </div>
      </div>
    </footer>
  );
}