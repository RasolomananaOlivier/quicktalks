import {
  Call,
  Info,
  VideoCall,
  Videocam,
  VideoCameraBackOutlined,
} from "@mui/icons-material";
import { Avatar, Box, IconButton, Typography } from "@mui/material";
import React from "react";
import { useCurrentFriend } from "../../hooks/useCurrentFriend";

export default function UserInfo() {
  const currentFriend = useCurrentFriend();
  return (
    <Box
      sx={{ display: "flex", flexDirection: "row", justifyContent: "start" }}
    >
      <Avatar
        src={currentFriend.avatarUrl}
        alt={currentFriend.firstname}
        sx={{
          width: 100,
          height: 100,
          mb: 1,
          mr: 1.5,
        }}
      />
      <div>
        <Typography
          variant="h5"
          sx={
            {
              // textAlign: "center",
            }
          }
        >
          {currentFriend._id
            ? `${currentFriend.firstname} ${currentFriend.lastname}`
            : "Username"}
        </Typography>
        <Typography color="gray">
          {currentFriend._id ? currentFriend.email : "Email Address"}
        </Typography>
        <Box display="flex" justifyContent="start" pt={1}>
          <IconButton sx={{ bgcolor: "#f0f0f0", mr: 2 }}>
            <Videocam fontSize="small" />
          </IconButton>
          <IconButton sx={{ bgcolor: "#f0f0f0", mr: 2 }}>
            <Call fontSize="small" />
          </IconButton>
          <IconButton sx={{ bgcolor: "#f0f0f0", mr: 2 }}>
            <Info fontSize="small" />
          </IconButton>
        </Box>
      </div>
    </Box>
  );
}
