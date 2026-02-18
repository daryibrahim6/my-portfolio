import Container from "@/components/Container";
import ButtonLink from "@/components/ButtonLink";
import { profile } from "@/data/profile";

export const metadata = {
  title: "Resume — Dary Ibrahim",
  description: "Resume of Dary Ibrahim Akram.",
};

export default function ResumePage() {
  return (
    <main>
      <section className="section">
        <Container>
          {/* Header */}
          <div className="max-w-xl mb-12">
            <div className="label mb-3">Resume</div>
            <h1
              className="text-4xl font-bold tracking-[-0.02em] mb-4"
              style={{ color: "var(--white)" }}
            >
              Experience & Education
            </h1>
            <p className="text-[15px] leading-7" style={{ color: "var(--text-2)" }}>
              Scan the essentials below, then download the PDF.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1fr_280px] gap-8 items-start">
            {/* Content */}
            <div className="space-y-6">
              {/* Summary */}
              <div className="card p-6">
                <div className="label mb-5">Summary</div>
                <ul className="space-y-3">
                  {profile.resume.summary.map((s, i) => (
                    <li
                      key={s}
                      className="flex items-start gap-3 text-[14px] leading-6"
                      style={{ color: "var(--text-2)" }}
                    >
                      <span
                        className="flex-shrink-0 font-medium mt-0.5 mono text-[10px]"
                        style={{ color: "var(--text-3)" }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Education */}
              <div className="card p-6">
                <div className="label mb-5">Education</div>
                <div className="space-y-6">
                  {profile.resume.education.map((e) => (
                    <div
                      key={e.school}
                      className="pl-4"
                      style={{ borderLeft: "2px solid var(--border-hi)" }}
                    >
                      <div
                        className="font-semibold text-[15px] mb-1"
                        style={{ color: "var(--white)" }}
                      >
                        {e.school}
                      </div>
                      <div
                        className="text-[13px] mb-1 mono"
                        style={{ color: "var(--text-2)" }}
                      >
                        {e.degree}
                      </div>
                      <div className="label mb-2">{e.period}</div>
                      <p
                        className="text-[13px] leading-6"
                        style={{ color: "var(--text-2)" }}
                      >
                        {e.note}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="card p-6">
                <div className="label mb-5">Highlights</div>
                <ul className="space-y-3">
                  {profile.resume.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-3 text-[14px] leading-6"
                      style={{ color: "var(--text-2)" }}
                    >
                      <span style={{ color: "var(--text-3)", marginTop: 2, flexShrink: 0 }}>—</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              {/* Download */}
              <div className="card p-6">
                <div className="label mb-4">Download</div>
                <p
                  className="text-[13px] leading-6 mb-5"
                  style={{ color: "var(--text-2)" }}
                >
                  Place your PDF at{" "}
                  <code
                    className="code-tag"
                  >
                    /public/resume.pdf
                  </code>
                </p>
                <div className="flex flex-col gap-2">
                  <ButtonLink href="/resume.pdf" external variant="primary">
                    Download PDF ↗
                  </ButtonLink>
                  <ButtonLink href="/projects" variant="secondary">
                    View Projects
                  </ButtonLink>
                  <ButtonLink href={`mailto:${profile.email}`} external variant="ghost">
                    Email Me
                  </ButtonLink>
                </div>
              </div>

              {/* Links */}
              <div className="card p-6">
                <div className="label mb-4">Links</div>
                <div className="space-y-1">
                  {profile.links.github && (
                    <a
                      className="navlink"
                      href={profile.links.github}
                      target="_blank" rel="noreferrer"
                      style={{ display: "flex", justifyContent: "space-between", paddingLeft: 0 }}
                    >
                      <span>GitHub</span>
                      <span style={{ color: "var(--text-3)" }}>↗</span>
                    </a>
                  )}
                  {profile.links.linkedin && (
                    <a
                      className="navlink"
                      href={profile.links.linkedin}
                      target="_blank" rel="noreferrer"
                      style={{ display: "flex", justifyContent: "space-between", paddingLeft: 0 }}
                    >
                      <span>LinkedIn</span>
                      <span style={{ color: "var(--text-3)" }}>↗</span>
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