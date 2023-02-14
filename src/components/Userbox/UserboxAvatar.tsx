import { Avatar, Badge, ListItemAvatar, styled } from "@mui/material";
import React from "react";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    width: 10,
    height: 10,
    backgroundColor: "#44b700",
    color: "#44b700",
    borderRadius: "50%",
    boxShadow: `0 0 0 2px rgba(255,255,255,0.2)`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2)",
      opacity: 0,
    },
  },
}));

const StyledBadgeOffline = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    width: 10,
    height: 10,
    backgroundColor: "#B70015",
    color: "#B7001B",
    borderRadius: "50%",
    boxShadow: `0 0 0 2px rgba(255,255,255,0.2)`,
  },
}));

interface UserboxAvatarProps {
  isOnline: boolean;
  avatarUrl: string;
  username: string;
}

const UserboxAvatar: React.FC = () => {
  return (
    <ListItemAvatar>
      {true ? (
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
        >
          <Avatar src={"avatarUrl"} alt={"username"} />
        </StyledBadge>
      ) : (
        <StyledBadgeOffline
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
        >
          <Avatar src={"avatarUrl"} alt={"username"} />
        </StyledBadgeOffline>
      )}
    </ListItemAvatar>
  );
};

export default UserboxAvatar;
