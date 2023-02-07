import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  Paper,
  SxProps,
  TextField,
  Theme,
  Typography,
  TypographyClasses,
} from "@mui/material";
import { CommonProps } from "@mui/material/OverridableComponent";
import { SystemProps } from "@mui/system";
import { useFormik } from "formik";
import { ElementType, ReactNode } from "react";

// import Bg2 from "src/Assets/img/customer.png";
import { useMobileSize } from "../../../hooks/useMobileSize";
import { ILoginValues } from "../types";
import { validateLogin } from "../utils/validateLogin";
import AppTextField from "./AppTextField";

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
        WeChat
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

interface ILoginForm {
  handleSubmit: (values: ILoginValues) => void;
}

const LoginForm = ({ handleSubmit }: ILoginForm) => {
  const isMobileScreen = useMobileSize();

  const formik = useFormik<ILoginValues>({
    initialValues: {
      password: "",
      email: "",
    },
    validate: (values) => validateLogin(values),
    onSubmit: handleSubmit,
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
          alignItems: "center",
        }}
      >
        {!isMobileScreen && (
          <>
            {/* <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar> */}
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
          </>
        )}

        <Box
          component="form"
          noValidate
          onSubmit={formik.handleSubmit}
          sx={{ mt: 1 }}
        >
          <AppTextField formik={formik} value="Email" />
          <AppTextField formik={formik} value="Password" />

          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, pb: { xs: 1, md: 0 } }}
          >
            Sign In
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
          <Copyright sx={{ mt: 5 }} />
        </Box>
      </Box>
    </>
  );
};

export default LoginForm;
