import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userSlice";
import messageReducer from "./reducers/messageSlice";
import friendReducer from "./reducers/friendsSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    messages: messageReducer,
    friends: friendReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
