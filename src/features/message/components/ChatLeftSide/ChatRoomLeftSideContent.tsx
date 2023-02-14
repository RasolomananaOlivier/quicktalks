import { ArrowBackIos } from "@mui/icons-material";
import { IconButton, Stack, Divider, Box } from "@mui/material";
import React from "react";
import { useMobileSize } from "../../../../hooks/useMobileSize";
import SharedFiles from "./SharedFiles";
import SharedMedia from "./SharedMedia";
import UserInfo from "./UserInfo";

interface ChatRoomLeftSideContentProps {}

const ChatRoomLeftSideContent: React.FC<
  ChatRoomLeftSideContentProps
> = ({}) => {
  const isMobileScreen = useMobileSize();
  return (
    <>
      {isMobileScreen && (
        <Box display="flex">
          <IconButton onClick={() => /* handleCloseMessageDetail() */ {}}>
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
