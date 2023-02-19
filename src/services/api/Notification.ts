import { endpoint } from "../../data/endpoints";
import { Client } from "../../lib/Client";
import { INotification } from "../../types";

const getAll = async (userId: string) => {
  const res = await Client.get<INotification[]>(endpoint.NOTIFICATIONS(userId));

  return res.data;
};

const Notification = { getAll };

export default Notification;
