import { Box, Button, Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { INewPasswordValues } from "../../types";
import { validateNewPassword } from "../../utils/validateNewPassword";

interface SecurityFormProps {
  handleSubmit: (values: INewPasswordValues) => Promise<
    | {
        oldpassword: any;
      }
    | undefined
  >;
}

const initialValues: INewPasswordValues = {
  oldpassword: "",
  newpassword: "",
};

const SecurityForm: React.FC<SecurityFormProps> = ({ handleSubmit }) => {
  const formik = useFormik({
    initialValues,
    validate: validateNewPassword,
    async onSubmit(values, formikHelpers) {
      const res = await handleSubmit(values);

      if (res) {
        console.log(res);

        formikHelpers.setErrors(res);
      }
    },
  });
  return (
    <Stack spacing={2.5} component="form" onSubmit={formik.handleSubmit}>
      <TextField
        name="oldpassword"
        label="Enter your old password"
        fullWidth
        required
        value={formik.values.oldpassword}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={!!formik.errors.oldpassword}
        helperText={
          formik.touched.oldpassword && !!formik.errors.oldpassword
            ? formik.errors.oldpassword
            : null
        }
        sx={{ maxWidth: { xs: "100%", md: 600 } }}
      />
      <TextField
        name="newpassword"
        label="Enter your new password"
        fullWidth
        required
        value={formik.values.newpassword}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={!!formik.errors.newpassword}
        helperText={
          formik.touched.newpassword && !formik.errors.newpassword
            ? formik.errors.newpassword
            : null
        }
        sx={{ maxWidth: { xs: "100%", md: 600 } }}
      />

      <Box>
        <Button variant="contained" type="submit">
          Save change
        </Button>
      </Box>
    </Stack>
  );
};

export default SecurityForm;
