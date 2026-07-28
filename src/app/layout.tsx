import type { Metadata, Viewport } from "next";
import { Inter, Jost } from "next/font/google";
import "./globals.css";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Demonstração alojada na VPS da Konekto. Trocar se o cliente levar o site
// para um domínio próprio.
const siteUrl = "https://txuvukka.konekto.co.mz";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "TXUVUKKA — Estúdio de Design e Publicidade",
    template: "%s | TXUVUKKA",
  },
  description:
    "Estúdio de design e publicidade em Maputo. Construímos identidades visuais, campanhas e comunicação de marca com rigor e intenção.",
  keywords: [
    "design",
    "publicidade",
    "identidade visual",
    "branding",
    "agência criativa",
    "Maputo",
    "Moçambique",
    "TXUVUKKA",
  ],
  openGraph: {
    type: "website",
    locale: "pt_MZ",
    url: siteUrl,
    siteName: "TXUVUKKA",
    title: "TXUVUKKA — Estúdio de Design e Publicidade",
    description:
      "Identidades visuais, campanhas e comunicação de marca. Preto no branco.",
  },
  twitter: {
    card: "summary_large_image",
    title: "TXUVUKKA — Estúdio de Design e Publicidade",
    description:
      "Identidades visuais, campanhas e comunicação de marca. Preto no branco.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-MZ"
      className={`${jost.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-paper">
        {children}
      </body>
    </html>
  );
}
