import { useEffect, useState } from "react";
import { useAppSelector } from "../../../hooks/redux";
import { messagesSelector } from "../../../redux/selectors/messagesSelector";
import { userSelector } from "../../../redux/selectors/userSelector";
import Message from "../../../services/api/Message";
import { IMessage } from "../../../types";

export const useFilterMessage = (userId: string) => {
  const [localMessage, setLocalMessage] = useState<IMessage>({
    _id: "",
    authorizedUser: [],
    messages: [],
    readBy: [],
  });
  const [totalMessages, settotalMessages] = useState(0);

  const messages = useAppSelector(messagesSelector);
  const currentUser = useAppSelector(userSelector);

  const message = messages.filter((message) =>
    message.authorizedUser.some((id) => userId === id)
  )[0];

  async function getMessage() {
    const result = await Message.getOneById(message._id, currentUser._id!);
    setLocalMessage(result.message);
    settotalMessages(result.totalMessages);
  }

  useEffect(() => {
    getMessage();
  }, []);

  return { message: localMessage, totalMessages };
};
