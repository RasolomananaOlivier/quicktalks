import { Cancel, CheckCircle } from "@mui/icons-material";
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  IconButton,
  Box,
  ListItemButton,
  Button,
  Stack,
} from "@mui/material";
import React, { useContext } from "react";
import { SocketContext } from "../../../context/socketContext";
import { useAppSelector } from "../../../hooks/redux";
import { userSelector } from "../../../redux/selectors/userSelector";
import RequestEvents from "../../../services/events/request";

interface SuggestionProps {
  user: {
    _id: string;
    fullname: string;
    email: string;
  };
}

const Suggestion: React.FC<SuggestionProps> = ({ user }) => {
  const currentUser = useAppSelector(userSelector);
  const socket = useContext(SocketContext);

  const handleClick = () => {
    RequestEvents.emitNewRequest(socket, {
      destinationId: user._id,
      originId: currentUser._id as string,
    });
  };
  return (
    <Stack
      sx={{
        display: "flex",
        p: 1.5,
        borderRadius: 3,
        border: "1px solid rgba(0, 0, 0, 0.2)",
        mb: 2,
      }}
    >
      <ListItem>
        <ListItemAvatar>
          <Avatar src={""} alt={"name"} />
        </ListItemAvatar>
        <ListItemText
          sx={{ flexGrow: 1 }}
          primary={
            <Typography
              sx={{ display: "block" }}
              component="span"
              variant="h6"
              color="black"
            >
              {user.fullname}
            </Typography>
          }
          secondary={
            <Typography
              sx={{ display: "block" }}
              component="span"
              variant="body2"
              color="black"
            >
              {user.email}
            </Typography>
          }
        />
      </ListItem>

      <Box px={1.5} pb={1.4}>
        <Button
          variant="contained"
          sx={{ mr: 2 }}
          size="small"
          disableElevation
          onClick={handleClick}
        >
          Connect
        </Button>
      </Box>
    </Stack>
  );
};

export default Suggestion;
