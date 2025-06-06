import { PrismaClient, trusttech_rewind_cron } from "@prisma/client";

import { HttpClient } from "../service/httpClient";

export class RewindMessagesJob {
  constructor(private prisma: PrismaClient, private evolutionApi: HttpClient) {}

  async execute() {
    const daysMap: Record<string, string> = {
      "1": "Oi, aqui é a Virginia novamente! Só passando para saber o que achou do nosso atendimento automatizado. Fico à disposição para te mostrar como posso ajudar a organizar e agilizar a rotina aí na empresa!",
      "2": "Você sabia que posso agendar compromissos, responder seus clientes em segundos e ainda integrar com ferramentas como WhatsApp, Google Agenda e até CRM? Se quiser, te mostro um exemplo na prática.",
      "3": "Tenho certeza que consigo facilitar bastante o dia a dia da sua empresa. Posso te mostrar como funciono na prática com um exemplo real de uso, se quiser ver!",
      "4": "Se ainda tiver alguma dúvida sobre como funciona ou o que é necessário pra começar, é só me chamar por aqui! Não precisa se preocupar com nada técnico — eu e minha equipe cuidamos de tudo.",
      "5": "Foi um prazer te conhecer! Vou encerrar esse atendimento por enquanto, mas estarei por aqui sempre que quiser retomar a conversa. Obrigada pela atenção e até breve!",
    };

    try {
      const numbersToRewind = await this.prisma.trusttech_rewind_cron.findMany({
        where: {
          active: true,
        },
      });

      console.log(
        "[RewindMessagesJob] Found numbers to rewind:",
        numbersToRewind.length
      );

      if (numbersToRewind.length) {
        for (const item of numbersToRewind as trusttech_rewind_cron[]) {
          const firstDate = new Date(item.created_at);
          const now = new Date();

          const diffTime = now.getTime() - firstDate.getTime();
          const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

          if (diffDays > 0 && diffDays <= 5) {
            const body = {
              number: item.user_number,
              text: daysMap[diffDays],
              linkPreview: false,
            };

            console.log("[body]: ", body);

            await this.evolutionApi.post("/message/sendText/virginia", body, {
              apiKey: process.env.EVOLUTION_API_TRUSTTECH_KEY,
            });

            console.log(
              "[RewindMessagesJob] Executed successfully to number: ",
              item.user_number,
              ", message number: ",
              diffDays
            );
          }

          if (diffDays > 5) {
            await this.prisma.trusttech_rewind_cron.update({
              where: {
                id: item.id,
              },
              data: {
                active: false,
              },
            });

            console.log(
              "[RewindMessagesJob] Executed successfully to remove number: ",
              item.user_number
            );
          }
        }

        return;
      }

      console.log("[RewindMessagesJob] No numbers to rewind");
    } catch (error) {
      console.error("[RewindMessagesJob] Error executing:", error);
    }
  }
}
