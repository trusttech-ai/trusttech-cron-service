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

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY package.json ./
COPY .env .env

ENV NODE_ENV=production

CMD ["sh", "-c", "until nc -z $POSTGRES_HOST $POSTGRES_PORT; do echo '⏳ Waiting for the database to be ready...'; sleep 2; done && echo '✅ Database is ready. Starting app...' && node dist/index.js"]
