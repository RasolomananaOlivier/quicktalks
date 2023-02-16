import { Client } from "../../lib/Client";
import { IUser, IUserServer } from "../../types";

interface IRegistrationResponse {
  token: string;
  data: IUserServer;
}
export const Register = async (user: IUser) => {
  const res = await Client.post<IRegistrationResponse>("/users", user);
  return res.data;
};
