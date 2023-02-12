import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Stack, Typography } from "@mui/material";
import Notification from "./Notification";
import AppHeader from "../../../components/typography/AppHeader";

interface NotificationsListProps {}

const NotificationsList: React.FC<NotificationsListProps> = ({}) => {
  const requestCollections: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

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
          {requestCollections.map((request) => {
            return (
              <motion.div
                // variants={listVariants}
                exit={{ scale: 0, transition: { duration: 0.2 } }}
                key={request._id}
                style={{ marginBottom: 10 }}
              >
                <Notification />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </Stack>
  );
};

export default NotificationsList;
