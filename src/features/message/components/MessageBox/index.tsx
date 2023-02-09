import React, { useState } from "react";
import { Box, Paper, IconButton, Avatar } from "@mui/material";
import { MoreVert } from "@mui/icons-material";
import { AnimatePresence, motion } from "framer-motion";
import MessageImageContent from "./MessageImageContent";

import { IMessageItem } from "../../../../types";
import MessageTextContent from "./MessageTextContent";

interface MessageBoxProps {
  message: IMessageItem;
  isThePreviousMessageSentByTheSameUser: boolean;
}

const MessageBox: React.FC<MessageBoxProps> = ({
  message,
  isThePreviousMessageSentByTheSameUser,
}) => {
  const isUserMessage = message.auth === "1";

  const PartenerAvatar = () => {
    if (!isThePreviousMessageSentByTheSameUser) {
      return (
        <Box sx={{ display: isUserMessage ? "none" : "block" }}>
          <Avatar
            src={""}
            alt="you"
            sx={{
              mx: 2,
              alignSelf: "flex-end",
            }}
          />
        </Box>
      );
    }
    return null;
  };

  return (
    <Box
      sx={{
        width: "100%",
        mt: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: isUserMessage ? "flex-end" : "flex-start",
          alignItems: "start",
          mr: 1.9,
          ml: isThePreviousMessageSentByTheSameUser ? 9 : 0,
        }}
      >
        <PartenerAvatar />

        {message.type === "text" ? (
          <MessageTextContent
            content={message.content}
            isUserMessage={isUserMessage}
          />
        ) : (
          <MessageImageContent imageUrl={message.imageUrl!} />
        )}
      </Box>
    </Box>
  );
};

export default MessageBox;
