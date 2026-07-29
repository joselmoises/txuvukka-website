import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import ServiceCard from "./ServiceCard";
import { services } from "@/lib/content";

/**
 * A frente dos cartões replica a composição das stories «SERVIÇOS» da própria
 * TXUVUKKA: monograma K•K em marca de água e disco em relevo com o nome do
 * serviço. O verso, invertido a preto, traz a descrição — ver `ServiceCard`.
 */
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
        intro="Cinco frentes de trabalho. Passe o cursor sobre cada uma — ou toque — para ver o que inclui."
      />

      <ul className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <Reveal
            key={service.number}
            as="li"
            delay={i * 70}
            className={
              "wide" in service && service.wide ? "sm:col-span-2" : undefined
            }
          >
            <ServiceCard service={service} />
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
