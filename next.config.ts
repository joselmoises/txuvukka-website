import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Servidor Node auto-contido para Docker — o mesmo padrão do konekto-website-next.
  output: "standalone",
};

export default nextConfig;
