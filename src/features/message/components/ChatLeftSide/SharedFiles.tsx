import { MusicNote } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import React from "react";

export default function SharedFiles() {
  return (
    <Box display="flex" flexDirection="column" paddingX={2}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        paddingTop={1}
      >
        <Typography>Shared Files</Typography>
        <Button variant="text">View all</Button>
      </Box>
      <Box>
        {[1, 2, 3].map((item) => (
          <Box display="flex" mb={1.5}>
            <Box mr={1}>
              <Box
                bgcolor="greenyellow"
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={{ borderRadius: 1, p: 1 }}
              >
                <MusicNote sx={{ width: 20 }} />
              </Box>
            </Box>
            <Box flexGrow={1}>
              <Typography fontWeight="bold" fontSize={15}>
                Filename.mp3
              </Typography>
              <Typography color="text.secondary" fontSize={12}>
                14 sept 2021 | 7:24 pm
              </Typography>
            </Box>
            <Box>
              <Typography fontWeight={"bold"} fontSize={15}>
                5 MB
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
