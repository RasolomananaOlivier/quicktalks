import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IMessage } from "../../types";

const initialState: IMessage[] = [
  {
    authorizedUser: ["1", "2"],
    _id: "1",
    messages: [
      {
        _id: "1",
        auth: "1",
        type: "text",
        authorizedUser: ["1", "2"],
        content: "hello",
        timeStamp: new Date(),
      },
      {
        _id: "1",
        auth: "1",
        type: "text",
        authorizedUser: ["1", "2"],
        content: "hello",
        timeStamp: new Date(),
      },

      {
        _id: "1",
        auth: "2",
        type: "image",
        authorizedUser: ["1", "2"],
        timeStamp: new Date(),
        imageUrl: "",
      },

      {
        _id: "1",
        auth: "1",
        type: "text",
        authorizedUser: ["1", "2"],
        content: "hello",
        timeStamp: new Date(),
      },
    ],
    isRead: false,
  },
];

export const userSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {},
});

export const {} = userSlice.actions;

export default userSlice.reducer;
