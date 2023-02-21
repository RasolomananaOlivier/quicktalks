import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IMessage } from "../../types";

const initialState: IMessage[] = [];

// TODO: Count unread message, setReaders when getting the message
export const userSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    setMessages: (state, action: PayloadAction<IMessage[]>) => {
      return [...action.payload];
    },
  },
});

export const { setMessages } = userSlice.actions;

export default userSlice.reducer;
