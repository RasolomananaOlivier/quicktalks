import { Box, Grid, Paper } from "@mui/material";
import { FC, Suspense } from "react";
import { ConnectedLoginForm } from "../features/Login";
import Bg from "../assets/img/bg.webp";
import Loading from "../components/lotties/Loading";

interface ILoginPageProps {}

const LoginPage: FC<ILoginPageProps> = (props) => {
  return (
    <Grid container sx={{ overflow: { xs: "hidden", md: "auto" } }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={6.7}
        sx={{ display: { xs: "none", lg: "flex" } }}
      >
        <img src={Bg} alt="" className="login-illustration" loading="lazy" />
      </Grid>

      <Grid item xs={12} lg={5} sx={{ pb: { xs: 3, md: 0 } }}>
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <img src={Bg} alt="" className="login-illustration" loading="lazy" />
        </Box>
        <ConnectedLoginForm />
      </Grid>
    </Grid>
  );
};

export default LoginPage;
