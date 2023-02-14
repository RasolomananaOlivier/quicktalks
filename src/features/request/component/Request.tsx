import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  Box,
  Button,
  Stack,
} from "@mui/material";
import React, { useContext } from "react";
import { SocketContext } from "../../../context/socketContext";
import RequestEvents from "../../../services/events/request";
import { IRequest } from "../../../types";

interface RequestProps {
  request: IRequest;
}

const Request: React.FC<RequestProps> = ({ request }) => {
  const socket = useContext(SocketContext);
  const handleClick = () => {
    RequestEvents.emitAccept(socket, request._id);
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
              {request.fullname}
            </Typography>
          }
          secondary={
            <Typography
              sx={{ display: "block" }}
              component="span"
              variant="body2"
              color="black"
            >
              {request.email}
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
          Accept
        </Button>
        <Button variant="outlined" color="error" size="small">
          Decline
        </Button>
      </Box>
    </Stack>
  );
};

export default Request;
