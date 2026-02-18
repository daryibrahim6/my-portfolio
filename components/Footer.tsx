import Link from "next/link";
import { profile } from "@/data/profile";

export default function Footer() {
  const year = new Date().getFullYear();

  const pages = [
    { href: "/",         label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/resume",   label: "Resume" },
    { href: "/contact",  label: "Contact" },
  ];

  const socials = [
    { label: "Email",    href: `mailto:${profile.email}` },
    profile.links.github   && { label: "GitHub",   href: profile.links.github,   ext: true },
    profile.links.linkedin && { label: "LinkedIn", href: profile.links.linkedin, ext: true },
  ].filter(Boolean) as { label: string; href: string; ext?: boolean }[];

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          {/* Brand */}
          <div>
            <div
              className="font-semibold text-[15px] mb-2"
              style={{ color: "var(--text)", fontFamily: "var(--font-sans)" }}
            >
              {profile.name}
            </div>
            <div
              className="text-[13px] mb-4"
              style={{ color: "var(--text-3)", fontFamily: "var(--font-mono)" }}
            >
              {profile.role}
            </div>
            <p className="text-[13px] leading-6" style={{ color: "var(--text-2)" }}>
              Building workflow-driven web apps, one feature at a time.
            </p>
            <div className="mt-3 text-[12px]" style={{ color: "var(--text-3)" }}>
              📍 {profile.location}
            </div>
          </div>

          {/* Pages */}
          <div>
            <div className="label mb-4">Pages</div>
            <div className="space-y-2">
              {pages.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  className="block text-[13px] transition-colors hover:text-[var(--text)]"
                  style={{ color: "var(--text-2)" }}
                >
                  {p.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <div className="label mb-4">Connect</div>
            <div className="space-y-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.ext ? "_blank" : undefined}
                  rel={s.ext ? "noreferrer" : undefined}
                  className="block text-[13px] transition-colors hover:text-[var(--text)]"
                  style={{ color: "var(--text-2)" }}
                >
                  {s.label} ↗
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="divider my-8" />

        <div
          className="flex flex-wrap items-center justify-between gap-3 text-[12px]"
          style={{ color: "var(--text-3)", fontFamily: "var(--font-mono)" }}
        >
          <span>© {year} {profile.name}. All rights reserved.</span>
          <span>Built with Next.js + Tailwind CSS</span>
        </div>
      </div>
    </footer>
  );
}