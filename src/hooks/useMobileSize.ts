import { useMediaQuery, useTheme } from "@mui/material";

export const useMobileSize = () => {
  const themeHook = useTheme();
  const isMobileScreen = useMediaQuery(themeHook.breakpoints.down("md"));

  return isMobileScreen;
};
