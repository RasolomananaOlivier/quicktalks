import {
  Box,
  Button,
  Grid,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import React from "react";
import DefaultSource from "../../../../assets/img/default-shared-pic.jpg";

export default function SharedMedia() {
  return (
    <Box display="flex" flexDirection="column" paddingX={2}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        paddingTop={1}
      >
        <Typography>Shared Media</Typography>
        <Button variant="text">View all</Button>
      </Box>
      <ImageList cols={2} sx={{}}>
        {/* TODO: Max to 4 pics */}
        {[1, 2, 3, 4].map((image) => (
          <ImageListItem>
            <img
              src={DefaultSource}
              style={{ borderRadius: 7 }}
              alt=""
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
