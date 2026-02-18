"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { profile } from "@/data/profile";

const items = [
  { href: "/",         label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/resume",   label: "Resume" },
  { href: "/contact",  label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-inner">
        {/* Brand */}
        <Link href="/" className="navbrand" aria-label="Home">
          <span className="navbrand-dot" aria-hidden="true" />
          <span className="navbrand-name">{profile.name}</span>
        </Link>

        {/* Desktop nav */}
        <nav className="navlinks hidden md:flex" aria-label="Primary">
          {items.map((it) => {
            const active = it.href === "/" ? pathname === "/" : pathname.startsWith(it.href);
            return (
              <Link key={it.href} href={it.href} className={`navlink ${active ? "active" : ""}`}>
                {it.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contact"
            className="btn primary sm"
          >
            Hire me
          </Link>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden relative">
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
                <div className="mt-2 pt-2" style={{ borderTop: "1px solid var(--border)" }}>
                  <Link
                    href="/contact"
                    onClick={() => setOpen(false)}
                    className="btn primary w-full"
                    style={{ justifyContent: "center" }}
                  >
                    Hire me
                  </Link>
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}