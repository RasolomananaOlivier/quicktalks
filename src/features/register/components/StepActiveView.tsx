import React, { useContext } from "react";
import { StepContext } from "../context/stepContext";
import { ICompleted } from "../types";
import PasswordInfoForm from "./steps/PasswordInfoForm";
import PersonalInformationForm from "./steps/PersonalInformationForm";
import UploadImageForm from "./steps/UploadImageForm";

const StepActiveView: React.FC = () => {
  const { activeStep } = useContext(StepContext);
  switch (activeStep) {
    case 0:
      return <PersonalInformationForm />;
    case 1:
      return <PasswordInfoForm />;
    default:
      return <UploadImageForm />;
  }
};

export default StepActiveView;
