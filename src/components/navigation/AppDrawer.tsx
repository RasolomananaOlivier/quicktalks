import { Menu } from "@mui/icons-material";
import { Box, Drawer, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import { Navigation } from "@mui/icons-material";
import { ListItemButton, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";

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
        px: 0.5,
      }}
    >
      <IconButton onClick={openDrawer}>
        <Menu />
      </IconButton>
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
    },
    {
      link: "/home/requests",
      label: "Requests",
    },
    {
      link: "/home/notifications",
      label: "Notifications",
    },
    {
      link: "/home/settings",
      label: "Settings",
    },
    {
      link: "/home/logout",
      label: "Logout",
    },
  ];

  return (
    <>
      {navigation.map((navItem) => (
        <ListItemButton
          key={navItem.label}
          onClick={() => navigate(navItem.link)}
          sx={{ px: 4 }}
        >
          <ListItemText>{navItem.label}</ListItemText>
        </ListItemButton>
      ))}
    </>
  );
};

function DrawerBody() {
  return (
    <Box>
      <Typography variant="h3" sx={{ p: 4 }}>
        Wechat
      </Typography>
      <NavigationList />
    </Box>
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
    >
      {getPageTitle()}
    </Typography>
  );
};
