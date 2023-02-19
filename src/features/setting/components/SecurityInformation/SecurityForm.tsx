import { Box, Button, Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { INewPasswordValues } from "../../types";
import { validateNewPassword } from "../../utils/validateNewPassword";

interface SecurityFormProps {
  handleSubmit: (values: INewPasswordValues) => void;
}

const initialValues: INewPasswordValues = {
  password: "",
};

const SecurityForm: React.FC<SecurityFormProps> = ({ handleSubmit }) => {
  const formik = useFormik({
    initialValues,
    validate: validateNewPassword,
    onSubmit(values, formikHelpers) {
      handleSubmit(values);
    },
  });
  return (
    <Stack spacing={2.5} component="form" onSubmit={formik.handleSubmit}>
      <TextField
        name="newPass"
        label="Your new password"
        fullWidth
        required
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={!!formik.errors.password}
        helperText={
          formik.touched.password && !formik.errors.password
            ? formik.errors.password
            : null
        }
        sx={{ maxWidth: { xs: "100%", md: 600 } }}
      />

      <Box>
        <Button variant="contained" type="submit">
          Update
        </Button>
      </Box>
    </Stack>
  );
};

export default SecurityForm;
