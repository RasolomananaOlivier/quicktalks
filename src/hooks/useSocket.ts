import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import { baseURL } from "../data/baseUrl";
import { userSelector } from "../redux/selectors/userSelector";
import { useAppSelector } from "./redux";

const socketConnect = (userId: string) =>
  io(baseURL, {
    extraHeaders: {
      id: userId,
    },
  });

export const useSocket = () => {
  const user = useAppSelector(userSelector);

  const socket = socketConnect(user._id!);

  useEffect(() => {
    socket.on("request:listen", (arg) => console.log(arg));
    socket.on("request:sent", (arg) => console.log(arg));

    return () => {
      socket.off("request:listen");
      socket.off("request:sent");
    };
  }, []);

  return socket;
};
