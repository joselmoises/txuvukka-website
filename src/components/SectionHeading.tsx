import Reveal from "./Reveal";

type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  /** Inverte para fundo claro. */
  light?: boolean;
};

export default function SectionHeading({
  index,
  eyebrow,
  title,
  intro,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
      <div>
        <Reveal>
          <p className={`eyebrow ${light ? "text-graphite" : ""}`}>
            {index} — {eyebrow}
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2
            className={`display mt-6 max-w-[14ch] text-[clamp(2.25rem,6vw,5rem)] ${
              light ? "text-ink" : "text-paper"
            }`}
          >
            {title}
          </h2>
        </Reveal>
      </div>

      {intro ? (
        <Reveal delay={180}>
          <p
            className={`max-w-sm text-base leading-relaxed md:text-right ${
              light ? "text-graphite" : "text-smoke"
            }`}
          >
            {intro}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
