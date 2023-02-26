import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavigationStateOnMobileContext } from "../components/AppProvider";
import MessagesDesktopView from "../features/message/components/MessageDesktopView";
import MessagesMobileView from "../features/message/components/MessagesMobileView";
import { ChatRoomRightSideContext } from "../features/message/context/chatRoomRightSideContext";
import { useMobileSize } from "../hooks/useMobileSize";

interface MessagesPageProps {}

const MessagesPage: React.FC<MessagesPageProps> = ({}) => {
  const isMobileScreen = useMobileSize();

  const params = useParams();

  const [chatRoomRightSide, setChatRoomRightSide] = useState(false);

  const navigationStateContext = useContext(NavigationStateOnMobileContext);
  useEffect(() => {
    if (params.messageId) {
      // @ts-ignore
      navigationStateContext.setShow(false);
    } else {
      // @ts-ignore
      navigationStateContext.setShow(true);
    }
  }, [navigationStateContext, params]);

  return (
    <ChatRoomRightSideContext.Provider
      // @ts-ignore
      value={{ show: chatRoomRightSide, setShow: setChatRoomRightSide }}
    >
      {!isMobileScreen ? <MessagesDesktopView /> : <MessagesMobileView />}
    </ChatRoomRightSideContext.Provider>
  );
};

export default MessagesPage;
