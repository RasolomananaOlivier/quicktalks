import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Request from "./Request";
import { Stack, Typography } from "@mui/material";
import AppHeader from "../../../components/typography/AppHeader";
import { useAppSelector } from "../../../hooks/redux";
import { requestsSelector } from "../../../redux/selectors/requestsSelector";

interface RequestsListProps {}

const RequestsList: React.FC<RequestsListProps> = ({}) => {
  const requests = useAppSelector(requestsSelector);

  return (
    <Stack sx={{ p: 3 }} spacing={2}>
      <AppHeader>Request to connect.</AppHeader>
      <motion.div
        // variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <AnimatePresence>
          {requests.map((request) => {
            return (
              <motion.div
                // variants={listVariants}
                exit={{ scale: 0, transition: { duration: 0.2 } }}
                key={request._id}
                style={{ marginBottom: 10 }}
              >
                <Request request={request} />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </Stack>
  );
};

export default RequestsList;
