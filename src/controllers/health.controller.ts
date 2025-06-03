import { Request, Response } from "express";

export const getHealthStatus = (_req: Request, response: Response) => {
  console.log("Health check request received");

  response.status(200).json({
    status: "online",
    uptime: process.uptime(),
    timestamp: new Date().toLocaleString("pt-BR", {
      timeZone: "America/Sao_Paulo",
    }),
  });
};
