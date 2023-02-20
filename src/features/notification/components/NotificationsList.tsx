import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button, Stack, Typography } from "@mui/material";
import Notification from "./Notification";
import AppHeader from "../../../components/typography/AppHeader";
import { useAppSelector } from "../../../hooks/redux";
import { notificationsSelector } from "../../../redux/selectors/notificationSelector";
import { useMobileSize } from "../../../hooks/useMobileSize";
import { useMarkAllAsRead } from "../hooks/useMarkAllAsRead";

interface NotificationsListProps {}

const NotificationsList: React.FC<NotificationsListProps> = ({}) => {
  const notifications = useAppSelector(notificationsSelector);
  const isMobileView = useMobileSize();

  const handleClick = useMarkAllAsRead();
  return (
    <Stack sx={{ p: 3 }} spacing={2}>
      {!isMobileView && <AppHeader>Notifications</AppHeader>}
      <div>
        <Button variant="outlined" onClick={handleClick}>
          Mark All As Read
        </Button>
      </div>
      <motion.div
        // variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <AnimatePresence>
          {notifications.map((notification) => {
            return (
              <motion.div
                // variants={listVariants}
                exit={{ scale: 0, transition: { duration: 0.2 } }}
                key={notification._id}
                style={{ marginBottom: 10 }}
              >
                <Notification notification={notification} />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </Stack>
  );
};

export default NotificationsList;
