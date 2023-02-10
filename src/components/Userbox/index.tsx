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
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { userSelector } from "../../redux/selectors/userSelector";
import { Client } from "../../lib/Client";
import { useFilterMessage } from "../../features/message/hooks/userFilterMessages";
import { setCurrentFriend } from "../../redux/reducers/currentFriendSlice";
import { IUser } from "../../types";
import { setCurrentMessage } from "../../redux/reducers/currentMessageSlice";

interface IUserboxContext {
  handleOpenMessage: () => void;
}
const UserboxContext = React.createContext({});

interface IUserBoxProps {
  user: IUser;
}

export default function Userbox({ user }: IUserBoxProps) {
  const navigate = useNavigate();
  const message = useFilterMessage(user._id!);

  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(setCurrentFriend(user));

    if (message._id !== "") {
      dispatch(setCurrentMessage(message));
      navigate(`/home/messages/${message._id}`);
    }
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
