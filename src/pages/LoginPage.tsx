import { Grid, Paper } from "@mui/material";
import { FC } from "react";
import { ConnectedLoginForm } from "../features/Login";
import Bg from "../assets/img/bg.webp";

interface ILoginPageProps {}

// TODO: Redesign login page
const LoginPage: FC<ILoginPageProps> = (props) => {
  return (
    <Grid container>
      <Grid
        item
        xs={false}
        sm={4}
        md={6.7}
        sx={{ display: { xs: "none", lg: "flex" } }}
      >
        <img src={Bg} alt="" className="login-illustration" />
      </Grid>

      <Grid item xs={12} lg={5} sx={{ py: { xs: 3, md: 0 } }}>
        <ConnectedLoginForm />
      </Grid>
    </Grid>
  );
};

export default LoginPage;
