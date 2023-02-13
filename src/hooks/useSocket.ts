import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import { baseURL } from "../data/baseUrl";
import { userSelector } from "../redux/selectors/userSelector";
import NotificationEvents from "../services/events/notification";
import RequestEvents from "../services/events/request";
import { useAppDispatch, useAppSelector } from "./redux";

const socketConnect = (userId: string) =>
  io(baseURL, {
    extraHeaders: {
      id: userId,
    },
  });

export const useSocket = () => {
  const user = useAppSelector(userSelector);

  const socket = socketConnect(user._id!);
  const dispatch = useAppDispatch();

  useEffect(() => {
    socket.onAny((...arg) => console.log(arg));

    socket.on("request:listen", (arg) =>
      RequestEvents.handleListen(arg, dispatch)
    );

    socket.on("request:sent", (arg) => RequestEvents.handleSent(arg, dispatch));

    socket.on("user:update", (arg) =>
      RequestEvents.handleUserUpdate(arg, dispatch)
    );

    socket.on("notification:listen", (arg) =>
      NotificationEvents.listen(arg, dispatch)
    );
    return () => {
      socket.off("request:listen");
      socket.off("request:sent");
      socket.off("user:update");
      socket.off("notification:listen");
    };
  }, []);

  return socket;
};
