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
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";
import { userSelector } from "../../redux/selectors/userSelector";
import { Client } from "../../lib/Client";
import { useFilterMessage } from "../../features/message/hooks/userFilterMessages";

interface IUserboxContext {
  handleOpenMessage: () => void;
}
const UserboxContext = React.createContext({});

interface IUserBox {
  friendId: string;
}

export default function Userbox({ friendId }: IUserBox) {
  const navigate = useNavigate();
  const message = useFilterMessage(friendId);
  const handleClick = () => {
    console.log(message, friendId);

    navigate(`/home/messages/${message._id}`);
  };
  return (
    <>
      <ListItemButton
        sx={{
          borderRadius: 3,
          mb: 1,
        }}
        onClick={handleClick}
      >
        <UserboxAvatar />
        <UserboxDetails />
      </ListItemButton>
      <Divider variant="inset" />
    </>
  );
}
