import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Request from "./Request";
import { Stack, Typography } from "@mui/material";
import Suggestion from "./Suggestion";
import AppHeader from "../../../components/typography/AppHeader";

interface SuggestionsListProps {}

const SuggestionsList: React.FC<SuggestionsListProps> = ({}) => {
  const requestCollections: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

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
          {requestCollections.map((request) => {
            return (
              <motion.div
                // variants={listVariants}
                exit={{ scale: 0, transition: { duration: 0.2 } }}
                key={request._id}
                style={{ marginBottom: 10 }}
              >
                <Suggestion />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </Stack>
  );
};

export default SuggestionsList;
