import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { work } from "@/lib/content";

/**
 * Placeholders gráficos gerados em CSS, estritamente a preto e branco.
 * Substitui cada `<div className="pattern">` por uma <Image /> quando houver
 * fotografia real dos projectos.
 */
const patterns = [
  "repeating-linear-gradient(90deg, #f4f4f2 0 1px, transparent 1px 12px)",
  "repeating-linear-gradient(45deg, #f4f4f2 0 1px, transparent 1px 16px)",
  "radial-gradient(#f4f4f2 1.2px, transparent 1.3px)",
  "repeating-radial-gradient(circle at 50% 50%, #f4f4f2 0 1px, transparent 1px 20px)",
  "repeating-linear-gradient(0deg, #f4f4f2 0 1px, transparent 1px 10px)",
  "repeating-linear-gradient(135deg, #f4f4f2 0 1px, transparent 1px 9px), repeating-linear-gradient(45deg, #f4f4f2 0 1px, transparent 1px 9px)",
];

export default function Work() {
  return (
    <section id="trabalho" className="border-t border-paper/10 py-28 md:py-40">
      <div className="container-x">
        <SectionHeading
          index="02"
          eyebrow="Trabalho"
          title={
            <>
              Selecção <span className="text-ash">recente</span>
            </>
          }
          intro="Uma amostra do que fizemos nos últimos anos. O portfólio completo é partilhado em reunião."
        />
      </div>

      <div className="container-x mt-20">
        <ul className="grid gap-x-8 gap-y-16 md:grid-cols-2">
          {work.map((project, i) => (
            <Reveal
              key={project.title}
              as="li"
              delay={(i % 2) * 90}
              className={i % 4 === 1 || i % 4 === 2 ? "md:mt-20" : ""}
            >
              <a href="#contacto" className="group block">
                <div
                  className={`relative overflow-hidden bg-ink-soft ${
                    i % 3 === 0 ? "aspect-4/5" : "aspect-4/3"
                  }`}
                >
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-60 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 group-hover:opacity-85"
                    style={{
                      backgroundImage: patterns[i % patterns.length],
                      backgroundSize: i % patterns.length === 2 ? "14px 14px" : undefined,
                    }}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-ink/80 via-ink/20 to-transparent" />

                  <span className="absolute bottom-6 left-6 z-10 border border-paper/25 bg-ink/40 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-paper backdrop-blur-xs">
                    {project.category}
                  </span>

                  <span className="absolute inset-x-0 bottom-0 z-10 flex translate-y-full items-center justify-center bg-paper py-4 text-[11px] font-medium uppercase tracking-[0.2em] text-ink transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0">
                    Pedir apresentação →
                  </span>
                </div>

                <div className="mt-6 flex items-baseline justify-between gap-6 border-t border-paper/10 pt-5">
                  <h3 className="display text-2xl text-paper md:text-3xl">
                    {project.title}
                  </h3>
                  <span className="shrink-0 font-display text-sm tracking-[0.16em] text-smoke">
                    {project.year}
                  </span>
                </div>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-smoke">
                  {project.note}
                </p>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
