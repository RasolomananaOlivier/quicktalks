import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userSlice";
import messageReducer from "./reducers/messageSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    messages: messageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
