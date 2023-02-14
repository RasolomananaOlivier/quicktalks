import { Client } from "../../lib/Client";
import { INotification } from "../../types";

const getNotifications = async (userId: string) => {
  const res = await Client.get<INotification[]>(`/notifications/${userId}`);

  return res.data;
};

export default getNotifications;
