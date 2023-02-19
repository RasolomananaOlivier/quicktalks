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

interface NotificationProps {
  notification: INotification;
}

const Notification: React.FC<NotificationProps> = ({ notification }) => {
  return (
    <ListItem
      sx={{
        display: "flex",
        p: 2,
        borderRadius: 3,
        border: "1px solid #3f3f3f",
        mb: 2,
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
