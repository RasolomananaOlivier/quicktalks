import React, { useContext, useState } from "react";
import { IUser } from "../../../types";
import { IStepContextValue, StepContext } from "../context/stepContext";
import { UserRegistrationContext } from "../context/userRegistrationContext";
import { useRegistration } from "../hooks/useRegistration";
import { useStep } from "../hooks/useStep";
import { ICompleted, IRegisterValues } from "../types";
import StepIndicator from "./StepIndicator";
import StepViewContainer from "./StepViewContainer";

const StepWrapper: React.FC = () => {
  const UserRegistrationContextValue = useRegistration();
  const stepContextValue = useStep();

  return (
    <StepContext.Provider value={stepContextValue}>
      <UserRegistrationContext.Provider value={UserRegistrationContextValue}>
        <StepIndicator />
        <StepViewContainer />
      </UserRegistrationContext.Provider>
    </StepContext.Provider>
  );
};

export default StepWrapper;
