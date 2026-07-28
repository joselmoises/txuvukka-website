import ContactForm from "./ContactForm";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { site } from "@/lib/content";

const details = [
  { label: "E-mail", value: site.email, href: `mailto:${site.email}` },
  { label: "Telefone", value: site.phone, href: `tel:${site.phoneHref}` },
  { label: "WhatsApp", value: "Falar agora", href: site.whatsapp },
  { label: "Estúdio", value: site.address, href: null },
];

export default function Contact() {
  return (
    <section
      id="contacto"
      className="border-t border-paper/10 py-28 md:py-40"
    >
      <div className="container-x">
        <SectionHeading
          index="05"
          eyebrow="Contacto"
          title={
            <>
              Vamos <span className="text-ash">começar</span>
            </>
          }
          intro="Descreva o projecto em duas linhas. Se fizer sentido para ambos, marcamos uma conversa."
        />

        <div className="mt-20 grid gap-16 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <ContactForm />
          </Reveal>

          <div className="lg:col-span-5 lg:pl-8">
            <dl className="border-t border-paper/10">
              {details.map((detail, i) => (
                <Reveal
                  key={detail.label}
                  delay={i * 70}
                  className="border-b border-paper/10 py-6"
                >
                  <dt className="eyebrow">{detail.label}</dt>
                  <dd className="mt-2 text-lg text-paper">
                    {detail.href ? (
                      <a
                        href={detail.href}
                        className="link-underline"
                        target={
                          detail.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          detail.href.startsWith("http")
                            ? "noreferrer"
                            : undefined
                        }
                      >
                        {detail.value}
                      </a>
                    ) : (
                      detail.value
                    )}
                  </dd>
                </Reveal>
              ))}
            </dl>

            <Reveal delay={300}>
              <ul className="mt-10 flex flex-wrap gap-3">
                {site.social.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block border border-paper/20 px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.18em] text-smoke transition-colors duration-300 hover:border-paper hover:text-paper"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
