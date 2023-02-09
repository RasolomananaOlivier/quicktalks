import React, { useContext, useEffect, useMemo, useState } from "react";

import Avatar from "@mui/material/Avatar";
import styled from "@emotion/styled";
import {
  Badge,
  Divider,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import UserboxAvatar from "./UserboxAvatar";
import UserboxDetails from "./UserboxDetails";

interface IUserboxContext {
  handleOpenMessage: () => void;
}
const UserboxContext = React.createContext({});

export default function Userbox() {
  return (
    <>
      <ListItemButton
        sx={{
          borderRadius: 3,
          mb: 1,
        }}
        // onClick={handleClick}
      >
        <UserboxAvatar />
        <UserboxDetails />
      </ListItemButton>
      <Divider variant="inset" />
    </>
  );
}
