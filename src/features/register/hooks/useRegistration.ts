import { useEffect, useState } from "react";
import { IPersonalInformationValues, IUser } from "../../../types";

export const useRegistration = () => {
  const [user, setUser] = useState<IUser>({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    avatarUrl: "",
  });

  const setUserPersonalInfo = (personnalInfo: IPersonalInformationValues) => {
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
