const words = [
  "Design Gráfico",
  "Redes Sociais",
  "Fotografia",
  "Vídeo",
  "Anúncios",
  "Outdoors",
  "Printing",
  "Brindes",
];

export default function Marquee() {
  // Duplicamos a lista para o loop ser contínuo (a animação desloca -50%).
  const track = [...words, ...words];

  // Decorativo: os mesmos termos aparecem na secção de serviços, por isso
  // fica fora da árvore de acessibilidade.
  return (
    <div
      aria-hidden
      className="overflow-hidden border-y border-paper/10 bg-paper py-5 text-ink"
    >
      <div className="flex w-max animate-marquee items-center">
        {track.map((word, i) => (
          <span
            key={i}
            className="flex shrink-0 items-center text-[11px] font-medium uppercase tracking-[0.24em]"
          >
            {word}
            <span aria-hidden className="mx-8 text-graphite">
              ✕
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
