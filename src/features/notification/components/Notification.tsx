import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  ListItemButton,
} from "@mui/material";
import React from "react";
import { INotification } from "../../../types";
import * as NotificationApi from "../../../services/api/Notification";
import { useAppDispatch } from "../../../hooks/redux";
import { setNotificationsState } from "../../../redux/reducers/notificationSlice";

interface NotificationProps {
  notification: INotification;
}

const Notification: React.FC<NotificationProps> = ({ notification }) => {
  const dispatch = useAppDispatch();
  const handleClick = async () => {
    const notifications = await NotificationApi.default.markAsRead(
      notification._id
    );
    dispatch(setNotificationsState(notifications));
  };
  return (
    <ListItem
      onClick={handleClick}
      sx={{
        display: "flex",
        p: 2,
        borderRadius: 3,
        border: "1px solid #3f3f3f",
        mb: 2,
        bgcolor: notification.isRead ? "white" : "#f0f0f0",
      }}
    >
      <ListItemAvatar>
        <Avatar src={""} alt={"name"} />
      </ListItemAvatar>
      <ListItemText
        sx={{ flexGrow: 1 }}
        primary={
          <Typography
            sx={{ display: "block" }}
            component="span"
            variant="body1"
            color="black"
          >
            {notification.message}
          </Typography>
        }
      />
      <ListItemButton sx={{ display: "flex", justifyContent: "center" }}>
        <Typography>Remove</Typography>
      </ListItemButton>
    </ListItem>
  );
};

export default Notification;
