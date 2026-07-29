import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { beliefs, stats } from "@/lib/content";

export default function About() {
  return (
    <section id="estudio" className="container-x py-28 md:py-40">
      <SectionHeading
        index="04"
        eyebrow="Estúdio"
        title={
          <>
            Preto no <span className="text-ash">branco</span>
          </>
        }
        intro="Uma equipa pequena, deliberadamente. Quem apresenta o trabalho é quem o faz."
      />

      <div className="mt-20 grid gap-16 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="display text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.25] text-paper">
              Escolhemos o preto e o branco porque nos obriga a resolver a ideia
              antes de a decorar. Sem cor para esconder decisões fracas, sobra o
              essencial: composição, tipografia, hierarquia e conceito.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-smoke">
              Trabalhamos com marcas em Moçambique — de padarias e ginásios de
              bairro a centros de saúde e associações empresariais.
              Independentemente da escala, o método é o mesmo: perceber o
              problema, definir a direcção e executar com rigor até ao último
              ficheiro entregue.
            </p>
          </Reveal>

          <ul className="mt-12 space-y-px border-t border-paper/10">
            {beliefs.map((belief, i) => (
              <Reveal
                key={belief}
                as="li"
                delay={i * 80}
                className="flex gap-5 border-b border-paper/10 py-5"
              >
                <span
                  aria-hidden
                  className="mt-2 h-1.5 w-1.5 shrink-0 bg-paper"
                />
                <span className="text-sm leading-relaxed text-smoke">
                  {belief}
                </span>
              </Reveal>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-5 lg:pl-8">
          {stats.length > 0 ? (
          <dl className="grid grid-cols-2 gap-px bg-paper/10">
            {stats.map((stat, i) => (
              <Reveal
                key={stat.label}
                delay={i * 70}
                className="bg-ink px-6 py-10 md:px-8 md:py-12"
              >
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="display block text-[clamp(2.5rem,6vw,4rem)] text-paper">
                    {stat.value}
                  </span>
                  <span
                    aria-hidden
                    className="mt-3 block text-[11px] font-medium uppercase leading-relaxed tracking-[0.16em] text-smoke"
                  >
                    {stat.label}
                  </span>
                </dd>
              </Reveal>
            ))}
          </dl>
          ) : null}
        </div>
      </div>
    </section>
  );
}
