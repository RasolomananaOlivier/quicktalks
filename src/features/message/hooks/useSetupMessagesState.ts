import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { setCurrentMessage } from "../../../redux/reducers/currentMessageSlice";
import { setMessages } from "../../../redux/reducers/messageSlice";
import { userSelector } from "../../../redux/selectors/userSelector";
import { getMessageById } from "../../../services/api/getMessageById";
import { getUserMessages } from "../../../services/api/getUserMessages";

export const useSetupMessagesState = () => {
  const user = useAppSelector(userSelector);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const getMessages = async () => {
      const userId = user._id;
      if (userId) {
        // messages items is always empty
        const msg = await getUserMessages(userId);
        const currentMsg = await getMessageById(msg[0]._id, user._id!);

        dispatch(setMessages(msg));

        dispatch(
          setCurrentMessage({
            ...currentMsg.message,
            totalMessages: currentMsg.totalMessages,
          })
        );
      }
    };

    getMessages().catch(console.log);
  }, []);
};
