import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { setRequestState } from "../../../redux/reducers/requestSlice";
import { userSelector } from "../../../redux/selectors/userSelector";
import { getRequestsList } from "../../../services/getRequestsList";

export const useSetupNotificationState = () => {
  const user = useAppSelector(userSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getFriends = async () => {
      if (user._id) {
        const requests = await getRequestsList(user._id);

        dispatch(setRequestState(requests.data));
      }
    };

    getFriends().catch(console.log);
  }, []);
};
