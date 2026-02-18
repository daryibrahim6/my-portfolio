import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="text-center max-w-sm">
        <div
          className="text-[80px] font-bold tracking-[-0.04em] leading-none mb-4"
          style={{ color: "var(--surface3)", fontFamily: "var(--font-sans)" }}
        >
          404
        </div>
        <h1
          className="text-xl font-semibold mb-3"
          style={{ color: "var(--white)" }}
        >
          Page not found
        </h1>
        <p
          className="text-[14px] leading-6 mb-8"
          style={{ color: "var(--text-2)" }}
        >
          This page doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/" className="btn primary">
            ← Home
          </Link>
          <Link href="/projects" className="btn secondary">
            Projects
          </Link>
        </div>
      </div>
    </main>
  );
}