import React, { FC, Suspense } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import ChatRoom from "../features/message/components/ChatRoom";
import MessagesPage from "../pages/MessagesPage";
import { Layout } from "./Layout";

const LoginPage = React.lazy(() => import("../pages/LoginPage"));
const SignupPage = React.lazy(() => import("../pages/SignupPage"));

interface IAppNavigationProps {}

export const AppNavigation: FC<IAppNavigationProps> = (props) => {
  const location = useLocation();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes location={location} key={location.key}>
        <Route path="/" element={<Navigate to="/login" replace={true} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        <Route path="/home" element={<Layout />}>
          <Route
            index // Default page when no nested route is specified
            element={<Navigate to="/home/messages" replace={true} />}
          />
          <Route path="messages" element={<MessagesPage />}>
            <Route index element={<ChatRoom />} />
            {/* <Route path=":messageId" element={<ChatRoom />} /> */}
          </Route>
          {/* <Route path="requests" element={<RequestsPage />} />
          <Route path="notifications" element={<NotificationsPage />} />
          <Route path="settings" element={<SettingPage />} /> */}
        </Route>
      </Routes>
    </Suspense>
  );
};
