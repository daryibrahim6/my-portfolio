import Container from "@/components/Container";
import ContactForm from "@/components/ContactForm";
import ButtonLink from "@/components/ButtonLink";
import { profile } from "@/data/profile";

export const metadata = {
  title: "Contact — Dary Ibrahim",
  description: "Get in touch with Dary Ibrahim.",
};

function shortUrl(url: string) {
  try {
    const u = new URL(url);
    return (u.host + u.pathname).replace(/\/$/, "");
  } catch { return url; }
}

export default function ContactPage() {
  return (
    <main>
      <section className="section">
        <Container>
          {/* Header */}
          <div className="max-w-xl mb-12">
            <div className="label mb-3">Contact</div>
            <h1
              className="text-4xl font-bold tracking-[-0.02em] mb-4"
              style={{ color: "var(--white)" }}
            >
              Let's Work Together
            </h1>
            <p className="text-[15px] leading-7" style={{ color: "var(--text-2)" }}>
              Open for freelance projects, collaborations, and new opportunities.
              Fill out the form or reach out directly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Form */}
            <div className="card p-7">
              <ContactForm />
            </div>

            {/* Right */}
            <div className="space-y-4">
              {/* Links */}
              <div className="card p-6">
                <div className="label mb-5">Direct Links</div>
                <div className="space-y-2">
                  <ConnectRow
                    label="Email"
                    value={profile.email}
                    href={`mailto:${profile.email}`}
                  />
                  {profile.links.github && (
                    <ConnectRow
                      label="GitHub"
                      value={shortUrl(profile.links.github)}
                      href={profile.links.github}
                      ext
                    />
                  )}
                  {profile.links.linkedin && (
                    <ConnectRow
                      label="LinkedIn"
                      value={shortUrl(profile.links.linkedin)}
                      href={profile.links.linkedin}
                      ext
                    />
                  )}
                  {profile.links.instagram && (
                    <ConnectRow
                      label="Instagram"
                      value={shortUrl(profile.links.instagram)}
                      href={profile.links.instagram}
                      ext
                    />
                  )}
                </div>
              </div>

              {/* Footer note */}
              <div className="card p-6 text-center">
                <p
                  className="text-[13px] leading-7 mb-5"
                  style={{ color: "var(--text-2)" }}
                >
                  Prefer to browse first?
                </p>
                <ButtonLink href="/projects" variant="secondary">
                  View Projects
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

function ConnectRow({
  label,
  value,
  href,
  ext,
}: {
  label: string;
  value: string;
  href: string;
  ext?: boolean;
}) {
  return (
    <a
      className="connect-row"
      href={href}
      target={ext ? "_blank" : undefined}
      rel={ext ? "noreferrer" : undefined}
    >
      <div className="min-w-0">
        <div className="label mb-0.5">{label}</div>
        <div
          className="text-[13px] font-medium truncate"
          style={{ color: "var(--text)" }}
        >
          {value}
        </div>
      </div>
      <span className="btn ghost sm flex-shrink-0">Open ↗</span>
    </a>
  );
}