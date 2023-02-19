import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ICurrentMessage } from "../../types";

const initialState: ICurrentMessage = {
  _id: "",
  authorizedUser: [],
  messages: [],
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
  },
});

export const { setCurrentMessage } = currentMessageSlice.actions;

export default currentMessageSlice.reducer;
