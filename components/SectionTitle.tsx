export default function SectionTitle({
  tag,
  title,
  desc,
}: {
  tag: string;
  title: string;
  desc?: string;
}) {
  return (
    <div>
      <div className="section-title-wrap">
        <div className="section-title-line" />
        <div className="section-title-tag">{tag}</div>
        <div className="section-title-line" />
      </div>

      <h2
        className="text-3xl font-bold"
        style={{ color: "var(--text)", fontFamily: "IBM Plex Mono" }}
      >
        {title}
      </h2>

      {desc && (
        <p
          className="mt-3 text-[14px] leading-7"
          style={{ color: "var(--text-muted)", maxWidth: "560px" }}
        >
          {desc}
        </p>
      )}
    </div>
  );
}