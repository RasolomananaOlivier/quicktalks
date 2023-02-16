import { Box, ListItemText, Stack, Typography } from "@mui/material";

import React from "react";

interface UserboxDetailsProps {
  fullname: string;
}

const UserboxDetails: React.FC<UserboxDetailsProps> = ({ fullname }) => {
  return (
    <>
      <ListItemText
        primary={
          <Typography
            component="span"
            variant="h6"
            color="text.primary"
            fontSize={18}
            fontWeight={"bold"}
          >
            {fullname}
          </Typography>
        }
        secondary={
          <>
            <Typography
              component="span"
              variant="body2"
              fontSize={14}
              color="text.secondary"
            >
              <div className="last-message">Last message</div>
            </Typography>
          </>
        }
      />
      <Stack sx={{ alignItems: "flex-end" }}>
        <Typography
          component="span"
          variant="body2"
          fontSize={14}
          color="text.secondary"
        >
          <div className="last-message">11:50</div>
        </Typography>
        <Box
          sx={{
            width: 20,
            height: 20,
            borderRadius: "50%",
            backgroundColor: "dodgerblue",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontSize: 14,
          }}
        >
          2
        </Box>
      </Stack>
    </>
  );
};

export default UserboxDetails;
