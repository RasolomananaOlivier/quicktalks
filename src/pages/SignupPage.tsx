import * as React from "react";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import StepWrapper from "../features/register/components/StepWrapper";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";
import Loading from "../components/lotties/Loading";

const steps = ["Information", "Password", "Bio"];

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

export default function SignupPage() {
  return (
    <React.Suspense fallback={<Loading />}>
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
          >
            hey
          </Grid>

          <Grid
            item
            xs={12}
            md={8}
            lg={8}
            sx={{ py: { xs: 2, lg: 5 }, px: { xs: 2, lg: 8 } }}
          >
            <ErrorBoundary
              FallbackComponent={ErrorFallback}
              onReset={() => {
                // reset the state of your app so the error doesn't happen again
              }}
            >
              <StepWrapper />
            </ErrorBoundary>
          </Grid>
        </Grid>
      </Box>
    </React.Suspense>
  );
}
