import React from "react";

export interface IStepContextValue {
  steps: string[];
  activeStep: number;
  completed: { [key: number]: boolean };
  totalSteps: () => number;
  completedSteps: () => number;
  allStepsCompleted: () => boolean;
  isLastStep: () => boolean;
  handleStep: (step: number) => void;
  handleReset: () => void;
  handleComplete: () => void;
}

export const StepContext = React.createContext<IStepContextValue>({
  steps: [],
  activeStep: 0,
  completed: {},
  totalSteps: () => 0,
  completedSteps: () => 0,
  allStepsCompleted: () => false,
  isLastStep: () => false,
  handleStep: (step: number) => {},
  handleReset() {},
  handleComplete() {},
});
