import { Box, Button, Typography } from "@mui/material";
import { AnimatePresence } from "framer-motion";
import React, { useContext } from "react";
import { StepContext } from "../context/setContext";
import StepActiveView from "./StepActiveView";

const StepViewContainer: React.FC = () => {
  const { allStepsCompleted, handleReset } = useContext(StepContext);
  return (
    <div>
      {allStepsCompleted() ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <Box>
          <Box sx={{ mt: 4, height: "25rem" }}>
            <AnimatePresence exitBeforeEnter>
              <StepActiveView />
            </AnimatePresence>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
          </Box>
        </Box>
      )}
    </div>
  );
};

export default StepViewContainer;
