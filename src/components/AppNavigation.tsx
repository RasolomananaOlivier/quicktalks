import React, { FC, Suspense } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Loading from "./lotties/Loading";

const LayoutWithContext = React.lazy(() => import("./Layout"));
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
    <Routes location={location} key={location.key}>
      <Route path="/" element={<Navigate to="/login" replace={true} />} />
      <Route
        path="/login"
        element={
          <Suspense fallback={<Loading />}>
            <LoginPage />
          </Suspense>
        }
      />
      <Route
        path="/signup"
        element={
          <Suspense fallback={<Loading />}>
            <SignupPage />
          </Suspense>
        }
      />

      <Route
        path="/home"
        element={
          <Suspense fallback={<Loading />}>
            <LayoutWithContext />
          </Suspense>
        }
      >
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
  );
};
