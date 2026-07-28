"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import { nav, site } from "@/lib/content";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Trava o scroll do body enquanto o menu móvel está aberto.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || open
          ? "bg-ink/85 backdrop-blur-md border-b border-paper/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-x flex h-[72px] items-center justify-between gap-8">
        <a
          href="#topo"
          className="shrink-0 py-3 text-paper transition-opacity hover:opacity-60"
          aria-label={`${site.name} — início`}
        >
          <Logo className="h-3.5 w-auto md:h-4" />
        </a>

        {/* A nav completa + CTA só cabem a partir de ~1024px; abaixo disso usamos
            o menu móvel (a 768px transbordavam e sobrepunham-se). */}
        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-7 xl:gap-9">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="link-underline text-[13px] font-medium uppercase tracking-[0.16em] text-smoke transition-colors hover:text-paper"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#contacto"
          className="hidden shrink-0 border border-paper/25 px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.2em] text-paper transition-colors duration-300 hover:bg-paper hover:text-ink lg:inline-block"
        >
          Iniciar projecto
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-movel"
          className="-mr-2 flex h-11 w-11 items-center justify-center lg:hidden"
        >
          <span className="sr-only">{open ? "Fechar menu" : "Abrir menu"}</span>
          <span aria-hidden className="relative block h-3 w-6">
            <span
              className={`absolute left-0 block h-px w-6 bg-paper transition-transform duration-300 ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 block h-px w-6 bg-paper transition-transform duration-300 ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </div>

      {/* Menu móvel */}
      <div
        id="menu-movel"
        hidden={!open}
        className="h-[calc(100svh-72px)] overflow-y-auto border-t border-paper/10 bg-ink lg:hidden"
      >
        <nav aria-label="Navegação móvel" className="container-x py-8">
          <ul className="flex flex-col gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="display block border-b border-paper/10 py-4 text-4xl text-paper"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={`mailto:${site.email}`}
            className="mt-8 inline-block text-sm text-smoke"
          >
            {site.email}
          </a>
        </nav>
      </div>
    </header>
  );
}
