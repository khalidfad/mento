import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function StepFive() {
  return (
    <div className="flex flex-col gap-10 mb-10">
      <div className="flex flex-col gap-4">
        <Label htmlFor="password">
          Password <span className="text-red-600">*</span>
        </Label>
        <Input type="password" id="password" className="w-full" />
      </div>
      <div className="flex flex-col gap-4">
        <Label htmlFor="confirmPassword">
          Confirm Password <span className="text-red-600">*</span>
        </Label>
        <Input type="password" id="confirmPassword" className="w-full" />
      </div>
      <p className="text-dark-600 text-center">
        By clicking &quot;Create Profile,&quot; you acknowledge that you have
        read, understood, and agree to the Mentor <Link href={"/#"} className="font-medium underline">Terms and Conditions </Link>.
      </p>
    </div>
  );
}
