import React, { FC, Suspense } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import ChatRoomSection from "../features/message/components/ChatRoomSection";
import MessagesPage from "../pages/MessagesPage";
import NotificationPage from "../pages/NotificationPage";
import RequestPage from "../pages/RequestPage";
import LayoutWithContext from "./Layout";

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
