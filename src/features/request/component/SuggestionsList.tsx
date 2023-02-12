import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Request from "./Request";
import { Stack, Typography } from "@mui/material";
import Suggestion from "./Suggestion";
import AppHeader from "../../../components/typography/AppHeader";
import { useSuggestions } from "../hooks/useSuggestions";

interface SuggestionsListProps {}

const SuggestionsList: React.FC<SuggestionsListProps> = ({}) => {
  const suggestions = useSuggestions();

  return (
    <Stack sx={{ p: 3 }} spacing={2}>
      <AppHeader>People you may know</AppHeader>
      <motion.div
        // variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <AnimatePresence>
          {suggestions.map((request) => {
            const user = {
              _id: request._id!,
              fullname: `${request.firstname} ${request.lastname}`,
              email: request.email.address,
            };
            return (
              <motion.div
                // variants={listVariants}
                exit={{ scale: 0, transition: { duration: 0.2 } }}
                key={request._id}
                style={{ marginBottom: 10 }}
              >
                <Suggestion user={user} />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </Stack>
  );
};

export default SuggestionsList;
