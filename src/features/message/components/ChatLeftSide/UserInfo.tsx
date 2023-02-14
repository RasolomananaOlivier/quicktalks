import {
  Call,
  Info,
  VideoCall,
  Videocam,
  VideoCameraBackOutlined,
} from "@mui/icons-material";
import { Avatar, Box, IconButton, Typography } from "@mui/material";
import React from "react";

export default function UserInfo() {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "row", justifyContent: "start" }}
    >
      <Avatar
        src={
          /* friendInfo.avatarFileName !== ""
                ? `${baseURL}/pic/avatar/${friendInfo.avatarFileName}`
                : null */ ""
        }
        alt={
          /*   friendInfo.hasOwnProperty("lastName")
                ? `${friendInfo.lastName} ${friendInfo.firstName}`
                : "NO friend" */ ""
        }
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
          {/* {friendInfo.hasOwnProperty("lastName")
              ? `${friendInfo.lastName} ${friendInfo.firstName}`
              : "NO friend"} */}
          UserName
        </Typography>
        <Typography color="gray">
          {/* {friendInfo.hasOwnProperty("email") ? `${friendInfo.email} ` : null} */}
          User mail
        </Typography>
        <Box display="flex" justifyContent="space-evenly" pt={1}>
          <IconButton sx={{ bgcolor: "#f0f0f0", mr: 1 }}>
            <Videocam fontSize="small" />
          </IconButton>
          <IconButton sx={{ bgcolor: "#f0f0f0", mr: 1 }}>
            <Call fontSize="small" />
          </IconButton>
          <IconButton sx={{ bgcolor: "#f0f0f0", mr: 1 }}>
            <Info fontSize="small" />
          </IconButton>
        </Box>
      </div>
    </Box>
  );
}
