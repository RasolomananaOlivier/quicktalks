import Userbox from "../../../components/Userbox";
import { useAppSelector } from "../../../hooks/redux";
import { friendsSelector } from "../../../redux/selectors/friendsSelector";
import { messagesSelector } from "../../../redux/selectors/messagesSelector";

export default function FriendsList() {
  const friends = useAppSelector(friendsSelector);

  if (friends.length === 0) {
    return <div>No friends</div>;
  }

  return (
    <>
      {friends.map((friend) => (
        <Userbox key={friend._id} user={friend} />
      ))}
    </>
  );
}
