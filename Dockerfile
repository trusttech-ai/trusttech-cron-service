FROM node:20

RUN apt-get update && apt-get install -y netcat-openbsd

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .

RUN yarn prisma generate
RUN yarn build

ENV NODE_ENV=production
EXPOSE 3000

COPY .env .env
COPY entrypoint.sh .
RUN chmod +x entrypoint.sh

CMD ["./entrypoint.sh"]