"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/data/translations";
import { profile } from "@/data/profile";

export default function Navbar() {
  const pathname = usePathname();
  const { lang, toggle } = useLanguage();
  const [open, setOpen] = useState(false);

  const items = [
    { href: "/",         label: t.nav.home[lang] },
    { href: "/projects", label: t.nav.projects[lang] },
    { href: "/resume",   label: t.nav.resume[lang] },
    { href: "/contact",  label: t.nav.contact[lang] },
  ];

  return (
    <header className="navbar">
      <div className="navbar-inner">
        {/* Brand — left */}
        <Link href="/" className="navbrand" aria-label="Home">
          <span className="navbrand-dot" aria-hidden="true" />
          <span className="navbrand-name">{profile.name}</span>
        </Link>

        {/* Desktop nav + lang toggle — right */}
        <div className="hidden md:flex items-center gap-1">
          <nav className="navlinks" aria-label="Primary">
            {items.map((it) => {
              const active = it.href === "/" ? pathname === "/" : pathname.startsWith(it.href);
              return (
                <Link key={it.href} href={it.href} className={`navlink ${active ? "active" : ""}`}>
                  {it.label}
                </Link>
              );
            })}
          </nav>

          {/* Divider */}
          <div style={{ width: 1, height: 18, background: "var(--border-md)", margin: "0 8px", flexShrink: 0 }} />

          {/* Language toggle */}
          <button
            type="button"
            onClick={toggle}
            className="lang-toggle"
            aria-label={`Switch to ${lang === "en" ? "Indonesian" : "English"}`}
          >
            <span className={lang === "en" ? "lang-active" : "lang-dim"}>EN</span>
            <span style={{ color: "var(--text-4)" }}>/</span>
            <span className={lang === "id" ? "lang-active" : "lang-dim"}>ID</span>
          </button>
        </div>

        {/* Mobile — lang toggle + hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <button
            type="button"
            onClick={toggle}
            className="lang-toggle"
            aria-label="Toggle language"
          >
            <span className={lang === "en" ? "lang-active" : "lang-dim"}>EN</span>
            <span style={{ color: "var(--text-4)" }}>/</span>
            <span className={lang === "id" ? "lang-active" : "lang-dim"}>ID</span>
          </button>

          <div className="relative">
            <button
              type="button"
              className="navlink"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? "✕" : "☰"}
            </button>

            {open && (
              <div className="navmenu">
                <nav className="flex flex-col p-2" aria-label="Mobile nav">
                  {items.map((it) => {
                    const active = it.href === "/" ? pathname === "/" : pathname.startsWith(it.href);
                    return (
                      <Link
                        key={it.href}
                        href={it.href}
                        onClick={() => setOpen(false)}
                        className={`navlink ${active ? "active" : ""}`}
                        style={{ justifyContent: "space-between" }}
                      >
                        <span>{it.label}</span>
                        {active && <span style={{ color: "var(--white)", fontSize: 10 }}>●</span>}
                      </Link>
                    );
                  })}
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}