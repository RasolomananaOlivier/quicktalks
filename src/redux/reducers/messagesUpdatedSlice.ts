import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = true;

export const messagesUpdated = createSlice({
  name: "messagesUpdated",
  initialState,
  reducers: {
    setMessagesUpdated: (state, action: PayloadAction<boolean>) => {
      return action.payload;
    },
  },
});

export const { setMessagesUpdated } = messagesUpdated.actions;

export default messagesUpdated.reducer;
