import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { setNotificationsState } from "../../../redux/reducers/notificationSlice";
import { userSelector } from "../../../redux/selectors/userSelector";
import getNotifications from "../../../services/api/getNotifications";

export const useSetupNotificationState = () => {
  const user = useAppSelector(userSelector);
  const dispatch = useAppDispatch();

  const getFriends = async () => {
    if (user._id) {
      const notifications = await getNotifications(user._id);

      dispatch(setNotificationsState(notifications));
    }
  };

  useEffect(() => {
    getFriends().catch(console.log);
  }, []);
};
