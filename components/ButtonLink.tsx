import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost";

export default function ButtonLink({
  href,
  children,
  variant = "ghost",
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  external?: boolean;
}) {
  const cls = `btn ${variant}`;

  if (external) {
    return (
      <a className={cls} href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link className={cls} href={href}>
      {children}
    </Link>
  );
}