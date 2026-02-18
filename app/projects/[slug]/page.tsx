import Container from "@/components/Container";
import ButtonLink from "@/components/ButtonLink";
import Badge from "@/components/Badge";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

// Next.js 15: params is now a Promise — must be awaited
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = projects.find((p) => p.slug === slug);
  if (!p) return {};
  return { title: `${p.title} — Dary Ibrahim`, description: p.description };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  const hasDemo = !!project.links?.demo;
  const hasRepo = !!project.links?.repo;

  return (
    <main>
      <section className="section">
        <Container>
          {/* Breadcrumb */}
          <nav
            className="flex items-center gap-2 text-[12px] mb-10 mono"
            aria-label="Breadcrumb"
            style={{ color: "var(--text-3)" }}
          >
            <a href="/projects" className="hover:text-[var(--text)] transition-colors">
              Projects
            </a>
            <span>/</span>
            <span style={{ color: "var(--text-2)" }}>{project.title}</span>
          </nav>

          {/* Header */}
          <div className="max-w-2xl mb-12">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="label">{project.period}</span>
              {project.status && (
                <Badge tone={project.statusTone}>{project.status}</Badge>
              )}
            </div>

            <h1
              className="text-4xl md:text-5xl font-bold tracking-[-0.03em] mb-4"
              style={{ color: "var(--white)" }}
            >
              {project.title}
            </h1>

            <p
              className="text-[16px] leading-8"
              style={{ color: "var(--text-2)" }}
            >
              {project.description}
            </p>
          </div>

          {/* Meta row */}
          <div
            className="flex flex-wrap gap-6 mb-12 pb-12 text-[13px]"
            style={{ borderBottom: "1px solid var(--border)" }}
          >
            <div>
              <div className="label mb-1">Role</div>
              <div style={{ color: "var(--text)" }}>{project.role}</div>
            </div>
            <div>
              <div className="label mb-1">Period</div>
              <div style={{ color: "var(--text)" }}>{project.period}</div>
            </div>
            <div>
              <div className="label mb-1">Status</div>
              <div style={{ color: "var(--text)" }}>{project.status}</div>
            </div>
          </div>

          {/* Main content grid */}
          <div className="grid lg:grid-cols-[1fr_300px] gap-10 items-start">
            {/* Left — long description + actions */}
            <div>
              <div className="label mb-4">Overview</div>
              {project.longDescription.split("\n\n").map((para, i) => (
                <p
                  key={i}
                  className="text-[15px] leading-8 mb-5"
                  style={{ color: "var(--text-2)" }}
                >
                  {para}
                </p>
              ))}

              {/* Tech stack */}
              <div
                className="mt-10 pt-8"
                style={{ borderTop: "1px solid var(--border)" }}
              >
                <div className="label mb-4">Tech Stack</div>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((s) => (
                    <span key={s} className="skill-pill">{s}</span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div
                className="mt-8 pt-8 flex flex-wrap gap-3"
                style={{ borderTop: "1px solid var(--border)" }}
              >
                {hasDemo && (
                  <ButtonLink href={project.links!.demo!} external variant="primary">
                    Live Demo ↗
                  </ButtonLink>
                )}
                {hasRepo && (
                  <ButtonLink href={project.links!.repo!} external variant="secondary">
                    Source Code ↗
                  </ButtonLink>
                )}
                {!hasDemo && !hasRepo && (
                  <span
                    className="text-[12px] mono py-2"
                    style={{ color: "var(--text-3)" }}
                  >
                    Links not available yet
                  </span>
                )}
                <ButtonLink href="/projects" variant="ghost">
                  ← Back to Projects
                </ButtonLink>
              </div>
            </div>

            {/* Right — highlights */}
            <div className="card p-6 lg:sticky lg:top-20">
              <div className="label mb-5">Highlights</div>
              <ul className="space-y-4">
                {project.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-[13px] leading-6"
                    style={{ color: "var(--text-2)" }}
                  >
                    <span
                      className="flex-shrink-0 font-medium mt-0.5 mono text-[10px]"
                      style={{ color: "var(--text-3)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom nav */}
          <div
            className="mt-16 pt-8 flex items-center justify-between"
            style={{ borderTop: "1px solid var(--border)" }}
          >
            <ButtonLink href="/projects" variant="ghost">
              ← All Projects
            </ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Work with me →
            </ButtonLink>
          </div>
        </Container>
      </section>
    </main>
  );
}