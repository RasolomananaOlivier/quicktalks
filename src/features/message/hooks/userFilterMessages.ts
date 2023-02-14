import { useEffect, useState } from "react";
import { useAppSelector } from "../../../hooks/redux";
import { messagesSelector } from "../../../redux/selectors/messagesSelector";
import { userSelector } from "../../../redux/selectors/userSelector";
import { getMessageById } from "../../../services/api/getMessageById";
import { IMessage } from "../../../types";

export const useFilterMessage = (userId: string) => {
  const [localMessage, setLocalMessage] = useState<IMessage>({
    _id: "",
    authorizedUser: [],
    messages: [],
    readBy: [],
  });

  const messages = useAppSelector(messagesSelector);
  const currentUser = useAppSelector(userSelector);

  const message = messages.filter((message) =>
    message.authorizedUser.some((id) => userId === id)
  )[0];

  async function getMessage() {
    const msg = await getMessageById(message._id, currentUser._id!);
    setLocalMessage(msg);
  }

  useEffect(() => {
    getMessage();
  }, []);

  return localMessage;
};
