import React from "react";
import { IPersonalInformationValues } from "../../../../types";
import PersonalForm from "./PersonalForm";

const ConnectedPersonalForm = () => {
  const handleSubmit = (values: IPersonalInformationValues) => {};
  return <PersonalForm handleSubmit={handleSubmit} />;
};

export default ConnectedPersonalForm;
