import { endpoint } from "../../data/endpoints";
import { Client } from "../../lib/Client";
import { INotification } from "../../types";

const getAll = async (userId: string) => {
  const res = await Client.get<INotification[]>(
    endpoint.notification.GET_ALL(userId)
  );

  return res.data;
};

const markAsRead = async (notificationId: string) => {
  const res = await Client.put<INotification[]>(
    endpoint.notification.MARK_AS_READ(notificationId)
  );

  return res.data;
};

const markAllAsRead = async (notificationId: string) => {
  const res = await Client.put<INotification[]>(
    endpoint.notification.MARK_ALL_AS_READ(notificationId)
  );

  return res.data;
};

const Notification = { getAll, markAsRead, markAllAsRead };

export default Notification;
