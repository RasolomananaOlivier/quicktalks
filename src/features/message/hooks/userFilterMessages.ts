import { useAppSelector } from "../../../hooks/redux";
import { messagesSelector } from "../../../redux/selectors/messagesSelector";

export const useFilterMessage = (userId: string) => {
  const messages = useAppSelector(messagesSelector);
  const message = messages.filter((message) =>
    message.authorizedUser.some((id) => userId === id)
  )[0];

  return message;
};
