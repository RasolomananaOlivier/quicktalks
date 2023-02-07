import * as React from "react";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import StepWrapper from "../features/register/components/StepWrapper";

const steps = ["Information", "Password", "Bio"];

export default function SignupPage() {
  return (
    <Box sx={{ width: "100%", pt: 3 }}>
      <Grid container>
        <Grid
          item
          md={4}
          lg={4}
          sx={{
            height: "100vh",
            display: { xs: "none", md: "flex" },
          }}
          className="background-signup"
        ></Grid>

        <Grid
          item
          xs={12}
          md={8}
          lg={8}
          sx={{ py: { xs: 2, lg: 5 }, px: { xs: 2, lg: 8 } }}
        >
          <StepWrapper />
        </Grid>
      </Grid>
    </Box>
  );
}
