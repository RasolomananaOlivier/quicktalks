import { IPasswordErrors, IPasswordValues } from "../types";

export function validatePassword(values: IPasswordValues) {
  const { password, confirmedPassword } = values;

  let errors: IPasswordErrors = {};
  if (password === "") {
    errors.password = "Required";
  }
  if (confirmedPassword === "") {
    errors.confirmedPassword = "Required";
  }
  if (password.length < 8) {
    errors.password = "Must be 8 caracters or more";
  }
  if (password !== confirmedPassword) {
    errors.confirmedPassword = "Does not match";
  }

  return errors;
}
