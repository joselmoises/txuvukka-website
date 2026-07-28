# TXUVUKKA — Estúdio de Design e Publicidade

Website institucional one-page. Next.js 16 (App Router) + React 19 + Tailwind CSS v4 + TypeScript.

> **Site de demonstração** da [Konekto Software](https://konekto.co.mz), alojado em
> `txuvukka.konekto.co.mz`. Sem SMTP nem base de dados — ver `DEPLOY-DOCKER.md`.

Identidade estritamente monocromática: preto (`#0a0a0a`), branco-papel (`#f4f4f2`) e os cinzentos derivados do logótipo (`#3a3a3a`).

## Correr localmente

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build de produção
npm run lint
```

## Estrutura

```
Dockerfile                build multi-stage -> servidor Node standalone
docker-compose.yml        teste local (porta 3000)
docker-compose.prod.yml   produção, rede do Nginx Proxy Manager
DEPLOY-DOCKER.md          instruções de deploy na VPS
brand/                    ficheiros originais da marca (.ai, .pdf, .png, .svg)
public/txuvukka-logo.svg  logótipo para partilha/download
src/app/
  layout.tsx              fontes (Jost + Inter), metadata e SEO
  page.tsx                composição da one-page + JSON-LD
  globals.css             tokens de tema, utilitários e animações
  icon.svg                favicon
src/lib/content.ts        TODO o conteúdo editorial do site
src/components/
  Logo.tsx                wordmark em SVG inline (usa currentColor)
  Header.tsx              navegação fixa + menu móvel
  Hero.tsx                Marquee.tsx     Services.tsx
  Work.tsx                Process.tsx     About.tsx
  Contact.tsx             ContactForm.tsx Footer.tsx
  SectionHeading.tsx      Reveal.tsx (animação ao scroll)
src/app/api/health/       sonda de saúde para o Docker/NPM
```

## Editar conteúdo

Textos, serviços, projectos e dados de contacto vivem todos em
`src/lib/content.ts`. Não é preciso mexer nos componentes.

## Por fazer antes de publicar

- [ ] Substituir e-mail, telefone, WhatsApp, morada e redes sociais em `src/lib/content.ts` (os valores actuais são de exemplo)
- [ ] Substituir os projectos de exemplo em `work` por trabalho real
- [ ] Trocar os padrões CSS de `Work.tsx` por imagens reais (`next/image`)
- [ ] Adicionar imagem Open Graph
- [ ] (Só se deixar de ser demonstração) ligar o formulário a um serviço de e-mail — ver o `TODO` em `ContactForm.tsx`; e actualizar `siteUrl` em `src/app/layout.tsx` para o domínio próprio

## Publicar

VPS com Docker + Nginx Proxy Manager — ver **[DEPLOY-DOCKER.md](DEPLOY-DOCKER.md)**.

```bash
docker compose up -d --build   # teste local -> http://localhost:3000
```
