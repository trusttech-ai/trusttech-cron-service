import cron from "node-cron";
import express from "express";
import { PrismaClient } from "@prisma/client";

import healthRoutes from "./routes/health.routes";

import { RewindMessagesJob } from "./jobs/rewindMessagesJob";
import { TablesHealthyJob } from "./jobs/tablesHealthy";
import { GoodMoringCeoJob } from "./jobs/goodMordingCeo";

const app = express();
const prisma = new PrismaClient();

const rewindMessagesJob = new RewindMessagesJob(prisma);
const tablesHealthyJob = new TablesHealthyJob();
const goodMoringCeoJob = new GoodMoringCeoJob();

cron.schedule("*/30 * * * *", () => {
  // Send service Healthy messagens to owner
  tablesHealthyJob.execute();
});

cron.schedule("0 9 * * 1-5", () => {
  // Send rewind messages to first users
  rewindMessagesJob.execute();
});

cron.schedule("0 8 * * *", () => {
  // Send good morning CEO message to Kumasutra
  goodMoringCeoJob.execute();
});

app.use(healthRoutes);
app.listen(3000, "0.0.0.0", () => console.log("CRON Service Initialized."));
