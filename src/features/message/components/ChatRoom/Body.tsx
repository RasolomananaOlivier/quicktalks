import { useContext, useEffect, useRef, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { ChatRoomContext } from ".";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import { setCurrentMessage } from "../../../../redux/reducers/currentMessageSlice";
import { currentMessageSelector } from "../../../../redux/selectors/currentMessageSelector";
import { userSelector } from "../../../../redux/selectors/userSelector";
import Message from "../../../../services/api/Message";
import ChatRoomMessagesList from "./MessagesList";
import { motion } from "framer-motion";
import { Badge, Fab, Zoom } from "@mui/material";
import { ExpandMoreOutlined } from "@mui/icons-material";
import EndMessage from "../../../../components/lotties/EndMessage";

const Body = () => {
  const [page, setPage] = useState(2);
  const [showScrollToBottom, setShowScrollToBottom] = useState(false);
  const [currentMessagesLength, setcurrentMessagesLength] = useState(0);

  const { bodyHeight } = useContext(ChatRoomContext);
  if (!bodyHeight) {
    throw new Error("ChatRoomContext required");
  }

  const currentMessage = useAppSelector(currentMessageSelector);

  const user = useAppSelector(userSelector);
  const dispatch = useAppDispatch();

  /**
   * Scroll to bottom when new message is received
   */
  const bottomRef = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Verify if bottomRef is in the viewport
  const isInViewport = (element: HTMLDivElement) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= window.innerHeight &&
      rect.right <= window.innerWidth
    );
  };

  const handleScroll = () => {
    if (bottomRef.current) {
      if (isInViewport(bottomRef.current)) {
        setShowScrollToBottom(false);
      } else {
        setShowScrollToBottom(true);
      }
    }
  };

  const fetchMore = async () => {
    const result = await Message.getOneById(
      currentMessage._id,
      user._id!,
      page
    );
    console.log("result", result.message.messages.length);

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
      hasMore={currentMessage.totalMessages > currentMessage.messages.length}
      height={`${bodyHeight}px`}
      loader={<h4>Loading</h4>}
      onScroll={handleScroll}
      endMessage={<EndMessage />}
    >
      <div
        style={{
          backgroundColor: "#f2f2f2",
          display: "flex",
          flexDirection: "column",
          paddingBottom: "10px",
          position: "relative",
        }}
      >
        <ChatRoomMessagesList messageEntity={currentMessage} />

        <div ref={bottomRef} />
      </div>{" "}
      <Zoom in={showScrollToBottom} timeout={300} unmountOnExit>
        <Fab
          aria-label="scroll to bottom"
          sx={{
            position: "absolute",
            bottom: 120,
            right: 30,
            zIndex: 10,
          }}
          onClick={scrollToBottom}
        >
          <ExpandMoreOutlined />
        </Fab>
      </Zoom>
    </InfiniteScroll>
  );
};

export default Body;
