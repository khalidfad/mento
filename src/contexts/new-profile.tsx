import { NEW_PROFILE_STEPS } from "@/constants/profile";
import { createContext, useContext, useState } from "react";

interface NewProfileContextValue {
  currentStep: number;
  updateCurrentStep: (step: number) => void;
  totalSteps: number;
}

const defaultState: NewProfileContextValue = {
  currentStep: 1,
  updateCurrentStep: () => {},
  totalSteps: NEW_PROFILE_STEPS,
};

const NewProfileContext = createContext<NewProfileContextValue>(defaultState);

const NewProfileFormProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [currentStep, setCurrentStep] = useState(1);

  const updateCurrentStep = (step: number) => {
    if (step > 0 && step <= NEW_PROFILE_STEPS) {
      setCurrentStep(step);
    }
  }

  return (
    <NewProfileContext.Provider
      value={{ currentStep, updateCurrentStep, totalSteps: NEW_PROFILE_STEPS }}
    >
      {children}
    </NewProfileContext.Provider>
  );
};

const useNewProfileFormContext = () => {
  const context = useContext(NewProfileContext);
  if (context === undefined) {
    throw new Error(
      "useNewProfileForm must be used within a NewProfileFormProvider"
    );
  }
  return context;
};

export { NewProfileFormProvider, useNewProfileFormContext };
