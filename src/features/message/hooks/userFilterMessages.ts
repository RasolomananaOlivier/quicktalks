import { useEffect, useState } from "react";
import { useAppSelector } from "../../../hooks/redux";
import { messagesSelector } from "../../../redux/selectors/messagesSelector";
import { getMessageById } from "../../../services/getMessageById";
import { IMessage } from "../../../types";

export const useFilterMessage = (userId: string) => {
  const [localMessage, setLocalMessage] = useState<IMessage>({
    _id: "",
    authorizedUser: [],
    isRead: false,
    messages: [],
  });

  const messages = useAppSelector(messagesSelector);
  const message = messages.filter((message) =>
    message.authorizedUser.some((id) => userId === id)
  )[0];

  useEffect(() => {
    async function getMessage() {
      const msg = await getMessageById(message._id);
      setLocalMessage(msg);
    }
    getMessage();
  }, []);

  return localMessage;
};
