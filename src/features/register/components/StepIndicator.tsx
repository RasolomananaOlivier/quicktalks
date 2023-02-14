import { Step, StepButton, Stepper } from "@mui/material";
import { FC, useContext } from "react";
import { useMobileSize } from "../../../hooks/useMobileSize";
import { StepContext } from "../context/stepContext";
import { ICompleted } from "../types";

interface IStepIndicatorProps {
  activeStep: number;
  steps: string[];
  completed: ICompleted;
  handleStep: (step: number) => void;
}

const StepIndicator: FC = () => {
  const isMobileScreen = useMobileSize();
  const { steps, activeStep, completed, handleStep } = useContext(StepContext);
  return (
    <Stepper activeStep={activeStep}>
      {steps.map((label, index) => (
        <Step key={label} completed={completed[index]}>
          <StepButton color="inherit" onClick={() => handleStep(index)}>
            {isMobileScreen ? label : null}
          </StepButton>
        </Step>
      ))}
    </Stepper>
  );
};

export default StepIndicator;
