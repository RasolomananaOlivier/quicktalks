import React from "react";
import ChatRoom from "./ChatRoom";

interface ChatRoomSectionProps {}

const ChatRoomSection: React.FC<ChatRoomSectionProps> = () => {
  return (
    <ChatRoom>
      <ChatRoom.Header />
      <ChatRoom.Body />
      <ChatRoom.Footer />
    </ChatRoom>
  );
};

export default ChatRoomSection;
