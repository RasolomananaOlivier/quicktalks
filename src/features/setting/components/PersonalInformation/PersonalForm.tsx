import { Box, Button, Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { IPersonalInformationValues } from "../../../../types";
import { validatePersonalInformation } from "../../utils/validatePersonalValues";

interface PersonalFormProps {
  handleSubmit: (values: IPersonalInformationValues) => void;
}

const initialValues: IPersonalInformationValues = {
  firstname: "",
  lastname: "",
  email: "",
  birthday: "",
  avatarUrl: "",
};

const PersonalForm: React.FC<PersonalFormProps> = ({ handleSubmit }) => {
  const formik = useFormik({
    initialValues,
    validate: validatePersonalInformation,
    onSubmit(values, formikHelpers) {
      handleSubmit(values);
    },
  });
  return (
    <Stack spacing={2.5} component="form" onSubmit={formik.handleSubmit}>
      <TextField
        name="firstname"
        label="First Name"
        fullWidth
        required
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={!!formik.errors.firstname}
        helperText={
          formik.touched.firstname && !formik.errors.firstname
            ? formik.errors.firstname
            : null
        }
        sx={{ maxWidth: { xs: "100%", md: 600 } }}
      />
      <TextField
        name="lastname"
        label="Last Name"
        fullWidth
        required
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={!!formik.errors.lastname}
        helperText={
          formik.touched.lastname && !formik.errors.lastname
            ? formik.errors.lastname
            : null
        }
        sx={{ maxWidth: { xs: "100%", md: 600 } }}
      />
      <TextField
        name="birthday"
        label="Birthday"
        fullWidth
        required
        onChange={formik.handleChange}
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

export default PersonalForm;
