import { Box, Stack } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import SearchInput from "../components/SearchInput";
import { useSetupNotificationState } from "../features/notification/hooks/useSetupNotificationState";
import RequestsList from "../features/request/component/RequestsList";
import SuggestionsList from "../features/request/component/SuggestionsList";

interface RequestPageProps {}

const RequestPage: React.FC<RequestPageProps> = () => {
  useSetupNotificationState();

  return (
    <Stack sx={{ height: "100vh", overflowY: "scroll" }}>
      <Box px={2.5} py={2}>
        <SearchInput />
      </Box>
      <Grid2 container>
        <Grid2 md={6}>
          <div>
            <RequestsList />
          </div>
        </Grid2>
        <Grid2 md={6}>
          <SuggestionsList />
        </Grid2>
      </Grid2>
    </Stack>
  );
};

export default RequestPage;
