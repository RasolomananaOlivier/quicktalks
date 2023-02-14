import React from "react";
import Lottie from "lottie-react";
import LoadingJson from "./json/loading.json";
import { Box } from "@mui/material";

const Loading: React.FC = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ height: "100vh" }}
    >
      <Lottie
        animationData={LoadingJson}
        style={{ width: "200px", height: "200px" }}
      />
    </Box>
  );
};

export default Loading;
