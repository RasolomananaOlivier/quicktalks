import { Paper } from "@mui/material";
import React from "react";
import DefaultPic from "src/Assets/img/message.webp";

interface MessageImageContentProps {
  imageUrl: string;
}

const MessageImageContent: React.FC<MessageImageContentProps> = ({
  imageUrl,
}) => {
  return (
    <Paper
      elevation={0}
      sx={{
        boxShadow: "1px 1px 5px rgba(100,100,100,0.2)",
        maxWidth: 260,
        p: 0,
        m: 0,
      }}
    >
      <img
        width={260}
        height="100%"
        src={"DefaultPic"}
        alt={"itemId"}
        style={{
          borderRadius: "20px",
        }}
      />
    </Paper>
  );
};

export default MessageImageContent;
