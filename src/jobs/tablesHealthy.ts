import { HttpClient } from "../service/httpClient";

export class TablesHealthyJob {
  private evolutionApi = new HttpClient("https://evo.trusttech.space");

  async execute() {
    try {
      await this.evolutionApi.get("/instance/fetchInstances", {
        apiKey: process.env.EVOLUTION_API_TRUSTTECH_KEY,
      });

      await this.evolutionApi.get("/instance/fetchInstances", {
        apiKey: process.env.EVOLUTION_API_KUMASUTRA_KEY,
      });
    } catch (error) {
      const err = error as Error;
      console.error(
        "[TablesHealthyJob] Failed to fetch instances:",
        err.message
      );
      return;
    }

    // console.log(text);
  }

  private async fetchIntances(instance: string, apiKey: string) {
    try {
      await this.evolutionApi.get("/instance/fetchInstances", {
        apiKey: process.env.EVOLUTION_API_TRUSTTECH_KEY,
      });
    } catch (error) {
      const err = error as Error;

      console.error(
        `[TablesHealthyJob - ${instance}] Failed to fetch instances:`,
        err.message
      );

      const body = {
        nuumber: "5511951083595",
        text: `⚠️ *${instance}* instance is down!`,
      };

      await this.evolutionApi.post("/sendText/tt_avivos", body, {
        apiKey: process.env.EVOLUTION_API_TRUSTTECH_WARNINGS_KEY,
      });
    }
  }
}
