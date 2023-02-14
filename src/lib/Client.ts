import axios from "axios";
import { apiV1 } from "../data/baseUrl";

export const Client = axios.create({ baseURL: apiV1 });
