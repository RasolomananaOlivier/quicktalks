import { useAppSelector } from "../../hooks/redux";
import { RootState } from "../store";

export const userSelector = (state: RootState) => state.user;

export const useUserSelector = () => useAppSelector(userSelector);
