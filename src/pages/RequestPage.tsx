import { Box, Stack, styled, Tab, Tabs } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React, { useState } from "react";
import SearchInput from "../components/SearchInput";
import { useSetupNotificationState } from "../features/notification/hooks/useSetupNotificationState";
import RequestsList from "../features/request/component/RequestsList";
import SuggestionsList from "../features/request/component/SuggestionsList";

interface StyledTabsProps {
  children?: React.ReactNode;
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}
const StyledTabs = styled((props: StyledTabsProps) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 40,
    width: "100%",
    backgroundColor: "#635ee7",
  },
});

interface StyledTabProps {
  label: string;
}
const StyledTab = styled((props: StyledTabProps) => (
  <Tab disableRipple {...props} />
))(({ theme }) => ({
  textTransform: "none",
  fontWeight: "bold",
  fontSize: theme.typography.pxToRem(18),
  marginRight: theme.spacing(1),
  color: "black",
  "&.Mui-selected": {
    color: "#1101bc",
  },
  "&.Mui-focusVisible": {
    backgroundColor: "rgba(100, 95, 228, 0.32)",
  },
}));

interface RequestPageProps {}

const RequestPage: React.FC<RequestPageProps> = () => {
  useSetupNotificationState();

  const [value, setValue] = useState(0);
  const handleChange = (e: unknown, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Stack sx={{ height: "100vh", overflowY: "scroll" }}>
      <Box px={2.5} py={2}>
        <SearchInput />
      </Box>
      <Stack>
        <StyledTabs value={value} onChange={handleChange}>
          <StyledTab label="Invitations" />
          <StyledTab label="Suggestions" />
        </StyledTabs>
        <Box sx={{ px: { xs: 0, md: 15 } }}>
          {value === 0 ? <RequestsList /> : <SuggestionsList />}
        </Box>
      </Stack>
    </Stack>
  );
};

export default RequestPage;
