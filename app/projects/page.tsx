import Container from "@/components/Container";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects — Dary Ibrahim",
  description: "All projects by Dary Ibrahim Akram.",
};

export default function ProjectsPage() {
  return (
    <main>
      <section className="section">
        <Container>
          <div className="label mb-3">All Work</div>
          <h1
            className="text-4xl font-bold tracking-[-0.02em] mb-3"
            style={{ color: "var(--white)" }}
          >
            Projects
          </h1>
          <p
            className="text-[15px] leading-7 mb-12 max-w-lg"
            style={{ color: "var(--text-2)" }}
          >
            Shipped demos and workflow apps. Click any card for the full case study.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}