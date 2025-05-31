import cron from "node-cron";
import express from "express";
import { PrismaClient } from "@prisma/client";

import { RewindMessagesJob } from "./jobs/rewindMessagesJob";
import { TablesHealthyJob } from "./jobs/tablesHealthy";
import { GoodMoringCeoJob } from "./jobs/goodMordingCeo";

import healthRoutes from "./routes/health.routes";

const app = express();
const prisma = new PrismaClient();

const rewindMessagesJob = new RewindMessagesJob(prisma);
const tablesHealthyJob = new TablesHealthyJob();
const goodMoringCeoJob = new GoodMoringCeoJob();

async function testDatabaseConnection() {
  try {
    await prisma.$connect();
    console.log("[Prisma] Successfully connected to the database.");
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    console.error("[Prisma] Failed to connect to the database:", errorMessage);
    process.exit(1);
  }
}

app.use(healthRoutes);
app.listen(3333, () => console.log("CRON Service Initalized."));

testDatabaseConnection();

cron.schedule("*/30 * * * *", () => {
  // Send service Healthy messagens to owner
  tablesHealthyJob.execute();
});

cron.schedule("0 9 * * 1-5", () => {
  // Send rewind messages to frist users
  rewindMessagesJob.execute();
});

cron.schedule("0 8 * * *", () => {
  // Send good morning CEO message to Kumasutra
  goodMoringCeoJob.execute();
});
