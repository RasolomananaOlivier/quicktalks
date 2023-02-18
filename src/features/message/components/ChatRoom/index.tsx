import React, { PropsWithChildren, useEffect } from "react";
import Stack from "@mui/material/Stack";
import { useMobileSize } from "../../../../hooks/useMobileSize";
import { useWindowSize } from "../../hooks/useWindowSize";

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
