import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../types";

const initialState: IUser[] = [];

export const friendsSlice = createSlice({
  name: "friends",
  initialState,
  reducers: {
    setFriendsState: (state, action: PayloadAction<IUser[]>) => {
      return [...action.payload];
    },
  },
});

export const { setFriendsState } = friendsSlice.actions;

export default friendsSlice.reducer;
