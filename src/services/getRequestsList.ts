import { Client } from "../lib/Client";
import { IRequest } from "../types";

export const getRequestsList = async (userId: string) => {
  const requestResponse = await Client.get<IRequest[]>(`/requests/${userId}`);

  return requestResponse;
};
