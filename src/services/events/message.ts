import { Socket } from "socket.io-client";
import { Dispatch } from "../../hooks/redux";
import { setCurrentMessage } from "../../redux/reducers/currentMessageSlice";
import { IMessage, IMessagePayload } from "../../types";

const handleUpdate = (
  message: IMessage,
  dispatch: Dispatch,
  currentMessageId: string
) => {
  const upcommingId = message._id;

  if (currentMessageId === upcommingId) {
    dispatch(setCurrentMessage(message));
  }
};

const emit = (socket: Socket, messagePayload: IMessagePayload) => {
  socket.emit("message:push", messagePayload);
};

const MessageEvents = {
  handleUpdate,
  emit,
};

export default MessageEvents;
