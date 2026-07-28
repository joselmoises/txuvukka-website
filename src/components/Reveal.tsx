"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Atraso em ms, para escalonar elementos de uma mesma grelha. */
  delay?: number;
  className?: string;
  as?: ElementType;
};

/**
 * Revela o conteúdo quando entra no viewport. A animação em si está em
 * `globals.css` (.reveal) — aqui só alternamos o atributo `data-visible`.
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Sem IntersectionObserver, mostramos de imediato. Escrevemos directamente
    // no DOM em vez de usar setState para não disparar um render em cascata.
    if (typeof IntersectionObserver === "undefined") {
      node.dataset.visible = "true";
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      data-visible={visible}
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as React.CSSProperties) : undefined}
      className={`reveal ${className}`}
    >
      {children}
    </Tag>
  );
}
