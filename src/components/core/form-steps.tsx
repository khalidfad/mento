import { cn } from "@/lib/utils";

interface FormStepsProps {
  totalSteps: number;
  currentStep: number;
}

export default function FormSteps(props: FormStepsProps) {
  const { totalSteps, currentStep } = props;
  return (
    <div className="mx-auto flex justify-center gap-2">
      {Array.from({ length: totalSteps }, (_, i) => (
        <div
          key={i}
          className={cn(
            "h-1 w-8",
            currentStep >= i + 1 ? "bg-primary" : "bg-dark-200"
          )}
        />
      ))}
    </div>
  );
}
