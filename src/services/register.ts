import { Client } from "../lib/Client";
import { IUser } from "../types";

export const Register = async (user: IUser) => {
  const res = await Client.post("/users", user);
  return res.data;
};
