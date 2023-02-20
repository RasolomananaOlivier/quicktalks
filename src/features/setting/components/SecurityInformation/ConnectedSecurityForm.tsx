import React from "react";
import { INewPasswordValues } from "../../types";
import SecurityForm from "./SecurityForm";

const ConnectedSecurityForm = () => {
  const handleSubmit = (values: INewPasswordValues) => {};
  return <SecurityForm handleSubmit={handleSubmit} />;
};

export default ConnectedSecurityForm;
