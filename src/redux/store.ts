import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userSlice";
import messageReducer from "./reducers/messageSlice";
import friendReducer from "./reducers/friendsSlice";
import currentFriendReducer from "./reducers/currentFriendSlice";
import currentMessageReducer from "./reducers/currentMessageSlice";
import requestReducer from "./reducers/requestSlice";
import suggestionReducer from "./reducers/suggestionSlice";
import notificationReducer from "./reducers/notificationSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    messages: messageReducer,
    friends: friendReducer,
    currentFriend: currentFriendReducer,
    currentMessage: currentMessageReducer,
    requests: requestReducer,
    suggestions: suggestionReducer,
    notifications: notificationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
