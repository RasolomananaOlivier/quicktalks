import { Socket } from "socket.io-client";
import { Dispatch } from "../../hooks/redux";
import { setCurrentMessage } from "../../redux/reducers/currentMessageSlice";
import { ICurrentMessage, IMessagePayload } from "../../types";
import { setMessagesUpdated } from "../../redux/reducers/messagesUpdatedSlice";

const handleUpdate = (
  message: ICurrentMessage,
  dispatch: Dispatch,
  currentMessageId: string
) => {
  const upcommingId = message._id;

  if (currentMessageId === upcommingId) {
    dispatch(setCurrentMessage(message));
  }

  /**
   * Update the messagesUpadated state to true
   * so that we can fetch the messages from the server
   */
  dispatch(setMessagesUpdated(true));
};

const emit = (socket: Socket, messagePayload: IMessagePayload) => {
  socket.emit("message:push", messagePayload);
};

const MessageEvents = {
  handleUpdate,
  emit,
};

export default MessageEvents;
