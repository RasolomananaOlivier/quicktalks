import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../types";

const initialState: IUser = {
  email: "",
  firstname: "",
  lastname: "",
  password: "",
  _id: "",
  friends: [],
  avatarUrl: "",
};

export const currentFriendSlice = createSlice({
  name: "currentFriend",
  initialState,
  reducers: {
    setCurrentFriend: (state, action: PayloadAction<IUser>) => {
      return { ...action.payload };
    },
  },
});

export const { setCurrentFriend } = currentFriendSlice.actions;

export default currentFriendSlice.reducer;
