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
import React from "react";

interface SuggestionProps {
  user: {
    _id: string;
    fullname: string;
    email: string;
  };
}

const Suggestion: React.FC<SuggestionProps> = ({ user }) => {
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
        >
          Connect
        </Button>
      </Box>
    </Stack>
  );
};

export default Suggestion;
