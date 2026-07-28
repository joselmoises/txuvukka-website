import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { services } from "@/lib/content";

export default function Services() {
  return (
    <section id="servicos" className="container-x py-28 md:py-40">
      <SectionHeading
        index="01"
        eyebrow="Serviços"
        title={
          <>
            O que fazemos <span className="text-ash">bem</span>
          </>
        }
        intro="Trabalhamos ponta a ponta — da estratégia à peça final. Cada serviço pode ser contratado isoladamente ou como sistema completo."
      />

      <ul className="mt-20 grid gap-px border border-paper/10 bg-paper/10 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <Reveal
            key={service.number}
            as="li"
            delay={i * 70}
            className="group relative flex flex-col bg-ink p-8 transition-colors duration-500 hover:bg-paper md:p-10"
          >
            <span className="font-display text-sm font-light tracking-[0.2em] text-smoke transition-colors duration-500 group-hover:text-graphite">
              {service.number}
            </span>

            <h3 className="display mt-8 text-3xl text-paper transition-colors duration-500 group-hover:text-ink md:text-[2.5rem]">
              {service.title}
            </h3>

            <p className="mt-5 text-sm leading-relaxed text-smoke transition-colors duration-500 group-hover:text-graphite">
              {service.description}
            </p>

            <ul className="mt-8 flex flex-wrap gap-2 pt-6 border-t border-paper/10 transition-colors duration-500 group-hover:border-ink/15">
              {service.items.map((item) => (
                <li
                  key={item}
                  className="border border-paper/20 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.16em] text-smoke transition-colors duration-500 group-hover:border-ink/25 group-hover:text-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
