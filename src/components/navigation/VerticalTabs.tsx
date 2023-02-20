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
import { useAppSelector } from "../../hooks/redux";
import { requestsSelector } from "../../redux/selectors/requestsSelector";
import { notificationsSelector } from "../../redux/selectors/notificationSelector";
import { useBagdeIndicator } from "../../hooks/useBagdeIndicator";

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setvalue] = React.useState(0);

  const isMobileScreen = useMobileSize();
  const route = useNavigate();
  const { isRequestsEmpty, unreadNotification } = useBagdeIndicator();

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
        icon={<AnimatedIcon animationData={ChatAnimatedIcon} />}
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
          <Badge variant="dot" invisible={isRequestsEmpty} color="primary">
            <AnimatedIcon animationData={AccountIcon} />
          </Badge>
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
          <Badge variant="dot" color="primary" invisible={!unreadNotification}>
            <AnimatedIcon animationData={RingBellIcon} />
          </Badge>
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
        icon={<AnimatedIcon animationData={SettingsIcon} />}
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
            <AnimatedIcon animationData={ArrowUpIcon} />
          </div>
        }
        iconPosition="start"
        // onClick={handleClickOpen}
        {...a11yProps(3)}
      />
      {/* <AlertDialog open={open} handleClose={handleClose} /> */}
    </Tabs>
  );
}
