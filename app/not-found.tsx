"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/data/translations";

export default function NotFound() {
  const { lang } = useLanguage();
  return (
    <main className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="text-center max-w-sm">
        <div className="text-[90px] font-bold tracking-[-0.04em] leading-none mb-4"
          style={{ color: "var(--surface3)", fontFamily: "var(--font-sans)" }}>
          404
        </div>
        <h1 className="text-2xl font-semibold mb-3" style={{ color: "var(--white)" }}>
          {t.notfound.title[lang]}
        </h1>
        <p className="text-[15px] leading-6 mb-8" style={{ color: "var(--text-2)" }}>
          {t.notfound.desc[lang]}
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/" className="btn primary">{t.notfound.home[lang]}</Link>
          <Link href="/projects" className="btn secondary">{t.projects.page_title[lang]}</Link>
        </div>
      </div>
    </main>
  );
}