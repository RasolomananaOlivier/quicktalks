import { Client } from "../../lib/Client";
import { IUser, IUserServer } from "../../types";
import { getToken } from "../../utils/getToken";

export const getUserFriends = async (userId: string) => {
  const res = await Client.get<IUserServer[]>(
    "/users/" + userId + "?q=friends",
    {
      headers: {
        "x-access-token": getToken(),
      },
    }
  );

  const friends: IUser[] = res.data.map((userServer) => ({
    ...userServer,
    email: userServer.email.address,
  }));

  return friends;
};
