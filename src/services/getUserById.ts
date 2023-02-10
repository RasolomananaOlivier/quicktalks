import { Client } from "../lib/Client";
import { IUser } from "../types";
import { getToken } from "../utils/getToken";

export const getUserById = async (userId: string) => {
  const res = await Client.get<IUser>(`/users/${userId}`, {
    headers: {
      "x-access-token": getToken(),
    },
  });

  return res.data;
};
