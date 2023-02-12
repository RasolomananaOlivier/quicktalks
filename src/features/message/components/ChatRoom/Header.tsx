import { ArrowBackIos, Menu } from "@mui/icons-material";
import { Avatar, Box, Divider, IconButton, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ChatRoomContext } from ".";
import { useAppSelector } from "../../../../hooks/redux";

import { useMobileSize } from "../../../../hooks/useMobileSize";
import { currentFriendSelector } from "../../../../redux/selectors/currentFriendSelector";
import { userSelector } from "../../../../redux/selectors/userSelector";
import { getUserById } from "../../../../services/getUserById";
import { IUser, IMessage } from "../../../../types";
import { ChatRootLeftSideContext } from "../../context/leftSideContext";
import { useGetMessageById } from "../../hooks/useGetMessageById";

interface ChatRoomHeaderProps {}

const useFriendFullname = () => {
  const user = useAppSelector(currentFriendSelector);
  return `${user.firstname} ${user.lastname}`;
};

const Header: React.FC<ChatRoomHeaderProps> = () => {
  const { headerHeight } = useContext(ChatRoomContext);
  if (!headerHeight) {
    throw new Error("ChatRoomContext required");
  }

  const isMobileScreen = useMobileSize();
  const params = useParams();
  const navigate = useNavigate();

  const friendFullname = useFriendFullname();

  const chatRoomLeftSideContext = useContext(ChatRootLeftSideContext);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mx: 1,
          mt: 0.5,
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
          <Avatar src={""} slt="sdgd" />
          <Box sx={{ ml: 2 }}>
            <Typography>{friendFullname}</Typography>
            <Typography sx={{ fontSize: 12, color: "gray" }}>Actif</Typography>
          </Box>
        </Box>
        <IconButton
          aria-label="chat option"
          onClick={() =>
            // @ts-ignore
            chatRoomLeftSideContext.setShow(!chatRoomLeftSideContext.show)
          }
        >
          <Menu />
        </IconButton>
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
