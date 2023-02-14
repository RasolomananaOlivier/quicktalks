import React from "react";
import { Socket } from "socket.io-client";

// @ts-ignore
export const SocketContext = React.createContext<Socket>();
