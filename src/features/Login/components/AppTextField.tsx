import { TextField } from "@mui/material";
import { FormikProps } from "formik";
import { ILoginValues } from "../types";

interface IAppTextFielfProps {
  formik: FormikProps<ILoginValues>;
  value: "Email" | "Password";
}
export default function AppTextField({ formik, value }: IAppTextFielfProps) {
  const valueLowerCase = value === "Email" ? "email" : "password";

  return (
    <TextField
      margin="normal"
      required
      fullWidth
      id={valueLowerCase}
      label={value}
      name={valueLowerCase}
      type={valueLowerCase}
      autoFocus={value === "Email"}
      error={
        formik.touched[valueLowerCase] && formik.errors[valueLowerCase]
          ? true
          : false
      }
      value={formik.values[valueLowerCase]}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      helperText={
        formik.touched[valueLowerCase] && formik.errors[valueLowerCase]
          ? `${formik.errors[valueLowerCase]}`
          : null
      }
    />
  );
}
