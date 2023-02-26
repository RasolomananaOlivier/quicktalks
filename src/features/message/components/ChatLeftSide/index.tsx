import { Box, Drawer, IconButton } from "@mui/material";
import React, { useContext } from "react";
import { useMobileSize } from "../../../../hooks/useMobileSize";
import { ChatRoomRightSideContext } from "../../context/chatRoomRightSideContext";
import ChatRoomLeftSideContent from "./ChatRoomLeftSideContent";

interface ChatLeftSideProps {
  width?: number;
}

const ChatLeftSide: React.FC<ChatLeftSideProps> = ({ width }) => {
  const chatRoomRightSideContext = useContext(ChatRoomRightSideContext);

  const isMobileScreen = useMobileSize();
  const responsiveWidth = isMobileScreen ? "100%" : `${width}px`;

  return (
    <Drawer
      open={chatRoomRightSideContext.show}
      anchor="right"
      variant="persistent"
      sx={{
        width: responsiveWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: responsiveWidth,
        },
      }}
    >
      <ChatRoomLeftSideContent />
    </Drawer>
  );
};

export default ChatLeftSide;
