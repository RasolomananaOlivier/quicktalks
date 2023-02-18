import React from "react";
import ChatRoom from "./ChatRoom";
import Body from "./ChatRoom/Body";
import Footer from "./ChatRoom/Footer";
import Header from "./ChatRoom/Header";

interface ChatRoomSectionProps {}

const ChatRoomSection: React.FC<ChatRoomSectionProps> = () => {
  return (
    <ChatRoom>
      <Header />
      <Body />
      <Footer />
    </ChatRoom>
  );
};

export default ChatRoomSection;
