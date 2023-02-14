import { useAppSelector } from "../../hooks/redux";
import { RootState } from "../store";

export const suggestionsSelector = (state: RootState) => state.suggestions;
