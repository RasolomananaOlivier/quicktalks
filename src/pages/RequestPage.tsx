import { Box, Stack } from "@mui/material";
import { useState } from "react";
import { AppTab, AppTabs } from "../components/navigation/AppTabs";
import SearchInput from "../components/SearchInput";
import { useSetupNotificationState } from "../features/notification/hooks/useSetupNotificationState";
import RequestsList from "../features/request/component/RequestsList";
import SuggestionsList from "../features/request/component/SuggestionsList";

const RequestPage = () => {
  const [value, setValue] = useState(0);
  const handleChange = (e: unknown, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Stack sx={{ height: "100vh", overflowY: "scroll", mt: { xs: 8, md: 0 } }}>
      <Box px={2} py={2}>
        <SearchInput />
      </Box>
      <Stack>
        <AppTabs value={value} onChange={handleChange}>
          <AppTab label="Invitations" />
          <AppTab label="Suggestions" />
        </AppTabs>
        <Box sx={{ px: { xs: 0, md: 15 } }}>
          {value === 0 ? <RequestsList /> : <SuggestionsList />}
        </Box>
      </Stack>
    </Stack>
  );
};

export default RequestPage;
