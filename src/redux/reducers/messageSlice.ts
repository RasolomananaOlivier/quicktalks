import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IMessage } from "../../types";

const initialState: IMessage[] = [];

export const userSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    setMessages: (state, action: PayloadAction<IMessage[]>) => {
      return [...action.payload];
    },
    setMessageUpdated: (
      state,
      action: PayloadAction<{ messageId: string; updated: boolean }>
    ) => {
      const { messageId, updated } = action.payload;
      const message = state.map((message) => {
        if (message._id === messageId) {
          return {
            ...message,
            updated: updated,
          };
        } else {
          return message;
        }
      });

      return message;
    },
  },
});

export const { setMessages, setMessageUpdated } = userSlice.actions;

export default userSlice.reducer;
