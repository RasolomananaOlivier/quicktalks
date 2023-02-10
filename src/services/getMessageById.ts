import { Client } from "../lib/Client";
import { IMessage } from "../types";

export const getMessageById = async (messageId: string) => {
  const res = await Client.get<IMessage>("/messages/" + messageId);

  return res.data;
};
