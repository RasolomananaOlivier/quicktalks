import { useAppSelector } from "../../../hooks/redux";
import { currentFriendSelector } from "../../../redux/selectors/currentFriendSelector";

export const useCurrentFriend = () => {
  const user = useAppSelector(currentFriendSelector);
  return user;
};
