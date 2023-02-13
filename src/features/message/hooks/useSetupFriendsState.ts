import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { setFriendsState } from "../../../redux/reducers/friendsSlice";
import { userSelector } from "../../../redux/selectors/userSelector";
import { getUserFriends } from "../../../services/api/getUserFriends";

export const useSetupFriendsState = () => {
  const user = useAppSelector(userSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getFriends = async () => {
      if (user._id) {
        const friends = await getUserFriends(user._id);

        dispatch(setFriendsState(friends));
      }
    };

    getFriends().catch(console.log);
  }, []);
};
