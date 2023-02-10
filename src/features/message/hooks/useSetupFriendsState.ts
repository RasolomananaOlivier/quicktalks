import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { setFriendsState } from "../../../redux/reducers/friendsSlice";
import { userSelector } from "../../../redux/selectors/userSelector";
import { getUserFriends } from "../../../services/getUserFriends";
import { IUser } from "../../../types";

export const useSetupFriendsState = () => {
  const [friends, setFriends] = useState<IUser[]>([]);

  const user = useAppSelector(userSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getFriends = async () => {
      if (user._id) {
        const friends = await getUserFriends(user._id);
        setFriends(friends);
        dispatch(setFriendsState(friends));
      }
    };

    getFriends().catch(console.log);
  }, []);

  return friends;
};
