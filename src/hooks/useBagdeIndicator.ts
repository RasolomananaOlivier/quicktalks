import { notificationsSelector } from "../redux/selectors/notificationSelector";
import { requestsSelector } from "../redux/selectors/requestsSelector";
import { useAppSelector } from "./redux";

export const useBagdeIndicator = () => {
  const requests = useAppSelector(requestsSelector);

  const notifications = useAppSelector(notificationsSelector);
  const unreadNotification = notifications.some(
    (notification) => notification.isRead === false
  );

  return {
    isRequestsEmpty: requests.length === 0,
    unreadNotification,
  };
};
