import { Box, ListItemText, Stack, Typography } from "@mui/material";

import React from "react";
import { IMessageItem } from "../../types";

interface UserboxDetailsProps {
  fullname: string;
  read: boolean;
  lastMessageItem: IMessageItem;
}

const NewMessageDotIndicator = () => (
  <Box
    sx={{
      width: 10,
      height: 10,
      borderRadius: "50%",
      backgroundColor: "dodgerblue",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      fontSize: 14,
    }}
  />
);

const UserboxDetails: React.FC<UserboxDetailsProps> = (props) => {
  const { fullname, lastMessageItem, read } = props;
  return (
    <>
      <ListItemText
        sx={{ m: 0 }}
        primary={
          <Typography
            component="span"
            variant="subtitle1"
            color="text.primary"
            fontWeight={"600"}
            sx={{}}
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
              <div className="last-message">
                {lastMessageItem.content ?? "No message yet"}
              </div>
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
          <div className="last-message">{lastMessageItem.timeStamp}</div>
        </Typography>
        {read ? null : <NewMessageDotIndicator />}
      </Stack>
    </>
  );
};

export default UserboxDetails;
