import { HttpClient } from "../service/httpClient";

export class TablesHealthyJob {
  private evolutionApi = new HttpClient("https://evo.trusttech.space");

  async execute() {
    await this.fetchIntances(
      "virginia",
      process.env.EVOLUTION_API_TRUSTTECH_KEY
    );
    await this.fetchIntances(
      "tt_avivos",
      process.env.EVOLUTION_API_TRUSTTECH_WARNINGS_KEY
    );

    await this.fetchIntances("lunna", process.env.EVOLUTION_API_LUNNA_KEY);

    console.log("[TablesHealthyJob] All instances checked successfully!");
  }

  private async fetchIntances(instance: string, apiKey?: string) {
    try {
      await this.evolutionApi.get(`/instance/connectionState/${instance}`, {
        apiKey,
      });

      console.log(`[TablesHealthyJob - ${instance}] Connection is healthy!`);
    } catch {
      console.error(
        `[TablesHealthyJob - ${instance}] Failed to fetch instance`
      );

      const body = {
        number: "120363403148338899@g.us",
        text: `[trusttech-cron-service] ⚠️ *${instance}* instance is down!`,
      };

      await this.evolutionApi.post("/message/sendText/tt_avivos", body, {
        apiKey: process.env.EVOLUTION_API_TRUSTTECH_WARNINGS_KEY,
      });
    }
  }
}
