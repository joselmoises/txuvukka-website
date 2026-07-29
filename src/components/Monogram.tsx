type MonogramProps = {
  className?: string;
};

/**
 * Monograma K•K — os dois K espelhados com o ponto ao centro, recortados do
 * wordmark. Usa `currentColor`, por isso herda a cor de quem o envolve.
 *
 * É o mesmo símbolo que a TXUVUKKA usa como marca de água nas stories de
 * serviços e como ícone da conta.
 */
export default function Monogram({ className }: MonogramProps) {
  return (
    <svg
      viewBox="638 498 142 85"
      className={className}
      fill="currentColor"
      aria-hidden
      focusable="false"
    >
      <path d="M719.12,540.69c0.16,11.03-17.17,11.04-17.01,0C701.95,529.66,719.28,529.66,719.12,540.69z" />
      <path d="M702.58,579.95c-4.93-0.37-14.41,1.54-17.91-3.12c0,0-29.11-31.68-29.11-31.68c-1.44,9.03,5.77,37.04-11.29,34.8v-79c17.05-2.29,9.86,25.83,11.29,34.8l27.21-31.46c3.44-4.89,12.94-2.99,17.93-3.34l-34.8,38.67L702.58,579.95z" />
      <path d="M718.64,579.95c4.93-0.37,14.41,1.54,17.91-3.12c0,0,29.11-31.68,29.11-31.68c1.44,9.03-5.77,37.04,11.29,34.8v-79c-17.05-2.29-9.86,25.83-11.29,34.8l-27.21-31.46c-3.44-4.89-12.94-2.99-17.93-3.34l34.8,38.67L718.64,579.95z" />
    </svg>
  );
}
