import { ILoginValues } from "../features/Login/types";
import { Client } from "../lib/Client";

export const Login = async (user: ILoginValues) => {
  const res = await Client.post("/auth/login", user);
  return res.data;
};
