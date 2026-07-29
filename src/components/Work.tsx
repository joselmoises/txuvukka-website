import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { work } from "@/lib/content";

/**
 * Mais recente primeiro. `sort` é estável em JS, por isso projectos do mesmo
 * ano mantêm a ordem em que aparecem no `content.ts` — é aí que se controla o
 * desempate.
 */
const recentesPrimeiro = [...work].sort(
  (a, b) => Number(b.year) - Number(a.year),
);

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
          {recentesPrimeiro.map((project, i) => (
            <Reveal
              key={`${project.title}-${project.category}`}
              as="li"
              delay={(i % 2) * 90}
              className={i % 4 === 1 || i % 4 === 2 ? "md:mt-20" : ""}
            >
              <a href="#contacto" className="group block">
                {/* Sem proporção fixa: cada peça mantém o seu formato original
                    (as publicações são 4:5, o stand é 4:3). Recortar tudo para
                    o mesmo rectângulo cortava texto a meio das peças. */}
                <div className="relative overflow-hidden bg-ink-soft">
                  {/* Entra a preto e branco; ganha cor quando o visitante se
                      interessa — mantém a página monocromática sem esconder o
                      trabalho. */}
                  <Image
                    src={project.image}
                    alt={`${project.title} — ${project.category}`}
                    placeholder="blur"
                    sizes="(min-width: 768px) 45vw, 100vw"
                    className="h-auto w-full grayscale transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:grayscale-0"
                  />

                  {/* Fundo sólido em vez de gradiente: metade das peças tem
                      fundo branco e um scrim escuro ficava com ar de nódoa. */}
                  <span className="absolute bottom-5 left-5 z-10 bg-ink px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-paper">
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
