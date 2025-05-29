/*
  Warnings:

  - You are about to alter the column `user_name` on the `trusttech_rewind_cron` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(25)`.

*/
-- AlterTable
ALTER TABLE "trusttech_rewind_cron" ALTER COLUMN "user_name" SET DATA TYPE VARCHAR(25);
