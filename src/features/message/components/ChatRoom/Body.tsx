import { Box, Stack } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { ChatRoomContext } from ".";
import { useAppSelector } from "../../../../hooks/redux";
import { useMobileSize } from "../../../../hooks/useMobileSize";
import { currentMessageSelector } from "../../../../redux/selectors/currentMessageSelector";
import { useGetMessageById } from "../../hooks/useGetMessageById";
import { useWindowSize } from "../../hooks/useWindowSize";
import ChatRoomMessagesList from "./MessagesList";

const newMessage = {
  access: ["1", "2"],
  _id: "100",
  items: [
    {
      _id: "2",
      auth: "oli2",

      messageType: "media",
      mediaId: "media2",

      content: "loremsdfsdfsdsf",
      timeStamp: "2 jan 2022",
    },
    {
      _id: "3",
      auth: "1",
      messageType: "text",
      content: "First message",
      timeStamp: "2 jan 2022",
    },
    {
      _id: "4",
      auth: "oli2",
      messageType: "text",
      content: "loremsdfsdfsdsf",
      timeStamp: "2 jan 2022",
    },
    {
      _id: "5",
      auth: "oli2",
      messageType: "text",
      content: "loremsdfsdfsdsf",
      timeStamp: "2 jan 2022",
    },
    {
      _id: "6",
      auth: "oli2",
      messageType: "text",
      content: "loremsdfsdfsdsf",
      timeStamp: "2 jan 2022",
    },
    {
      _id: "7",
      auth: "1",
      messageType: "text",
      content: "loremsdfsdfsdsf",
      timeStamp: "2 jan 2022",
    },
    {
      _id: "8",
      auth: "oli2",
      messageType: "text",
      content: "loremsdfsdfsdsf",
      timeStamp: "2 jan 2022",
    },
    {
      _id: "9",
      auth: "1",
      messageType: "text",
      content: "loremsdfsdfsdsf",
      timeStamp: "2 jan 2022",
    },
    {
      _id: "10",
      auth: "1",
      messageType: "text",

      content: "loremsdfsdfsdsf",
      timeStamp: "2 jan 2022",
    },
    {
      _id: "77",
      auth: "1",
      messageType: "text",
      content: "loremsdfsdfsdsf",
      timeStamp: "2 jan 2022",
    },
    {
      _id: "87",
      auth: "oli2",
      messageType: "text",
      content: "loremsdfsdfsdsf",
      timeStamp: "2 jan 2022",
    },
    {
      _id: "97",
      auth: "1",
      messageType: "text",
      content: "loremsdfsdfsdsf",
      timeStamp: "2 jan 2022",
    },
    {
      _id: "170",
      auth: "1",
      messageType: "text",
      content: "loremsdfsdfsdsf",
      timeStamp: "2 jan 2022",
    },
    {
      _id: "171",
      auth: "oli2",
      messageType: "text",
      content: "loremsdfsdfsdsf",
      timeStamp: "2 jan 2022",
    },
    {
      _id: "714",
      auth: "oli2",
      messageType: "media",
      mediaId: "",
      timeStamp: "2 jan 2022",
    },
    {
      _id: "15",
      auth: "oli2",
      messageType: "text",
      content: "Again a some interested thino to show",
      timeStamp: "2 jan 2022",
    },
  ],
};

interface ChatRoomBodyProps {}

const Body: React.FC<ChatRoomBodyProps> = () => {
  const { bodyHeight } = useContext(ChatRoomContext);
  if (!bodyHeight) {
    throw new Error("ChatRoomContext required");
  }

  const containerRef = React.useRef(null);

  const isMobileScreen = useMobileSize();

  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [items, setitems] = useState(data);
  const [page, setPage] = useState(1);

  // FIXME: Give default messageId when there'isnt
  const params = useParams();
  // const { message } = useGetMessageById(params.messageId);

  // TODO: Intergrate fetchMore to the backend
  const fetchMore = () => {
    // dispatch(
    //   loadMessageById({
    //     messageId: params.messageId,
    //     newMessage,
    //   })
    // );
  };

  // test
  const currentMessage = useAppSelector(currentMessageSelector);
  return (
    <InfiniteScroll
      inverse={true}
      style={{
        display: "flex",
        flexDirection: "column",
      }}
      dataLength={currentMessage.messages.length}
      next={() => fetchMore()}
      hasMore={true}
      height={`${bodyHeight}px`}
      loader={<h4>Loading</h4>}
    >
      <div
        style={{
          backgroundColor: "#f2f2f2",
          display: "flex",
          flexDirection: "column",
          paddingBottom: "10px",
        }}
      >
        <ChatRoomMessagesList messageEntity={currentMessage} />
      </div>
    </InfiniteScroll>
  );
};

export default Body;
