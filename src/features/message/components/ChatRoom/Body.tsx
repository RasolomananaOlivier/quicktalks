import { Box, Stack } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { ChatRoomContext } from ".";
import EndMessage from "../../../../components/lotties/EndMessage";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import { setCurrentMessage } from "../../../../redux/reducers/currentMessageSlice";
import { currentMessageSelector } from "../../../../redux/selectors/currentMessageSelector";
import { userSelector } from "../../../../redux/selectors/userSelector";
import { getMessageById } from "../../../../services/api/getMessageById";
import ChatRoomMessagesList from "./MessagesList";

const Body = () => {
  const [page, setPage] = useState(2);

  const { bodyHeight } = useContext(ChatRoomContext);
  if (!bodyHeight) {
    throw new Error("ChatRoomContext required");
  }

  const currentMessage = useAppSelector(currentMessageSelector);
  const user = useAppSelector(userSelector);
  const dispatch = useAppDispatch();

  const fetchMore = async () => {
    const result = await getMessageById(currentMessage._id, user._id!, page);

    dispatch(
      setCurrentMessage({
        ...result.message,
        totalMessages: result.totalMessages,
      })
    );

    setPage(page + 1);
  };

  return (
    <InfiniteScroll
      inverse={true}
      style={{
        display: "flex",
        flexDirection: "column-reverse",
        overflowX: "hidden",
      }}
      dataLength={currentMessage.totalMessages}
      next={() => fetchMore()}
      hasMore={currentMessage.totalMessages !== currentMessage.messages.length}
      height={`${bodyHeight}px`}
      loader={<h4>Loading</h4>}
      endMessage={<EndMessage />}
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
