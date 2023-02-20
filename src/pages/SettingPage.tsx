import { Stack } from "@mui/material";
import React, { useState } from "react";
import { AppTab, AppTabs } from "../components/navigation/AppTabs";
import PersonalInfo from "../features/setting/components/PersonalInformation/PersonalInfo";
import SecurityInfo from "../features/setting/components/SecurityInformation/SecurityInfo";

const SettingPage = () => {
  const [value, setValue] = useState(0);
  const handleChange = (e: unknown, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Stack sx={{ mt: { xs: 8, md: 0 } }}>
      <AppTabs value={value} onChange={handleChange}>
        <AppTab label="Personal Information" />
        <AppTab label="Security" />
      </AppTabs>
      {value === 0 ? <PersonalInfo /> : <SecurityInfo />}
    </Stack>
  );
};

export default SettingPage;
