import cron from 'node-cron';
import { PrismaClient } from '@prisma/client'

import { RewindMessagesJob } from './jobs/rewindMessagesJob';

const prisma = new PrismaClient();

const rewindMessagesJob = new RewindMessagesJob(prisma);

async function testDatabaseConnection() {
  try {
    await prisma.$connect();
    console.log('[Prisma] Database connection established successfully.');
  } catch (error) {
    console.error('[Prisma] Failed to connect to the database:', error);
    process.exit(1);
  }
}

testDatabaseConnection();

cron.schedule('0 9 * * 1-5', () => {
    rewindMessagesJob.execute()
    console.log('[Rewind] Messages Job executed at 9 AM on weekdays.');
});

console.log('CRON Service Initalized.');