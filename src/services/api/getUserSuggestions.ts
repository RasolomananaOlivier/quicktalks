import { Client } from "../../lib/Client";
import { IUserServer } from "../../types";
import { getToken } from "../../utils/getToken";
interface IResponse {
  suggestions: IUserServer[];
}
export const getUserSuggestions = async (userId: string) => {
  const res = await Client.get<IResponse>(`/users/${userId}?q=suggestions`, {
    headers: {
      "x-access-token": getToken(),
    },
  });

  return res.data.suggestions;
};
