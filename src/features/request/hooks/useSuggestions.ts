import { useEffect, useState } from "react";
import { useAppSelector } from "../../../hooks/redux";
import { userSelector } from "../../../redux/selectors/userSelector";
import { getUserSuggestions } from "../../../services/getUserSuggestions";
import { IUserServer } from "../../../types";

export const useSuggestions = () => {
  const [suggestions, setsuggestions] = useState<IUserServer[]>([]);

  const user = useAppSelector(userSelector);

  const getSuggestions = async () => {
    if (user._id) {
      const suggestionsList = await getUserSuggestions(user._id);

      setsuggestions(suggestionsList);
    }
  };

  useEffect(() => {
    getSuggestions().catch(console.log);
  }, []);

  return suggestions;
};
