-- CreateTable
CREATE TABLE "trusttech_messages_log" (
    "id" UUID NOT NULL,
    "user_number" VARCHAR(25),
    "user_name" TEXT,
    "user_message" TEXT,
    "bot_response" TEXT,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "trusttech_messages_log_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "trusttech_rewind_cron" (
    "id" UUID NOT NULL,
    "user_number" VARCHAR(25) NOT NULL,
    "active" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "trusttech_rewind_cron_pkey" PRIMARY KEY ("id")
);
