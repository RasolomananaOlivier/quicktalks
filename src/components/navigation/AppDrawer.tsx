import { Menu } from "@mui/icons-material";
import {
  Box,
  Drawer,
  IconButton,
  ListItemIcon,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import { Navigation } from "@mui/icons-material";
import { ListItemButton, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AnimatedIcon } from "../lotties/animatedIcon";
import Chat from "../lotties/json/chat-outline.json";
import Request from "../lotties/json/account-outline.json";
import Notification from "../lotties/json/notification-bell-outline.json";
import Setting from "../lotties/json/settings-cog-outline.json";
import Logout from "../lotties/json/arrow-up-outline.json";

export default function AppDrawer() {
  const [drawerOpened, setDrawerOpened] = useState(false);

  const closeDrawer = () => {
    setDrawerOpened(false);
  };

  const openDrawer = () => {
    setDrawerOpened(true);
  };

  return (
    <Box
      sx={{
        display: { xs: "flex", md: "none" },
        p: 2,
      }}
    >
      <div className="menu-icon-container" onClick={openDrawer}>
        <Menu />
      </div>
      <PageTitle />
      <Drawer anchor="left" open={drawerOpened} onClose={closeDrawer}>
        <DrawerBody />
      </Drawer>
    </Box>
  );
}

const NavigationList = () => {
  const navigate = useNavigate();

  const navigation = [
    {
      link: "/home/messages",
      label: "Messages",
      animationData: Chat,
    },
    {
      link: "/home/requests",
      label: "Requests",
      animationData: Request,
    },
    {
      link: "/home/notifications",
      label: "Notifications",
      animationData: Notification,
    },
    {
      link: "/home/settings",
      label: "Settings",
      animationData: Setting,
    },
    {
      link: "/home/logout",
      label: "Logout",
      animationData: Logout,
    },
  ];

  return (
    <Box mt={15}>
      {navigation.map((navItem) => (
        <div className="drawer-list-item">
          <ListItemButton
            key={navItem.label}
            onClick={() => navigate(navItem.link)}
          >
            <ListItemIcon>
              <AnimatedIcon animationData={navItem.animationData} />
            </ListItemIcon>
            <ListItemText>
              <Typography color="#fff">{navItem.label}</Typography>
            </ListItemText>
          </ListItemButton>
        </div>
      ))}
    </Box>
  );
};

function DrawerBody() {
  return (
    <div className="side-navigation" style={{ height: "100vh", width: "85vw" }}>
      <div className="side-navigation-overlay"></div>
      <Typography
        variant="h3"
        sx={{ pt: 5, pb: 2, px: 3, position: "absolute" }}
        color="white"
        fontWeight={"bold"}
      >
        QuickTalks
      </Typography>
      <NavigationList />
    </div>
  );
}

const PageTitle = () => {
  const location = useLocation();

  const getPageTitle = () => {
    const pageTitle = location.pathname.split("/")[2];

    if (pageTitle === undefined) return "MESSAGES";

    return pageTitle.toUpperCase();
  };

  return (
    <Typography
      variant="h5"
      sx={{ position: "absolute", right: 0, pr: 2, pt: 0.5 }}
      fontWeight="bold"
    >
      {getPageTitle()}
    </Typography>
  );
};
