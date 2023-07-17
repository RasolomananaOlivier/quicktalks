import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  Button,
  Typography,
  CircularProgress,
} from "@mui/material";
import { useFormik } from "formik";

import { useMobileSize } from "../../../hooks/useMobileSize";
import { ILoginValues } from "../types";
import { validateLogin } from "../utils/validateLogin";
import AppTextField from "./AppTextField";
import { Login, LoginOutlined } from "@mui/icons-material";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="">
        QuickTalks
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

interface ILoginForm {
  handleSubmit: (values: ILoginValues) => void;
  loginError: boolean;
  loading: boolean;
}

const LoginForm = ({ handleSubmit, loginError, loading }: ILoginForm) => {
  const isMobileScreen = useMobileSize();

  const formik = useFormik<ILoginValues>({
    initialValues: {
      password: "",
      email: "",
    },
    validate: (values) => validateLogin(values),
    onSubmit: handleSubmit,
  });

  const loginGoogle = useGoogleLogin({
    onSuccess: async (response) => {
      console.log("ok", response);
      const res = await axios.get(
        "https://www.googleapis.com/oauth2/v1/userinfo?access_token=" +
          response.access_token,
        {
          headers: {
            Authorization: "Bearer " + response.access_token,
            Accept: "application/json",
          },
        }
      );

      console.log(res);
    },
    onError: (response) => console.log("bad", response),
  });

  return (
    <>
      {isMobileScreen && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {/* <img src={Bg2} style={{ height: "220px" }} alt="" srcSet="" /> */}
        </Box>
      )}

      <Box
        sx={{
          my: { xs: 2, md: 8 },
          mx: { xs: 3, md: 6 },
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "start",
        }}
      >
        {!isMobileScreen && (
          <Typography component="h1" variant="h4">
            Welcome !
            <br />
            Nice to see you again.
          </Typography>
        )}

        <Box
          component="form"
          noValidate
          onSubmit={formik.handleSubmit}
          sx={{ mt: 1, mx: { xs: 0, md: 0.7 } }}
        >
          <AppTextField
            loading={loading}
            formik={formik}
            value="Email"
            loginError={loginError}
          />
          <AppTextField
            loading={loading}
            formik={formik}
            value="Password"
            loginError={loginError}
          />

          {loginError && (
            <Typography color="error">Email or password incorrect.</Typography>
          )}

          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            fullWidth
            variant="contained"
            type="submit"
            disabled={loading}
            startIcon={
              loading ? <CircularProgress size={20} /> : <LoginOutlined />
            }
            sx={{ mt: 1, mb: 2 }}
            disableElevation
          >
            Sign in
          </Button>

          <Grid container>
            <Grid
              item
              xs={12}
              lg={6}
              display="flex"
              justifyContent={{ xs: "center", lg: "start" }}
              alignItems="center"
              sx={{ pb: { xs: 2, md: 0 } }}
            >
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid
              item
              xs={12}
              lg={6}
              display="flex"
              justifyContent={{ xs: "center", lg: "end" }}
              alignItems="center"
            >
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>

          <Box display="flex" justifyContent="center" my={2}>
            <Typography color="gray">
              Or create an account using social media
            </Typography>
          </Box>

          <Box display="flex" justifyContent="center">
            <Button onClick={() => loginGoogle()}>Google</Button>
            <Button>Facebook</Button>
          </Box>

          <Copyright sx={{ mt: 5 }} />
        </Box>
      </Box>
    </>
  );
};

export default LoginForm;
