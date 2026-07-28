import Logo from "./Logo";
import Reveal from "./Reveal";
import { site } from "@/lib/content";

export default function Hero() {
  return (
    <section
      id="topo"
      className="grain relative flex min-h-svh flex-col justify-between overflow-hidden pt-[72px]"
    >
      {/* Grelha de fundo — estrutura visível, sem cor */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px)",
          backgroundSize: "calc(100% / 6) 100%",
        }}
      />

      <div className="container-x relative z-10 flex flex-1 flex-col justify-center py-12 md:py-16">
        <Reveal>
          <p className="eyebrow flex items-center gap-3">
            <span aria-hidden className="h-px w-8 bg-smoke" />
            {site.country} — desde {site.founded}
          </p>
        </Reveal>

        <Reveal delay={120}>
          <h1 className="display mt-8 max-w-[16ch] text-[clamp(2.75rem,8vw,7.5rem)] text-paper">
            Design que resolve.
            <br />
            <span className="text-ash">Publicidade</span> que fica.
          </h1>
        </Reveal>

        <div className="mt-10 flex flex-col gap-8 border-t border-paper/10 pt-8 md:flex-row md:items-end md:justify-between">
          <Reveal delay={240}>
            <p className="max-w-md text-base leading-relaxed text-smoke md:text-lg">
              Somos um estúdio de design e publicidade. Construímos identidades
              visuais, campanhas e sistemas de comunicação para marcas que
              precisam de ser levadas a sério.
            </p>
          </Reveal>

          <Reveal delay={340}>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contacto"
                className="group inline-flex items-center gap-3 bg-paper px-7 py-4 text-[11px] font-medium uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:bg-smoke"
              >
                Falar connosco
                <span
                  aria-hidden
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
              <a
                href="#trabalho"
                className="inline-flex items-center gap-3 border border-paper/25 px-7 py-4 text-[11px] font-medium uppercase tracking-[0.2em] text-paper transition-colors duration-300 hover:border-paper"
              >
                Ver trabalho
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Wordmark a toda a largura — a marca como elemento gráfico */}
      <Reveal delay={420} className="relative z-10 px-4 pb-6 md:px-8 md:pb-8">
        <Logo className="w-full text-paper/90" title={null} />
      </Reveal>
    </section>
  );
}
