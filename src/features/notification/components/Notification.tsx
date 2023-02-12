import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  ListItemButton,
} from "@mui/material";
import React from "react";

interface NotificationProps {}

const Notification: React.FC<NotificationProps> = ({}) => {
  return (
    <ListItem
      sx={{
        display: "flex",
        p: 1.5,
        borderRadius: 3,
        boxShadow: "0 0 8px rgba(0, 0, 0, 0.2)",
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
            Username has accepted you invitation to connect.
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
