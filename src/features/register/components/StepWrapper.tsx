import React, { useContext } from "react";
import { IStepContextValue, StepContext } from "../context/setContext";
import { ICompleted } from "../types";
import StepIndicator from "./StepIndicator";
import StepViewContainer from "./StepViewContainer";

const StepWrapper: React.FC = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState<ICompleted>({});

  const stepContextValues: IStepContextValue = {
    steps: ["Information", "Password", "Bio"],
    activeStep,
    completed,
    totalSteps: function () {
      return this.steps.length;
    },
    completedSteps: () => {
      return Object.keys(completed).length;
    },
    isLastStep: function () {
      return activeStep === this.totalSteps() - 1;
    },
    allStepsCompleted: function () {
      return this.completedSteps() === this.totalSteps();
    },
    handleStep: function (step: number) {
      setActiveStep(step);
      const newCompleted = completed;
      newCompleted[step] = false;
      setCompleted(newCompleted);
    },
    handleReset: () => {
      setActiveStep(0);
      setCompleted({});
    },
    handleComplete: () => {
      const newCompleted = completed;
      newCompleted[activeStep] = true;
      setCompleted(newCompleted);
      handleNext();
    },
  };

  const handleNext = () => {
    const newActiveStep =
      stepContextValues.isLastStep() && !stepContextValues.allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          stepContextValues.steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  return (
    <StepContext.Provider value={stepContextValues}>
      <StepIndicator />
      <StepViewContainer />
    </StepContext.Provider>
  );
};

export default StepWrapper;
