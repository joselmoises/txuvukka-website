import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Servidor Node auto-contido para Docker — o mesmo padrão do konekto-website-next.
  output: "standalone",
  images: {
    // As imagens do portfólio já vão redimensionadas e comprimidas no repositório,
    // por isso dispensamos a optimização em runtime — e com ela a dependência do
    // `sharp` dentro do contentor. Se um dia forem adicionadas imagens grandes,
    // remover esta linha e instalar `sharp`.
    unoptimized: true,
  },
};

export default nextConfig;
