import { Box } from "@mui/material";
import React from "react";

import NoMessageIllustration from "../../../../assets/img/no-message.svg";

import { IMessage } from "../../../../types";
import MessageBox from "../MessageBox";

interface ChatRoomMessagesListProps {
  messageEntity: IMessage;
}

const ChatRoomMessagesList: React.FC<ChatRoomMessagesListProps> = ({
  messageEntity,
}) => {
  const isThePreviousMessageSentByTheSameUser = (index: number) => {
    if (index === 0) return false;
    return (
      messageEntity.messages[index - 1].auth ===
      messageEntity.messages[index].auth
    );
  };

  if (messageEntity.messages.length === 0) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <img src={NoMessageIllustration} alt="mp" />
        Start sending you messages.
      </Box>
    );
  } else {
    return (
      <>
        {messageEntity.messages.map((message, index) => (
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
