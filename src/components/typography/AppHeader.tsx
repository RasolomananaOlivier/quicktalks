import { Typography } from "@mui/material";
import React, { PropsWithChildren } from "react";

interface AppHeaderProps extends PropsWithChildren {}

const AppHeader: React.FC<AppHeaderProps> = ({ children }) => {
  return (
    <Typography variant="h4" fontWeight="bold">
      {children}
    </Typography>
  );
};

export default AppHeader;
