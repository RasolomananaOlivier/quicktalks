import { Client } from "../../lib/Client";
import { IMessage } from "../../types";

export const getUserMessages = async (userId: string) => {
  const res = await Client.get<IMessage[]>("/messages?userId=" + userId);

  return res.data;
};
