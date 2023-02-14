import { RootState } from "../store";

export const currentMessageSelector = (state: RootState) =>
  state.currentMessage;
