import Container from "@/components/Container";
import ProjectCard from "@/components/ProjectCard";
import ButtonLink from "@/components/ButtonLink";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

export default function HomePage() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="hero-section">
        <Container>
          <div className="grid md:grid-cols-[1fr_340px] gap-12 items-start">
            {/* Left */}
            <div>
              {/* Availability */}
              <div className="avail-dot mb-7">
                {profile.about.availability}
              </div>

              {/* Headline */}
              <h1
                className="text-5xl md:text-6xl font-bold leading-[1.05] tracking-[-0.03em] mb-6"
                style={{ color: "var(--white)" }}
              >
                {profile.name}
              </h1>

              {/* Role */}
              <div
                className="text-[15px] font-medium mb-5 mono"
                style={{ color: "var(--text-3)" }}
              >
                {profile.role} · {profile.location}
              </div>

              {/* Tagline */}
              <p
                className="text-[16px] leading-8 mb-9 max-w-[520px]"
                style={{ color: "var(--text-2)" }}
              >
                {profile.tagline}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 mb-9">
                <ButtonLink href="#projects" variant="primary">
                  View Projects →
                </ButtonLink>
                <ButtonLink href="/contact" variant="secondary">
                  Get in Touch
                </ButtonLink>
                <ButtonLink href="/resume" variant="ghost">
                  Resume
                </ButtonLink>
              </div>

              {/* Social links */}
              <div className="flex gap-5 text-[13px]" style={{ color: "var(--text-3)" }}>
                {profile.links.github && (
                  <a
                    href={profile.links.github}
                    target="_blank" rel="noreferrer"
                    className="transition-colors hover:text-[var(--text)] mono"
                  >
                    GitHub ↗
                  </a>
                )}
                {profile.links.linkedin && (
                  <a
                    href={profile.links.linkedin}
                    target="_blank" rel="noreferrer"
                    className="transition-colors hover:text-[var(--text)] mono"
                  >
                    LinkedIn ↗
                  </a>
                )}
                <a
                  href={`mailto:${profile.email}`}
                  className="transition-colors hover:text-[var(--text)] mono"
                >
                  {profile.email} ↗
                </a>
              </div>
            </div>

            {/* Right — About card */}
            <div className="space-y-3">
              <div className="card p-6">
                <div className="label mb-4">About</div>
                <p
                  className="text-[13px] leading-7 whitespace-pre-line"
                  style={{ color: "var(--text-2)" }}
                >
                  {profile.about.short}
                </p>
              </div>

              {/* Meta grid */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { k: "Focus",     v: profile.about.focus },
                  { k: "Interest",  v: profile.about.interest },
                  { k: "Stack",     v: profile.about.stack },
                  { k: "Projects",  v: `${projects.length} total` },
                ].map(({ k, v }) => (
                  <div key={k} className="card-flat p-4">
                    <div className="label mb-1">{k}</div>
                    <div
                      className="text-[12px] font-medium"
                      style={{ color: "var(--text)" }}
                    >
                      {v}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── PROJECTS ── */}
      <section
        id="projects"
        className="section scroll-mt-nav"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        <Container>
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="label mb-3">Selected Work</div>
              <h2
                className="text-3xl font-bold tracking-[-0.02em]"
                style={{ color: "var(--white)" }}
              >
                Projects
              </h2>
            </div>
            <ButtonLink href="/projects" variant="ghost">
              View all →
            </ButtonLink>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </Container>
      </section>

      {/* ── SKILLS ── */}
      <section className="section" style={{ borderBottom: "1px solid var(--border)" }}>
        <Container>
          <div className="label mb-3">Capabilities</div>
          <h2
            className="text-3xl font-bold tracking-[-0.02em] mb-10"
            style={{ color: "var(--white)" }}
          >
            Skills
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {(
              [
                { title: "Frontend",    items: profile.skills.frontend },
                { title: "Backend",     items: profile.skills.backend  },
                { title: "Tools",       items: profile.skills.tools    },
                { title: "Soft Skills", items: profile.skills.soft     },
              ] as const
            ).map(({ title, items }) => (
              <div key={title}>
                <div className="label mb-4">{title}</div>
                <div className="flex flex-wrap gap-2">
                  {items.map((s) => (
                    <span key={s} className="skill-pill">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── CTA ── */}
      <section className="section">
        <Container>
          <div
            className="max-w-xl mx-auto text-center py-4"
          >
            <div className="label mb-4 flex justify-center">Let's Build</div>
            <h2
              className="text-3xl font-bold tracking-[-0.02em] mb-4"
              style={{ color: "var(--white)" }}
            >
              Open for New Projects
            </h2>
            <p
              className="text-[15px] leading-7 mb-8"
              style={{ color: "var(--text-2)" }}
            >
              Available for freelance work, collaborations, and internships.
              Drop me a line and let's talk.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <ButtonLink href="/contact" variant="primary">
                Get in Touch →
              </ButtonLink>
              <ButtonLink href={`mailto:${profile.email}`} external variant="secondary">
                Email Directly
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}