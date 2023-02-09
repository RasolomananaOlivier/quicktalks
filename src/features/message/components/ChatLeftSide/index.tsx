import { Menu } from "@mui/icons-material";
import { Box, Drawer, IconButton } from "@mui/material";
import React, { useContext } from "react";
import { useMobileSize } from "../../../../hooks/useMobileSize";
import { ChatRootLeftSideContext } from "../../context/leftSideContext";
import ChatRoomLeftSideContent from "./ChatRoomLeftSideContent";

interface ChatLeftSideProps {
  width?: number;
}

const ChatLeftSide: React.FC<ChatLeftSideProps> = ({ width }) => {
  const chatRoomLeftSideContext = useContext(ChatRootLeftSideContext);

  const isMobileScreen = useMobileSize();
  const responsiveWidth = isMobileScreen ? "100%" : `${width}px`;

  return (
    <Drawer
      open={chatRoomLeftSideContext.show}
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
