import { Client } from "../../lib/Client";
import { IMessage } from "../../types";

export const getMessageById = async (messageId: string, userId: string) => {
  const res = await Client.get<IMessage>(`/messages/${messageId}/${userId}`);

  return res.data;
};
