"use client";

import FormSteps from "@/components/core/form-steps";
import { Button } from "@/components/ui/button";
import { useNewProfileFormContext } from "@/contexts/new-profile";
import StepOne from "./forms/step-one";
import StepTwo from "./forms/step-two";
import StepThree from "./forms/step-three";
import StepFour from "./forms/step-four";
import StepFive from "./forms/step-five";
import { useRouter } from "next/navigation";

export default function ProfileForm() {
  const router = useRouter();
  const { currentStep, updateCurrentStep, totalSteps } =
    useNewProfileFormContext();

  const handleNext = () => {
    updateCurrentStep(currentStep + 1);
  };

  const handleSubmit = () => {
    router.push("/mentee");
  };

  const formMap: { [key: number]: React.ComponentType } = {
    1: StepOne,
    2: StepTwo,
    3: StepThree,
    4: StepFour,
    5: StepFive,
  };

  const renderForm = () => {
    const Component = formMap[currentStep];
    if (!Component) {
      return (
        <div className="py-2 flex justify-center text-dark-600">
          {" "}
          No component found{" "}
        </div>
      );
    }
    return <Component />;
  };

  return (
    <>
      <div className="mb-5">
        <FormSteps currentStep={currentStep} totalSteps={totalSteps} />
      </div>
      <h2 className="text-3xl font-bold text-center text-dark-600 mb-3">
        Create Your Profile
      </h2>
      <p className="text-2xl text-center font-light text-dark-500 mb-14">
        We are thrilled to learn about you
      </p>

      <form className="mt-6 mb-16">
        {renderForm()}
        {currentStep === totalSteps ? (
          <Button
            type="button"
            onClick={handleSubmit}
            size="lg"
            className="w-full"
          >
            Create profile
          </Button>
        ) : (
          <Button
            type="button"
            onClick={handleNext}
            size="lg"
            className="w-full"
          >
            Continue
          </Button>
        )}
      </form>
    </>
  );
}
