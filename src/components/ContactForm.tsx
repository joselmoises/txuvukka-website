"use client";

import { useState, type FormEvent } from "react";
import { services, site } from "@/lib/content";

const fieldClass =
  "w-full border-b border-paper/20 bg-transparent py-3 text-base text-paper placeholder:text-smoke focus:border-paper focus:outline-none transition-colors";

const labelClass =
  "block text-[11px] font-medium uppercase tracking-[0.18em] text-smoke";

/**
 * O formulário compõe um e-mail e abre o cliente de correio do visitante.
 * Não depende de backend — nenhum contacto se perde silenciosamente.
 *
 * TODO: para receber os pedidos directamente no site, trocar `handleSubmit`
 * por um POST para um serviço de formulários (Formspree, Resend, etc.).
 */
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const nome = String(data.get("nome") ?? "");
    const empresa = String(data.get("empresa") ?? "");
    const email = String(data.get("email") ?? "");
    const servico = String(data.get("servico") ?? "");
    const mensagem = String(data.get("mensagem") ?? "");

    const corpo = [
      `Nome: ${nome}`,
      `Empresa: ${empresa || "—"}`,
      `E-mail: ${email}`,
      `Serviço: ${servico}`,
      "",
      mensagem,
    ].join("\n");

    const href = `mailto:${site.email}?subject=${encodeURIComponent(
      `Novo pedido — ${servico} — ${nome}`,
    )}&body=${encodeURIComponent(corpo)}`;

    window.location.href = href;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-8 sm:grid-cols-2">
      <div>
        <label htmlFor="nome" className={labelClass}>
          Nome *
        </label>
        <input
          id="nome"
          name="nome"
          type="text"
          required
          autoComplete="name"
          placeholder="O seu nome"
          className={`${fieldClass} mt-3`}
        />
      </div>

      <div>
        <label htmlFor="empresa" className={labelClass}>
          Empresa
        </label>
        <input
          id="empresa"
          name="empresa"
          type="text"
          autoComplete="organization"
          placeholder="Nome da organização"
          className={`${fieldClass} mt-3`}
        />
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          E-mail *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="nome@empresa.co.mz"
          className={`${fieldClass} mt-3`}
        />
      </div>

      <div>
        <label htmlFor="servico" className={labelClass}>
          Serviço *
        </label>
        <select
          id="servico"
          name="servico"
          required
          defaultValue=""
          className={`${fieldClass} mt-3 [&>option]:bg-ink [&>option]:text-paper`}
        >
          <option value="" disabled>
            Seleccionar…
          </option>
          {services.map((service) => (
            <option key={service.title} value={service.title}>
              {service.title}
            </option>
          ))}
          <option value="Outro">Outro</option>
        </select>
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="mensagem" className={labelClass}>
          Sobre o projecto *
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          required
          rows={4}
          placeholder="Conte-nos o essencial: objectivo, prazo e orçamento previsto."
          className={`${fieldClass} mt-3 resize-none`}
        />
      </div>

      <div className="sm:col-span-2 flex flex-wrap items-center gap-6">
        <button
          type="submit"
          className="group inline-flex items-center gap-3 bg-paper px-8 py-4 text-[11px] font-medium uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:bg-smoke"
        >
          Enviar pedido
          <span
            aria-hidden
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </button>

        <p aria-live="polite" className="text-sm text-smoke">
          {sent
            ? "Abrimos o seu cliente de e-mail com a mensagem pronta. Basta enviar."
            : "Respondemos em até 48 horas úteis."}
        </p>
      </div>
    </form>
  );
}
