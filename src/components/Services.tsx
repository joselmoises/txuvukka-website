import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import ServicesBand from "./ServicesBand";

/**
 * Os cinco serviços numa faixa contínua de painéis, em vez de uma grelha —
 * ver `ServicesBand` para o mecanismo.
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

      <Reveal>
        <ServicesBand />
      </Reveal>
    </section>
  );
}
