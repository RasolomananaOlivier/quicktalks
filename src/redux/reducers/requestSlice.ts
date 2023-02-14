import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IRequest } from "../../types";

const initialState: IRequest[] = [];

export const requestSlice = createSlice({
  name: "requests",
  initialState,
  reducers: {
    setRequestState: (state, action: PayloadAction<IRequest[]>) => {
      return [...action.payload];
    },
  },
});

export const { setRequestState } = requestSlice.actions;

export default requestSlice.reducer;
