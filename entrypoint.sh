#!/bin/sh
set -e

echo "⏳ Esperando banco ficar pronto..."
until nc -z cron-service-app-postgres 5432; do
  sleep 1
done

echo "✅ Banco acessível. Aguardando estabilização..."
sleep 3

echo "🚀 Aplicando migrações..."
yarn prisma migrate deploy

echo "✅ Iniciando aplicação..."
exec yarn start