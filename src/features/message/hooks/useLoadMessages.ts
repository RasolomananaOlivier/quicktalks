import { useState } from "react";
import Message from "../../../services/api/Message";
import { currentMessageSelector } from "../../../redux/selectors/currentMessageSelector";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { userSelector } from "../../../redux/selectors/userSelector";
import { setCurrentMessage } from "../../../redux/reducers/currentMessageSlice";

export const useLoadMessages = () => {
  const [loading, setloading] = useState(false);
  const [page, setPage] = useState(2);
  const [hasNextPage, sethasNextPage] = useState(true);

  const currentMessage = useAppSelector(currentMessageSelector);
  const user = useAppSelector(userSelector);

  const dispatch = useAppDispatch();

  const loadMore = async () => {
    const result = await Message.getOneById(
      currentMessage._id,
      user._id!,
      page
    );

    dispatch(
      setCurrentMessage({
        ...result.message,
        totalMessages: result.totalMessages,
      })
    );

    if (result.totalMessages === currentMessage.messages.length) {
      sethasNextPage(false);
    }

    setPage(page + 1);
  };

  return {
    messages: currentMessage,
    loading,
    hasNextPage,
    error: undefined,
    loadMore,
  };
};
