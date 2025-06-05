# Trusttech Cron Service

Este projeto é um serviço Node.js desenvolvido em TypeScript para execução de tarefas agendadas (cron jobs) de forma automatizada e escalável. Ele utiliza Express para expor endpoints HTTP, Prisma como ORM para integração com banco de dados PostgreSQL, e Docker para facilitar o deploy e o ambiente de desenvolvimento.

## Tecnologias Utilizadas

- **Node.js & TypeScript**: Base do projeto, garantindo tipagem estática e robustez.
- **Express**: Framework para rotas HTTP e health checks.
- **Prisma**: ORM moderno para integração com PostgreSQL.
- **PostgreSQL**: Banco de dados relacional utilizado pelo serviço.
- **node-cron**: Agendamento de tarefas recorrentes.
- **Axios**: Cliente HTTP para integrações externas.
- **ESLint**: Padronização e qualidade do código.
- **Docker**: Containerização para desenvolvimento e produção.
- **Docker Compose**: Orquestração de múltiplos serviços (app e banco de dados).

## Estrutura do Projeto

```
trusttech-cron-service
├── src
│   ├── index.ts              # Ponto de entrada da aplicação
│   ├── jobs/                 # Definições dos cron jobs
│   ├── controllers/          # Controllers das rotas HTTP
│   ├── routes/               # Definições de rotas
│   ├── service/              # Serviços auxiliares (ex: HttpClient)
│   └── types/                # Tipos TypeScript
├── prisma/                   # Migrations e schema do banco
├── package.json              # Configuração NPM
├── tsconfig.json             # Configuração TypeScript
├── Dockerfile                # Build para produção
├── Dockerfile.dev            # Build para desenvolvimento
├── docker-compose.yml        # Orquestração dos containers
└── README.md                 # Documentação do projeto
```

## Instalação

Clone o repositório e instale as dependências:

```bash
git clone <repository-url>
cd trusttech-cron-service
yarn install
```

## Uso em Desenvolvimento

Para rodar localmente com Docker Compose (incluindo banco de dados PostgreSQL):

```bash
cp .env.example .env
docker-compose -f docker-compose.dev.yml up --build
```

A aplicação estará disponível em `http://localhost:3000`.

## Scripts Úteis

- `yarn dev`: Executa o serviço em modo desenvolvimento (ts-node).
- `yarn build`: Compila o projeto para a pasta `dist`.
- `yarn start`: Executa o serviço compilado.
- `yarn lint`: Roda o ESLint para análise de código.

## Contribuição

Contribuições são bem-vindas! Abra uma issue ou envie um pull request com sugestões e melhorias.

## Licença

Este projeto está licenciado sob a licença ISC.