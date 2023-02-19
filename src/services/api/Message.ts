import { endpoint } from "../../data/endpoints";
import { Client } from "../../lib/Client";
import { IMessage } from "../../types";

const getAll = async (userId: string) => {
  const res = await Client.get<IMessage[]>(endpoint.MESSAGES(userId));
  return res.data;
};

interface IGetMessageById {
  message: IMessage;
  totalMessages: number;
}
const getOneById = async (messageId: string, userId: string, page = 1) => {
  const res = await Client.get<IGetMessageById>(
    endpoint.MESSAGE(messageId, userId, page)
  );

  return res.data;
};

const Message = { getAll, getOneById };

export default Message;
