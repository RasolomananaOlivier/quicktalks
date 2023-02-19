import { endpoint } from "../../data/endpoints";
import { Client } from "../../lib/Client";
import { IRequest } from "../../types";

const getAll = async (userId: string) => {
  const requestResponse = await Client.get<IRequest[]>(
    endpoint.REQUESTS(userId)
  );

  return requestResponse;
};

const Request = { getAll };

export default Request;
