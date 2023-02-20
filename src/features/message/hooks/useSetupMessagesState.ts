import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { setCurrentMessage } from "../../../redux/reducers/currentMessageSlice";
import { setMessages } from "../../../redux/reducers/messageSlice";
import { userSelector } from "../../../redux/selectors/userSelector";
import Message from "../../../services/api/Message";

export const useSetupMessagesState = () => {
  const user = useAppSelector(userSelector);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const getMessages = async () => {
      const userId = user._id;
      if (userId) {
        // messages items is always empty
        const msg = await Message.getAll(userId);
        if (msg.length > 0) {
          const currentMsg = await Message.getOneById(msg[0]._id, user._id!);

          dispatch(setMessages(msg));

          dispatch(
            setCurrentMessage({
              ...currentMsg.message,
              totalMessages: currentMsg.totalMessages,
            })
          );
        }
      }
    };

    getMessages().catch(console.log);
  }, []);
};
