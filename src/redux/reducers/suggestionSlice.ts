import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IUserServer } from "../../types";

const initialState: IUserServer[] = [];

export const suggestionSlice = createSlice({
  name: "suggestions",
  initialState,
  reducers: {
    setSuggestionsState: (state, action: PayloadAction<IUserServer[]>) => {
      return [...action.payload];
    },
  },
});

export const { setSuggestionsState } = suggestionSlice.actions;

export default suggestionSlice.reducer;
