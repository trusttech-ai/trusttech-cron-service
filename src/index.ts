import cron from 'node-cron';
import { PrismaClient } from '@prisma/client'

import { RewindMessagesJob } from './jobs/rewindMessagesJob';

const prisma = new PrismaClient();

const rewindMessagesJob = new RewindMessagesJob(prisma);

cron.schedule('0 9 * * 1-5', () => {
    rewindMessagesJob.execute()
    console.log('Rewind Messages Job executed at 9 AM on weekdays.');
});

console.log('Service Initalized.');