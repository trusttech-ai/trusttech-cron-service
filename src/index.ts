import express from "express";
import cron from "node-cron";
import { PrismaClient } from "@prisma/client";

import healthRoutes from "./routes/health.routes";

import { HttpClient } from "./service/httpClient";

import { RewindMessagesJob } from "./jobs/rewindMessagesJob";
import { InstancesHealthyJob } from "./jobs/InstancesHealthyJob";
import { GoodMoringCeoJob } from "./jobs/goodMordingCeo";

const app = express();
const prisma = new PrismaClient();
const evolutionApi = new HttpClient("https://evo.trusttech.space");

(async () => {
  try {
    await prisma.$connect();
    console.log("✅ Successfully connected to the database.");
  } catch (error) {
    console.error("❌ Failed to connect to the database:", error);
    process.exit(1);
  }

  const rewindMessagesJob = new RewindMessagesJob(prisma, evolutionApi);
  const instancesHealthyJob = new InstancesHealthyJob();
  const goodMoringCeoJob = new GoodMoringCeoJob();

  cron.schedule("*/30 * * * *", () => instancesHealthyJob.execute(), {
    timezone: "America/Sao_Paulo",
  });

  cron.schedule("0 9 * * 1-5", () => rewindMessagesJob.execute(), {
    timezone: "America/Sao_Paulo",
  });

  cron.schedule("0 8 * * *", () => goodMoringCeoJob.execute(), {
    timezone: "America/Sao_Paulo",
  });

  app.use(healthRoutes);
  app.listen(3000, () => console.log("✅ CRON Service Initialized."));
})();
