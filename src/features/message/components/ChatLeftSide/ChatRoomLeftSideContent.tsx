import { ArrowBackIos } from "@mui/icons-material";
import { IconButton, Stack, Divider, Box } from "@mui/material";
import React, { useContext } from "react";
import { useMobileSize } from "../../../../hooks/useMobileSize";
import { ChatRoomRightSideContext } from "../../context/chatRoomRightSideContext";
import SharedFiles from "./SharedFiles";
import SharedMedia from "./SharedMedia";
import UserInfo from "./UserInfo";

interface ChatRoomLeftSideContentProps {}

const ChatRoomLeftSideContent: React.FC<
  ChatRoomLeftSideContentProps
> = ({}) => {
  const isMobileScreen = useMobileSize();
  const chatRoomRightSideContext = useContext(ChatRoomRightSideContext);

  // @ts-ignore
  const handleButtonClick = () => chatRoomRightSideContext.setShow(false);

  return (
    <>
      {isMobileScreen && (
        <Box display="flex">
          <IconButton onClick={handleButtonClick}>
            <ArrowBackIos />
          </IconButton>
        </Box>
      )}
      <Stack
        sx={{
          boxShadow: "0 0 2px rgba(0,0,0,0.3)",
          height: "100%",
          width: { xs: "100vw", lg: "auto" },
        }}
      >
        <Box
          padding={2}
          sx={{
            display: "flex",
            // justifyContent: "center",
            flexDirection: "column",
            // alignItems: "center",
            mt: 1,
          }}
        >
          <UserInfo />
        </Box>

        <Divider />

        <SharedMedia />

        <Divider />
        <SharedFiles />
        <Divider />
      </Stack>
    </>
  );
};

export default ChatRoomLeftSideContent;
