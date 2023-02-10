import { useEffect, useState } from "react";
import { useAppSelector } from "../../../hooks/redux";
import { messagesSelector } from "../../../redux/selectors/messagesSelector";
import { getMessageById } from "../../../services/getMessageById";
import { IMessage } from "../../../types";

export const useGetMessageById = (messageId: string | undefined) => {
  if (messageId === undefined) {
    return { message: [] };
  }

  const [message, setMessage] = useState<IMessage>();
  const messages = useAppSelector(messagesSelector);

  useEffect(() => {
    let result = messages.filter((message) => message._id === messageId)[0];
    async function getMessage() {
      const msg = await getMessageById(result._id);
      setMessage(msg);
    }
    getMessage();
  }, [messageId]);

  return { message };
};
