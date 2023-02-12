import { Stack } from "@mui/material";
import React from "react";
import NotificationsList from "../features/notification/components/NotificationsList";

interface NotificationPageProps {}

const NotificationPage: React.FC<NotificationPageProps> = () => {
  return (
    <Stack sx={{ height: "100vh", overflowY: "scroll", px: 35 }}>
      <NotificationsList />
    </Stack>
  );
};

export default NotificationPage;
