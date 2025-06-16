import { HttpClient } from "../service/httpClient";

export class YasRewindJob {
  private evolutionApi = new HttpClient("https://evo.trusttech.space");

  async execute() {
    const body = {
      number: process.env.YAS_HEALTHY_NUMBER,
      text: `Lembrete: Eu te a emo.`,
    };

    await this.evolutionApi.post("/message/sendText/tt_avivos", body, {
      apiKey: process.env.EVOLUTION_API_TRUSTTECH_WARNINGS_KEY,
    });
  }
}
