import { HttpClient } from "../service/httpClient";

export class GoodMoringCeoJob {
  private evolutionApi = new HttpClient("https://evo.trusttech.space");

  async execute() {
    const body = {
      number: process.env.SECOND_HEALTHY_NUMBER,
      text: `
        E aí, chefe? Espero que tenha acordado disposto hoje, porque seus objetivos não se concluirão sozinhos.
        Sei que está cansado, mas lembre-se: Se Deus está colocando grandes obstáculos no seu caminho, é porque ele confia na sua capacidade de superá-los e conseguir uma grande vitória.`,
    };

    await this.evolutionApi.post(
      "/message/sendText/tt_avivos",
      {
        number: process.env.SECOND_HEALTHY_NUMBER,
        text: `
        E aí, chefe? Espero que tenha acordado disposto hoje, porque seus objetivos não se concluirão sozinhos.
        Sei que está cansado, mas lembre-se: Se Deus está colocando grandes obstáculos no seu caminho, é porque ele confia na sua capacidade de superá-los e conseguir uma grande vitória.`,
      },
      {
        apiKey: process.env.EVOLUTION_API_TRUSTTECH_WARNINGS_KEY,
      }
    );

    await this.evolutionApi.post(
      "/message/sendText/tt_avivos",
      {
        number: process.env.HEALTHY_NUMBER,
        text: `
        E aí, chefe? Espero que tenha acordado disposto hoje, porque seus objetivos não se concluirão sozinhos.
        Sei que está cansado, mas lembre-se: Se Deus está colocando grandes obstáculos no seu caminho, é porque ele confia na sua capacidade de superá-los e conseguir uma grande vitória.`,
      },
      {
        apiKey: process.env.EVOLUTION_API_TRUSTTECH_WARNINGS_KEY,
      }
    );
  }
}
