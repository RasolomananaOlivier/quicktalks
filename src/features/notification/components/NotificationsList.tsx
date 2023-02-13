import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Stack, Typography } from "@mui/material";
import Notification from "./Notification";
import AppHeader from "../../../components/typography/AppHeader";
import { useAppSelector } from "../../../hooks/redux";
import { notificationsSelector } from "../../../redux/selectors/notificationSelector";

interface NotificationsListProps {}

const NotificationsList: React.FC<NotificationsListProps> = ({}) => {
  const notifications = useAppSelector(notificationsSelector);
  return (
    <Stack sx={{ p: 3 }} spacing={2}>
      <AppHeader>Notifications</AppHeader>
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
