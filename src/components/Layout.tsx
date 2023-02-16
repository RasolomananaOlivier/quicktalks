import React, { Suspense, useContext, useEffect, useState } from "react";

import Grid from "@mui/material/Grid";

import { Outlet, useParams } from "react-router-dom";
import { NavigationStateOnMobileContext } from "./AppProvider";
import { useSetupMessagesState } from "../features/message/hooks/useSetupMessagesState";
import { useSetupFriendsState } from "../features/message/hooks/useSetupFriendsState";
import { useSocket } from "../hooks/useSocket";
import { SocketContext } from "../context/socketContext";
import { useSetupNotificationState } from "../features/notification/hooks/useSetupNotificationState";

const SideNavigation = React.lazy(() => import("./navigation/SideNavigation"));
const AppDrawer = React.lazy(() => import("./navigation/AppDrawer"));

function LayoutWithContext() {
  const socket = useSocket();

  return (
    <SocketContext.Provider value={socket}>
      <Layout />
    </SocketContext.Provider>
  );
}

export function Layout() {
  useSetupMessagesState();
  useSetupFriendsState();
  useSetupNotificationState();

  const params = useParams();

  return (
    <Grid container columns={16}>
      {!params.messageId ? <AppDrawer /> : null}

      <Grid item lg={1} sx={{ display: { xs: "none", lg: "flex" } }}>
        <SideNavigation />
      </Grid>

      <Grid item xs={16} lg={15}>
        <Outlet />
      </Grid>
    </Grid>
  );
}
export default LayoutWithContext;
