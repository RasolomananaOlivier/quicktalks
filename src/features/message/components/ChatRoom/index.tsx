/* eslint-disable array-callback-return */
import {
  Box,
  Avatar,
  IconButton,
  Divider,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect } from "react";
import Stack from "@mui/material/Stack";
import { ArrowBackIos, Menu } from "@mui/icons-material";

import { useParams } from "react-router-dom";
import { useMobileSize } from "../../../../hooks/useMobileSize";
import ChatRoomHeader from "./ChatRoomHeader";

const messageFriendVariants = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
  exit: { scale: 0, x: -300, transition: { duration: 0.2 } },
};
const userFriendVariants = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
  exit: { scale: 0, x: 300, opacity: 0, transition: { duration: 0.2 } },
};

export default function ChatRoom() {
  // const showMenu = () => {
  //   handleOpenMessageDetail();
  // };

  /**
   * Get the parent element to make to child slide in it
   */
  const messageEnd = React.useRef(null);
  // const scrollToTheEnd = () => {
  //   messageEnd.current?.scrollIntoView({ behavior: "smooth" });
  // };
  // useEffect(() => {
  //   scrollToTheEnd();
  // }, [MessagesRedux]);

  // Test branch
  const headerHeight = 50;
  const footerHeight = 80;
  const isMobileScreen = useMobileSize();
  return (
    <Stack
      sx={{
        width: isMobileScreen ? "100vw" : "100%",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <ChatRoomHeader height={headerHeight} />
      <Divider
        sx={{
          width: "93%",
          position: "relative",
          left: 21,
        }}
      />
      {/* <ChatRoomBody headerHeight={headerHeight} footerHeight={footerHeight} />
      <ChatRoomFooter height={footerHeight} /> */}
    </Stack>
  );
}
