import React from "react";
import { ICompleted } from "../types";

export const useStep = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState<ICompleted>({});
  const steps = ["Information", "Password", "Bio"];

  const totalSteps = function () {
    return steps.length;
  };
  const isLastStep = function () {
    return activeStep === totalSteps() - 1;
  };
  const allStepsCompleted = function () {
    return Object.keys(completed).length === totalSteps();
  };
  const handleStep = function (step: number) {
    setActiveStep(step);
    const newCompleted = completed;
    newCompleted[step] = false;
    setCompleted(newCompleted);
  };
  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };
  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  return {
    activeStep,
    completed,
    steps,
    totalSteps,
    isLastStep,
    allStepsCompleted,
    handleStep,
    handleReset,
    handleComplete,
  };
};
