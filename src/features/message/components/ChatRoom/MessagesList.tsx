import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import { ChatRoomContext } from ".";
import NoMessageIllustration from "../../../../components/lotties/NoMessageIllustration";

import { IMessage } from "../../../../types";
import MessageBox from "../MessageBox";

interface ChatRoomMessagesListProps {
  messageEntity: IMessage;
}

const ChatRoomMessagesList: React.FC<ChatRoomMessagesListProps> = ({
  messageEntity,
}) => {
  const { bodyHeight } = useContext(ChatRoomContext);

  const isThePreviousMessageSentByTheSameUser = (index: number) => {
    if (index === 0) return false;
    return (
      messageEntity.messages[index - 1].auth ===
      messageEntity.messages[index].auth
    );
  };

  if (messageEntity.messages?.length === 0) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: bodyHeight - 10,
        }}
      >
        <NoMessageIllustration />
        <Typography variant="subtitle1">Start sending you messages.</Typography>
      </Box>
    );
  } else {
    return (
      <>
        {messageEntity.messages?.map((message, index) => (
          <MessageBox
            key={message._id}
            message={message}
            isThePreviousMessageSentByTheSameUser={isThePreviousMessageSentByTheSameUser(
              index
            )}
          />
        ))}
      </>
    );
  }
};

export default ChatRoomMessagesList;
