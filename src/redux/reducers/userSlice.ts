import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../types";

const initialState: IUser = {
  email: "",
  firstname: "",
  lastname: "",
  password: "",
  avatarUrl: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      return {
        ...action.payload,
      };
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
