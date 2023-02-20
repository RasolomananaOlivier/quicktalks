import {
  IPersonalInformationErrors,
  IPersonalInformationValues,
} from "../../../types";

export function validateSignup(values: IPersonalInformationValues) {
  const { firstname, lastname, birthday, email } = values;

  const regex = /^[a-zA-Z0-9-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-])/;
  let errors: IPersonalInformationErrors = {};
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
