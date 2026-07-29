"use client";

import { useState } from "react";
import Monogram from "./Monogram";

type Service = {
  number: string;
  title: string;
  description: string;
  items: readonly string[];
};

/**
 * Cartão que roda 180° sobre o eixo vertical, como quem pega num quadro e o
 * vira para ver o verso.
 *
 * O movimento é feito com `@keyframes` (ver `globals.css`) e não com
 * `transition`, porque precisa de um ponto intermédio: a meio da rotação o
 * cartão afasta-se do visitante (`translateZ(-120px)`) e as faces escurecem —
 * é isso que lhe dá peso, em vez de rodar plano.
 *
 * Roda com o rato, com toque e com teclado — daí ser um <button>. Em ecrãs de
 * toque não há hover e a descrição ficaria inalcançável.
 */
export default function ServiceCard({ service }: { service: Service }) {
  const [virado, setVirado] = useState(false);
  // Sem isto, o `voltar` tocava sozinho no primeiro render.
  const [interagiu, setInteragiu] = useState(false);

  function mudar(estado: boolean) {
    setInteragiu(true);
    setVirado(estado);
  }

  const animacao = !interagiu ? "" : virado ? "animate-virar" : "animate-voltar";
  const face = "absolute inset-0 flex flex-col overflow-hidden backface-hidden";

  return (
    <button
      type="button"
      onMouseEnter={() => mudar(true)}
      onMouseLeave={() => mudar(false)}
      onFocus={() => mudar(true)}
      onBlur={() => mudar(false)}
      onClick={() => mudar(!virado)}
      aria-expanded={virado}
      className="relative block h-[25rem] w-full cursor-pointer perspective-[1600px] text-left md:h-[27rem]"
    >
      <span
        className={`relative block h-full w-full transform-3d ${animacao}`}
      >
        {/* Frente — só o disco com o nome */}
        <span className={`${face} bg-paper text-ink`}>
          <span className="absolute left-6 top-6 font-display text-xs font-light tracking-[0.22em] text-ash">
            {service.number}
          </span>

          <span className="relative flex flex-1 items-center justify-center">
            <Monogram className="absolute left-1/2 w-[min(92%,22rem)] -translate-x-1/2 text-ink/[0.09]" />
            <span
              className="relative flex size-40 items-center justify-center rounded-full bg-paper px-6 text-center text-[11px] font-medium uppercase leading-[1.5] tracking-[0.14em] text-graphite md:size-44"
              style={{
                boxShadow:
                  "0 18px 34px -14px rgba(10,10,10,0.35), 0 2px 6px rgba(10,10,10,0.08), inset 0 1px 0 #fff",
              }}
            >
              {service.title}
            </span>
          </span>

          <span className="flex items-center justify-center gap-2 pb-7 text-[10px] uppercase tracking-[0.2em] text-ash">
            Virar
            <span aria-hidden>↻</span>
          </span>

          {/* Escurece ao passar pela aresta */}
          <span
            aria-hidden
            className={`pointer-events-none absolute inset-0 bg-ink opacity-0 ${
              interagiu ? "animate-aresta" : ""
            }`}
          />
        </span>

        {/* Verso — invertido, com a descrição */}
        <span className={`${face} rotate-y-180 bg-ink text-paper`}>
          <span className="absolute left-6 top-6 font-display text-xs font-light tracking-[0.22em] text-smoke">
            {service.number}
          </span>

          <span className="flex flex-1 flex-col justify-center px-8 py-16 text-center md:px-10">
            <span className="display block text-2xl text-paper md:text-[1.75rem]">
              {service.title}
            </span>

            <span className="mx-auto mt-5 max-w-prose text-sm leading-relaxed text-smoke">
              {service.description}
            </span>

            <span className="mx-auto mt-6 max-w-prose border-t border-paper/15 pt-5 text-[11px] uppercase leading-[2] tracking-[0.14em] text-ash">
              {service.items.join(" · ")}
            </span>
          </span>

          <span
            aria-hidden
            className={`pointer-events-none absolute inset-0 bg-ink opacity-0 ${
              interagiu ? "animate-aresta" : ""
            }`}
          />
        </span>
      </span>
    </button>
  );
}
