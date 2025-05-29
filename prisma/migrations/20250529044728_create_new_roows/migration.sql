-- AlterTable
ALTER TABLE "trusttech_messages_log" ADD COLUMN     "host_name" VARCHAR(25),
ADD COLUMN     "host_number" VARCHAR(25);

-- AlterTable
ALTER TABLE "trusttech_rewind_cron" ADD COLUMN     "host_name" VARCHAR(25),
ADD COLUMN     "host_number" VARCHAR(25),
ADD COLUMN     "user_name" TEXT;
