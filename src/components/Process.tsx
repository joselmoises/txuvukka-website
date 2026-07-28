import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { process } from "@/lib/content";

export default function Process() {
  return (
    <section
      id="processo"
      className="grain relative bg-paper py-28 text-ink md:py-40"
    >
      <div className="container-x relative z-10">
        <SectionHeading
          light
          index="03"
          eyebrow="Processo"
          title={
            <>
              Como <span className="text-ash">trabalhamos</span>
            </>
          }
          intro="Quatro fases, sempre as mesmas. Sabe desde o primeiro dia onde está o projecto e o que vem a seguir."
        />

        <ol className="mt-20 border-t border-ink/15">
          {process.map((phase, i) => (
            <Reveal
              key={phase.step}
              as="li"
              delay={i * 80}
              className="group border-b border-ink/15"
            >
              <div className="grid gap-4 py-10 md:grid-cols-12 md:items-baseline md:gap-8 md:py-12">
                <span className="font-display text-sm font-light tracking-[0.24em] text-ash md:col-span-1">
                  {phase.step}
                </span>
                <h3 className="display text-4xl text-ink md:col-span-4 md:text-5xl">
                  {phase.title}
                </h3>
                <p className="max-w-xl text-base leading-relaxed text-graphite md:col-span-7">
                  {phase.description}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
