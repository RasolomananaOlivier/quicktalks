import { Box, Drawer, IconButton } from "@mui/material";
import React, { useContext } from "react";
import { useMobileSize } from "../../../../hooks/useMobileSize";
import { ChatRoomRightSideContext } from "../../context/chatRoomRightSideContext";
import ChatRoomLeftSideContent from "./ChatRoomLeftSideContent";
import { useMessageMedia } from "../../hooks/useMessageMedia";
import { useAppSelector } from "../../../../hooks/redux";
import { userSelector } from "../../../../redux/selectors/userSelector";

interface ChatLeftSideProps {
  width?: number;
}

const ChatLeftSide: React.FC<ChatLeftSideProps> = ({ width }) => {
  const chatRoomRightSideContext = useContext(ChatRoomRightSideContext);

  const isMobileScreen = useMobileSize();
  const responsiveWidth = isMobileScreen ? "100%" : `${width}px`;

  /**
   * Get the current message filtered by media
   */
  const user = useAppSelector(userSelector);
  useMessageMedia(user._id!);

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
