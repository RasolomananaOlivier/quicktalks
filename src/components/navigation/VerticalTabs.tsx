import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Badge } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useMobileSize } from "../../hooks/useMobileSize";
import ChatAnimatedIcon from "../lotties/json/chat-outline.json";
import RingBellIcon from "../lotties/json/notification-bell-outline.json";
import SettingsIcon from "../lotties/json/settings-cog-outline.json";
import ArrowUpIcon from "../lotties/json/arrow-up-outline.json";
import AccountIcon from "../lotties/json/account-outline.json";
import { AnimatedIcon } from "../lotties/animatedIcon";
import { useBagdeIndicator } from "../../hooks/useBagdeIndicator";
import { removeToken } from "../../utils/removeToken";
import LogoutModal from "../../features/Login/components/LogoutModal";

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setvalue] = React.useState(0);
  const [showLogoutModal, setshowLogoutModal] = React.useState(false);

  const isMobileScreen = useMobileSize();
  const navigate = useNavigate();
  const { isRequestsEmpty, unreadNotification } = useBagdeIndicator();

  return (
    <>
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
          onClick={() => navigate("/home/messages")}
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
          onClick={() => navigate("/home/requests")}
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
            <Badge
              variant="dot"
              color="primary"
              invisible={!unreadNotification}
            >
              <AnimatedIcon animationData={RingBellIcon} />
            </Badge>
          }
          iconPosition="start"
          onClick={() => navigate("/home/notifications")}
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
          onClick={() => navigate("/home/settings")}
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
          onClick={() => setshowLogoutModal(true)}
          {...a11yProps(3)}
        />
      </Tabs>
      <LogoutModal
        open={showLogoutModal}
        handleClose={() => setshowLogoutModal(false)}
      />
    </>
  );
}
