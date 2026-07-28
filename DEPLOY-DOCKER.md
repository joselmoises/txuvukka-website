# Deploy — VPS com Docker + Nginx Proxy Manager

Site de **demonstração de cliente**. Corre como aplicação Next.js (servidor Node) —
`output: 'standalone'` — dentro de um contêiner, tal como os outros projetos Konekto
na VPS. O **Nginx Proxy Manager (NPM)** termina o TLS e encaminha o subdomínio para o
contêiner pelo nome, na porta **3000**. Sem portas publicadas no host.

Domínio: **txuvukka.konekto.co.mz**

## Ficheiros
- `Dockerfile` — build multi-stage: `node:22-alpine` compila → corre `server.js` (standalone)
- `docker-compose.prod.yml` — junta-se à rede externa `${NPM_NETWORK}` (NPM), contêiner `txuvukka-web`
- `docker-compose.yml` — teste local (publica `3000:3000`)
- `.env.prod.example` — copiar para `.env.prod` (define `DOMAIN` e `NPM_NETWORK`)
- `/api/health` — endpoint de saúde (200 "ok"), usado também pelo `HEALTHCHECK`

## Sem serviços externos

Por ser uma demonstração, não há SMTP, base de dados nem variáveis de ambiente com
segredos. O formulário de contacto compõe um `mailto:` e abre o cliente de email do
visitante — não precisa de backend. Se um dia o cliente quiser receber os pedidos no
servidor, ver o `TODO` em `src/components/ContactForm.tsx`.

## Deploy na VPS
```bash
# 1) clonar (na pasta dos projetos)
cd ~/projects
git clone <repo> txuvukka
cd txuvukka

# 2) configurar
cp .env.prod.example .env.prod
nano .env.prod          # NPM_NETWORK, se for diferente
chmod 600 .env.prod

# 3) subir
docker compose -f docker-compose.prod.yml --env-file .env.prod up -d --build
```

## Apontar o subdomínio (Nginx Proxy Manager)
No painel do NPM (porta 81) → **Proxy Hosts → Add Proxy Host**:
- **Domain Names:** `txuvukka.konekto.co.mz`
- **Forward Hostname / IP:** `txuvukka-web`
- **Forward Port:** `3000`
- **Websockets Support:** on · **Block Common Exploits:** on
- Separador **SSL:** pedir certificado Let's Encrypt + *Force SSL* + *HTTP/2*

> O `txuvukka-web` só é alcançável pelo NPM porque ambos estão na rede
> `nginx-proxy-manager_default`. Confirmar com:
> `docker inspect txuvukka-web -f '{{range $k,$_ := .NetworkSettings.Networks}}{{$k}} {{end}}'`

## DNS
Criar um registo **A** de `txuvukka` na zona `konekto.co.mz` a apontar para o **IP da VPS**.
Só depois de o DNS propagar é que o Let's Encrypt no NPM emite o certificado.

## Atualizar (novo deploy)
```bash
cd ~/projects/txuvukka
git pull
docker compose -f docker-compose.prod.yml --env-file .env.prod up -d --build
```

## Notas
- O build precisa de internet — o `next build` descarrega as fontes do `next/font` (Jost e Inter).
- Teste local sem VPS: `docker compose up -d --build` → http://localhost:3000
