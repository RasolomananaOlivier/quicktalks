import { ILoginValues } from "../features/Login/types";
import { Client } from "../lib/Client";
import { IUserServer } from "../types";

interface ILoginResponse {
  data: IUserServer;
  token: string;
}

export const Login = async (user: ILoginValues) => {
  const res = await Client.post<ILoginResponse>("/auth/login", user);

  return res.data;
};
