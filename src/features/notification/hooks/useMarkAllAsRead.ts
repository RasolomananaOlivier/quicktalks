import { useAppSelector, useAppDispatch } from "../../../hooks/redux";
import { setNotificationsState } from "../../../redux/reducers/notificationSlice";
import { userSelector } from "../../../redux/selectors/userSelector";
import Notification from "../../../services/api/Notification";

/**
 * Return a handler function.
 * Use it with onClick event of `markAllAsRead` button
 * @returns handleClick function
 */
export const useMarkAllAsRead = () => {
  const user = useAppSelector(userSelector);
  const dispatch = useAppDispatch();

  return async () => {
    const notifications = await Notification.markAllAsRead(user._id!);
    dispatch(setNotificationsState(notifications));
  };
};
