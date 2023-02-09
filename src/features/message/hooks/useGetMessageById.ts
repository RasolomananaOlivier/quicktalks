import { useAppSelector } from "../../../hooks/redux";
import { messagesSelector } from "../../../redux/selectors/messagesSelector";

export const useMessageById = (messageId: string) => {
  const messages = useAppSelector(messagesSelector);

  let result = messages.filter((message) => message._id === messageId)[0];

  return result;
};
