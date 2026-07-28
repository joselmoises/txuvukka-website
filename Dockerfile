# syntax=docker/dockerfile:1

# ---- Build stage: compila a app Next.js ----
FROM node:22-alpine AS builder
WORKDIR /app

# Dependências a partir do lockfile (build reproduzível)
COPY package.json package-lock.json ./
RUN npm ci

# Build — produz .next/standalone (servidor Node auto-contido)
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# ---- Runtime stage: corre o servidor standalone ----
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=3000 \
    HOSTNAME=0.0.0.0 \
    TZ=Africa/Maputo

# Corre como utilizador sem privilégios
RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001

# Estáticos e o output standalone
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
  CMD wget -q --spider http://127.0.0.1:3000/ || exit 1

CMD ["node", "server.js"]
