import { AxiosClient } from "@/config/services";
import { AxiosRequestConfig } from "axios";

export async function get<T>(
  url: string,
  config?: AxiosRequestConfig<any> | undefined
): Promise<T | null> {
  return AxiosClient.get<T>(url, config).then((r) => r.data);
}

export const post = AxiosClient.post;
