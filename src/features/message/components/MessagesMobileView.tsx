import { Box, Grid, Stack, Typography } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import React, { useContext, useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import { NavigationStateOnMobileContext } from "../../../components/AppProvider";
import SearchInput from "../../../components/SearchInput";
import { ChatRootLeftSideContext } from "../context/leftSideContext";
import ChatLeftSide from "./ChatLeftSide";
import FriendsList from "./FriendList";

interface MessagesMobileViewProps {}

const MessagesMobileView: React.FC<MessagesMobileViewProps> = ({}) => {
  const params = useParams();
  const chatRoomLeftSideContext = useContext(ChatRootLeftSideContext);

  return (
    <Grid
      container
      sx={{
        height: "93vh",
      }}
    >
      {!params.messageId ? (
        <Grid item sx={{ width: "100%", height: "100vh", mt: 8 }}>
          <Stack spacing={1}>
            <Typography
              color="white"
              variant="h5"
              sx={{ px: 1.5, pt: 2, display: { xs: "none", md: "block" } }}
            >
              Messages
            </Typography>
            <Box sx={{ px: 1.5 }}>
              <SearchInput />
            </Box>

            <Box
              sx={{
                height: "77vh",
                overflow: "hidden",
                px: 1.5,
              }}
            >
              <FriendsList />
            </Box>
          </Stack>
        </Grid>
      ) : (
        <>
          <AnimatePresence exitBeforeEnter>
            {!chatRoomLeftSideContext.show && (
              <motion.div
                style={{
                  width: "100%",
                  // height: `calc(100vh - 60px)`,
                }}
              >
                <Outlet />
              </motion.div>
            )}

            <motion.div
              initial={{ x: 400 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              exit={{ x: 400 }}
            >
              {chatRoomLeftSideContext.show && <ChatLeftSide />}
            </motion.div>
          </AnimatePresence>
        </>
      )}
    </Grid>
  );
};

export default MessagesMobileView;
