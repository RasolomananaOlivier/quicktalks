import { Dispatch } from "../../hooks/redux";
import { setNotificationsState } from "../../redux/reducers/notificationSlice";
import { INotification } from "../../types";

const listen = (arg: INotification[], dispatch: Dispatch) => {
  dispatch(setNotificationsState(arg));
};

const NotificationEvents = {
  listen,
};

export default NotificationEvents;
