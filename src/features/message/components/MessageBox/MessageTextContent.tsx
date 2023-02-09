import { Box } from "@mui/material";
import { AnimatePresence } from "framer-motion";
import React from "react";


interface MessageTextContentProps {
  content: string;
  isUserMessage: boolean;
}

const MessageTextContent: React.FC<MessageTextContentProps> = ({ content, isUserMessage  }) => {
  return (
    <Box>
      <Box
        sx={{
          minWidth: 60,
          maxWidth: 370,
          backgroundColor: isUserMessage ? " rgb(16, 2, 93)" : "#fff",
          borderRadius: "7px",
          boxShadow: "1px 1px 5px rgba(100,100,100,0.2)",
          p: 2,
          cursor: "pointer",
          fontSize: 14,
          color: isUserMessage ? "white" : "black",
        }}
      >
        {content}
      </Box>
      <AnimatePresence>
      </AnimatePresence>
    </Box>
};

export default MessageTextContent;