import { Stack } from "@mui/material";
import React from "react";
import AppHeader from "../../../../components/typography/AppHeader";
import ConnectedSecurityForm from "./ConnectedSecurityForm";

interface SecurityInfoProps {}

const SecurityInfo: React.FC<SecurityInfoProps> = () => {
  return (
    <Stack spacing={2} sx={{ px: { xs: 2, md: 20 }, mt: { xs: 2, md: 5 } }}>
      <AppHeader>Update Your Security Information </AppHeader>
      <ConnectedSecurityForm />
    </Stack>
  );
};

export default SecurityInfo;
