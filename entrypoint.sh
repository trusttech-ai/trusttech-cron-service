#!/bin/bash

echo "🔄 Waiting for the database to be ready..."

# Aguarda o banco responder
until yarn prisma db push; do
  >&2 echo "🚫 Database not available yet. Retrying..."
  sleep 3
done

echo "✅ Database ready and migrated! Starting application..."

# Inicia o app
yarn start