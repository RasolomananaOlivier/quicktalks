import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import {
  Info,
  ExitToApp,
  ChatBubble,
  NotificationsActive,
  PersonAddAlt1,
  Settings,
} from "@mui/icons-material";
import { Badge } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useMobileSize } from "../../hooks/useMobileSize";
import ChatAnimatedIcon from "../lotties/json/chat-outline.json";
import RingBellIcon from "../lotties/json/notification-bell-outline.json";
import SettingsIcon from "../lotties/json/settings-cog-outline.json";
import ArrowUpIcon from "../lotties/json/arrow-up-outline.json";
import AccountIcon from "../lotties/json/account-outline.json";
import { AnimatedIcon } from "../lotties/animatedIcon";

export const iconsStyleSmall = {
  borderRadius: "50%",
  fontSize: 20,
  p: 0.7,
  backgroundImage: "linear-gradient(60deg,#ed1845, #22a6df)",
  color: "white",
};

const iconsStyleSmallNav2 = {
  borderRadius: "50%",
  fontSize: 24,
  color: "#d9e0e0",
};

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}
{
  /* <Badge
  // badgeContent={unreadMessages.length}
  max={99}
  color="error"
  sx={{ fontSize: 10 }}
>
  <ChatBubble sx={{ fontSize: 20, color: "white" }} />
</Badge>; */
}

export default function VerticalTabs() {
  const [value, setvalue] = React.useState(0);

  const isMobileScreen = useMobileSize();
  const route = useNavigate();

  /* Show dialog */
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Tabs
      orientation={isMobileScreen ? "horizontal" : "vertical"}
      centered
      variant={isMobileScreen ? "fullWidth" : "standard"}
      TabIndicatorProps={{
        style: {
          backgroundColor: "#ed1545",
        },
      }}
      value={value}
      onChange={(e, val) => setvalue(val)}
      sx={{
        ".MuiTabs-indicator": {
          display: "none",
        },
      }}
    >
      <Tab
        sx={{
          display: "flex",
          justifyContent: "center",
          ...(isMobileScreen && {
            position: "relative",
            left: "10%",
          }),
        }}
        icon={
          <AnimatedIcon
            animationData={ChatAnimatedIcon}
            classname="side-icon-container"
          />
        }
        iconPosition="start"
        onClick={() => route("/home/messages")}
        {...a11yProps(0)}
      />
      <Tab
        sx={{
          display: "flex",
          fontSize: 13,
          justifyContent: "center",
          ...(isMobileScreen && {
            position: "relative",
            left: "5%",
          }),
        }}
        icon={
          <AnimatedIcon
            animationData={AccountIcon}
            classname="side-icon-container"
          />
        }
        iconPosition="start"
        onClick={() => route("/home/requests")}
        {...a11yProps(0)}
      />
      <Tab
        sx={{
          display: "flex",
          fontSize: 13,
          justifyContent: "center",
          position: "relative",
        }}
        icon={
          <AnimatedIcon
            animationData={RingBellIcon}
            classname="side-icon-container"
          />
        }
        iconPosition="start"
        onClick={() => route("/home/notifications")}
        {...a11yProps(0)}
      />
      <Tab
        sx={{
          display: "flex",
          fontSize: 13,
          justifyContent: "center",
          ...(isMobileScreen && {
            position: "relative",
            right: "5%",
          }),
        }}
        icon={
          <AnimatedIcon
            animationData={SettingsIcon}
            classname="side-icon-container"
          />
        }
        iconPosition="start"
        onClick={() => route("/home/settings")}
        {...a11yProps(1)}
      />

      <Tab
        sx={{
          display: "flex",
          fontSize: 13,
          justifyContent: "center",

          ...(isMobileScreen && {
            position: "relative",
            right: "10%",
          }),
        }}
        icon={
          // @ts-ignore
          <div style={{ transform: "rotate(90deg)" }}>
            <AnimatedIcon
              animationData={ArrowUpIcon}
              classname="side-icon-container"
            />
          </div>
        }
        iconPosition="start"
        onClick={handleClickOpen}
        {...a11yProps(3)}
      />
      {/* <AlertDialog open={open} handleClose={handleClose} /> */}
    </Tabs>
  );
}
