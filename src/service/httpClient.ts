import axios, { AxiosInstance } from "axios";

export class HttpClient {
  private client: AxiosInstance;

  constructor(baseURL: string) {
    this.client = axios.create({
      baseURL,
      timeout: 5000,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  async get<T = any>(url: string, headers?: any): Promise<T> {
    const response = await this.client.get<T>(url, {
      headers,
    });

    return response.data;
  }

  async post<T = any>(url: string, data?: any, headers?: any): Promise<T> {
    const response = await this.client.post<T>(url, data, {
      headers,
    });

    return response.data;
  }
}
