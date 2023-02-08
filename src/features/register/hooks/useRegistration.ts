import { useEffect, useState } from "react";
import { IUser } from "../../../types";
import { IRegisterValues } from "../types";

export const useRegistration = () => {
  const [user, setUser] = useState<IUser>({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const setUserPersonalInfo = (personnalInfo: IRegisterValues) => {
    setUser({
      ...user,
      firstname: personnalInfo.firstname,
      lastname: personnalInfo.lastname,
      email: personnalInfo.email,
    });
  };

  const setUserPassword = (password: string) => {
    setUser({ ...user, password: password });
  };

  useEffect(() => {
    console.log(user);
  }, [user]);

  return { user, setUserPassword, setUserPersonalInfo };
};
