import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IMessage } from "../../types";

const initialState: IMessage = {
  _id: "",
  authorizedUser: [],
  isRead: false,
  messages: [],
};

export const currentMessageSlice = createSlice({
  name: "currentMessage",
  initialState,
  reducers: {
    setCurrentMessage: (state, action: PayloadAction<IMessage>) => {
      return { ...action.payload };
    },
  },
});

export const { setCurrentMessage } = currentMessageSlice.actions;

export default currentMessageSlice.reducer;
