import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { messagesSelector } from "../../../redux/selectors/messagesSelector";
import { userSelector } from "../../../redux/selectors/userSelector";
import Message from "../../../services/api/Message";
import { setCurrentMessageMedia } from "../../../redux/reducers/currentMessageSlice";
import { IMessage } from "../../../types";

export const useMessageMedia = (userId: string) => {
  const [localMessage, setLocalMessage] = useState<IMessage>({
    _id: "",
    authorizedUser: [],
    messages: [],
    readBy: [],
  });

  const messages = useAppSelector(messagesSelector);
  const currentUser = useAppSelector(userSelector);

  const dispatch = useAppDispatch();

  const message = messages.filter((message) =>
    message.authorizedUser.some((id) => userId === id)
  )[0];

  async function getMessageMediaType() {
    const result = await Message.getOneByIdAndByMediaType(
      message._id,
      currentUser._id!,
      "media"
    );

    dispatch(setCurrentMessageMedia(result.message));
  }

  useEffect(() => {
    getMessageMediaType();
  }, []);

  return { message: localMessage };
};
