import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import {
  useNavigate,
  useNavigation,
  useParams,
  useRoutes,
} from "react-router-dom";
import { routes } from "../data/routes";
import { setCurrentFriend } from "../redux/reducers/currentFriendSlice";
import { setCurrentMessage } from "../redux/reducers/currentMessageSlice";
import { setFriendsState } from "../redux/reducers/friendsSlice";
import { setMessages } from "../redux/reducers/messageSlice";
import { setUser } from "../redux/reducers/userSlice";
import { friendsSelector } from "../redux/selectors/friendsSelector";
import { messagesSelector } from "../redux/selectors/messagesSelector";
import Message from "../services/api/Message";
import User from "../services/api/User";
import { useAppDispatch, useAppSelector } from "./redux";

export const useAuthenticate = (isAuthPage = false) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const friendsState = useAppSelector(friendsSelector);
  const messagesState = useAppSelector(messagesSelector);

  async function authenticateUser() {
    try {
      const user = await User.authenticate();

      dispatch(
        setUser({
          ...user,
          email: user.email.address,
        })
      );

      if (friendsState.length === 0) {
        const friends = await User.getFriends(user._id!);

        dispatch(setFriendsState(friends));
        dispatch(setCurrentFriend(friends[0]));
      }

      if (messagesState.length === 0) {
        const msg = await Message.getAll(user._id!);
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

      if (isAuthPage) {
        navigate(routes.HOME);
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 401 || error.response?.status === 400) {
          if (!isAuthPage) {
            navigate(routes.LOGIN);
          }
        }
      }
    }
  }

  useEffect(() => {
    authenticateUser();
  }, []);
};
