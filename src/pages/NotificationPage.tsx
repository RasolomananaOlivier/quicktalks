import { Stack } from "@mui/material";
import React from "react";
import NotificationsList from "../features/notification/components/NotificationsList";

interface NotificationPageProps {}

const NotificationPage: React.FC<NotificationPageProps> = () => {
  return (
    <Stack
      sx={{
        height: "100vh",
        overflowY: "scroll",
        px: { xs: 0, md: 35 },
        mt: { xs: 8, md: 0 },
      }}
    >
      <NotificationsList />
    </Stack>
  );
};

export default NotificationPage;
