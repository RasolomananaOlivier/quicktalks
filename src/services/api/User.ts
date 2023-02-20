import { endpoint } from "../../data/endpoints";
import { ILoginValues } from "../../features/Login/types";
import { Client } from "../../lib/Client";
import { IPersonalInformationValues, IUser, IUserServer } from "../../types";
import { getToken } from "../../utils/getToken";

const HEADERS_CONFIG = {
  "x-access-token": getToken(),
};

interface ILoginResponse {
  data: IUserServer;
  token: string;
}
const login = async (user: ILoginValues) => {
  const res = await Client.post<ILoginResponse>(endpoint.LOGIN, user);
  return res.data;
};

interface IRegistrationResponse {
  token: string;
  data: IUserServer;
}
const register = async (user: IUser) => {
  const res = await Client.post<IRegistrationResponse>(endpoint.REGISTER, user);
  return res.data;
};

const getOneById = async (userId: string) => {
  const res = await Client.get<IUser>(`/users/${userId}`, {
    headers: HEADERS_CONFIG,
  });

  return res.data;
};

const getFriends = async (userId: string) => {
  const res = await Client.get<IUserServer[]>(endpoint.FRIENDS(userId), {
    headers: HEADERS_CONFIG,
  });

  const friends: IUser[] = res.data.map((userServer) => ({
    ...userServer,
    email: userServer.email.address,
  }));

  return friends;
};

interface ISuggestionResponse {
  suggestions: IUserServer[];
}
const getSuggestions = async (userId: string) => {
  const res = await Client.get<ISuggestionResponse>(
    endpoint.SUGGESTIONS(userId),
    {
      headers: HEADERS_CONFIG,
    }
  );

  return res.data.suggestions;
};

const updatePersonalInformation = async (
  userId: string,
  personalInformation: IPersonalInformationValues
) => {
  const update = await Client.put<IUser>(
    endpoint.user.UPDATE_PERSONAL_INFORMATION(userId),
    { ...personalInformation }
  );
  return update;
};

const User = {
  login,
  register,
  getOneById,
  getFriends,
  getSuggestions,
  updatePersonalInformation,
};

export default User;
