import React, { useContext } from "react";

import TextField from "@mui/material/TextField";
import {
  Box,
  Grid,
  Stack,
  Typography,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { IRegisterValues } from "../../types";
import { StepContext } from "../../context/setContext";
import { validateSignup } from "../../utils/validateRegister";

export default function PersonalInformationForm() {
  const { handleComplete, completed, activeStep } = useContext(StepContext);

  const formik = useFormik<IRegisterValues>({
    initialValues: {
      firstName: "",
      lastName: "",
      birthday: "",
      email: "",
    },
    validate: validateSignup,
    onSubmit: (values) => {
      handleComplete();
    },
  });
  /**
   * Return true if the firstName input was touched or
   * An errors occurs
   */
  const handleErrorFirstName = () => {
    return !!formik.touched.firstName && !!formik.errors.firstName;
  };

  /**
   * Return true if the lastName input was touched or
   * An errors occurs
   */
  const handleErrorLastName = () => {
    return !!formik.touched.lastName && !!formik.errors.lastName;
  };

  /**
   * Return true if the email input was touched or
   * An errors occurs
   */
  const handleErrorEmail = () => {
    return !!formik.touched.email && !!formik.errors.email;
  };
  return (
    <motion.div
      // variants={fadeIn}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Stack sx={{ pb: 6 }}>
        <Box sx={{ my: 4 }}>
          <Typography variant="body2">Step 1/3</Typography>
          <Typography variant="h4">Sign up</Typography>
        </Box>

        <Box component="form" noValidate onSubmit={formik.handleSubmit}>
          <Grid container>
            <Grid
              item
              xs={12}
              lg={6}
              sx={{ pr: { xs: 0, lg: 2 }, mb: { xs: 3, lg: 5 } }}
            >
              <TextField
                name="firstName"
                label="First Name"
                fullWidth
                required
                disabled={completed[activeStep] ? true : false}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={handleErrorFirstName() ? true : false}
                helperText={
                  handleErrorFirstName() ? `${formik.errors.firstName}` : null
                }
              />
            </Grid>
            <Grid
              item
              xs={12}
              lg={6}
              sx={{ pr: { xs: 0, lg: 2 }, mb: { xs: 3, lg: 5 } }}
            >
              <TextField
                name="lastName"
                label="Last Name"
                fullWidth
                required
                disabled={completed[activeStep] ? true : false}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={handleErrorLastName() ? true : false}
                helperText={
                  handleErrorLastName() ? `${formik.errors.lastName}` : null
                }
              />
            </Grid>
            <Grid
              item
              xs={12}
              lg={6}
              sx={{ pr: { xs: 0, lg: 2 }, mb: { xs: 3, lg: 5 } }}
            >
              <TextField
                name="birthday"
                label="Birthday"
                fullWidth
                required
                disabled={completed[activeStep] ? true : false}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid
              item
              xs={12}
              lg={6}
              sx={{ pr: { xs: 0, lg: 2 }, mb: { xs: 3, lg: 5 } }}
            >
              <TextField
                name="email"
                label="Email"
                fullWidth
                required
                disabled={completed[activeStep] ? true : false}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={handleErrorEmail() ? true : false}
                helperText={
                  handleErrorEmail() ? `${formik.errors.email}` : null
                }
              />
            </Grid>{" "}
          </Grid>
          <Grid
            item
            xs={11}
            lg={6}
            sx={{
              pr: { xs: 0, lg: 2 },
              mb: { xs: 3, lg: 5 },
            }}
          >
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Accept terms and conditions"
            />
          </Grid>
          <Grid
            item
            lg={12}
            sx={{ display: "flex", justifyContent: "space-between", mr: 2.6 }}
          >
            <Button variant="contained" href="/login" hidden>
              Back to sign in
            </Button>
            <Button
              variant="contained"
              type="submit"
              disabled={completed[activeStep] ? true : false}
              hidden
            >
              {completed[activeStep] ? "Completed" : "Next"}
            </Button>
          </Grid>
        </Box>
      </Stack>
    </motion.div>
  );
}
