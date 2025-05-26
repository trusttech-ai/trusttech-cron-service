FROM node:20

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copia todo o projeto
COPY . .

# Gera o Prisma Client
RUN yarn prisma generate

# Compila o TypeScript
RUN yarn build

ENV NODE_ENV=production
EXPOSE 3000

COPY .env .env

CMD ["yarn", "start"]