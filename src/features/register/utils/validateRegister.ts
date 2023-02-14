import { IRegisterErrors, IRegisterValues } from "../types";

export function validateSignup(values: IRegisterValues) {
  const { firstname, lastname, birthday, email } = values;

  const regex = /^[a-zA-Z0-9-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-])/;
  let errors: IRegisterErrors = {};
  if (firstname === "") {
    errors.firstname = "Required";
  }
  if (lastname === "") {
    errors.lastname = "Required";
  }
  if (birthday === "") {
    errors.birthday = "Required";
  }
  if (email === "") {
    errors.email = "Required";
  } else if (!regex.test(email)) {
    errors.email = "Invalid email";
  }
  return errors;
}
