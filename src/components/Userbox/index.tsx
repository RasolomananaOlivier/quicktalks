import { Divider, ListItemButton, SxProps, Theme } from "@mui/material";
import { useNavigate } from "react-router-dom";

import UserboxAvatar from "./UserboxAvatar";
import UserboxDetails from "./UserboxDetails";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { useFilterMessage } from "../../features/message/hooks/userFilterMessages";
import { setCurrentFriend } from "../../redux/reducers/currentFriendSlice";
import { IUser } from "../../types";
import { setCurrentMessage } from "../../redux/reducers/currentMessageSlice";
import { userSelector } from "../../redux/selectors/userSelector";
import { currentMessageSelector } from "../../redux/selectors/currentMessageSelector";
import { useMobileSize } from "../../hooks/useMobileSize";
import { setMessagesUpdated } from "../../redux/reducers/messagesUpdatedSlice";

interface IUserBoxProps {
  user: IUser;
}

export default function Userbox({ user }: IUserBoxProps) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isMobileSize = useMobileSize();
  const { message, totalMessages, lastMessageItem } = useFilterMessage(
    user._id!
  );
  const currentMessage = useAppSelector(currentMessageSelector);
  const currentUser = useAppSelector(userSelector);

  const isRead = message.readBy.some((id) => id === currentUser._id);

  const isCurrentlySelected = currentMessage.authorizedUser.some(
    (id) => id === currentUser._id
  );

  const listItemButtonStyle: SxProps<Theme> = {
    borderRadius: 3,
    mb: 1,
    bgcolor: !isMobileSize && isCurrentlySelected ? "#f0f0f0" : null,
    display: "flex",
    alignItems: "start",
  };

  const fullname = `${user.firstname} ${user.lastname}`;

  const handleClick = () => {
    dispatch(setCurrentFriend(user));

    if (message._id !== "") {
      dispatch(setCurrentMessage({ ...message, totalMessages }));
      dispatch(setMessagesUpdated(true));
      navigate(`/home/messages/${message._id}`);
    }
  };

  return (
    <>
      <ListItemButton sx={listItemButtonStyle} onClick={handleClick}>
        <UserboxAvatar username={user.firstname} avatarUrl={user.avatarUrl} />
        <UserboxDetails
          read={isRead}
          fullname={fullname}
          lastMessageItem={lastMessageItem}
        />
      </ListItemButton>
      <Divider variant="inset" />
    </>
  );
}
