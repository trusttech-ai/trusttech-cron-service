# STAGE 1 — BUILD

FROM node:20 AS builder
WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

COPY .env .env
RUN yarn prisma generate
RUN yarn build || true

# runtime stage
FROM node:20-slim

WORKDIR /app

RUN apt-get update && apt-get install -y openssl

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY package.json ./

ENV NODE_ENV=production

CMD ["node", "dist/index.js"]
