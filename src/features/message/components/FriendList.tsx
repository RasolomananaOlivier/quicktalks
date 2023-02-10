import Userbox from "../../../components/Userbox";
import { useAppSelector } from "../../../hooks/redux";
import { friendsSelector } from "../../../redux/selectors/friendsSelector";

export default function FriendsList() {
  const friends = useAppSelector(friendsSelector);
  return (
    <>
      {friends.map((friend) => {
        if (friend._id) {
          return <Userbox friendId={friend._id} />;
        }
      })}
    </>
  );
}
