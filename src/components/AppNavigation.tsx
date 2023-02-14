import React, { FC, Suspense } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import Loading from "./lotties/Loading";
import LayoutWithContext from "./Layout";

const LoginPage = React.lazy(() => import("../pages/LoginPage"));
const SignupPage = React.lazy(() => import("../pages/SignupPage"));
const ChatRoomSection = React.lazy(
  () => import("../features/message/components/ChatRoomSection")
);
const MessagesPage = React.lazy(() => import("../pages/MessagesPage"));
const NotificationPage = React.lazy(() => import("../pages/NotificationPage"));
const RequestPage = React.lazy(() => import("../pages/RequestPage"));

interface IAppNavigationProps {}

export const AppNavigation: FC<IAppNavigationProps> = (props) => {
  const location = useLocation();

  return (
    <Suspense fallback={<Loading />}>
      <Routes location={location} key={location.key}>
        <Route path="/" element={<Navigate to="/login" replace={true} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        <Route path="/home" element={<LayoutWithContext />}>
          <Route
            index // Default page when no nested route is specified
            element={<Navigate to="/home/messages" replace={true} />}
          />
          <Route path="messages" element={<MessagesPage />}>
            <Route index element={<ChatRoomSection />} />
            <Route path=":messageId" element={<ChatRoomSection />} />
          </Route>
          <Route path="requests" element={<RequestPage />} />
          <Route path="notifications" element={<NotificationPage />} />

          {/* <Route path="settings" element={<SettingPage />} /> */}
        </Route>
      </Routes>
    </Suspense>
  );
};
