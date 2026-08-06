"use client";

import { useState } from "react";
import Monogram from "./Monogram";
import { services } from "@/lib/content";

/**
 * Faixa de serviços — uma só peça contínua dividida em cinco painéis.
 *
 * Em repouso todos os painéis são iguais e pretos, com o nome do serviço na
 * vertical: lê-se como uma linha de horizonte, não como uma grelha de cartões.
 * O painel sob o cursor cresce e inverte para branco-papel, revelando a frase,
 * a descrição e o que o serviço inclui; os outros comprimem-se e ficam para
 * trás. É o mecanismo que o cliente pediu (ver as capturas do m3group), mas com
 * a inversão preto↔branco no lugar da cor — a identidade é monocromática.
 *
 * O que abre o painel é o estado, não `:hover` em CSS, por três razões:
 * em ecrã de toque não há hover e o conteúdo ficaria inalcançável; o teclado
 * tem de chegar lá pelo `focus`; e só com estado é possível manter um painel
 * aberto depois de um toque. Daí cada painel ser um `<button>`.
 *
 * A largura é `flex-grow` em transição — o painel aberto vale 4, os fechados 1.
 * Em ecrã estreito a faixa vira-se ao alto (`flex-col`) e o mesmo `flex-grow`
 * passa a distribuir altura, sem precisar de segunda implementação.
 */
export default function ServicesBand() {
  const [aberto, setAberto] = useState<number | null>(null);

  return (
    <ul className="mt-20 flex h-[44rem] flex-col overflow-hidden border border-paper/10 md:h-[34rem] md:flex-row">
      {services.map((service, i) => {
        const activo = aberto === i;

        return (
          <li
            key={service.number}
            style={{ flexGrow: activo ? 4 : 1 }}
            className={`relative min-h-0 basis-0 overflow-hidden transition-[flex-grow] duration-700 ease-out-expo ${
              i > 0 ? "border-t border-paper/10 md:border-l md:border-t-0" : ""
            }`}
          >
            <button
              type="button"
              onMouseEnter={() => setAberto(i)}
              onMouseLeave={() => setAberto(null)}
              onFocus={() => setAberto(i)}
              onBlur={() => setAberto(null)}
              onClick={() => setAberto(activo ? null : i)}
              aria-expanded={activo}
              className={`grain group relative block h-full w-full cursor-pointer overflow-hidden text-left transition-colors duration-700 ease-out-expo ${
                activo ? "bg-paper text-ink" : "bg-ink text-paper"
              }`}
            >
              {/* Marca de água: o mesmo K•K das stories de serviços. Sobe de
                  opacidade quando o painel abre, sem nunca competir com o texto. */}
              <Monogram
                className={`pointer-events-none absolute -right-8 bottom-6 w-56 transition-opacity duration-700 ease-out-expo md:w-72 ${
                  activo ? "text-ink/[0.07] opacity-100" : "text-paper/[0.05] opacity-100"
                }`}
              />

              <span
                className={`absolute left-6 top-6 font-display text-xs font-light tracking-[0.22em] transition-colors duration-700 md:left-8 md:top-8 ${
                  activo ? "text-ash" : "text-smoke"
                }`}
              >
                {service.number}
              </span>

              {/* ---- Fechado: só o nome, ao alto em ecrã largo ---- */}
              <span
                aria-hidden={activo}
                className={`absolute inset-0 flex items-center justify-center px-6 transition-opacity duration-300 ${
                  activo ? "pointer-events-none opacity-0" : "opacity-100 delay-300"
                }`}
              >
                <span className="display text-center text-2xl text-paper md:whitespace-nowrap md:text-3xl md:[writing-mode:vertical-rl] md:rotate-180">
                  {service.title}
                </span>
              </span>

              {/* ---- Aberto: frase, descrição e o que inclui ---- */}
              <span
                aria-hidden={!activo}
                className={`absolute inset-0 flex flex-col justify-center px-8 py-20 transition-opacity duration-500 md:px-12 ${
                  activo
                    ? "opacity-100 delay-200"
                    : "pointer-events-none opacity-0"
                }`}
              >
                <span className="eyebrow block text-graphite">
                  {service.title}
                </span>

                <span className="display mt-4 block max-w-xl text-4xl text-ink md:text-5xl">
                  {service.claim}
                </span>

                <span className="mt-6 block max-w-lg text-sm leading-relaxed text-graphite md:text-base">
                  {service.description}
                </span>

                <span className="mt-8 block max-w-xl border-t border-ink/15 pt-6 text-[11px] uppercase leading-[2.2] tracking-[0.14em] text-ash">
                  {service.items.join(" · ")}
                </span>
              </span>

              {/* Risco que cresce da base quando o painel abre — o mesmo gesto
                  do painel que sobe atrás do stand na referência do cliente. */}
              <span
                aria-hidden
                className={`pointer-events-none absolute inset-x-0 bottom-0 h-1 origin-left bg-ink transition-transform duration-700 ease-out-expo ${
                  activo ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </button>
          </li>
        );
      })}
    </ul>
  );
}
