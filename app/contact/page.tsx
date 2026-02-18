"use client";

import Container from "@/components/Container";
import ContactForm from "@/components/ContactForm";
import ButtonLink from "@/components/ButtonLink";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/data/translations";
import { profile } from "@/data/profile";

function shortUrl(url: string) {
  try { return (new URL(url).host + new URL(url).pathname).replace(/\/$/, ""); } catch { return url; }
}

export default function ContactPage() {
  const { lang } = useLanguage();
  return (
    <main>
      <section className="section">
        <Container>
          <div className="max-w-xl mb-12">
            <div className="label mb-3">{t.contact.label[lang]}</div>
            <h1 className="text-5xl font-bold tracking-[-0.02em] mb-5" style={{ color: "var(--white)" }}>
              {t.contact.title[lang]}
            </h1>
            <p className="text-[16px] leading-7" style={{ color: "var(--text-2)" }}>
              {t.contact.desc[lang]}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card p-7"><ContactForm /></div>

            <div className="space-y-4">
              <div className="card p-6">
                <div className="label mb-5">{t.contact.direct_links[lang]}</div>
                <div className="space-y-2">
                  <ConnectRow label="Email" value={profile.email} href={`mailto:${profile.email}`} />
                  {profile.links.github && <ConnectRow label="GitHub" value={shortUrl(profile.links.github)} href={profile.links.github} ext />}
                  {profile.links.linkedin && <ConnectRow label="LinkedIn" value={shortUrl(profile.links.linkedin)} href={profile.links.linkedin} ext />}
                  {profile.links.instagram && <ConnectRow label="Instagram" value={shortUrl(profile.links.instagram)} href={profile.links.instagram} ext />}
                </div>
              </div>
              <div className="card p-6 text-center">
                <p className="text-[14px] leading-7 mb-5" style={{ color: "var(--text-2)" }}>
                  {t.contact.browse_first[lang]}
                </p>
                <ButtonLink href="/projects" variant="secondary">{t.contact.view_projects[lang]}</ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

function ConnectRow({ label, value, href, ext }: { label: string; value: string; href: string; ext?: boolean }) {
  return (
    <a className="connect-row" href={href} target={ext ? "_blank" : undefined} rel={ext ? "noreferrer" : undefined}>
      <div className="min-w-0">
        <div className="label mb-0.5">{label}</div>
        <div className="text-[14px] font-medium truncate" style={{ color: "var(--text)" }}>{value}</div>
      </div>
      <span className="btn ghost sm flex-shrink-0">Open ↗</span>
    </a>
  );
}