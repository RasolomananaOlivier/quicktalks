import { Client } from "../../lib/Client";
import { IMessage } from "../../types";

interface IGetMessageById {
  message: IMessage;
  totalMessages: number;
}
export const getMessageById = async (
  messageId: string,
  userId: string,
  page = 1
) => {
  const res = await Client.get<IGetMessageById>(
    `/messages/${messageId}/${userId}?page=${page}`
  );

  return res.data;
};
