import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ICurrentMessage, IMessage } from "../../types";

const initialState: ICurrentMessage = {
  _id: "",
  authorizedUser: [],
  messages: [],
  sharedMedia: [],
  readBy: [],
  totalMessages: 0,
};

export const currentMessageSlice = createSlice({
  name: "currentMessage",
  initialState,
  reducers: {
    setCurrentMessage: (state, action: PayloadAction<ICurrentMessage>) => {
      return { ...action.payload };
    },

    /**
     * Needs the entire messages without pagination
     */
    setCurrentMessageMedia: (state, action: PayloadAction<IMessage>) => {
      const sharedMedia = action.payload.messages.filter(
        (message) => message.type === "image" || message.type === "video"
      );

      return { ...state, sharedMedia };
    },
  },
});

export const { setCurrentMessage, setCurrentMessageMedia } =
  currentMessageSlice.actions;

export default currentMessageSlice.reducer;
