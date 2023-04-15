import { Box, Button, Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { IPersonalInformationValues } from "../../../../types";
import { validatePersonalInformation } from "../../utils/validatePersonalValues";
import { useUserSelector } from "../../../../redux/selectors/userSelector";

interface PersonalFormProps {
  handleSubmit: (values: IPersonalInformationValues) => void;
}

const PersonalForm: React.FC<PersonalFormProps> = ({ handleSubmit }) => {
  const user = useUserSelector();

  const initialValues: IPersonalInformationValues = {
    firstname: user.firstname,
    lastname: user.lastname,
    email: user.email,
    birthday: user.birthday,
    avatarUrl: user.avatarUrl,
  };

  const formik = useFormik({
    initialValues,
    validate: validatePersonalInformation,
    onSubmit(values, formikHelpers) {
      handleSubmit(values);
    },
  });
  return (
    <Stack
      spacing={2.5}
      component="form"
      onSubmit={formik.handleSubmit}
      noValidate
    >
      <TextField
        name="firstname"
        label="First Name"
        fullWidth
        required
        variant="outlined"
        value={formik.values.firstname}
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
        variant="outlined"
        value={formik.values.lastname}
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

      {/* TODO: Improve this */}
      <TextField
        name="birthday"
        label="Birthday"
        type="date"
        fullWidth
        required
        value={formik.values.birthday}
        onChange={formik.handleChange}
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

export default PersonalForm;
