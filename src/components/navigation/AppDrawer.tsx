import { Menu } from "@mui/icons-material";
import {
  Badge,
  Box,
  Drawer,
  IconButton,
  ListItemIcon,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { ListItemButton, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AnimatedIcon } from "../lotties/animatedIcon";
import Chat from "../lotties/json/chat-outline.json";
import Request from "../lotties/json/account-outline.json";
import Notification from "../lotties/json/notification-bell-outline.json";
import Setting from "../lotties/json/settings-cog-outline.json";
import Logout from "../lotties/json/arrow-up-outline.json";
import { useBagdeIndicator } from "../../hooks/useBagdeIndicator";
import LogoutModal from "../../features/Login/components/LogoutModal";

export default function AppDrawer() {
  const [drawerOpened, setDrawerOpened] = useState(false);
  const { isRequestsEmpty, unreadNotification } = useBagdeIndicator();

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
        position: "fixed",
        width: "92%",
        backgroundColor: "rgba(255, 255, 255,0.9)",
        zIndex: 2,
      }}
    >
      <div className="menu-icon-container" onClick={openDrawer}>
        <Badge variant="dot" invisible={isRequestsEmpty && unreadNotification}>
          <Menu />
        </Badge>
      </div>
      <PageTitle />
      <Drawer anchor="left" open={drawerOpened} onClose={closeDrawer}>
        <DrawerBody />
      </Drawer>
    </Box>
  );
}

const NavigationList = () => {
  const [showLogoutModal, setshowLogoutModal] = useState(false);
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
      link: "/login",
      label: "Logout",
      animationData: Logout,
    },
  ];

  const { isRequestsEmpty, unreadNotification } = useBagdeIndicator();
  const isRequestItemAndNotEmpty = (label: string) => {
    return label === "Requests" && isRequestsEmpty;
  };
  const isNotificationItemAndUnread = (label: string) => {
    return label === "Notifications" && unreadNotification;
  };

  const handleClick = (link: string) => {
    if (link === "/login") {
      setshowLogoutModal(true);
    } else {
      navigate(link);
    }
  };
  return (
    <Box mt={15}>
      {navigation.map((navItem) => (
        <div className="drawer-list-item">
          <ListItemButton
            sx={{ width: "100%" }}
            key={navItem.label}
            onClick={() => handleClick(navItem.link)}
          >
            <ListItemIcon>
              <Badge
                variant="dot"
                invisible={
                  isRequestItemAndNotEmpty(navItem.label) ||
                  isNotificationItemAndUnread(navItem.label)
                }
              >
                <div
                  style={{
                    transform:
                      navItem.label === "Logout" ? "rotate(90deg)" : undefined,
                  }}
                >
                  <AnimatedIcon animationData={navItem.animationData} />
                </div>
              </Badge>
            </ListItemIcon>
            <ListItemText>
              <Typography color="#fff">{navItem.label}</Typography>
            </ListItemText>
          </ListItemButton>
        </div>
      ))}
      <LogoutModal
        open={showLogoutModal}
        handleClose={() => setshowLogoutModal(false)}
      />
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
