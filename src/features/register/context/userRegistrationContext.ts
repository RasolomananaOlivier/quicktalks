import React from "react";
import { IPersonalInformationValues, IUser } from "../../../types";

export interface IUserRegistration {
  user?: IUser;
  setUserPersonalInfo?: (personalInfo: IPersonalInformationValues) => void;
  setUserPassword?: (password: string) => void;
}

export const UserRegistrationContext = React.createContext<IUserRegistration>(
  {}
);
