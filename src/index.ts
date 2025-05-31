import cron from "node-cron";
import { PrismaClient } from "@prisma/client";

import { RewindMessagesJob } from "./jobs/rewindMessagesJob";
import { TablesHealthyJob } from "./jobs/tablesHealthy";

const prisma = new PrismaClient();

const rewindMessagesJob = new RewindMessagesJob(prisma);
const tablesHealthyJob = new TablesHealthyJob();

async function testDatabaseConnection() {
  try {
    await prisma.$connect();
    await prisma.trusttech_rewind_cron.count();
    await prisma.trusttech_messages_log.count();
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    console.error("[Prisma] Failed to connect to the database:", errorMessage);
    process.exit(1);
  }
}

testDatabaseConnection();

// Send service Healthy messagens to owner
cron.schedule("0,30 * * * *", () => {
  tablesHealthyJob.execute();
});

// Send rewind messages to frist users
cron.schedule("0 9 * * 1-5", () => {
  rewindMessagesJob.execute();
});

console.log("CRON Service Initalized.");
