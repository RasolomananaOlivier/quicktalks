import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { useContext } from "react";
import { Outlet } from "react-router-dom";

import { styled, useTheme } from "@mui/material/styles";
import { ChatRootLeftSideContext } from "../context/leftSideContext";
import FriendsList from "./FriendList";
import ChatLeftSide from "./ChatLeftSide";
import SearchInput from "../../../components/SearchInput";

const drawerWidth = 350;
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  // @ts-ignore
  ({ theme, open }) => ({
    flexGrow: 1,
    display: "flex",
    width: "100%",
    // border: "dotted",
    // position: "relative",
    // flexDirection: "column",
    // padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
  })
);

export default function MessagesDesktopView() {
  const chatRoomLeftSideContext = useContext(ChatRootLeftSideContext);

  return (
    <Grid
      container
      sx={{
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Grid item md={3}>
        <Stack spacing={1} sx={{ border: "1px solid #f0f0f0" }}>
          <Typography variant="h5" sx={{ px: 1.5, pt: 2 }}>
            Messages
            <Typography variant="subtitle1" color="gray">
              People, Group
            </Typography>
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Divider sx={{ width: "90%" }} />
          </Box>

          <Box sx={{ px: 1.5 }}>
            <SearchInput />
          </Box>

          {/* TODO: Implement infinite scroll here
           */}
          <Box
            sx={{
              height: "77vh",
              overflowX: "scroll",
              px: 1.5,
              // border: "1px solid red",
            }}
            className="disable-scrollbar"
          >
            <FriendsList />
          </Box>
        </Stack>
      </Grid>
      <Grid
        item
        md={9}
        sx={{
          display: "flex",
          // border: "dotted",
        }}
      >
        {/* @ts-ignore */}
        <Main open={chatRoomLeftSideContext.show}>
          <Outlet />
        </Main>
        <ChatLeftSide width={drawerWidth} />
      </Grid>
    </Grid>
  );
}
