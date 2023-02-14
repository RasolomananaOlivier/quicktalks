import { useAppSelector } from "../../hooks/redux";
import { RootState } from "../store";

export const requestsSelector = (state: RootState) => state.requests;
