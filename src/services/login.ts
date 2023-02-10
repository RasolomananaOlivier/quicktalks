import { endpoint } from "../data/endpoints";
import { ILoginValues } from "../features/Login/types";
import { Client } from "../lib/Client";
import { IUserServer } from "../types";

interface ILoginResponse {
  data: IUserServer;
  token: string;
}

export const Login = async (user: ILoginValues) => {
  // TODO: Hanle axios error
  const res = await Client.post<ILoginResponse>(endpoint.LOGIN, user);

  return res.data;
};
