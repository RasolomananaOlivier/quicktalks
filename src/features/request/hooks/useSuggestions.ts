import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { setSuggestionsState } from "../../../redux/reducers/suggestionSlice";
import { userSelector } from "../../../redux/selectors/userSelector";
import { getUserSuggestions } from "../../../services/api/getUserSuggestions";
import { IUserServer } from "../../../types";

export const useSetupSuggestions = () => {
  const user = useAppSelector(userSelector);
  const dispatch = useAppDispatch();

  const getSuggestions = async () => {
    if (user._id) {
      const suggestions = await getUserSuggestions(user._id);

      dispatch(setSuggestionsState(suggestions));
    }
  };

  useEffect(() => {
    getSuggestions().catch(console.log);
  }, []);
};
