type Tone = "neutral" | "success" | "info" | "warning" | "danger";

const map: Record<Tone, string> = {
  neutral: "bg-[var(--surface2)] text-[var(--text-2)] border-[var(--border)]",
  success: "bg-[var(--green-bg)] text-[var(--green-text)] border-[var(--green-bd)]",
  info:    "bg-[var(--blue-bg)]  text-[var(--blue-text)]  border-[var(--blue-bd)]",
  warning: "bg-[var(--amber-bg)] text-[var(--amber-text)] border-[var(--amber-bd)]",
  danger:  "bg-[var(--red-bg)]   text-[var(--red-text)]   border-[var(--red-bd)]",
};

export default function Badge({
  children,
  tone = "neutral",
}: {
  children: React.ReactNode;
  tone?: Tone;
}) {
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 text-[10px] font-medium tracking-[0.08em] uppercase border rounded-full select-none mono ${map[tone]}`}
    >
      {children}
    </span>
  );
}