import { Stack } from "@mui/material";
import React from "react";
import AppHeader from "../../../../components/typography/AppHeader";
import ConnectedPersonalForm from "./ConnectedUpdateFrom";

interface PersonalInfoProps {}

const PersonalInfo: React.FC<PersonalInfoProps> = () => {
  return (
    <Stack spacing={2} sx={{ px: { xs: 2, md: 20 }, mt: { xs: 2, md: 5 } }}>
      <AppHeader>Update Your Personal Information </AppHeader>
      <ConnectedPersonalForm />
    </Stack>
  );
};

export default PersonalInfo;
