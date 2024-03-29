import { endpoint } from "../../data/endpoints";
import { Client } from "../../lib/Client";
import { IMessage, IMessageItem } from "../../types";

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

const getOneByIdAndByMediaType = async (
  messageId: string,
  userId: string,
  type: "text" | "media" | "file"
) => {
  const res = await Client.get<{ message: IMessage }>(
    endpoint.MESSAGE_BY_TYPE.replace(":messageId", messageId)
      .replace(":userId", userId)
      .replace(":type", type)
  );

  return res.data;
};

const getLastMessage = async (messageId: string) => {
  const res = await Client.get<IMessageItem>(
    endpoint.message.LAST_IMAGE(messageId)
  );

  return res.data;
};

const Message = {
  getAll,
  getOneById,
  getLastMessage,
  getOneByIdAndByMediaType,
};

export default Message;
