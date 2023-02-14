import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { INotification } from "../../types";

const initialState: INotification[] = [];

export const NotificationSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    setNotificationsState: (state, action: PayloadAction<INotification[]>) => {
      return [...action.payload];
    },
  },
});

export const { setNotificationsState } = NotificationSlice.actions;

export default NotificationSlice.reducer;
