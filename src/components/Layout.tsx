import React, { useContext, useEffect, useState } from "react";

import Grid from "@mui/material/Grid";
import { useDispatch, useSelector } from "react-redux";

// import Snackbar from "@mui/material/Snackbar";
// import IconButton from "@mui/material/IconButton";
// import Alert from "@mui/material/Alert";
// import Close from "@mui/icons-material/Close";

import { Outlet } from "react-router-dom";
import { NavigationStateOnMobileContext } from "./AppProvider";
import AppDrawer from "./navigation/AppDrawer";
import SideNavigation from "./navigation/SideNavigation";

function LayoutWithContext() {
  return <Layout />;
}

export function Layout() {
  const navigationOnMobileContext = useContext(NavigationStateOnMobileContext);
  return (
    // <SocketContext.Provider value={socket}>

    <Grid container columns={16}>
      {navigationOnMobileContext.show && <AppDrawer />}

      <Grid item lg={1} sx={{ display: { xs: "none", lg: "flex" } }}>
        <SideNavigation />
      </Grid>
      <Grid item xs={16} lg={15}>
        <Outlet />
      </Grid>
    </Grid>

    // </SocketContext.Provider >
  );
}
export default LayoutWithContext;
