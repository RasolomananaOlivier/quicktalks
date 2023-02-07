import { ILoginErrors, ILoginValues } from "../types";

export function validateLogin(values: ILoginValues) {
  const { password, email } = values;

  const regex = /^[a-zA-Z0-9-._]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-])/;
  let errors: ILoginErrors = {};

  if (email === "") {
    errors.email = "Required";
  } else if (!regex.test(email)) {
    errors.email = "Invalid email";
  }
  if (password === "") {
    errors.password = "Required";
  }

  if (password.length < 8) {
    errors.password = "Must be 8 caractere or more";
  }

  return errors;
}
