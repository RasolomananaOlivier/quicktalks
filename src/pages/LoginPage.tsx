import { Grid, Paper } from "@mui/material";
import { FC } from "react";
import { ConnectedLoginForm } from "../features/Login";
interface ILoginPageProps {}

const LoginPage: FC<ILoginPageProps> = (props) => {
  return (
    <Grid container>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{ display: { xs: "none", lg: "flex" } }}
        className="login-background"
      />

      <Grid
        item
        xs={12}
        lg={5}
        component={Paper}
        elevation={6}
        square
        sx={{ py: { xs: 3, md: 0 } }}
      >
        <ConnectedLoginForm />
      </Grid>
    </Grid>
  );
};

export default LoginPage;
