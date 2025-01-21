import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function StepOne() {
  return (
    <div className="flex flex-col gap-10 mb-10">
      <div className="flex flex-col gap-4">
        <Label htmlFor="firstName">
          First Name <span className="text-red-600">*</span>
        </Label>
        <Input type="text" id="firstName" className="w-full" />
      </div>
      <div className="flex flex-col gap-4">
        <Label htmlFor="lastName">
          Last Name <span className="text-red-600">*</span>
        </Label>
        <Input type="text" id="lastName" className="w-full" />
      </div>
      <div className="flex flex-col gap-4">
        <Label htmlFor="phone">
          Phone Number <span className="text-red-600">*</span>
        </Label>
        <Input type="tel" id="phone" className="w-full" />
      </div>
    </div>
  );
}
