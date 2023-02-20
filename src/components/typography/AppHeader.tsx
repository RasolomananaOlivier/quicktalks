import { Typography } from "@mui/material";
import React, { PropsWithChildren } from "react";

interface AppHeaderProps extends PropsWithChildren {}

const AppHeader: React.FC<AppHeaderProps> = ({ children }) => {
  return (
    <Typography
      variant="h4"
      fontWeight="bold"
      sx={{ fontSize: { xs: 30, md: 40 } }}
    >
      {children}
    </Typography>
  );
};

export default AppHeader;
