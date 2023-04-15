import { Box, ListItemText, Stack, Typography } from "@mui/material";

import React from "react";
import { IMessageItem } from "../../types";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

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

  // Format time
  dayjs.extend(relativeTime);
  const time =
    lastMessageItem.timeStamp !== ""
      ? dayjs(lastMessageItem.timeStamp).fromNow()
      : "time ago";

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
            <Stack sx={{ alignItems: "flex-end" }}>
              <Typography
                component="span"
                variant="body2"
                fontSize={14}
                color="text.secondary"
              >
                <div className="last-message">{time}</div>
              </Typography>
            </Stack>
          </>
        }
      />

      <Stack sx={{ alignItems: "flex-end" }}>
        {read ? null : <NewMessageDotIndicator />}
      </Stack>
    </>
  );
};

export default UserboxDetails;
