import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { ChatRoomContext } from ".";
import ChatRoomMessagesList from "./MessagesList";
import { Fab, Zoom } from "@mui/material";
import { ExpandMoreOutlined } from "@mui/icons-material";
import useInfiniteScroll from "react-infinite-scroll-hook";
import { useLoadMessages } from "../../hooks/useLoadMessages";

const Body = () => {
  const [showScrollToBottom, setShowScrollToBottom] = useState(false);
  const { bodyHeight } = useContext(ChatRoomContext);
  if (!bodyHeight) {
    throw new Error("ChatRoomContext required");
  }

  const { loading, messages, hasNextPage, error, loadMore } = useLoadMessages();

  const [sentryRef, { rootRef }] = useInfiniteScroll({
    loading,
    hasNextPage,
    onLoadMore: loadMore,
    disabled: !!error,
    rootMargin: "0px 0px 400px 0px",
  });
  const scrollableRootRef = useRef<HTMLDivElement | null>(null);
  const lastScrollDistanceToBottomRef = useRef<number>();

  // We keep the scroll position when new items are added etc.
  useEffect(() => {
    const scrollableRoot = scrollableRootRef.current;
    const lastScrollDistanceToBottom =
      lastScrollDistanceToBottomRef.current ?? 0;

    if (scrollableRoot) {
      scrollableRoot.scrollTop =
        scrollableRoot.scrollHeight - lastScrollDistanceToBottom;
    }
  }, [messages, rootRef]);

  const rootRefSetter = useCallback(
    (node: HTMLDivElement) => {
      rootRef(node);
      scrollableRootRef.current = node;
    },
    [rootRef]
  );

  /**
   * Scroll to bottom when new message is received
   */
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, []);

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

  const handleRootScroll = useCallback(() => {
    const rootNode = scrollableRootRef.current;

    if (rootNode) {
      const scrollDistanceToBottom = rootNode.scrollHeight - rootNode.scrollTop;
      lastScrollDistanceToBottomRef.current = scrollDistanceToBottom;
    }

    if (bottomRef.current) {
      if (isInViewport(bottomRef.current)) {
        setShowScrollToBottom(false);
      } else {
        setShowScrollToBottom(true);
      }
    }
  }, []);

  return (
    <>
      <div
        style={{
          backgroundColor: "#f2f2f2",
          display: "flex",
          flexDirection: "column",
          paddingBottom: "10px",
          position: "relative",
          height: bodyHeight,
          overflowY: "scroll",
        }}
        onScroll={handleRootScroll}
        ref={rootRefSetter}
      >
        {(loading || hasNextPage) && <div ref={sentryRef}>loading</div>}
        <ChatRoomMessagesList messageEntity={messages} />

        <div ref={bottomRef} />
      </div>
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
    </>
  );
};

export default Body;
