# STAGE 1 — BUILD

FROM node:20 AS builder
WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

COPY .env .env
RUN yarn prisma generate && \
    for d in prisma/migrations/*; do \
    yarn prisma migrate resolve --applied "$(basename "$d")" || echo "⚠️ Migration $(basename "$d") already applied or not resolvable"; \
    done && \
    yarn prisma migrate deploy && \
    yarn build && \
    ls -la /app/dist

# runtime stage
FROM node:20-slim

WORKDIR /app

RUN apt-get update && apt-get install -y openssl netcat-traditional

ENV POSTGRES_HOST=35.198.59.126
ENV POSTGRES_PORT=5432

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY package.json ./

ENV NODE_ENV=production

CMD ["sh", "-c", "until nc -z $POSTGRES_HOST $POSTGRES_PORT; do echo '⏳ Esperando banco ficar pronto...'; sleep 2; done && echo '✅ Banco pronto. Subindo app...' && node dist/index.js"]
