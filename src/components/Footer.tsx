import Logo from "./Logo";
import { nav, owner, site } from "@/lib/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="grain relative border-t border-paper/10 bg-ink-soft">
      <div className="container-x relative z-10 py-16 md:py-20">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <Logo className="h-4 w-auto text-paper" />
            <p className="mt-6 text-sm leading-relaxed text-paper/75">
              {site.tagline}. Identidades visuais, campanhas e comunicação de
              marca — feitas em {site.city}.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:gap-16">
            <nav aria-label="Navegação de rodapé">
              <p className="eyebrow text-paper/65!">Navegar</p>
              <ul className="mt-5 space-y-3">
                {nav.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="link-underline text-sm text-paper/75 transition-colors hover:text-paper"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <p className="eyebrow text-paper/65!">Seguir</p>
              <ul className="mt-5 space-y-3">
                {site.social.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="link-underline text-sm text-paper/75 transition-colors hover:text-paper"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-paper/10 pt-8 text-[11px] uppercase tracking-[0.16em] text-paper/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            ©&nbsp;{year}{" "}
            <a
              href={owner.href}
              target="_blank"
              rel="noreferrer"
              className="link-underline transition-colors hover:text-paper"
            >
              {owner.name}
            </a>
            . Todos os direitos reservados.
          </p>
          <a
            href="#topo"
            className="link-underline self-start transition-colors hover:text-paper sm:self-auto"
          >
            Voltar ao topo ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
