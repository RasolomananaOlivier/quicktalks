import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Stack } from "@mui/material";
import Suggestion from "./Suggestion";
import AppHeader from "../../../components/typography/AppHeader";
import { useSetupSuggestions } from "../hooks/useSuggestions";
import { useAppSelector } from "../../../hooks/redux";
import { suggestionsSelector } from "../../../redux/selectors/suggestionsSelector";

interface SuggestionsListProps {}

const SuggestionsList: React.FC<SuggestionsListProps> = ({}) => {
  useSetupSuggestions();

  const suggestions = useAppSelector(suggestionsSelector);
  return (
    <Stack sx={{ p: 3 }} spacing={2}>
      <AppHeader>People you may know.</AppHeader>
      <motion.div
        // variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <AnimatePresence>
          {suggestions.map((user) => {
            const userFormated = {
              _id: user._id!,
              fullname: `${user.firstname} ${user.lastname}`,
              email: user.email.address,
            };
            return (
              <motion.div
                // variants={listVariants}
                exit={{ scale: 0, transition: { duration: 0.2 } }}
                key={user._id}
                style={{ marginBottom: 10 }}
              >
                <Suggestion user={userFormated} />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </Stack>
  );
};

export default SuggestionsList;
