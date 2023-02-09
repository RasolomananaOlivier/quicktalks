import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IMessage } from "../../types";

const initialState: IMessage[] = [];

export const userSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {},
});

export const {} = userSlice.actions;

export default userSlice.reducer;
