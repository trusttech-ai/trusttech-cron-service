import { HttpClient } from "../service/httpClient";

export class TablesHealthyJob {
  private evolutionApi = new HttpClient("https://evo.trusttech.space");

  async execute() {
    const body = {
      number: process.env.HEALTHY_NUMBER,
      text: "[trusttech-cron-service] Sercice is running",
    };

    await this.evolutionApi.post("/message/sendText/tt_avivos", body, {
      apiKey: process.env.EVOLUTION_API_TRUSTTECH_TEST_KEY,
    });

    const bodyTwo = {
      number: process.env.SECOND_HEALTHY_NUMBER,
      text: "[trusttech-cron-service] Sercice is running",
    };

    await this.evolutionApi.post("/message/sendText/tt_avivos", bodyTwo, {
      apiKey: process.env.EVOLUTION_API_TRUSTTECH_TEST_KEY,
    });

    console.log("[trusttech-cron-service] Executed successfully.");
  }
}
