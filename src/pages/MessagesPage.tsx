import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavigationStateOnMobileContext } from "../components/AppProvider";
import MessagesDesktopView from "../features/message/components/MessageDesktopView";
import MessagesMobileView from "../features/message/components/MessagesMobileView";
import { ChatRootLeftSideContext } from "../features/message/context/leftSideContext";
import { useMobileSize } from "../hooks/useMobileSize";

interface MessagesPageProps {}

const MessagesPage: React.FC<MessagesPageProps> = ({}) => {
  const isMobileScreen = useMobileSize();

  const params = useParams();

  const [showChatRoomLeftSide, setShowChatRoomLeftSide] = useState(false);

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
    <ChatRootLeftSideContext.Provider
      // @ts-ignore
      value={{ show: showChatRoomLeftSide, setShow: setShowChatRoomLeftSide }}
    >
      {!isMobileScreen ? <MessagesDesktopView /> : <MessagesMobileView />}
    </ChatRootLeftSideContext.Provider>
  );
};

export default MessagesPage;
