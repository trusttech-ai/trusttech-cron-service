export interface JobConfig {
    name: string;
    schedule: string;
    description?: string;
}

export interface JobResult {
    jobName: string;
    success: boolean;
    timestamp: Date;
    error?: string;
}