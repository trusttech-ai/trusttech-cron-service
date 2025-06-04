import cron from "node-cron";
import express from "express";
import { PrismaClient } from "@prisma/client";

import healthRoutes from "./routes/health.routes";

import { RewindMessagesJob } from "./jobs/rewindMessagesJob";
import { InstancesHealthyJob } from "./jobs/InstancesHealthyJob";
import { GoodMoringCeoJob } from "./jobs/goodMordingCeo";

const app = express();
const prisma = new PrismaClient();

const rewindMessagesJob = new RewindMessagesJob(prisma);
const instancesHealthyJob = new InstancesHealthyJob();
const goodMoringCeoJob = new GoodMoringCeoJob();

(async () => {
  try {
    console.log("✅ Successfully connected to the database.");
    await prisma.$connect();
  } catch (error) {
    console.error("❌ Failed to connect to the database:", error);
  }
})();

cron.schedule(
  "*/30 * * * *",
  () => {
    // Send service Healthy messagens to owner
    instancesHealthyJob.execute();
  },
  {
    timezone: "America/Sao_Paulo",
  }
);

cron.schedule(
  "0 9 * * 1-5",
  () => {
    // Send rewind messages to first users
    rewindMessagesJob.execute();
  },
  {
    timezone: "America/Sao_Paulo",
  }
);

cron.schedule(
  "0 8 * * *",
  () => {
    // Send god morning CEO to kamasutra
    goodMoringCeoJob.execute();
  },
  {
    timezone: "America/Sao_Paulo",
  }
);

app.use(healthRoutes);
app.listen(3000, () => console.log("CRON Service Initialized."));
