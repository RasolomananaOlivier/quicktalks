import { ArrowBackIos, Menu } from "@mui/icons-material";
import { Avatar, Box, Divider, IconButton, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ChatRoomContext } from ".";
import { useAppSelector } from "../../../../hooks/redux";

import { useMobileSize } from "../../../../hooks/useMobileSize";
import { currentFriendSelector } from "../../../../redux/selectors/currentFriendSelector";
import { ChatRootLeftSideContext } from "../../context/chatRoomRightSideContext.tsx";
import { useCurrentFriend } from "../../hooks/useCurrentFriend";

interface ChatRoomHeaderProps {}

const Header: React.FC<ChatRoomHeaderProps> = () => {
  const { headerHeight } = useContext(ChatRoomContext);
  if (!headerHeight) {
    throw new Error("ChatRoomContext required");
  }

  const isMobileScreen = useMobileSize();
  const params = useParams();
  const navigate = useNavigate();

  const currentFriend = useCurrentFriend();

  const chatRoomLeftSideContext = useContext(ChatRootLeftSideContext);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mx: 1,
          mt: 0.5,
          p: 0.5,
          height: `${headerHeight}px`,
        }}
      >
        <Box
          sx={{
            display: "flex",
          }}
        >
          {isMobileScreen && (
            <IconButton onClick={() => navigate("/home/messages")}>
              <ArrowBackIos />
            </IconButton>
          )}
          {/* @ts-ignore */}
          <Avatar src={currentFriend.avatarUrl} slt="sdgd" />
          <Box sx={{ ml: 2 }}>
            <Typography>{`${currentFriend.firstname} ${currentFriend.lastname}`}</Typography>
            <Typography sx={{ fontSize: 12, color: "gray" }}>Actif</Typography>
          </Box>
        </Box>
        <div
          className="menu-icon-container"
          onClick={() =>
            // @ts-ignore
            chatRoomLeftSideContext.setShow(!chatRoomLeftSideContext.show)
          }
        >
          <Menu />
        </div>
      </Box>

      <Divider
        sx={{
          width: "93%",
          position: "relative",
          left: 21,
        }}
      />
    </>
  );
};

export default Header;
