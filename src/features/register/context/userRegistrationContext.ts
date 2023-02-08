import React from "react";
import { IUser } from "../../../types";
import { IRegisterValues } from "../types";

export interface IUserRegistration {
  user?: IUser;
  setUserPersonalInfo?: (personalInfo: IRegisterValues) => void;
  setUserPassword?: (password: string) => void;
}

export const UserRegistrationContext = React.createContext<IUserRegistration>(
  {}
);
