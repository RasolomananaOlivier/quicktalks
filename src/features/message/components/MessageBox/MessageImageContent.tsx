import { Paper, Skeleton } from "@mui/material";
import React, { useState } from "react";
import DefaultPic from "src/Assets/img/message.webp";

interface MessageImageContentProps {
  imageUrl: string;
}

const MessageImageContent: React.FC<MessageImageContentProps> = ({
  imageUrl,
}) => {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return <Skeleton variant="rounded" width={350} height={250} />;
  }

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
        src={imageUrl}
        alt={imageUrl}
        style={{
          borderRadius: "20px",
        }}
        onLoad={() => setLoaded(true)}
      />
    </Paper>
  );
};

export default MessageImageContent;
