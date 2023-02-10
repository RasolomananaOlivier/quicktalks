import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { setMessages } from "../../../redux/reducers/messageSlice";
import { userSelector } from "../../../redux/selectors/userSelector";
import { getUserMessages } from "../../../services/getUserMessages";
import { IMessage } from "../../../types";

export const useSetupMessagesState = () => {
  const [messages, setMessagesAction] = useState<IMessage[]>([]);

  const user = useAppSelector(userSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getMessages = async () => {
      const userId = user._id;
      if (userId) {
        const msg = await getUserMessages(userId);

        setMessagesAction(msg);
        dispatch(setMessages(msg));
      }
    };

    getMessages().catch(console.log);
  }, []);

  return messages;
};
