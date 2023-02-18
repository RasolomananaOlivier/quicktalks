import React, { PropsWithChildren, useEffect } from "react";
import Stack from "@mui/material/Stack";
import { useMobileSize } from "../../../../hooks/useMobileSize";
import Header from "./Header";
import Body from "./Body";
import { useWindowSize } from "../../hooks/useWindowSize";
import Footer from "./Footer";

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

export const ChatRoomContext = React.createContext({
  headerHeight: 0,
  footerHeight: 0,
  bodyHeight: 0,
});

interface IChatRoom extends PropsWithChildren {}
const ChatRoom = ({ children }: IChatRoom) => {
  const isMobileScreen = useMobileSize();
  const { innerHeight } = useWindowSize();

  const headerHeight = 50,
    footerHeight = 80;
  const bodyHeight = innerHeight - (headerHeight + footerHeight + 20);

  const chatRoomContextValue = {
    headerHeight,
    footerHeight,
    bodyHeight,
  };

  return (
    <ChatRoomContext.Provider value={chatRoomContextValue}>
      <Stack
        sx={{
          width: isMobileScreen ? "100vw" : "100%",
          height: "100vh",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {children}
      </Stack>
    </ChatRoomContext.Provider>
  );
};

export default ChatRoom;
