import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { setSuggestionsState } from "../../../redux/reducers/suggestionSlice";
import { userSelector } from "../../../redux/selectors/userSelector";
import User from "../../../services/api/User";

export const useSetupSuggestions = () => {
  const user = useAppSelector(userSelector);
  const dispatch = useAppDispatch();

  const getSuggestions = async () => {
    if (user._id) {
      const suggestions = await User.getSuggestions(user._id);

      dispatch(setSuggestionsState(suggestions));
    }
  };

  useEffect(() => {
    getSuggestions().catch(console.log);
  }, []);
};
